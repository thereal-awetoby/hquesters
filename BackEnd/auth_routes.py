from flask import Blueprint,request,jsonify
from db import get_connection
from flask_bcrypt import Bcrypt
from extension import bcrypt

auth = Blueprint("auth",__name__)
# bcrypt = Bcrypt()

@auth.route("/api/register",methods=['POST'])
def register():
    if not request.is_json:
        return jsonify({"error":"Invalid Json"}),400
    data = request.json
    full_name = data.get("fullName")
    nickname = data.get("nickname")
    email = data.get("email")
    password = data.get("password")
    if not email or not password:
        return jsonify({"error":"Missing fields"}),400
    hashed_password = bcrypt.generate_password_hash(password).decode("utf-8")

    conn = get_connection()
    cur = conn.cursor()

    try :
        cur.execute(
            """
            INSERT INTO users (full_name, nickname, email, password_hash)
            VALUES (%s,%s,%s,%s)
            """,
            (full_name,nickname,email,hashed_password)
        )
        conn.commit()
    except Exception:
        return jsonify({"error":"Email already exists"}),400
    finally:
        cur.close()
        conn.close()
    return jsonify({"message":"User created"}),201
@auth.route("/api/login",methods=["POST"])
def login():
    data = request.json
    email = data.get("email")
    password = data.get("password")

    conn = get_connection()
    cur = conn.cursor()

    cur.execute(
        "SELECT password_hash FROM users WHERE email=%s",
        (email,)
    )
    user = cur.fetchone()
    cur.close()
    conn.close()
    if not user:
        return jsonify({"error":"invalid credentials"}),401
    if not bcrypt.check_password_hash(user[0],password):
        return jsonify({"error":"Invalid credentials"}),401
    return jsonify({"message": "Login successful"}),200