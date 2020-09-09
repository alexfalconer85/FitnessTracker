const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3002;


// const User = require("./userModel.js");
const app = express();

app.use(logger("dev"));


app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutdb", {
    useNewUrlParser: true
});

// PUT ROUTES HERE
// app.use(require("./public/api.js"));
app.use(require("./routes/htmlRoutes.js"))
app.use(require("./routes/apiRoutes.js"))

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});