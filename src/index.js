// Keep the app start-up code in this file,
// so that app confug happens in server.js
// and any test files can control the sevrer start/stop in their own test code
const { app } = require("./server.js");

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}.`)
})