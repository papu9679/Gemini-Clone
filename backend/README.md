                 index.js
                    │
                    │ app.use("/api", geminiRoute)
                    ▼
             geminiRoute.js
                    │
                    │ generateResponse(message)
                    ▼
           geminiService.js
                    │
                    │ GoogleGenAI
                    ▼
               Gemini API
                    │
                    │ AI response
                    ▼
           geminiService.js
                    │
                    ▼
             geminiRoute.js
                    │
                    ▼
                Frontend

Our backend currently looks like this

    backend/
    │
    ├── .env
    ├── .gitignore
    ├── index.js
    ├── package.json
    │
    ├── routes/
    │   └── geminiRoute.js
    │
    └── services/
        └── geminiService.js