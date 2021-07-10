const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const dbAddress = "mongodb+srv://yeonsun:baekyeonsun@cluster0.f5txt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

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

const User = require('./user');
const router = require('./router')(app, User);

app.listen(app.get('port'), () => console.log(`listening on port ${app.get('port')}`));