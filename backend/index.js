import express from 'express';
import geminiRoute from './routes/geminiRoute.js';
import dotenv from "dotenv";

const apiKey = process.env.GEMINI_API_KEY;

const app = express();
app.use(express.json());

//get request
app.get("/", (req, res) => {
    res.send("Welcome to Gemini Bot");
});

app.get("/api/test", (req, res) => {
    res.json({
        success: true,
        message: "Backend is working"
    });
});

//post request
// app.post("/api/chat", (req, res) => {
//     console.log("Body:", req.body);
//     console.log("Message:", req.body.message);

//     const { message } = req.body;
//     const cleanMessage = message.trim();

//     // if (!message) {
//     if(typeof message !== "string" || message.trim() === ""){
//         return res.status(400).json({
//             success: false,
//             message: "Message is required"
//         });
//     }

//     res.json({
//         success: true,
//         message: cleanMessage
//     });
// });

//call the geminiRouter
app.use("/api", geminiRoute);

const port = 3000;
app.listen(port, () => {
    console.log(`http://localhost:${port}/`);
});