import { GoogleGenerativeAI } from '@google/generative-ai';

const ai = new GoogleGenerativeAI({
	apiKey: process.env.GEMINI_API_KEY,
});

async function generateResponse(message) {
	const model = ai.getGenerativeModel({ model: 'gemini-2.0-flash' });
	const response = await model.generateContent(message);

	return response.text;
}

export default generateResponse;
