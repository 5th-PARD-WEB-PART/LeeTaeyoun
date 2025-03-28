import React, { useState } from "react";
import BackgroundBox from "../BackgroundBox/BackgroundBox"; // BackgroundBox 컴포넌트 가져오기

// 인터페이스 상속 사용
interface Person {
    이름: string;
    나이: number;
}

interface UserInfo extends Person {
    취미: string[];
    생년월일: string;
}

const IndexPage: React.FC = () => {
    const [isLogoClicked, setIsLogoClicked] = useState(false); // 로고 클릭 여부 상태

    const userInfo: UserInfo = {
        이름: "이태윤",
        생년월일: "2004-03-22",
        나이: 22,
        취미: ["기타치기", "게임", "이야기하기"],
    };

    const handleLogoClick = () => {
        setIsLogoClicked(true); // 로고 클릭 시 상태 변경
    };

    return (
        <div style={{ width: "100vw", height: "100vh", overflowY: "scroll", position: "relative" }}>
            {!isLogoClicked ? (
                // 로고 화면
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100%",
                        height: "100%",
                        backgroundColor: "#f0f0f0",
                    }}
                >
                    <img
                        src="/logo file/logo.png" // public/logo file/logo.png 경로
                        alt="Logo"
                        style={{ cursor: "pointer", width: "200px" }}
                        onClick={handleLogoClick} // 클릭 시 상태 변경
                    />
                </div>
            ) : (
                // 자동차 배경과 자기소개, 아래로 스크롤 시 사용자 사진
                <div style={{ width: "100%", height: "200vh", position: "relative" }}>
                    {/* 왼쪽 메뉴 */}
                    <div
                        style={{
                            position: "fixed",
                            top: 0,
                            left: 0,
                            width: "250px",
                            height: "100vh",
                            backgroundColor: "black",
                            color: "white",
                            padding: "20px",
                            boxSizing: "border-box",
                            zIndex: 10,
                        }}
                    >
                        <h1 style={{ fontSize: "24px", marginBottom: "20px" }}>Instagram</h1>
                        <ul style={{ listStyle: "none", padding: 0 }}>
                            <li style={{ marginBottom: "15px" }}>🏠 홈</li>
                            <li style={{ marginBottom: "15px" }}>🔍 검색</li>
                            <li style={{ marginBottom: "15px" }}>🧭 탐색 탭</li>
                            <li style={{ marginBottom: "15px" }}>🎥 릴스</li>
                            <li style={{ marginBottom: "15px" }}>✉️ 메시지</li>
                            <li style={{ marginBottom: "15px" }}>❤️ 알림</li>
                            <li style={{ marginBottom: "15px" }}>➕ 만들기</li>
                            <li style={{ marginBottom: "15px" }}>👤 프로필</li>
                            <li style={{ marginBottom: "15px" }}>☰ 더 보기</li>
                        </ul>
                    </div>

                    {/* 첫 번째 섹션: 자동차 배경과 자기소개 */}
                    <div
                        style={{
                            marginLeft: "250px",
                            width: "calc(100% - 250px)",
                            height: "100vh",
                            position: "relative",
                        }}
                    >
                        {/* BackgroundBox 컴포넌트를 사용하여 배경 설정 */}
                        <BackgroundBox />

                        {/* 소개 텍스트 */}
                        <div
                            style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center" ,
                                color: "white", // 텍스트 색상
                                textShadow: "0px 0px 5px rgba(0, 0, 0, 0.7)", // 텍스트 가독성을 위한 그림자
                            }}
                        >
                            <p>안녕하세요 저는 현재 한동대학교에 재학중인 {userInfo.이름} 입니다.</p>
                            <p>저는 {userInfo.생년월일}생이고 현재 {userInfo.나이} 입니다.</p>
                            <p>제 취미는 {userInfo.취미.join(", ")} 입니다.</p>
                        </div>
                    </div>

                    {/* 두 번째 섹션: 사용자 사진 */}
                    <div
                        style={{
                            marginLeft: "250px",
                            width: "calc(100% - 250px)",
                            height: "100vh",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: "#f0f0f0",
                        }}
                    >
                        <img
                            src="/images/your-photo.jpg" // public/images/your-photo.jpg 경로
                            alt="User Photo"
                            style={{ width: "300px", height: "300px", borderRadius: "50%" }}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default IndexPage; 