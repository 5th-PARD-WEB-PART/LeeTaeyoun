import React from "react";
import { useRouter } from "next/router";
import styles from "../css-component/login.module.css";

const LoginPage: React.FC = () => {
  const router = useRouter();

  const handleLogin = () => {
    // 로그인 로직 추가
    alert("로그인 버튼이 클릭되었습니다!");
    router.push("/profile"); // 프로필 페이지로 이동
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.logo}>Instagram</div>
        <input
          type="text"
          placeholder="휴대폰 번호 또는 이메일 주소"
          className={styles.input}
        />
        <input type="text" placeholder="성명" className={styles.input} />
        <input type="text" placeholder="사용자 이름" className={styles.input} />
        <input type="password" placeholder="비밀번호" className={styles.input} />
        <button className={styles.button} onClick={handleLogin}>
          가입
        </button>
        <div className={styles.footer}>
          계정이 있으신가요? <a href="/login">로그인</a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;