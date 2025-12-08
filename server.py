from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)

# 현재 디렉토리에서 정적 파일 서빙
@app.route('/')
def index():
    return send_from_directory('.', 'index.html')

@app.route('/<path:filename>')
def static_files(filename):
    return send_from_directory('.', filename)

# 로그인 API
@app.route('/api/login', methods=['POST'])
def login():
    data = request.get_json()
    
    username = data.get('username', '')
    password = data.get('password', '')
    
    # 터미널에 출력
    print('=== 로그인 요청 ===')
    print(f'username: {username}')
    print(f'password: {password}')
    print('==================')
    
    return jsonify({'success': True, 'message': '값 수신 완료'})

if __name__ == '__main__':
    print('서버 시작: http://localhost:5000')
    app.run(debug=True, port=5000)
