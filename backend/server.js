const express = require("express");
const app = express();
const port =8000;

require("./db/connection");

const cors = require("cors")

//enable cors
// app.use(cors(
//     {
//         origin:"https://placement-planner.netlify.app",
//         methods:["GET","POST"],
//         credentials:true,
//     }
// ));

app.use("/api/questions", require("./api/QuesApi"));
app.use("/api/users", require("./api/UserApi"));
app.use("/api/notes", require("./api/NotesApi"));

app.use(express.json());
app.listen(port, () => {
    console.log("Server is connected successfully");
})