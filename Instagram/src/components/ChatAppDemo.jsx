import { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:7004');

const ChatApp = () => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        // Listen for messages from the server
        socket.on('receiveMessage', (newMessage) => {
            setMessages((prevMessages) => [...prevMessages, newMessage]);
        });
    }, []);

    const sendMessage = () => {
        socket.emit('sendMessage', message);
        setMessages((prevMessages) => [...prevMessages, message]);
        setMessage('');
    };

    return (
        <div>
            <div>
                {messages.map((msg, index) => (
                    <div key={index}>{msg}</div>
                ))}
            </div>
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
};

export default ChatApp;
