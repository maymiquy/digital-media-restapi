import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.get("/", (req, res) => {
    return res.status(200).send({
        response: "Express JavaScript ES6",
    });
});

const port = process.env.APP_PORT;
const appName = process.env.APP_NAME;
app.listen(port, () => {
    console.log(`${appName} running on port ${port}`);
});
