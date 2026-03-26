import { useState } from 'react';
import { Chatbot } from 'supersimpledev';
import './Chat_bot.css';

export function Chat_bot( { chatMessages , setChatMessage } ) {
    const [ inputText , setInputText ] = useState('');
    function saveInputText(event){
        setInputText(event.target.value); 
    }
    function sendMessage(){
       const newChatMessages = [
            ...chatMessages,
            {
                msg: inputText,
                sender: 'User',
                id: crypto.randomUUID()
            }
        ];
        setChatMessage(newChatMessages);
        const response = Chatbot.getResponse( inputText );
        setChatMessage([
            ...newChatMessages,
            {
                msg: response,
                sender: 'Robot',
                id: crypto.randomUUID()
            }
        ]);
        setInputText('');
    }
    return (
        <div className = 'chat-input-container'>
            <input
                placeholder = "Send a message to ChatBot"
                size = "30"
                onChange={ saveInputText }
                value = { inputText }  //controlled input
                className = 'input-button'
            />
            <button
              onClick = { sendMessage }
              className = 'send-button'
            >Send</button>
        </div>
    );
}