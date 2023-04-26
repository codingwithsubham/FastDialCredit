const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const Ads = require("../../models/ads");
const {
  SERVER_ERROR,
  STATUS_CODE_500,
} = require("../../common/constant/constants");

// @route POST api/ads
// @desc POST a Ad
// @access Private
router.post("/create", auth, async (req, res) => {
  const d = new Date();
  try {
    const { imgUrl, redirectUrl } = req.body;
    const ads = new Ads({
      imgUrl: imgUrl,
      redirectUrl: redirectUrl,
      user: req.user.id,
      date: d.toLocaleString("en-US", { timeZone: "Asia/Kolkata" }),
    });
    await ads.save();
    return res.json({...ads._doc, user: req.user.userData});
  } catch (err) {
    console.log(err);
    res.status(STATUS_CODE_500).send(SERVER_ERROR);
  }
});


// @route GET api/ads
// @desc GET all Ads
// @access Private
router.get("/", auth, async (req, res) => {
  try {
    const ads = await Ads.find({}).sort({date: -1}).populate("user");
    return res.json(ads);
  } catch (err) {
    console.log(err);
    res.status(STATUS_CODE_500).send(SERVER_ERROR);
  }
});

module.exports = router;
