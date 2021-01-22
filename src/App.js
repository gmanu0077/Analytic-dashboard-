import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Login from './Login'
import John from './john'
import Micky from './micky'
class App extends Component{

 render(){
     return(
         <BrowserRouter>
           <Route exact path="/" component={Login}/>
           <Route exact path="/john" component={John}/>
           <Route exact path="/Micky" component={Micky}/>
         </BrowserRouter>
     )
 }



}

export default  App;