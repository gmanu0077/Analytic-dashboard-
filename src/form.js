import React, { Component } from 'react'
import './app.css'

class Form extends Component{
  state={
    UserId:"",
    pass:""

    
  }
  
  sub=(e)=>{
    
     
     e.preventDefault();
     this.props.check(this.state);
     this.setState({
      UserId:"",
      pass:""
     })
  }
  cha=(e)=>{
    this.setState({
      [e.target.id]:[e.target.value]
    })
  }
  render(){
  return (
   <div className="login container z-depth-3">
     <h1 className="center blue-text text-darken-2">LOGIN</h1>
     <div className="container">
     <form className="container center" onSubmit={this.sub} >
       <label className="left"  htmlFor="UserId">User</label>
       <input id="UserId" onChange={this.cha} value={this.state.UserId}/>
       <label className="left" htmlFor="pass">Password</label>
       <input type="password" id="pass" onChange={this.cha} value={this.state.pass} />
       <button className="btn blue center">submit</button>

     </form>
     </div>
     
   </div>
   
  );
}
}

export default Form;
