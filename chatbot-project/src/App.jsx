import { useState } from 'react'
import { Chat_bot } from './components/Chat_bot';
import { Chat_Message } from './components/Chat_Message';
import  Chat_Messages  from './components/Chat_Messages';
import RobotProfileImage from './assets/robot.png';
import UserProfileImage from './assets/user.png';
import './App.css'

function App() {
    const [ chatMessages , setChatMessage ] = useState([  
        {                                                   
            msg: 'Hello ChatBot', 
            sender: 'User',
            id:'id1'
        },
        {
            msg: 'Hello! How can i help you?',
            sender: 'Robot',
            id:'id2'
        },
        {
            msg: 'Can you tell me todays date?',
            sender: 'User',
            id:'id3'
        },
        {
            msg: 'Ohh! Its 22 August.',
            sender: 'Robot',
            id:'id4'
        }
    ]);
    return (
        <div className = 'app-container'>
            <Chat_Messages 
              chatMessages = { chatMessages }
              setChatMessage = { setChatMessage }
            />
            <Chat_bot
              chatMessages={ chatMessages}
              setChatMessage= { setChatMessage }
            />          
        </div>
    );
}

export default App
