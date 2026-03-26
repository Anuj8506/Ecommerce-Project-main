import { useRef , useEffect } from 'react'
import { Chat_Message } from './Chat_Message';
import './Chat_Messages.css';

function Chat_Messages( { chatMessages } ) {
    const chatMessageRef = useRef(null);
    useEffect( () => {
       const containerElem = chatMessageRef.current;
       if (containerElem){
          containerElem.scrollTop = containerElem.scrollHeight;
       }
    }, [chatMessages]);
    return (
        <div className = 'chat-message-container' ref = {chatMessageRef}>
            {chatMessages.map((Chat_Msg) => {
                return (
                    <Chat_Message
                        msg={Chat_Msg.msg}
                        sender={Chat_Msg.sender}
                        key={Chat_Msg.id}
                    />   
                    );
                })
            }
        </div>
    )
}

export default Chat_Messages