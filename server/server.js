require("./config/config");
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const bodyParser = require("body-parser");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Rutas
app.use(require("./routes/index"));

// Conectar a mongo
mongoose.connect(
    process.env.URLDB, {
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true,
        useUnifiedTopology: true,
    },
    (err) => {
        if (err) {
            throw err;
        }
        console.log("Base de Datos online");
    }
);

app.listen(process.env.PORT, () => {
    console.log(`Escuchando el puerto: ${process.env.PORT}`);
});