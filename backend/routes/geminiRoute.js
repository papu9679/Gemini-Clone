import express from 'express';
import { Router } from 'express';
import generateResponse from '../services/geminiService.js'

const router = express.Router();

router.post("/chat", async (req, res) => {
    const { message } = req.body;

    if (typeof message !== "string" || message.trim() === "") {
        return res.status(400).json({
            success: false,
            message: "Message must be a non-empty string"
        });
    }

    const cleanMessage = message.trim();

    const response = await generateResponse(cleanMessage);

    res.json({
        success: true,
        response: response
    });
});

export default router;