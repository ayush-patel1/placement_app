const mongoose = require("mongoose");
// mongoose.set("strictQuery", false);

const connectionOptions = {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
};

const connectionstring = process.env.MONGODB_URL;

mongoose.connect(connectionstring, connectionOptions)
    .then(() => {
        console.log("MongoDB is connected");
    })
    .catch((error) => {
        console.log("MongoDB connection error:", error);
    })