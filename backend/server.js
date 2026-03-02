const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
require("./db/connection");
const port = process.env.PORT || 8000
const cors = require("cors")

//enable cors
app.use(cors(
    {
        origin: (process.env.BASE_URL || "http://localhost:5173").replace(/\/+$/, ''),
        methods: ["GET", "POST"],
        credentials: true,
    }
));

app.use(express.json());

app.use("/api/questions", require("./routes/questionRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/notes", require("./routes/notesRoutes"));
app.get("/", (req, res) => {
    res.send("Hello from backend server");
})

app.listen(port, () => {
    console.log("Server is connected successfully");
})