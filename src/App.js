import React from 'react'
import HeaderImage from './components/HeaderImage'
import Header from './components/Header'
import {AboutStrix} from './components/AboutStrix'
import {StrixGameVersion2} from './components/StrixGameVersion2'




function App() {
  return (
  <div  className="App">
      <Header className="Header"/>
      <HeaderImage className="HeaderImage"/>
      
           <div className="game">
              <StrixGameVersion2/> 
           </div> 

           <br/>
      
           <AboutStrix/>

                  
          
 </div>
   );
}

export default App;