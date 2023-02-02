import React, { useState, useRef } from 'react'
import { Vector3, Mesh, VertexData} from '@babylonjs/core';
import { Engine, Scene, useScene, useClick   } from 'react-babylonjs'
import {Color3} from '@babylonjs/core/Maths/math.color';





//custom mesh for an individual square of the board

const BoardMesh = (props) => {
    const scene = useScene(); 
    const [customMesh] = useState(()=>{
    const meshInstance = new Mesh(props.name, scene);
    var positions = [0,0,0,            0,0,0.5,         -0.5,0,0.5,
                    0,0,0,            -0.5,0,0.5,       -0.5,0,0,
                    0,0,0,            -0.5,0,0,         -0.5,0,-0.5,
                    0,0,0,            -0.5,0,-0.5,       0,0,-0.5,
                    0,0,0,            0,0,-0.5,          0.5,0,-0.5,
                    0,0,0,            0.5,0,-0.5,     0.5,0,0,
                    0,0,0,            0.5,0,0,           0.5,0,0.5,
                    0,0,0,            0.5,0,0.5,         0,0,0.5,
                    
                    0.5,-0.5,-0.5,     0.5,0,-0.5,      -0.5,-0.5,-0.5,
                    -0.5,-0.5,-0.5,    0.5,0,-0.5,      -0.5,0,-0.5,
                    0.5,-0.5,-0.5,     0.5,-0.5,0.5,     0.5,0,0.5,
                    0.5,-0.5,-0.5,     0.5,0,0.5,        0.5,0,-0.5,
                    0.5,-0.5,0.5,      -0.5,-0.5,0.5,    -0.5,0,0.5,   
                    0.5,-0.5,0.5,      -0.5,0,0.5,       0.5,0,0.5,
                    -0.5,-0.5,0.5,     -0.5,-0.5,-0.5,   -0.5,0,-0.5,
                    -0.5,-0.5,0.5,     -0.5,0,-0.5,      -0.5,0,0.5, 
                    -0.5,-0.5,-0.5,    0.5,-0.5,0.5,      0.5,-0.5,-0.5,
                    -0.5,-0.5,-0.5,    -0.5,-0.5,0.5,     0.5,-0.5,0.5,]


     var indices = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,
                    21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,
                    39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,];
    

      var normals = [];
      var vertexData = new VertexData();
      VertexData.ComputeNormals(positions, indices, normals,);
      vertexData.positions = positions;    
      vertexData.indices = indices;
      vertexData.normals = normals;
      vertexData.applyToMesh(meshInstance);
       
      return meshInstance;
     })
    return (
        <mesh fromInstance={customMesh} name = "meshName1" rotation={props.rotation}  scaling = {props.scaling} position={props.position} >
           <standardMaterial  name = "singleCube"  diffuseColor= {props.color} height = {props.height} />
        </mesh>
    )
  }

//this function accepts return from the onMeshedPicked function, provides coordinates of board square for piece to move to.  

function squarePositionNew(){
    if(positionOfSquare[0]===null)
    return{
        //empty brackets
    }
   else 
   return(   
     new Vector3.FromArray(positionOfSquare)
    )   
}

/*function squarePositionYellowOwlNew(){
   
   return(   
     new Vector3.FromArray(positionOfSquare1)
    )   
}
*/


// this function controls the movement of pieces from face to face of the board

/*function squarePositionRotationNew(){

    if(onMeshPicked()[0] === 0)
    return(
        new Vector3(0,0,-Math.PI/2)
    )
    else if (onMeshPicked()[1]=== 0)
    return(
        new Vector3(0,0,0)  
    ) 
    else if (onMeshPicked()[2] === 0)
    return(
        new Vector3(-Math.PI/2, 0,0)
    )
    
}
*/
//the following six functions provide the colours for the heads and bodies of the pieces

function headTeamColorBrown() {
    return(
    Color3.FromInts(88,54,41)
      )
    }
/*function headTeamColorYellow() {
    return(
        Color3.FromInts(255,204,0)   
    )
}
*/  
function headTeamColorGreen() {
    return(
        Color3.FromInts(8,64,0)   
    )
}  

function owlBodyColor() {
    return(
    Color3.FromInts(204,153,102)
      )
    }
/*function kiteBodyColor() {
    return(
    Color3.FromInts(139,0,0)
     )
    }

function ravenBodyColor() {
        return(
        Color3.FromInts(10,10,10)
     )
    }   
*/
// the following nine functions - one for each piece - control the appearance and movement of the pieces.

function squarePositionsNew(){
    if(positionOfSquare[0]===null)
    return{
        //empty brackets
    }
   else 
   return(   
     new Vector3.FromArray(positionOfSquare)
    )   
}


/*const  WithUseClickBrownOwl1 = () =>{
const [MeshPosition, setPiecePosition] = useState(new Vector3(6.5,0,-0.5));
//const [meshRotation, setPieceRotation] = useState(Vector3.Zero)
  //const   valueBeforeChange = useRef(brownOwlMeshPosition)    
//const valueBeforeRotation = useRef(meshRotation)
const [brownOwlPosition]= useClick(_=> {
const MeshPosition = squarePositionNew();
//const meshRotation = squarePositionRotationNew();
      setPiecePosition(MeshPosition)  
      //setPieceRotation(meshRotation)
      });
         //console.log(valueBeforeChange.current.x)
     

      return(
        <cylinder name = "hollow sleeve" ref = {brownOwlPosition} height = {14.2} diameter={0.55} position = {MeshPosition}  >

        <cylinder name = "BrownOwlBody" height={6} diameter = {0.5}   position = {new Vector3(0,3,0)}>
        <cylinder name = "BrownOwlHead" height = {1} diameter = {0.5} position = {new Vector3(0,3.5,0)} >
         <standardMaterial name = "BrownTeam-mat" diffuseColor = {headTeamColorBrown()} />
        </cylinder>
        <standardMaterial name = "Owl-mat"  diffuseColor = {owlBodyColor()}/>  
        </cylinder>
             <standardMaterial name = "clear-mat " alpha = {0} />
        </cylinder>
           )
         }

         */

const WithUseClickWholeBoard = () =>{
const [[PieceMeshPositions], setPieceMeshPositions] = useState([(new Vector3(1,2,3)), new Vector3(2,3,4)])
const [piecePositions] = useClick(_=>{
const PieceMeshPositions = squarePositionsNew();
     setPieceMeshPositions(PieceMeshPositions)
})

return (
    <transformNode ref = {piecePositions}>
    <transformNode>
    <cylinder name = "hollow sleeve"  height = {14.2} diameter={0.55} position = {PieceMeshPositions[0]}  >

    <cylinder name = "BrownOwlBody" height={6} diameter = {0.5}   position = {new Vector3(0,3,0)}>
    <cylinder name = "BrownOwlHead" height = {1} diameter = {0.5} position = {new Vector3(0,3.5,0)} >
     <standardMaterial name = "BrownTeam-mat" diffuseColor = {headTeamColorBrown()} />
    </cylinder>
    <standardMaterial name = "Owl-mat"  diffuseColor = {owlBodyColor()}/>  
    </cylinder>
         <standardMaterial name = "clear-mat " alpha = {0} />
    </cylinder>   
    </transformNode>
    <transformNode>   
    <cylinder name = "hollow sleeve"  height = {14.2} diameter={0.55} position = {PieceMeshPositions[1]}  >

    <cylinder name = "BrownOwlBody" height={6} diameter = {0.5}   position = {new Vector3(0,3,0)}>
    <cylinder name = "BrownOwlHead" height = {1} diameter = {0.5} position = {new Vector3(0,3.5,0)} >
     <standardMaterial name = "BrownTeam-mat" diffuseColor = {headTeamColorBrown()} />
    </cylinder>
    <standardMaterial name = "Owl-mat"  diffuseColor = {owlBodyColor()}/>  
    </cylinder>
         <standardMaterial name = "clear-mat " alpha = {0} />
    </cylinder>  
    </transformNode>
  </transformNode>
)
}






/*
const yellowOwlStartPosition = [0.5,6.5,0]
const  WithUseClickYellowOwl1 = () =>{
const [meshPosition, setPiecePosition] = useState(new Vector3((yellowOwlStartPosition[0]), yellowOwlStartPosition[1],yellowOwlStartPosition[2]));
//const [meshRotation, setPieceRotation] = useState(Vector3.Zero)
      
//const valueBeforeRotation = useRef(meshRotation)
const [yellowOwlPosition]= useClick(_=> {
const meshPosition = squarePositionYellowOwlNew();
//const meshRotation = squarePositionRotationNew();
      setPiecePosition(meshPosition)  
      //setPieceRotation(meshRotation)
      });
         //console.log(valueBeforeRotation.current.y)
     

      return(
        <cylinder name = "hollow sleeve" ref = {yellowOwlPosition} height = {14.2} diameter={0.55} position = {meshPosition}  >

        <cylinder name = "BrownOwlBody" height={6} diameter = {0.5}   position = {new Vector3(0,3,0)}>
        <cylinder name = "BrownOwlHead" height = {1} diameter = {0.5} position = {new Vector3(0,3.5,0)} >
         <standardMaterial name = "BrownTeam-mat" diffuseColor = {headTeamColorBrown()} />
        </cylinder>
        <standardMaterial name = "Owl-mat"  diffuseColor = {owlBodyColor()}/>  
        </cylinder>
             <standardMaterial name = "clear-mat " alpha = {0} />
        </cylinder>
           )
         }

  */  







// positionOfSquare stores the position of the picked square on the board, for the piece to read and move to.                   
    
//var positionOfSquare=[0,0,0]

// this is to read the position of the picked square on the board


var positionOfSquare = [null]

const  onMeshPicked = (pickedMesh)=> {
  
if (pickedMesh.name === "meshName1") {

const xValue = pickedMesh.position.x ;
const yValue = pickedMesh.position.y ;
const zValue = pickedMesh.position.z ;

positionOfSquare = [xValue,yValue,zValue] 

}
}



     
    
     

export const StrixGame2= () => {
    return(
        <div className="App">
           <Engine antialias adaptToDeviceRatio canvasId='babylonJS'>
            <Scene onMeshPicked= {onMeshPicked} >
             <arcRotateCamera  name="camera1"  target={new Vector3(0.5,-0.5,0)} alpha={-Math.PI/4 } beta={Math.PI / 3} radius={30} />
             <hemisphericLight name='light1' intensity={0.7} direction={Vector3.Up()} />
             <hemisphericLight name='light1' intensity={0.7} direction={Vector3.Down()} />
 
             <transformNode  name = "transformNode1"  >  

             <box      name = "greenSiding1" rotation = {new Vector3(0,0,0)}    scaling = {new Vector3(7.5,.1,.5)} position = {new Vector3(3.25,7.02,.25)}>
             <standardMaterial name = "sidingColor" diffuseColor= {headTeamColorGreen()}/>
             </box>
             <box      name = "grCiding2" rotation = {new Vector3(0,Math.PI/2,0)}    scaling = {new Vector3(7,.1,.5)} position = {new Vector3(-.25,7.02,-3.5)}>
             <standardMaterial name = "sidingColor" diffuseColor= {headTeamColorGreen()}/>
             </box> 
             <box      name = "greenSiding3" rotation = {new Vector3(0,0,Math.PI/2,0)}    scaling = {new Vector3(7,.1,.5)} position = {new Vector3(7.02,3.5,0.25)}>
             <standardMaterial name = "sidingColor" diffuseColor= {headTeamColorGreen()}/>
             </box> 
             <box      name = "greenSiding4" rotation = {new Vector3(Math.PI/2,Math.PI/2,0)}    scaling = {new Vector3(7.5,.1,.5)} position = {new Vector3(7.02,-.25,-3.25)}>
             <standardMaterial name = "sidingColor" diffuseColor= {headTeamColorGreen()}/>
             </box> 
             <box      name = "greenSiding5" rotation = {new Vector3(Math.PI/2,0,0)}    scaling = {new Vector3(7,.1,.5)} position = {new Vector3(3.5,-.25,-7.02)}>
             <standardMaterial name = "sidingColor" diffuseColor= {headTeamColorGreen()}/>
             </box> 
             <box      name = "greenSiding6" rotation = {new Vector3(0,Math.PI/2,Math.PI/2)}    scaling = {new Vector3(7.5,.1,.5)} position = {new Vector3(-.25,3.25,-7.02)}>
             <standardMaterial name = "sidingColor" diffuseColor= {headTeamColorGreen()}/>
             </box> 

            <box     name="backPanel1" rotation = {new Vector3(0,0,0)} scaling = {new Vector3(7.5,7.5,.1)} position = {new Vector3(3.25,3.25,.5)}>
            <standardMaterial name = "backPanelColor1" diffuseColor= {headTeamColorBrown()}/>  
            </box>
            <box     name="backPanel2" rotation = {new Vector3(-Math.PI/2,0,0)} scaling = {new Vector3(7.5,7.5,.1)} position = {new Vector3(3.25,-.5,-3.25)}>
            <standardMaterial name = "backPanelColor2" diffuseColor= {headTeamColorBrown()}/>  
            </box>
            <box     name="backPanel3" rotation = {new Vector3(0,-Math.PI/2,0)} scaling = {new Vector3(7.5,7.5,.1)} position = {new Vector3(-.5,3.25,-3.25)}>
            <standardMaterial name = "backPanelColor2" diffuseColor= {headTeamColorBrown()}/>  
            </box>






             <BoardMesh name = "brown-7-7"    rotation = {new Vector3(0,0,0)}    position = {new Vector3(0.5,0,-0.5)}  color =  {Color3.FromInts(75,54,33)} /> 
             <BoardMesh name = "brown-7-6"    rotation = {new Vector3(0,0,0)}    position = {new Vector3(1.5,0,-0.5)}  color =  {Color3.FromInts(240,230,140)}/>
             <BoardMesh name = "brown-7-5"    rotation = {new Vector3(0,0,0)}    position = {new Vector3(2.5,0,-0.5)}  color = {Color3.FromInts(75,54,33)}/>  
             <BoardMesh name = "brown-7-4"    rotation = {new Vector3(0,0,0)}    position = {new Vector3(3.5,0,-0.5)}  color = {Color3.FromInts(240,230,140)}/>  
             <BoardMesh name = "brown-7-3"    rotation = {new Vector3(0,0,0)}    position = {new Vector3(4.5,0,-0.5)}  color = {Color3.FromInts(75,54,33)}/>  
             <BoardMesh name = "brown-7-2"    rotation = {new Vector3(0,0,0)}    position = {new Vector3(5.5,0,-0.5)}  color = {Color3.FromInts(240,230,140)}/>  
             <BoardMesh name = "brown-7-1"    rotation = {new Vector3(0,0,0)}    position = {new Vector3(6.5,0,-0.5)}  color = {headTeamColorBrown()}/>  

             <BoardMesh name = "brown-6-7"    rotation = {new Vector3(0,0,0)}    position = {new Vector3(0.5,0,-1.5)} color = {Color3.FromInts(240,230,140)}  />   
             <BoardMesh name = "brown-6-6"    rotation = {new Vector3(0,0,0)}    position = {new Vector3(1.5,0,-1.5)} color = {Color3.FromInts(75,54,33)} />   
             <BoardMesh name = "brown-6-5"    rotation = {new Vector3(0,0,0)}    position = {new Vector3(2.5,0,-1.5)} color = {Color3.FromInts(240,230,140)}/> 
             <BoardMesh name = "brown-6-4"    rotation = {new Vector3(0,0,0)}    position = {new Vector3(3.5,0,-1.5)}  color = {Color3.FromInts(75,54,33)}/>  
             <BoardMesh name = "brown-6-3"    rotation = {new Vector3(0,0,0)}    position = {new Vector3(4.5,0,-1.5)}  color = {Color3.FromInts(240,230,140)}/>  
             <BoardMesh name = "brown-6-2"    rotation = {new Vector3(0,0,0)}    position = {new Vector3(5.5,0,-1.5)}  color = {Color3.FromInts(75,54,33)}/>  
             <BoardMesh name = "brown-6-1"    rotation = {new Vector3(0,0,0)}    position = {new Vector3(6.5,0,-1.5)}  color = {Color3.FromInts(240,230,140)}/>  


             <BoardMesh name = "brown-5-7"   rotation = {new Vector3(0,0,0)}      position = {new Vector3(0.5,0,-2.5)} color = {Color3.FromInts(75,54,33)} />   
             <BoardMesh name = "brown-5-6"   rotation = {new Vector3(0,0,0)}      position = {new Vector3(1.5,0,-2.5)} color = {Color3.FromInts(240,230,140)} />   
             <BoardMesh name = "brown-5-5"   rotation = {new Vector3(0,0,0)}      position = {new Vector3(2.5,0,-2.5)} color = {Color3.FromInts(75,54,33)} />   
             <BoardMesh name = "brown-5-4"    rotation = {new Vector3(0,0,0)}     position = {new Vector3(3.5,0,-2.5)}  color = {Color3.FromInts(240,230,140)}/>  
             <BoardMesh name = "brown-5-3"    rotation = {new Vector3(0,0,0)}     position = {new Vector3(4.5,0,-2.5)}  color = {Color3.FromInts(75,54,33)}/>  
             <BoardMesh name = "brown-5-2"    rotation = {new Vector3(0,0,0)}     position = {new Vector3(5.5,0,-2.5)}  color = {Color3.FromInts(240,230,140)}/>  
             <BoardMesh name = "brown-5-1"    rotation = {new Vector3(0,0,0)}     position = {new Vector3(6.5,0,-2.5)}  color = {Color3.FromInts(75,54,33)}/>  


             <BoardMesh name = "brown-4-7"   rotation = {new Vector3(0,0,0)}      position = {new Vector3(0.5,0,-3.5)} color = {Color3.FromInts(240,230,140)} />   
             <BoardMesh name = "brown-4-6"   rotation = {new Vector3(0,0,0)}      position = {new Vector3(1.5,0,-3.5)} color = {Color3.FromInts(75,54,33)} />   
             <BoardMesh name = "brown-4-5"   rotation = {new Vector3(0,0,0)}      position = {new Vector3(2.5,0,-3.5)} color = {Color3.FromInts(240,230,140)} />   
             <BoardMesh name = "brown-6-4"    rotation = {new Vector3(0,0,0)}     position = {new Vector3(3.5,0,-3.5)}  color = {Color3.FromInts(75,54,33)}/>  
             <BoardMesh name = "brown-6-3"    rotation = {new Vector3(0,0,0)}     position = {new Vector3(4.5,0,-3.5)}  color = {Color3.FromInts(240,230,140)}/>  
             <BoardMesh name = "brown-6-2"    rotation = {new Vector3(0,0,0)}     position = {new Vector3(5.5,0,-3.5)}  color = {Color3.FromInts(75,54,33)}/>  
             <BoardMesh name = "brown-6-1"    rotation = {new Vector3(0,0,0)}     position = {new Vector3(6.5,0,-3.5)}  color = {Color3.FromInts(240,230,140)}/>     

             <BoardMesh name = "brown-3-7"   rotation = {new Vector3(0,0,0)}      position = {new Vector3(0.5,0,-4.5)} color = {Color3.FromInts(75,54,33)} />   
             <BoardMesh name = "brown-3-6"   rotation = {new Vector3(0,0,0)}      position = {new Vector3(1.5,0,-4.5)} color = {Color3.FromInts(240,230,140)} />   
             <BoardMesh name = "brown-3-5"   rotation = {new Vector3(0,0,0)}      position = {new Vector3(2.5,0,-4.5)} color = {Color3.FromInts(75,54,33)} />   
             <BoardMesh name = "brown-3-4"    rotation = {new Vector3(0,0,0)}     position = {new Vector3(3.5,0,-4.5)}  color = {Color3.FromInts(240,230,140)}/>  
             <BoardMesh name = "brown-3-3"    rotation = {new Vector3(0,0,0)}     position = {new Vector3(4.5,0,-4.5)}  color = {Color3.FromInts(75,54,33)}/>  
             <BoardMesh name = "brown-3-2"    rotation = {new Vector3(0,0,0)}     position = {new Vector3(5.5,0,-4.5)}  color = {Color3.FromInts(240,230,140)}/>  
             <BoardMesh name = "brown-3-1"    rotation = {new Vector3(0,0,0)}     position = {new Vector3(6.5,0,-4.5)}  color = {Color3.FromInts(75,54,33)}/>  

             <BoardMesh name = "brown-2-7"   rotation = {new Vector3(0,0,0)}      position = {new Vector3(0.5,0,-5.5)} color = {Color3.FromInts(240,230,140)} />   
             <BoardMesh name = "brown-2-6"   rotation = {new Vector3(0,0,0)}      position = {new Vector3(1.5,0,-5.5)} color = {Color3.FromInts(75,54,33)} />   
             <BoardMesh name = "brown-2-5"   rotation = {new Vector3(0,0,0)}      position = {new Vector3(2.5,0,-5.5)} color = {Color3.FromInts(240,230,140)} />   
             <BoardMesh name = "brown-2-4"    rotation = {new Vector3(0,0,0)}     position = {new Vector3(3.5,0,-5.5)}  color = {Color3.FromInts(75,54,33)}/>  
             <BoardMesh name = "brown-2-3"    rotation = {new Vector3(0,0,0)}     position = {new Vector3(4.5,0,-5.5)}  color = {Color3.FromInts(240,230,140)}/>  
             <BoardMesh name = "brown-2-2"    rotation = {new Vector3(0,0,0)}     position = {new Vector3(5.5,0,-5.5)}  color = {Color3.FromInts(75,54,33)}/>  
             <BoardMesh name = "brown-2-1"    rotation = {new Vector3(0,0,0)}     position = {new Vector3(6.5,0,-5.5)}  color = {Color3.FromInts(240,230,140)}/> 

             <BoardMesh name = "brown-1-7"   rotation = {new Vector3(0,0,0)}      position = {new Vector3(0.5,0,-6.5)} color = {Color3.FromInts(75,54,33)} />   
             <BoardMesh name = "brown-1-6"   rotation = {new Vector3(0,0,0)}      position = {new Vector3(1.5,0,-6.5)} color = {Color3.FromInts(240,230,140)} />   
             <BoardMesh name = "brown-1-5"   rotation = {new Vector3(0,0,0)}      position = {new Vector3(2.5,0,-6.5)} color = {Color3.FromInts(75,54,33)} />   
             <BoardMesh name = "brown-1-4"    rotation = {new Vector3(0,0,0)}     position = {new Vector3(3.5,0,-6.5)}  color = {Color3.FromInts(240,230,140)}/>  
             <BoardMesh name = "brown-1-3"    rotation = {new Vector3(0,0,0)}     position = {new Vector3(4.5,0,-6.5)}  color = {Color3.FromInts(75,54,33)}/>  
             <BoardMesh name = "brown-1-2"    rotation = {new Vector3(0,0,0)}     position = {new Vector3(5.5,0,-6.5)}  color = {Color3.FromInts(240,230,140)}/>  
             <BoardMesh name = "brown-1-1"    rotation = {new Vector3(0,0,0)}     position = {new Vector3(6.5,0,-6.5)}  color = {Color3.FromInts(75,54,33)}/>     







             <BoardMesh name = "yellow-7-7"   rotation = {new Vector3(-Math.PI/2,0,0)}       position = {new Vector3(0.5,0.5,0)} color = {Color3.FromInts(75,54,33)}  />   
             <BoardMesh name = "yellow-6-7"   rotation = {new Vector3(-Math.PI/2,0,0)}       position = {new Vector3(1.5,0.5,0)} color ={Color3.FromInts(240,230,140)} />   
             <BoardMesh name = "yellow-5-7"   rotation = {new Vector3(-Math.PI/2,0,0)}       position = {new Vector3(2.5,0.5,0)} color = {Color3.FromInts(75,54,33)} /> 
             <BoardMesh name = "yellow-4-7"   rotation = {new Vector3(-Math.PI/2,0,0)}       position = {new Vector3(3.5,0.5,0)} color = {Color3.FromInts(240,230,140)} />    
             <BoardMesh name = "yellow-3-7"   rotation = {new Vector3(-Math.PI/2,0,0)}       position = {new Vector3(4.5,0.5,0)} color = {Color3.FromInts(75,54,33)} /> 
             <BoardMesh name = "yellow-2-7"   rotation = {new Vector3(-Math.PI/2,0,0)}       position = {new Vector3(5.5,0.5,0)} color = {Color3.FromInts(240,230,140)} />  
             <BoardMesh name = "yellow-1-7"   rotation = {new Vector3(-Math.PI/2,0,0)}       position = {new Vector3(6.5,0.5,0)} color = {Color3.FromInts(75,54,33)} /> 

             <BoardMesh name = "yellow-7-6"   rotation = {new Vector3(-Math.PI/2,0,0)}       position = {new Vector3(0.5,1.5,0)} color ={Color3.FromInts(240,230,140)}/>   
             <BoardMesh name = "yellow-6-6"   rotation = {new Vector3(-Math.PI/2,0,0)}       position = {new Vector3(1.5,1.5,0)} color = {Color3.FromInts(75,54,33)}/>   
             <BoardMesh name = "yellow-5-6"   rotation = {new Vector3(-Math.PI/2,0,0)}       position = {new Vector3(2.5,1.5,0)} color ={Color3.FromInts(240,230,140)}/> 
             <BoardMesh name = "yellow-4-6"   rotation = {new Vector3(-Math.PI/2,0,0)}       position = {new Vector3(3.5,1.5,0)} color = {Color3.FromInts(75,54,33)} /> 
             <BoardMesh name = "yellow-3-6"   rotation = {new Vector3(-Math.PI/2,0,0)}       position = {new Vector3(4.5,1.5,0)} color = {Color3.FromInts(240,230,140)} />    
             <BoardMesh name = "yellow-2-6"   rotation = {new Vector3(-Math.PI/2,0,0)}       position = {new Vector3(5.5,1.5,0)} color = {Color3.FromInts(75,54,33)} /> 
             <BoardMesh name = "yellow-1-6"   rotation = {new Vector3(-Math.PI/2,0,0)}       position = {new Vector3(6.5,1.5,0)} color = {Color3.FromInts(240,230,140)} />   

             <BoardMesh name = "yellow-7-5"   rotation = {new Vector3(-Math.PI/2,0,0)}       position = {new Vector3(0.5,2.5,0)}  color = {Color3.FromInts(75,54,33)}/>   
             <BoardMesh name = "yellow-6-5"   rotation = {new Vector3(-Math.PI/2,0,0)}       position = {new Vector3(1.5,2.5,0)}  color ={Color3.FromInts(240,230,140)}/>   
             <BoardMesh name = "yellow-5-5"   rotation = {new Vector3(-Math.PI/2,0,0)}       position = {new Vector3(2.5,2.5,0)}  color = {Color3.FromInts(75,54,33)}/> 
             <BoardMesh name = "yellow-4-5"   rotation = {new Vector3(-Math.PI/2,0,0)}       position = {new Vector3(3.5,2.5,0)} color = {Color3.FromInts(240,230,140)} />    
             <BoardMesh name = "yellow-3-5"   rotation = {new Vector3(-Math.PI/2,0,0)}       position = {new Vector3(4.5,2.5,0)} color = {Color3.FromInts(75,54,33)} /> 
             <BoardMesh name = "yellow-2-5"   rotation = {new Vector3(-Math.PI/2,0,0)}       position = {new Vector3(5.5,2.5,0)} color = {Color3.FromInts(240,230,140)} />  
             <BoardMesh name = "yellow-1-5"   rotation = {new Vector3(-Math.PI/2,0,0)}       position = {new Vector3(6.5,2.5,0)} color = {Color3.FromInts(75,54,33)} /> 

             <BoardMesh name = "yellow-7-4"   rotation = {new Vector3(-Math.PI/2,0,0)}       position = {new Vector3(0.5,3.5,0)} color ={Color3.FromInts(240,230,140)}/>   
             <BoardMesh name = "yellow-6-4"   rotation = {new Vector3(-Math.PI/2,0,0)}       position = {new Vector3(1.5,3.5,0)} color = {Color3.FromInts(75,54,33)}/>   
             <BoardMesh name = "yellow-5-4"   rotation = {new Vector3(-Math.PI/2,0,0)}       position = {new Vector3(2.5,3.5,0)} color ={Color3.FromInts(240,230,140)}/> 
             <BoardMesh name = "yellow-4-4"   rotation = {new Vector3(-Math.PI/2,0,0)}       position = {new Vector3(3.5,3.5,0)} color = {Color3.FromInts(75,54,33)} /> 
             <BoardMesh name = "yellow-3-4"   rotation = {new Vector3(-Math.PI/2,0,0)}       position = {new Vector3(4.5,3.5,0)} color = {Color3.FromInts(240,230,140)} />    
             <BoardMesh name = "yellow-2-4"   rotation = {new Vector3(-Math.PI/2,0,0)}       position = {new Vector3(5.5,3.5,0)} color = {Color3.FromInts(75,54,33)} /> 
             <BoardMesh name = "yellow-1-4"   rotation = {new Vector3(-Math.PI/2,0,0)}       position = {new Vector3(6.5,3.5,0)} color = {Color3.FromInts(240,230,140)} />  

             <BoardMesh name = "yellow-7-3"   rotation = {new Vector3(-Math.PI/2,0,0)}       position = {new Vector3(0.5,4.5,0)}  color = {Color3.FromInts(75,54,33)}/>   
             <BoardMesh name = "yellow-6-3"   rotation = {new Vector3(-Math.PI/2,0,0)}       position = {new Vector3(1.5,4.5,0)}  color ={Color3.FromInts(240,230,140)}/>   
             <BoardMesh name = "yellow-5-3"   rotation = {new Vector3(-Math.PI/2,0,0)}       position = {new Vector3(2.5,4.5,0)}  color = {Color3.FromInts(75,54,33)}/> 
             <BoardMesh name = "yellow-4-3"   rotation = {new Vector3(-Math.PI/2,0,0)}       position = {new Vector3(3.5,4.5,0)}  color = {Color3.FromInts(240,230,140)} />    
             <BoardMesh name = "yellow-3-3"   rotation = {new Vector3(-Math.PI/2,0,0)}       position = {new Vector3(4.5,4.5,0)}  color = {Color3.FromInts(75,54,33)} /> 
             <BoardMesh name = "yellow-2-3"   rotation = {new Vector3(-Math.PI/2,0,0)}       position = {new Vector3(5.5,4.5,0)}  color = {Color3.FromInts(240,230,140)} />  
             <BoardMesh name = "yellow-1-3"   rotation = {new Vector3(-Math.PI/2,0,0)}       position = {new Vector3(6.5,4.5,0)}  color = {Color3.FromInts(75,54,33)} /> 

             <BoardMesh name = "yellow-7-2"   rotation = {new Vector3(-Math.PI/2,0,0)}       position = {new Vector3(0.5,5.5,0)} color ={Color3.FromInts(240,230,140)}/>   
             <BoardMesh name = "yellow-6-2"   rotation = {new Vector3(-Math.PI/2,0,0)}       position = {new Vector3(1.5,5.5,0)} color = {Color3.FromInts(75,54,33)}/>   
             <BoardMesh name = "yellow-5-2"   rotation = {new Vector3(-Math.PI/2,0,0)}       position = {new Vector3(2.5,5.5,0)} color ={Color3.FromInts(240,230,140)}/> 
             <BoardMesh name = "yellow-4-2"   rotation = {new Vector3(-Math.PI/2,0,0)}       position = {new Vector3(3.5,5.5,0)} color = {Color3.FromInts(75,54,33)} /> 
             <BoardMesh name = "yellow-3-2"   rotation = {new Vector3(-Math.PI/2,0,0)}       position = {new Vector3(4.5,5.5,0)} color = {Color3.FromInts(240,230,140)} />    
             <BoardMesh name = "yellow-2-2"   rotation = {new Vector3(-Math.PI/2,0,0)}       position = {new Vector3(5.5,5.5,0)} color = {Color3.FromInts(75,54,33)} /> 
             <BoardMesh name = "yellow-1-2"   rotation = {new Vector3(-Math.PI/2,0,0)}       position = {new Vector3(6.5,5.5,0)} color = {Color3.FromInts(240,230,140)} />  

             <BoardMesh name = "yellow-7-1"   rotation = {new Vector3(-Math.PI/2,0,0)}       position = {new Vector3(0.5,6.5,0)}  color = {Color3.FromInts(255,204,0)}/>   
             <BoardMesh name = "yellow-6-1"   rotation = {new Vector3(-Math.PI/2,0,0)}       position = {new Vector3(1.5,6.5,0)}  color ={Color3.FromInts(240,230,140)}/>   
             <BoardMesh name = "yellow-5-1"   rotation = {new Vector3(-Math.PI/2,0,0)}       position = {new Vector3(2.5,6.5,0)}  color = {Color3.FromInts(75,54,33)}/> 
             <BoardMesh name = "yellow-4-1"   rotation = {new Vector3(-Math.PI/2,0,0)}       position = {new Vector3(3.5,6.5,0)}  color = {Color3.FromInts(240,230,140)} />    
             <BoardMesh name = "yellow-3-1"   rotation = {new Vector3(-Math.PI/2,0,0)}       position = {new Vector3(4.5,6.5,0)}  color = {Color3.FromInts(75,54,33)} /> 
             <BoardMesh name = "yellow-2-1"   rotation = {new Vector3(-Math.PI/2,0,0)}       position = {new Vector3(5.5,6.5,0)}  color = {Color3.FromInts(240,230,140)} />  
             <BoardMesh name = "yellow-1-1"   rotation = {new Vector3(-Math.PI/2,0,0)}       position = {new Vector3(6.5,6.5,0)}  color = {Color3.FromInts(75,54,33)} /> 




             <BoardMesh name = "green-7-7"   rotation = {new Vector3(0,0,-Math.PI/2)}           position = {new Vector3(0,0.5,-0.5)}  color = {Color3.FromInts(75,54,33)}/>  
             <BoardMesh name = "green-7-6"   rotation = {new Vector3(0,0,-Math.PI/2)}           position = {new Vector3(0,0.5,-1.5)}  color ={Color3.FromInts(240,230,140)} />  
             <BoardMesh name = "green-7-5"   rotation = {new Vector3(0,0,-Math.PI/2)}           position = {new Vector3(0,0.5,-2.5)}  color = {Color3.FromInts(75,54,33)}/>   
             <BoardMesh name = "green-7-4"   rotation = {new Vector3(0,0,-Math.PI/2)}           position = {new Vector3(0,0.5,-3.5)}  color ={Color3.FromInts(240,230,140)} />  
             <BoardMesh name = "green-7-3"   rotation = {new Vector3(0,0,-Math.PI/2)}           position = {new Vector3(0,0.5,-4.5)}  color = {Color3.FromInts(75,54,33)}/> 
             <BoardMesh name = "green-7-2"   rotation = {new Vector3(0,0,-Math.PI/2)}           position = {new Vector3(0,0.5,-5.5)}  color ={Color3.FromInts(240,230,140)} />  
             <BoardMesh name = "green-7-1"   rotation = {new Vector3(0,0,-Math.PI/2)}           position = {new Vector3(0,0.5,-6.5)}  color = {Color3.FromInts(8,64,0)}/> 

            <BoardMesh name = "green-6-7"   rotation = {new Vector3(0,0,-Math.PI/2)}           position = {new Vector3(0,1.5,-0.5)}  color ={Color3.FromInts(240,230,140)} />   
            <BoardMesh name = "green-6-6"   rotation = {new Vector3(0,0,-Math.PI/2)}           position = {new Vector3(0,1.5,-1.5)}   color = {Color3.FromInts(75,54,33)}/>   
            <BoardMesh name = "green-6-5"   rotation = {new Vector3(0,0,-Math.PI/2)}           position = {new Vector3(0,1.5,-2.5)}   color ={Color3.FromInts(240,230,140)}/>   
            <BoardMesh name = "green-6-4"   rotation = {new Vector3(0,0,-Math.PI/2)}           position = {new Vector3(0,1.5,-3.5)}   color = {Color3.FromInts(75,54,33)}/>   
            <BoardMesh name = "green-6-3"   rotation = {new Vector3(0,0,-Math.PI/2)}           position = {new Vector3(0,1.5,-4.5)}   color ={Color3.FromInts(240,230,140)}/>  
            <BoardMesh name = "green-6-2"   rotation = {new Vector3(0,0,-Math.PI/2)}           position = {new Vector3(0,1.5,-5.5)}   color ={Color3.FromInts(75,54,33)}/>   
            <BoardMesh name = "green-6-1"   rotation = {new Vector3(0,0,-Math.PI/2)}           position = {new Vector3(0,1.5,-6.5)}   color = {Color3.FromInts(240,230,140)}/>   
           
            <BoardMesh name = "green-5-7"   rotation = {new Vector3(0,0,-Math.PI/2)}          position = {new Vector3(0,2.5,-0.5)}   color = {Color3.FromInts(75,54,33)}/>   
            <BoardMesh name = "green-5-6"   rotation = {new Vector3(0,0,-Math.PI/2)}          position = {new Vector3(0,2.5,-1.5)}   color ={Color3.FromInts(240,230,140)}/>   
            <BoardMesh name = "green-5-5"   rotation = {new Vector3(0,0,-Math.PI/2)}          position = {new Vector3(0,2.5,-2.5)}   color ={Color3.FromInts(75,54,33)}/>  
            <BoardMesh name = "green-5-4"   rotation = {new Vector3(0,0,-Math.PI/2)}          position = {new Vector3(0,2.5,-3.5)}   color ={Color3.FromInts(240,230,140)}/>   
            <BoardMesh name = "green-5-3"   rotation = {new Vector3(0,0,-Math.PI/2)}          position = {new Vector3(0,2.5,-4.5)}   color = {Color3.FromInts(75,54,33)}/>   
            <BoardMesh name = "green-5-2"   rotation = {new Vector3(0,0,-Math.PI/2)}          position = {new Vector3(0,2.5,-5.5)}   color ={Color3.FromInts(240,230,140)}/>  
            <BoardMesh name = "green-5-1"   rotation = {new Vector3(0,0,-Math.PI/2)}          position = {new Vector3(0,2.5,-6.5)}   color ={Color3.FromInts(75,54,33)}/>  

            <BoardMesh name = "green-4-7"   rotation = {new Vector3(0,0,-Math.PI/2)}           position = {new Vector3(0,3.5,-0.5)}  color ={Color3.FromInts(240,230,140)} />   
            <BoardMesh name = "green-4-6"   rotation = {new Vector3(0,0,-Math.PI/2)}           position = {new Vector3(0,3.5,-1.5)}   color = {Color3.FromInts(75,54,33)}/>   
            <BoardMesh name = "green-4-5"   rotation = {new Vector3(0,0,-Math.PI/2)}           position = {new Vector3(0,3.5,-2.5)}   color ={Color3.FromInts(240,230,140)}/>   
            <BoardMesh name = "green-4-4"   rotation = {new Vector3(0,0,-Math.PI/2)}           position = {new Vector3(0,3.5,-3.5)}   color = {Color3.FromInts(75,54,33)}/>   
            <BoardMesh name = "green-4-3"   rotation = {new Vector3(0,0,-Math.PI/2)}           position = {new Vector3(0,3.5,-4.5)}   color ={Color3.FromInts(240,230,140)}/>  
            <BoardMesh name = "green-4-2"   rotation = {new Vector3(0,0,-Math.PI/2)}           position = {new Vector3(0,3.5,-5.5)}   color ={Color3.FromInts(75,54,33)}/>   
            <BoardMesh name = "green-4-1"   rotation = {new Vector3(0,0,-Math.PI/2)}           position = {new Vector3(0,3.5,-6.5)}   color = {Color3.FromInts(240,230,140)}/>   

            <BoardMesh name = "green-3-7"   rotation = {new Vector3(0,0,-Math.PI/2)}          position = {new Vector3(0,4.5,-0.5)}   color = {Color3.FromInts(75,54,33)}/>   
            <BoardMesh name = "green-3-6"   rotation = {new Vector3(0,0,-Math.PI/2)}          position = {new Vector3(0,4.5,-1.5)}   color ={Color3.FromInts(240,230,140)}/>   
            <BoardMesh name = "green-3-5"   rotation = {new Vector3(0,0,-Math.PI/2)}          position = {new Vector3(0,4.5,-2.5)}   color ={Color3.FromInts(75,54,33)}/>  
            <BoardMesh name = "green-3-4"   rotation = {new Vector3(0,0,-Math.PI/2)}          position = {new Vector3(0,4.5,-3.5)}   color ={Color3.FromInts(240,230,140)}/>   
            <BoardMesh name = "green-3-3"   rotation = {new Vector3(0,0,-Math.PI/2)}          position = {new Vector3(0,4.5,-4.5)}   color = {Color3.FromInts(75,54,33)}/>   
            <BoardMesh name = "green-3-2"   rotation = {new Vector3(0,0,-Math.PI/2)}          position = {new Vector3(0,4.5,-5.5)}   color ={Color3.FromInts(240,230,140)}/>  
            <BoardMesh name = "green-3-1"   rotation = {new Vector3(0,0,-Math.PI/2)}          position = {new Vector3(0,4.5,-6.5)}   color ={Color3.FromInts(75,54,33)}/>  

            <BoardMesh name = "green-2-7"   rotation = {new Vector3(0,0,-Math.PI/2)}           position = {new Vector3(0,5.5,-0.5)}  color ={Color3.FromInts(240,230,140)} />   
            <BoardMesh name = "green-2-6"   rotation = {new Vector3(0,0,-Math.PI/2)}           position = {new Vector3(0,5.5,-1.5)}   color = {Color3.FromInts(75,54,33)}/>   
            <BoardMesh name = "green-2-5"   rotation = {new Vector3(0,0,-Math.PI/2)}           position = {new Vector3(0,5.5,-2.5)}   color ={Color3.FromInts(240,230,140)}/>   
            <BoardMesh name = "green-2-4"   rotation = {new Vector3(0,0,-Math.PI/2)}           position = {new Vector3(0,5.5,-3.5)}   color = {Color3.FromInts(75,54,33)}/>   
            <BoardMesh name = "green-2-3"   rotation = {new Vector3(0,0,-Math.PI/2)}           position = {new Vector3(0,5.5,-4.5)}   color ={Color3.FromInts(240,230,140)}/>  
            <BoardMesh name = "green-2-2"   rotation = {new Vector3(0,0,-Math.PI/2)}           position = {new Vector3(0,5.5,-5.5)}   color ={Color3.FromInts(75,54,33)}/>   
            <BoardMesh name = "green-2-1"   rotation = {new Vector3(0,0,-Math.PI/2)}           position = {new Vector3(0,5.5,-6.5)}   color = {Color3.FromInts(240,230,140)}/>  

            <BoardMesh name = "green-1-7"   rotation = {new Vector3(0,0,-Math.PI/2)}          position = {new Vector3(0,6.5,-0.5)}   color = {Color3.FromInts(75,54,33)}/>   
            <BoardMesh name = "green-1-6"   rotation = {new Vector3(0,0,-Math.PI/2)}          position = {new Vector3(0,6.5,-1.5)}   color ={Color3.FromInts(240,230,140)}/>   
            <BoardMesh name = "green-1-5"   rotation = {new Vector3(0,0,-Math.PI/2)}          position = {new Vector3(0,6.5,-2.5)}   color ={Color3.FromInts(75,54,33)}/>  
            <BoardMesh name = "green-1-4"   rotation = {new Vector3(0,0,-Math.PI/2)}          position = {new Vector3(0,6.5,-3.5)}   color ={Color3.FromInts(240,230,140)}/>   
            <BoardMesh name = "green-1-3"   rotation = {new Vector3(0,0,-Math.PI/2)}          position = {new Vector3(0,6.5,-4.5)}   color = {Color3.FromInts(75,54,33)}/>   
            <BoardMesh name = "green-1-2"   rotation = {new Vector3(0,0,-Math.PI/2)}          position = {new Vector3(0,6.5,-5.5)}   color ={Color3.FromInts(240,230,140)}/>  
            <BoardMesh name = "green-1-1"   rotation = {new Vector3(0,0,-Math.PI/2)}          position = {new Vector3(0,6.5,-6.5)}   color ={Color3.FromInts(75,54,33)}/>  

 
             </transformNode>     
            
            
              <WithUseClickWholeBoard/>

              
                        
             

            

              <sphere  name = "origin"  diameter = {0.1} position={new Vector3(0,0,0)}/>
                             
            </Scene>
        </Engine>
      </div>
   
  ) 
}

  
