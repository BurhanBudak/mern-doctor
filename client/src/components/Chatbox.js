import React from 'react'
import './Chatbox.css'
const Chatbox = (props) => (
     <div className="messages-c">

    
    <div className="messages">
    
         {
         props.chatHistory.map(obj => (
          
                <p className={obj.isEliza === true ? 'bot': 'user'}>{obj.content}</p>
         ))}
    </div>
    </div>
     ); 

export default Chatbox