import React, { Component } from 'react'
import Form from './form'

class Login extends Component{
  state={
    user1: {
        UserId:"John",pass:"12345"
    },
    user2:{
        UserId:"MICKY",pass:"98765"
    }
  }
  checks=(det)=>{
   if(det.pass==this.state.user1.pass && det.UserId==this.state.user1.UserId){
     console.log('user1')
     this.setState({
      UserId:det.UserId,
      pass:det.pass
     })
     this.props.history.push("/John")
   }
   else if(det.pass==this.state.user2.pass && det.UserId==this.state.user2.UserId){
     console.log('user2')
     this.setState({
      UserId:det.UserId,
      pass:det.pass
     })
     this.props.history.push("/Micky")
   }else{
     alert('invalid')
   }
  }

 
 render(){

     return(
         <div>
         
        




         <Form check={this.checks}/>
         </div>
     )
 }



}

export default  Login;