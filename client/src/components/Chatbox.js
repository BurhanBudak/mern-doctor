import React from 'react'
import './Chatbox.css'

class Chatbox extends React.Component{
     constructor(props) {
          super(props);
        }
     componentDidUpdate() {
          this.newData.scrollIntoView({ behavior: "smooth" })
      }
     render(){
          return(
               <div className="messages-c">    
          <div className="chatlist">
         {this.props.chatHistory.map((obj, index) => ( <p ref={(ref) => this.newData = ref}  key={index} className={obj.isEliza === true ? 'bot': 'user'}>{obj.content}</p>))}
               </div>
          </div>
          )
     }
}
// const Chatbox = (props) => (
//      <div className="messages-c">

    
//     <div className="messages">
    
//          {props.chatHistory.map((obj, index) => ( <p key={index} className={obj.isEliza === true ? 'bot': 'user'}>{obj.content}</p>))}
//     </div>
//     </div>
//      );
     

export default Chatbox