"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ type: 'user' | 'bot'; text: string }[]>([]);
  const [inputValue, setInputValue] = useState('');

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSendMessage = async () => {
    if (inputValue.trim() === '') return;

    const newMessages = [...messages, { type: 'user' as 'user' | 'bot', text: inputValue }];
    setMessages(newMessages);
    setInputValue('');

    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/chatbot`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: inputValue }),
    });

    const data = await response.json();
    setMessages([...newMessages, { type: 'bot' as 'user' | 'bot', text: data.reply }]);
  };

  return (
    <>
      <button
        className="fixed bottom-8 right-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        onClick={toggleChat}
      >
        Chat with Me
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-8 w-80 bg-gray-800 text-white rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            <div className="p-4 border-b border-gray-700">
              <h3 className="font-bold">AI Chatbot</h3>
            </div>
            <div className="p-4 h-64 overflow-y-auto">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`mb-2 ${message.type === 'user' ? 'text-right' : 'text-left'}`}
                >
                  <span
                    className={`inline-block p-2 rounded-lg ${
                      message.type === 'user' ? 'bg-blue-500' : 'bg-gray-700'
                    }`}
                  >
                    {message.text}
                  </span>
                </div>
              ))}
            </div>
            <div className="p-4 border-t border-gray-700">
              <div className="flex">
                <input
                  type="text"
                  className="w-full bg-gray-700 text-white border border-gray-600 rounded-l py-2 px-3 focus:outline-none focus:border-blue-500"
                  value={inputValue}
                  onChange={handleInputChange}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                />
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r"
                  onClick={handleSendMessage}
                >
                  Send
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
