import RobotProfileImage from '../assets/robot.png';
import UserProfileImage from '../assets/user.png';
import './Chat_Message.css';

export function Chat_Message({ msg, sender }) {
    return (
        <div className = { sender ==='User' ? 'chat-message-user' : 'chat-message-robot' }>
            {sender === 'User' && <img src= { UserProfileImage } className = 'chat-message-profile'/>}
            <div className = ' chat-message-text '>
                {msg}
            </div>
            {sender === 'Robot' && <img src={ RobotProfileImage } className = 'chat-message-profile'/>}
        </div>
    );
}