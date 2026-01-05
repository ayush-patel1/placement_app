const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
require("./db/connection");
const port=8000
const cors = require("cors")

//enable cors
// app.use(cors(
//     {
//         origin:"https://placement-planner.netlify.app",
//         methods:["GET","POST"],
//         credentials:true,
//     }
// ));

app.use(express.json());

app.use("/api/questions", require("./api/QuesApi"));
app.use("/api/users", require("./api/UserApi"));
app.use("/api/notes", require("./api/NotesApi"));
app.get("/", (req, res) => {
    res.send("Hello from backend server");
})

app.listen(port, () => {
    console.log("Server is connected successfully");
})