const express = require("express");
const mongoose = require("mongoose");
const app = express();
const usersRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const cors = require("cors");
require("dotenv/config");


//middlewares
app.use(cors({
    origin: "http://127.0.0.1:5173",
    credentials: true,
}));

app.use(express.json());

//routes
app.use("/users", usersRoutes);
app.use("/users/auth", authRoutes);

//start server

app.listen(5000, () => {
    console.log("Server listening on port 5000");
});
mongoose
    .connect(process.env.DB_CONNECT, { useNewUrlParser: true })
    .then(() => {
        console.log("Database connected");
    })
    .catch((error) => {
        console.error("Error connecting to database:", error);
    });