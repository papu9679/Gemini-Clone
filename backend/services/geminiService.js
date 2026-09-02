import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';

dotenv.config();

async function generateResponse(message) {
	try {
		const apiKey = process.env.GEMINI_API_KEY;

		if (!apiKey) {
			throw new Error('GEMINI_API_KEY is not configured');
		}

		const ai = new GoogleGenerativeAI(apiKey);
		const model = ai.getGenerativeModel({ model: 'gemini-2.0-flash' });
		const response = await model.generateContent(message);

		return response.response.text();
	} catch (error) {
		console.error('Gemini Service Error:', error);
		throw error;
	}
}

export default generateResponse;
