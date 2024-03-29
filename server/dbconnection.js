const mongoose = require("mongoose")


const connect = async () => {
    try {
        await mongoose.connect("mongodb+srv://ashishrajstr:Mongo2023@cluster0.juryqwq.mongodb.net/kanban", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB.");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};

mongoose.connection.on("disconnected", () => {
    console.log("MongoDB disconnected!");
});

module.exports = connect