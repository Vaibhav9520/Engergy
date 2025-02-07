import React, { useEffect } from 'react';

export default function Chatbot() {
  useEffect(() => {
    // Redirect to the external chatbot URL when the component is mounted
    window.location.href = 'https://chatbot-i2sgggh9y-nikhil122004s-projects.vercel.app/chatbot.html';
  }, []);

  return (
    <div>
      {/* You can display a loading message while redirecting */}
      <p>Redirecting to chatbot...</p>
    </div>
  );
}
