import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index.ejs")
});

app.post("/", async (req, res) => {
    try {
        const result = await axios.get(`https://v2.jokeapi.dev/joke/Programming?type=single`);
        res.render("index.ejs", { joke: result.data.joke})
    } catch (error) {
        console.error(error.response.data);
        res.status(500);
    }
});

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
