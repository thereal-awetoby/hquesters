from flask import Flask, jsonify,request,Blueprint
from google import genai
from extension import bcrypt
import os
from auth_routes import auth
from dotenv import load_dotenv


load_dotenv()


Api_key=os.getenv("GEMINI_API_KEY")

if not Api_key:
    raise ValueError("Gemini api key not found")
app = Flask(__name__)
bcrypt.init_app(app)
app.register_blueprint(auth)
client = genai.Client(api_key=Api_key)
@app.route("/api/ask",methods=["POST"])
def ask():
    
    question = request.json.get("question")
    response = client.models.generate_content(
        model = "gemini-1.5-flash",
        contents=question
    )
    try : 
        response = client.models.generate_content(...)
    except Exception as e:
        return jsonify({"error" : "Gemini error"}),500
    return jsonify({"answer": response.text})
@app.route("/")
def home():
    return "hey  👋"

@app.route("/api/hello")
def hello():
    return jsonify({"message": "rak khdam"})

if __name__ == "__main__":
    app.run(debug=True)
