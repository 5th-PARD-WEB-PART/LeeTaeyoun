import React from "react";

const LoginPage: React.FC = () => {
    const handleLogin = () => {
        alert("로그인 버튼이 클릭되었습니다!");
        // 여기서 실제 로그인 로직을 추가하세요.
    };

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>로그인 페이지</h1>
            <input type="text" placeholder="아이디" 
            style={{ display: "block", margin: "10px auto" }} 
            />
            <input 
                type="password" placeholder="비밀번호" style={{ display: "block", margin: "10px auto" }} 
            />
            <button
                onClick={handleLogin} 
                style={{ 
                    padding: "10px 20px",
                    cursor: "pointer",
                    backgroundColor: "#007BFF",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    }}>
                로그인
            </button>
        </div>
    );
};

export default LoginPage;