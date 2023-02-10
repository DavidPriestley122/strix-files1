import HeaderImage from './components/HeaderImage'
import Header from './components/Header'
import {StrixGameVersion2} from './components/StrixGameVersion2'
import PDFManager from './components/PDFManager'
import "./App.css"


function App() {
  return (
  <div  className="App">
      <Header className="Header"/>
      <HeaderImage className="HeaderImage"/>
      
           <div className="game">
              <StrixGameVersion2/> 
           </div> 

           <h1 className = "instructions" > Instructions</h1>
           <p className = "instruction-text1"> To move a piece, click on it, then click the desired destination square. </p>
           <p className = "instruction-text2"> To take a piece, click on it.   </p>
        
           <PDFManager />
 </div>
   );
}

export default App;