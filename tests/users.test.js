// Import the code that we want to test
const {app} = require("../src/server");

// Importing a testing helper function from supertest
const request = require("supertest");


describe("Users controller", () => {

	test.skip("Get all users route returns array of users", async () => {
        //localhost:3000/users/
        //localhost:3000/users
        const response = await request(app).get("/users/");
	});

	test.skip("Get user by ID route returns a single user as object", async () => {
        // localhost:3000/users/12345
        let targetUserId = "12345";
        const response = await request(app).get("/users/" + targetUserId);

	});

	test.skip("User sign-up route returns a single user as object", async () => {
        // POST localhost:300/users/signup
        const response = await request(app)
        .post("/users/signup")
        .send({
            username: "hannah",
             password: "MonkeySlut94"
        });
	});

	test.skip("User login route returns a single user as object", async () => {
        // POST localhost:3000/users/login
        const response = await request(app)
        .post("/users/login")
        .send({
            username: "hannah",
             password: "MonkeySlut94"
        });
	});

	test.skip("User update/edit route returns a single user as object", async () => {
        // PATCH localhost:3000/users/12345
        const response = await request(app)
        .patch("/users/12345")
        .send({
            username: "hannah",
             password: "MonkeySlut94"
        });
	});

	test.skip("User delete route returns a number of users deleted", async () => {
        // PATCH localhost:3000/users/12345
        const response = await request(app)
        .delete("/users/12345")
        .send({
            username: "hannah",
                password: "MonkeySlut94"
        });
    });

});