const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const Feed = require("../../models/feed");
const {
  SERVER_ERROR,
  STATUS_CODE_500,
} = require("../../common/constant/constants");

// @route POST api/feed
// @desc POST a Feed
// @access Private
router.post("/create", auth, async (req, res) => {
  const d = new Date();
  try {
    const { amnt , cat } = req.body;
    const feed = new Feed({
      amnt: amnt,
      user: req.user.id,
      date: d.toLocaleString("en-US", { timeZone: "Asia/Kolkata" }),
      category: cat,
      pin: req.user.userData?.kycData?.zip,
    });
    await feed.save();
    return res.json({...feed._doc, user: req.user.userData});
  } catch (err) {
    console.log(err);
    res.status(STATUS_CODE_500).send(SERVER_ERROR);
  }
});

// @route GET api/feed/current-user
// @desc GET all Feeds by current user
// @access Private
router.get("/current-user", auth, async (req, res) => {
  try {
    const feeds = await Feed.find({ user: req.user.id }).sort({date: -1}).populate("user");
    return res.json(feeds);
  } catch (err) {
    console.log(err);
    res.status(STATUS_CODE_500).send(SERVER_ERROR);
  }
});

// @route GET api/feed
// @desc GET all Feeds
// @access Private
router.get("/", auth, async (req, res) => {
  try {
    const feeds = await Feed.find({}).sort({date: -1}).populate("user");
    return res.json(feeds);
  } catch (err) {
    console.log(err);
    res.status(STATUS_CODE_500).send(SERVER_ERROR);
  }
});

// @route GET api/feed
// @desc GET a Feed
// @access Private
router.get("/:id", auth, async (req, res) => {
  try {
    const feed = await Feed.findOne({ _id: req.params.id }).sort({date: -1}).populate("user");
    return res.json(feed);
  } catch (err) {
    console.log(err);
    res.status(STATUS_CODE_500).send(SERVER_ERROR);
  }
});

// @route DELETE api/feed
// @desc DELETE a Feed
// @access Private
router.delete("/:id", auth, async (req, res) => {
  try {
    const feed = await Feed.findOneAndDelete({ _id: req.params.id });
    return res.json(feed);
  } catch (err) {
    console.log(err);
    res.status(STATUS_CODE_500).send(SERVER_ERROR);
  }
});

module.exports = router;
