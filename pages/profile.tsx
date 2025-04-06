import React from "react";
import { useRouter } from "next/router";
import styles from "../css-component/profile.module.css";

const ProfilePage: React.FC = () => {
  const router = useRouter();

  const handleGoToLogin = () => {
    // 로그인 페이지로 이동
    router.push("/login");
  };

  const posts = [

    
    { id: 1, image: "/images/post1.jpg" },
    { id: 2, image: "/images/post2.jpg" },
    { id: 3, image: "/images/post3.jpg" },
    { id: 4, image: "/images/post4.jpg" },
    { id: 5, image: "/images/post5.jpg" },
    { id: 6, image: "/images/post6.jpg" },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <h2>Instagram</h2>
        <a href="#">홈</a>
        <a href="#">검색</a>
        <a href="#">릴스</a>
        <a href="#">메시지</a>
        <a href="#">알림</a>
        <a href="#">만들기</a>
        <a href="#">프로필</a>
        <a href="#">더 보기</a>
      </div>
      <div className={styles.profileHeader}>
        <img src="/images/profile.jpg" alt="프로필 사진" />
        <h1>2tae._.y04</h1>
        <button onClick={handleGoToLogin}>가입</button>
        <div>
          <span>게시물 0</span> | <span>팔로워 0</span> | <span>팔로우 0</span>
        </div>
      </div>
      <div className={styles.grid}>
        {posts.map((post) => (
          <div key={post.id} className={styles.gridItem}>
            <img src={post.image} alt={`Post ${post.id}`} />
            <div className={styles.overlay}>
              <span>
                <img src="/icons/heart.svg" alt="하트" /> 110만
              </span>
              <span>
                <img src="/icons/comment.svg" alt="말풍선" /> 110만
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfilePage;