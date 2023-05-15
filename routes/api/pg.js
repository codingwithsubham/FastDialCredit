const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const PG = require("../../models/pg");
const {
  SERVER_ERROR,
  STATUS_CODE_500,
  STATUS_CODE_200,
  STATUS_CODE_400,
  BAD_REQUEST,
} = require("../../common/constant/constants");
const { default: axios } = require("axios");
const { TYPE } = require("../../common/constant/paymentType");
const { addDays } = require("../../functions/dateCompare");

// @route POST api/pg/create-order`
// @desc init payment gateway
// @access Private
router.post("/create-order", auth, async (req, res) => {
  try {
    const user = req.user.userData;
    const { amnt, type } = req.body;
    const pg = new PG({
      user: req.user.id,
      amnt: amnt,
      type: type,
    });
    await pg.save();
    //payload
    const postData = {
      key: "957a9bca-d128-42e2-9918-1c00107c078a",
      client_txn_id: pg._id,
      amount: `${amnt}`,
      p_info: "purchase",
      customer_name: user.name,
      customer_email: `${user.name.split(" ")[0]}@fastdial.com`,
      customer_mobile: user.mobile,
      redirect_url: "https://fast-dial.onrender.com/profile",
      udf1: "FAST_DIAL",
    };
    const response = await axios.post(
      "https://merchant.upigateway.com/api/create_order",
      postData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response);
    return res.json(response.data);
  } catch (error) {
    console.log(error);
    res.status(STATUS_CODE_500).json({ errors: [{ msg: SERVER_ERROR }] });
  }
});

// @route POST api/pg/order-success
// @desc Callback payment gateway
// @access Public
router.post("/order-success", async (req, res) => {
  try {
    const { client_txn_id, status } = req.body;
    if (status !== "failure") {
      const pg = await PG.findById(client_txn_id);
      if (pg) {
        const actionRes = await handlePaymentReturn(pg);
        if(actionRes){
          return res.status(STATUS_CODE_200).json({ success: true });
        }
      } else {
        return res
          .status(STATUS_CODE_400)
          .json({ errors: [{ msg: BAD_REQUEST }] });
      }
    } else {
      return res
        .status(STATUS_CODE_400)
        .json({ errors: [{ msg: BAD_REQUEST }] });
    }
  } catch (error) {
    console.log(error);
    res.status(STATUS_CODE_500).json({ errors: [{ msg: SERVER_ERROR }] });
  }
});


// @route webhook
// @desc Supporting method to imply System
// @access Private
const handlePaymentReturn = async (pg) => {
  const { type, user } = pg;
  const date = new Date();
  //conditional rendering
  switch (type) {
    case TYPE.BORROWER_SUB: {
      const endndDate = addDays(date, 365);
      user.subscription = {
        susbsType: TYPE.BORROWER_SUB,
        subsEndDate: endndDate.toLocaleString("en-US", {
          timeZone: "Asia/Kolkata",
        }),
      };
      await user.save();
      return true;
    }
    case TYPE.LENDER_SUB_MONTHLY: {
      const endndDate = addDays(date, 30);
      user.subscription = {
        susbsType: TYPE.LENDER_SUB_MONTHLY,
        subsEndDate: endndDate.toLocaleString("en-US", {
          timeZone: "Asia/Kolkata",
        }),
      };
      await user.save();
      return true;
    }
    case TYPE.LENDER_SUB_QUATERLY: {
      const endndDate = addDays(date, 90);
      user.subscription = {
        susbsType: TYPE.LENDER_SUB_QUATERLY,
        subsEndDate: endndDate.toLocaleString("en-US", {
          timeZone: "Asia/Kolkata",
        }),
      };
      await user.save();
      return true;
    }
    case TYPE.LENDER_SUB_YEARLY: {
      const endndDate = addDays(date, 365);
      user.subscription = {
        susbsType: TYPE.LENDER_SUB_YEARLY,
        subsEndDate: endndDate.toLocaleString("en-US", {
          timeZone: "Asia/Kolkata",
        }),
      };
      await user.save();
      return true;
    }
    case TYPE.ECO_LENDER_SUB: {
      const endndDate = addDays(date, 30);
      user.subscription = {
        susbsType: TYPE.ECO_LENDER_SUB,
        subsEndDate: endndDate.toLocaleString("en-US", {
          timeZone: "Asia/Kolkata",
        }),
      };
      await user.save();
      return true;
    }
    default:
    return false;
  }
};

module.exports = router;
