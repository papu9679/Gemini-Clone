import express from 'express';
import { Router } from 'express';

const router = express.Router();

router.post("/chat", (req, res) => {
    const { message } = req.body;

    if (typeof message !== "string" || message.trim() === "") {
        return res.status(400).json({
            success: false,
            message: "Message must be a non-empty string"
        });
    }

    const cleanMessage = message.trim();

    res.json({
        success: true,
        message: cleanMessage
    });
});

export default router;