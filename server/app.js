// imports
const mongoose = require('mongoose');
require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT //5000

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("uploads"));

// database connection
mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true,
}).then(() => console.log("Connected to the Database!"))
.catch((err) => console.log(err));

// route prefix
app.use("/api/", require("./routes/routes"));











// start server
app.listen(port, () => console.log(`server running at http://localhost:${port}`));