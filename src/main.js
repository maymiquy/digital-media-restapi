const express = require('express')
const dotenv = require('dotenv');
const router = require('./routes/api');

dotenv.config();

const app = express();

app.get("/", (req, res) => {
    return res.status(200).send({
        response: "Digital Media Rest API",
    });
});

app.use(express.json());
app.use(router)

const port = process.env.APP_PORT;
const appName = process.env.APP_NAME;
app.listen(port, () => {
    console.log(`${appName} running on port ${port}`);
});
