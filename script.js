// 로그인 폼 제출
document.getElementById('loginForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');
    
    // 서버로 전송
    await fetch('/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    });
    
    // 에러 메시지 표시
    errorMessage.classList.add('show');
});

// 비밀번호 표시/숨기기
const showPasswordBtn = document.querySelector('.show-password');
const passwordInput = document.getElementById('password');

// 초기 버튼 텍스트
showPasswordBtn.textContent = '비밀번호 표시';
showPasswordBtn.style.display = 'none';

// 비밀번호 입력시 버튼 표시
passwordInput.addEventListener('input', function() {
    if (this.value.length > 0) {
        showPasswordBtn.style.display = 'block';
    } else {
        showPasswordBtn.style.display = 'none';
    }
});

// 버튼 클릭시 표시/숨기기 토글
showPasswordBtn.addEventListener('click', function() {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        this.textContent = '숨기기';
    } else {
        passwordInput.type = 'password';
        this.textContent = '비밀번호 표시';
    }
});
