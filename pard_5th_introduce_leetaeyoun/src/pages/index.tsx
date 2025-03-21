import React from 'react';

const Home: React.FC = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Welcome to Taeyoun's World</h1>
      <p>Hello! My name is Taeyoun. I am a student at Handong Global University.</p>
      <h2>About Me</h2>
      <p>I am currently studying computer science and engineering. I have a passion for coding and enjoy learning new technologies.</p>
      <h2>Education</h2>
      <ul>
        <li>Handong Global University - Computer Science and Engineering</li>
      </ul>
      <h2>Interests</h2>
      <ul>
        <li>Web Development</li>
        <li>Artificial Intelligence</li>
        <li>Open Source Contribution</li>
      </ul>
      <h2>Contact</h2>
      <p>You can reach me at <a href="mailto:your-email@example.com">your-email@example.com</a>.</p>
    </div>
  );
};

export default Home;