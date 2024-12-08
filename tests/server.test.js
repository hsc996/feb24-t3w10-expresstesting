// Import the code that we want to test
const {app} = require("../src/server");

// Importing a testing helper function from supertest
const request = require("supertest");

// Declaring a group of tests for keeping out tests tidy
describe("Root route works", () => {

    // Individual test happens in this type of function:
    // This test runs an async callback function
    // Because the things it is testing are running asynchronously and we need to wait for it
    test("Server returns a 'Hello world!' message", async () => {
        // Make a request to "/" route
        // Wait for response and store it
        const response = await request(app).get("/");

        // Check the body of the response for 'Hello world' string
        expect(response.body.message).toBe("Hello world!");
        expect(response.statusCode).toBe(200);
    });

    test("Server returns a response with no auth headers because we are not sending auth data", async () => {
        const response = await request(app).get("/");

        expect(response.header["Authorization"]).toBeFalsy();
    });
});