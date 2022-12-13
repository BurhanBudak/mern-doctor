import React, { Component } from 'react'
import './Chatbox.css'

class Chatbox extends Component{
     constructor(props) {
          super();
     }
     componentDidUpdate() {
          this.newData.scrollIntoView({ behavior: "smooth" })
     }
     render(){
          return(
               <div className="messages-c">    
          <div className="chatlist">
         {
          this.props.chatHistory.map(
              (obj, index) => ( 
               <p ref={(ref) => this.newData = ref}  key={index} className={obj.isEliza === true ? 'bot': 'user'}>
                    {obj.content}
               </p>
               )
               )
          }
          </div>
          </div>
          )
     }
}

     

export default Chatbox