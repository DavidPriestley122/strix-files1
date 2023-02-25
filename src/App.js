import React from 'react'
import HeaderImage from './components/HeaderImage'
import Header from './components/Header'
import {AboutStrix} from './components/AboutStrix'
import {StrixGameVersion2} from './components/StrixGameVersion2'
import {Instructions} from './components/Instructions'
import './App.css'



function App() {
  return (
  <div  className="App">
      <Header className="Header"/>
      <HeaderImage className="HeaderImage"/>

      <AboutStrix/>
     
      <br/>
      
      <div className="game">
          <StrixGameVersion2/> 
      </div> 

      <br/>

      <Instructions/>

      <br/>

   </div>
   );
}

export default App;