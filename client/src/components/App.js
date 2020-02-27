import React from 'react';
import Dashboard from "./Dashboard";
import Chatbox from "./Chatbox";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component{
  
   
    state = {
      chatHistory:[]
    };

  onChatRender = (params) =>{
    this.setState({
      chatHistory: [...this.state.chatHistory, params]
    })
  }
  render(){
    return (
      <div className="App">
        <h1>Ask doctor chat</h1>
        <Chatbox  chatHistory={this.state.chatHistory}/>
        <Dashboard onChatRender={this.onChatRender}/>
      </div>
    );
  }
}

export default App;
