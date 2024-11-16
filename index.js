const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const app = express();
const productRoute = require('./routes/product.route.js');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose.connect(`mongodb+srv://bhargavareddy019:Neon123@cluster0.zpup2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
    .then(() => {
        console.log("Connected to DB");
        app.listen(3000, () => {
            console.log('Server in 3000');
        })
    })
    .catch(() => {
        console.log("Connection Failed");
    })


app.use("/api/products", productRoute);
