# EcoBot Python Backend

This is the Python Flask API server for your EcoBot that uses Google's Gemini AI.

## Setup

1. **Create a virtual environment:**
   ```bash
   cd backend
   python -m venv venv
   
   # On Windows:
   venv\Scripts\activate
   
   # On macOS/Linux:
   source venv/bin/activate
   ```

2. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

3. **Create your .env file:**
   ```bash
   # Create .env file in the backend folder
   echo "GOOGLE_API_KEY=your_actual_api_key_here" > .env
   ```
   
   Replace `your_actual_api_key_here` with your actual Google Gemini API key.

4. **Run the server:**
   ```bash
   python app.py
   ```

The server will start on `http://localhost:5000`

## API Endpoints

- `GET /` - API information
- `GET /health` - Health check
- `POST /chat` - Send a message to EcoBot

### Chat Endpoint Usage
```bash
curl -X POST http://localhost:5000/chat \
  -H "Content-Type: application/json" \
  -d '{"message": "How can I reduce my carbon footprint?"}'
```

## Environment Variables

Make sure your `.env` file contains:
```
GOOGLE_API_KEY=your_google_gemini_api_key
```

Get your API key from: https://makersuite.google.com/app/apikey