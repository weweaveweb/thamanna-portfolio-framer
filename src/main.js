import Express from "express";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = Express();

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get("/uiuxdesign", (req, res) => {
    res.sendFile(__dirname + "/uiux.html");
});

app.get("/artwork", (req, res) => {
    res.sendFile(__dirname + "/artwork.html");
});

app.get("/branding", (req, res) => {
    res.sendFile(__dirname + "/branding.html");
});

app.get("/digitaldesigns", (req, res) => {
    res.sendFile(__dirname + "/digital.html");
});

app.get("/printdesigns", (req, res) => {
    res.sendFile(__dirname + "/print.html");
});

app.listen(3000, () => {
    console.log("Listening on port 3000");
});