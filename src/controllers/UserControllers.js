const express = require("express");

const router = express.Router();

router.get("/", (request, reponse) => {
    response.json({
        data: [
            "xander",
            "tom",
            "hannah",
            "reece",
            "brad",
            "hayden"
        ]
    });
});

module.exports = router;