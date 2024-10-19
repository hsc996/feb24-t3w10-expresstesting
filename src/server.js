const express = require('express');
const app = express(); // Make an instance of the express server system

app.use(express.json());
app.use(express.urlencoded({extended:true}));

// localhost:3000/
// domainName:port/
// serverInstance.verb(path, callback)
app.get("/", (request, response) => {
    response.json({
        message: "Hello world!"
    });
});

const UserController = require("./controllers/UserControllers.js");
app.use("/users", UserController);

app.use((error, request, response, next) => {
    console.log("Server threw an error with message: " + error.message);

    response.json({
        status: 500,
        error: error.message,
        errorFull: JSON.stringify(error)
    });
});

module.exports = {
    app
}