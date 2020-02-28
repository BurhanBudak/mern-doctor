import React from 'react'
import './Dashboard.css'

class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      input:'',
      conversationOver: false
    };
}



handleSubmit = async e => {
  e.preventDefault();
  if (this.state.input === '') {
    return
  }
  else{
    const input = this.state.input
    this.props.onChatRender({ isEliza : false, content : input })
    
    const response = await fetch("http://localhost:5000/eliza/post",{
      method:"POST",
      body: JSON.stringify({ message: input, conversationOver:this.state.conversationOver }),
      headers:{
        "Content-Type": "application/json"
      }
    })
    const res = await response.json();
    console.log(res)
    this.setState({
      input:'',
      conversationOver: res.conversationOver
    })
    let obj = {isEliza:res.isEliza,content: res.content}
    this.props.onChatRender(obj)
  }
};
onChange = (e) => {
  this.setState({ 
    input: e.target.value
  })
}
async componentDidMount(){  
  const response = await fetch("http://localhost:5000/eliza/get",{
    method:"GET",mode: 'cors',headers:{"Content-Type": "application/json"}})
    const res = await response.json()
    this.props.onChatRender(res)
 }
    render(){
        return (
            <div className="dashboard">
            <form onSubmit={this.handleSubmit} className="form">
            {/* <label 
            htmlFor="inputtext"
            >Answear here</label> */}
            <input
            className="form-control-lg"
            id="inputtext"
            type="text"
            placeholder="Write here..."
            value={this.state.input}
            onChange={this.onChange}
          />
          <div>
                <button type="submit" className="btn btn-primary btn-lg">Send message</button>
          </div>
            </form>
            </div>
       
        );
    }
  }
  export default Dashboard
