const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const db = require("../config/keys").MONGO_URI;
const models = require("./models/index");
const expressGraphQL = require("express-graphql");
const schema = require("./schema/schema");
const app = express();
const cors = require("cors");

if (!db) {
    throw new Error("You must provide a string to connect to MongoDB Atlas");
}

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));

app.use(cors());

app.use(
    "/graphql",
    expressGraphQL({
        schema,
        graphiql: true
    })
);
// remember we use bodyParser to parse requests into json
app.use(bodyParser.json());

module.exports = app;