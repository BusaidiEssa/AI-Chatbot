import React, { useState } from 'react';
import axios from 'axios';

type ChatMessage = {
  user: string;
  text: string;
};

const Chat: React.FC = () => {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!message.trim()) return;

    const userMessage = message.trim();
    setChat(prev => [...prev, { user: 'You', text: userMessage }]);
    setMessage('');
    setLoading(true);

    try {
      const response = await axios.post('https://ai-chatbot-aauo.onrender.com/api/chat', {
        message: userMessage,
      });

      const reply = response.data?.reply?.trim();
      setChat(prev => [
        ...prev,
        { user: 'Bot', text: reply || 'No response received from model.' },
      ]);
    } catch (error) {
      console.error('Error from backend:', error);
      setChat(prev => [
        ...prev,
        { user: 'Bot', text: '⚠️ Error getting response from server.' },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') sendMessage();
  };

  return (
    <div style={{ padding: '20px', background: '#121212', color: '#fff', minHeight: '100vh' }}>
      <h2>AI Chat</h2>

      <div style={{ marginBottom: '20px' }}>
        {chat.map((entry, index) => (
          <div key={index} style={{ marginBottom: '10px' }}>
            <strong>{entry.user}:</strong> {entry.text}
          </div>
        ))}
        {loading && <p><em>Bot is typing...</em></p>}
      </div>

      <div>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Type your message..."
          style={{
            padding: '10px',
            width: '60%',
            marginRight: '10px',
            background: '#222',
            color: '#fff',
            border: '1px solid #444',
            borderRadius: '5px',
          }}
        />
        <button
          onClick={sendMessage}
          disabled={loading}
          style={{
            padding: '10px 20px',
            background: loading ? '#555' : '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: loading ? 'not-allowed' : 'pointer',
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
