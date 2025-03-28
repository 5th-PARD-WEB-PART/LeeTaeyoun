import React from "react";

const BackgroundBox: React.FC = () => {
    return (
        <div
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundImage: `url('/images/car.jpg')`, // public/images/car.jpg 경로
                backgroundSize: "cover", // 배경 이미지를 div 크기에 맞게 조정
                backgroundPosition: "center", // 배경 이미지를 중앙에 배치
                zIndex: -1, // 배경이 콘텐츠 뒤로 가도록 설정
            }}
        />
    );
};

export default BackgroundBox;