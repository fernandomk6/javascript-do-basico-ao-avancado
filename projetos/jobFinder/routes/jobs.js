const { application } = require("express");
const express = require("express");
const router = express.Router();
const Job = require("../models/Job");

router.get("/test", function(req, res) {
    res.send("deu certo");
});

// add job via post
router.post("/add", function(req, res) {
   let {title, salary, company, description, email, new_job} = req.body;

    // inserir dados no sistema
    Job.create({
        title,
        description,
        salary,
        company,
        email,
        new_job
    })
    .then(() => res.redirect("/"))
    .catch((error) => {
        console.log(error);
    });
});

module.exports = router;