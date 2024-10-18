const {app} = require("../src/server");
const request = require("supertest");

describe("Root route works", () => {
    test("Server returns a 'Hello world!' message", async () => {
        // Make a request to "/" route
        // Wait for response and store it
        const response = await request(app).get("/");

        // Check the body of the response for 'Hello world' string
        expect(response.body.message).toBe("Hello world!")

    });
});