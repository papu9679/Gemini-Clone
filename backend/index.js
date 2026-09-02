import express from 'express';
import geminiRoute from './routes/geminiRoute.js';

const app = express();
app.use(express.json());

//get request
app.get('/', (req, res) => {
	res.send('Welcome to Gemini Bot');
});

app.get('/api/test', (req, res) => {
	res.json({
		success: true,
		message: 'Backend is working',
	});
});

//call the geminiRouter
app.use('/api', geminiRoute);

const port = 3000;
app.listen(port, () => {
	console.log(`http://localhost:${port}/`);
});
