const express = require("express");
const app = express();
const studentRouter = require("./student");

app.use(express.json())
app.use("/students", studentRouter);

app.listen(4000, () => {
    console.log("Server is listening at port 4000");
});
