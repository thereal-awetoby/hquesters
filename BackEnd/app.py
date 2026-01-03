from flask import Flask, jsonify,request
from google import genai
import os
from dotenv import load_dotenv

load_dotenv()


Api_key=os.getenv("GEMINI_API_KEY")
if not Api_key:
    raise ValueError("Gemini api key not found")
app = Flask(__name__)
client = genai.Client(api_key="GEMINI_API_KEY")
@app.route("/api/ask",methods=["POST"])
def ask():
    
    question = request.json.get("What is artificial intelligence in simple terms?")
    response = client.models.generate_content(
        model = "gemini-1.5-flash",
        contents=question
    )
    return jsonify({"answer": response.text})
@app.route("/")
def home():
    return "hey  👋"

@app.route("/api/hello")
def hello():
    return jsonify({"message": "rak khdam"})
if __name__ == "__main__":
    app.run(debug=True)
