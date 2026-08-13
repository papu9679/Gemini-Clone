import express from 'express';

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to Gemini Bot");
});

app.get("/api/test", (req, res) => {
    res.json({
        success: true,
        message: "Backend is working"
    });
});

const port = 3000;
app.listen(port, () => {
    console.log(`http://localhost:${port}/`);
});