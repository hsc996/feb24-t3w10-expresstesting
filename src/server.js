const express = require('express');
const app = express(); // Make an instance of the express server system

// localhost:3000/
// domainName:port/
// serverInstance.verb(path, callback)
app.get("/", (request, response) => {
    response.json({
        message: "Hello world!"
    });
});

module.exports = {
    app
}