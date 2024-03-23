import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://192.168.27.27:1000'); // Adjust the URL as per your server

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    // Listen for 'message' event from the server
    socket.on('message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    // Clean up event listener when component unmounts
    return () => {
      socket.off('message');
    };
  }, []);

  const sendMessage = () => {
    if (inputValue.trim() !== '') {
      // Emit 'sendMessage' event to the server
      socket.emit('sendMessage', inputValue);
      setInputValue('');
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="container">
      <div className="messages">
        {messages.map((message, index) => (
          <div key={index}>{message}</div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Type your message..."
          value={inputValue}
          onChange={handleInputChange}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
