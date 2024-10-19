const express = require("express");

const router = express.Router();

// GET localhost:3000/users
router.get("/", (request, response) => {

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

// POST localhost:300/users/signup
router.post("/signup", async (request, response) => {
    let receivedUserData = request.body;

    receivedUserData.password = "EncryptedPassword";

    let placeholderDatabaseResult = {...receivedUserData};

    response.json(receivedUserData);
});

module.exports = router;