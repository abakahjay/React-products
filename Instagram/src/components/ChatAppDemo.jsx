import { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:7004'); // Replace with your backend's URL

const ChatApp = ({ userId, recipientId }) => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        // Send the user's ID to the server for tracking
        socket.emit('registerUser', { userId });

        // Listen for new messages from the server
        socket.on('receiveMessage', (newMessage) => {
            if (
                (newMessage.sender === recipientId && newMessage.recipient === userId) ||
                (newMessage.sender === userId && newMessage.recipient === recipientId)
            ) {
                setMessages((prevMessages) => [...prevMessages, newMessage]);
            }
        });

        return () => {
            socket.disconnect(); // Clean up socket connection on unmount
        };
    }, [userId, recipientId]);

    const sendMessage = () => {
        if (message.trim() === '') return;

        const newMessage = {
            sender: userId,
            recipient: recipientId,
            message,
            timestamp: new Date().toISOString(),
        };

        // Emit the message to the server
        socket.emit('sendMessage', newMessage);

        // Add the message to the local state
        setMessages((prevMessages) => [...prevMessages, newMessage]);
        setMessage('');
    };

    return (
        <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
            <h2>Chat with {recipientId}</h2>
            <div
                style={{
                    border: '1px solid #ccc',
                    padding: '10px',
                    borderRadius: '5px',
                    height: '300px',
                    overflowY: 'scroll',
                    marginBottom: '10px',
                }}
            >
                {messages.map((msg, index) => (
                    <div
                        key={index}
                        style={{
                            textAlign: msg.sender === userId ? 'right' : 'left',
                            margin: '10px 0',
                        }}
                    >
                        <span
                            style={{
                                display: 'inline-block',
                                padding: '8px 12px',
                                borderRadius: '15px',
                                backgroundColor:
                                    msg.sender === userId ? '#daf1da' : '#f1f1f1',
                                maxWidth: '70%',
                                wordWrap: 'break-word',
                            }}
                        >
                            {msg.message}
                        </span>
                        <div style={{ fontSize: '12px', color: '#888', marginTop: '4px' }}>
                            {new Date(msg.timestamp).toLocaleTimeString()}
                        </div>
                    </div>
                ))}
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type a message..."
                    style={{
                        flexGrow: 1,
                        padding: '10px',
                        borderRadius: '5px',
                        border: '1px solid #ccc',
                    }}
                />
                <button
                    onClick={sendMessage}
                    style={{
                        padding: '10px 20px',
                        borderRadius: '5px',
                        border: 'none',
                        backgroundColor: '#4CAF50',
                        color: 'white',
                        cursor: 'pointer',
                    }}
                >
                    Send
                </button>
            </div>
        </div>
    );
};

export default ChatApp;
