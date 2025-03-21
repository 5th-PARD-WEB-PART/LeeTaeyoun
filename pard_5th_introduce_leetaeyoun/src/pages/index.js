"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var Home = function () {
    return (react_1.default.createElement("div", { style: { padding: '20px', fontFamily: 'Arial, sans-serif' } },
        react_1.default.createElement("h1", null, "Welcome to Taeyoun's World"),
        react_1.default.createElement("p", null, "Hello! My name is Taeyoun. I am a student at Handong Global University."),
        react_1.default.createElement("h2", null, "About Me"),
        react_1.default.createElement("p", null, "I am currently studying computer science and engineering. I have a passion for coding and enjoy learning new technologies."),
        react_1.default.createElement("h2", null, "Education"),
        react_1.default.createElement("ul", null,
            react_1.default.createElement("li", null, "Handong Global University - Computer Science and Engineering")),
        react_1.default.createElement("h2", null, "Interests"),
        react_1.default.createElement("ul", null,
            react_1.default.createElement("li", null, "Web Development"),
            react_1.default.createElement("li", null, "Artificial Intelligence"),
            react_1.default.createElement("li", null, "Open Source Contribution")),
        react_1.default.createElement("h2", null, "Contact"),
        react_1.default.createElement("p", null,
            "You can reach me at ",
            react_1.default.createElement("a", { href: "mailto:your-email@example.com" }, "lgbass@naver.com"),
            ".")));
};
exports.default = Home;