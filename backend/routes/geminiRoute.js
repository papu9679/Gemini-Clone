import express from 'express';
import generateResponse from '../services/geminiService.js';

const router = express.Router();

router.post('/chat', async (req, res) => {
	const { message } = req.body;

	if (typeof message !== 'string' || message.trim() === '') {
		return res.status(400).json({
			success: false,
			message: 'Message must be a non-empty string',
		});
	}

	const massageClean = message.trim();

	try {
		const response = await generateResponse(massageClean);

		res.json({
			success: true,
			response: response,
		});
	} catch (error) {
		console.error('Gemini API Error:', error.message);
		console.error('Full Error:', error);

		res.status(500).json({
			success: false,
			message: 'Something went wrong while generating the response',
			error: error.message,
		});
	}
});

export default router;
