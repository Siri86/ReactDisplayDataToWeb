//const { application } = require('express');
const express = require('express');
const router = express.Router();
const { stds } = require("../models");



router.get("/", async (req, res) => {
   const listOfDoubts = await stds.findAll();
    // res.send("Doubtspage");
    res.json(listOfDoubts);
});

router.post("/", async(req,res) => {
    const post = req.body

    await stds.create(post);

    res.json(post);

})

module.exports = router;