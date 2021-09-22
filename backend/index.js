//import express for use
const express = require("express");
// allows cross-origin resource sharing
const cors = require("cors");
// we initialized our express app
const app = express();
app.use(cors());
// looking for a local port to hos our web application
const port = process.env.PORT || 4000;
// send data to the front-end
app.get("/", (req, res) => {
    res.send({ exampleMessage: "React client connected to the Express server!"})
});
// initialize our web-app on the selected port
app.listen(port, () =>
console.log(`Example app listening at http://localhost:${port}`)
);