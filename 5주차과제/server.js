const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const dbAddress = "mongodb+srv://<username>:<password>@cluster0.f5txt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

require("dotenv").config();

mongoose
    .connect(dbAddress, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    })
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log(err));

const app = express();

app.set('port', process.env.PORT || 9000);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const Board = require('./Board');
const router = require('./router')(app, Board);

app.listen(app.get('port'), () => console.log(`listening on port ${app.get('port')}`));