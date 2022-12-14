import React, { useState } from 'react'
import { Vector3, Mesh, VertexData} from '@babylonjs/core';
import { Engine, Scene, useScene, useClick   } from 'react-babylonjs'
import {Color3} from '@babylonjs/core/Maths/math.color';



const BoardMesh = (props) => {
    const scene = useScene(); 
    const [customMesh] = useState(()=>{
    const meshInstance = new Mesh(props.name, scene);
    var positions = [1,0,0,    1,0.5,0,  0,0,0, 
                    0,0,0,    1,0.5,0,  0,0.5,0,    
                    1,0,0,    1,0.5,1,  1,0.5,0,  
                    1,0,0,    1,0,1,    1,0.5,1,  
                    1,0.5,0,  0,0.5,1,  0,0.5,0, 
                    1,0.5,0,  1,0.5,1,  0,0.5,1, 
                    0,0.5,0,  0,0,1,    0,0,0, 
                    0,0.5,0,  0,0.5,1,  0,0,1,
                    0,0,0,    1,0,1,    1,0,0, 
                    0,0,0,    0,0,1,    1,0,1, 
                    0,0,1,    1,0.5,1,  1,0,1, 
                     0,0,1,    0,0.5,1,  1,0.5,1, ]
     var indices = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36];
     var colors =  [1,0,0,1,  1,0,0,1, 1,0,0,1,
                    1,0,0,1,  1,0,0,1, 1,0,0,1, 
                    0,0,1,1,  0,0,1,1, 0,0,1,1,
                    0,0,1,1,  0,0,1,1, 0,0,1,1,
                    0,1,0,1,  0,1,0,1, 0,1,0,1,
                    0,1,0,1,  0,1,0,1, 0,1,0,1,
                    0,1,1,1,  0,1,1,1, 0,1,1,1,
                    0,1,1,1,  0,1,1,1, 0,1,1,1,
                    1,1,0,1,  1,1,0,1, 1,1,0,1,
                    1,1,0,1,  1,1,0,1, 1,1,0,1,
                    1,0,1,1,  1,0,1,1, 1,0,1,1,
                    1,0,1,1,  1,0,1,1, 1,0,1,1,]
      var normals = [];
      var vertexData = new VertexData();
      VertexData.ComputeNormals(positions, indices, normals,);
      vertexData.positions = positions;    
      vertexData.indices = indices;
      vertexData.normals = normals;
      //vertexData.colors = colors;
      vertexData.applyToMesh(meshInstance);
       
      return meshInstance;
     })
    return (
        <mesh fromInstance={customMesh} name = "meshName1" rotation={props.rotation}  scaling = {props.scaling} position={props.position} >
           <standardMaterial  name = "singleCube"  diffuseColor= {props.color} height = {props.height} />
        </mesh>
    )
  }

function squarePositionNew(){
   return(
     new Vector3.FromArray(positionOfSquare)
    )
}

function squarePositionRotationNew(){
    if(positionOfSquare[0] === -0.5)
    return(
        new Vector3(0,0,-Math.PI/2)
    )
    else if (positionOfSquare[1]=== -0.5)
    return(
        new Vector3(0,0,0)  
    ) 
    else if (positionOfSquare[2] === 0.5)
    return(
        new Vector3(-Math.PI/2, 0,0)
    )
    
}

function headColor1() {
    return(
    Color3.FromInts(0,0,255)
      )
    }
function headColor2() {
    return(
        Color3.FromInts(0,255,0)   
    )
}    
function bodyColor1() {
    return(
    Color3.FromInts(255,0,0)
      )
    }
function bodyColor2() {
    return(
    Color3.FromInts(0,0,255)
     )
    }



const  WithUseClick1 = () =>{
const [meshPosition, setPiecePosition] = useState(new Vector3(1,0,0));
const [meshRotation, setPieceRotation] = useState(Vector3.Zero)
const [ref]= useClick(_=> {
const meshPosition = squarePositionNew();
const meshRotation = squarePositionRotationNew();
      setPiecePosition(meshPosition)  
      setPieceRotation(meshRotation)
      });
    return(
    <cylinder ref ={ref}  height={6} diameter = {0.5}  rotation = {meshRotation} position = {meshPosition}>
    <cylinder height = {1} diameter = {0.5} position = {new Vector3(0,3.5,0)} >
    <standardMaterial name = "first-mat" diffuseColor = {headColor1()}/>
    </cylinder>
    <standardMaterial name = "second-mat" diffuseColor = {bodyColor1()}/>  
    </cylinder>
     )
    }  
const  WithUseClick2 = () =>{
const [meshPosition, setPiecePosition] = useState(new Vector3(2,0,0));
const [meshRotation, setPieceRotation] = useState(Vector3.Zero)
const [ref]= useClick(_=> {
const meshPosition = squarePositionNew();
const meshRotation = squarePositionRotationNew();
      setPiecePosition(meshPosition)  
      setPieceRotation(meshRotation)
      });
      return(
      <cylinder ref ={ref}  height={6} diameter = {0.5}  rotation = {meshRotation} position = {meshPosition}>
      <cylinder height = {1} diameter = {0.5} position = {new Vector3(0,3.5,0)} >
      <standardMaterial name = "first-mat" diffuseColor = {headColor2()}/>
      </cylinder>
      <standardMaterial name = "second-mat" diffuseColor = {bodyColor2()}/>  
      </cylinder>
      )
    }  

var positionOfSquare=[0,0,0]
const onMeshPicked = (pickedMesh) => {
if (pickedMesh.name === "meshName1") {
const xValue = pickedMesh.position.x ;
const yValue = pickedMesh.position.y ;
const zValue = pickedMesh.position.z ;
     positionOfSquare = [xValue,yValue,zValue]  
      console.log(positionOfSquare)
      }
     }


export const NewCBoard7= () => {
    return(
        <div className="App">
           <Engine antialias adaptToDeviceRatio canvasId='babylonJS'>
            <Scene onMeshPicked= {onMeshPicked}>
             <arcRotateCamera  name="camera1"  target={new Vector3(0.5,-0.5,0)} alpha={-Math.PI/4 } beta={Math.PI / 3} radius={30} />
             <hemisphericLight name='light1' intensity={0.7} direction={Vector3.Up()} />
             <hemisphericLight name='light1' intensity={0.7} direction={Vector3.Down()} />

             <transformNode  name = "transformNode1"  >      
            
             <BoardMesh name = "brown-7-7"   rotation = {new Vector3(0,0,0)}          position = {new Vector3(0,-0.5,-1)}  color =  {Color3.FromInts(75,54,33)}/>   
             <BoardMesh name = "brown-7-6"   rotation = {new Vector3(0,0,0)}          position = {new Vector3(1,-0.5,-1)}  color =  {Color3.FromInts(240,230,140)}/>   
             <BoardMesh name = "brown-7-5"   rotation = {new Vector3(0,0,0)}          position = {new Vector3(2,-0.5,-1)}  color = {Color3.FromInts(75,54,33)}/>  

             <BoardMesh name = "brown-6-7"   rotation = {new Vector3(0,0,0)}          position = {new Vector3(0,-0.5,-2)} color = {Color3.FromInts(240,230,140)}  />   
             <BoardMesh name = "brown-6-6"   rotation = {new Vector3(0,0,0)}          position = {new Vector3(1,-0.5,-2)} color = {Color3.FromInts(75,54,33)} />   
             <BoardMesh name = "brown-6-5"   rotation = {new Vector3(0,0,0)}          position = {new Vector3(2,-0.5,-2 )} color = {Color3.FromInts(240,230,140)}/>   

             <BoardMesh name = "brown-5-7"   rotation = {new Vector3(0,0,0)}          position = {new Vector3(0,-0.5,-3)} color = {Color3.FromInts(75,54,33)} />   
             <BoardMesh name = "brown-5-6"   rotation = {new Vector3(0,0,0)}          position = {new Vector3(1,-0.5,-3)} color = {Color3.FromInts(240,230,140)} />   
             <BoardMesh name = "brown-5-5"   rotation = {new Vector3(0,0,0)}          position = {new Vector3(2,-0.5,-3)} color = {Color3.FromInts(75,54,33)} />   

  


              <BoardMesh name = "yellow-7-7"   rotation = {new Vector3(-Math.PI/2,0,0)}          position = {new Vector3(0,0,0.5)} color = {Color3.FromInts(75,54,33)}  />   
              <BoardMesh name = "yellow-7-6"   rotation = {new Vector3(-Math.PI/2,0,0)}          position = {new Vector3(1,0,0.5)} color ={Color3.FromInts(240,230,140)} />   
              <BoardMesh name = "yellow-7-5"   rotation = {new Vector3(-Math.PI/2,0,0)}          position = {new Vector3(2,0,0.5)} color = {Color3.FromInts(75,54,33)} /> 

              <BoardMesh name = "yellow-6-7"   rotation = {new Vector3(-Math.PI/2, 0,0)}          position = {new Vector3(0,1,0.5)} color ={Color3.FromInts(240,230,140)}/>   
              <BoardMesh name = "yellow-6-6"   rotation = {new Vector3(-Math.PI/2, 0,0)}          position = {new Vector3(1,1,0.5)} color = {Color3.FromInts(75,54,33)}/>   
              <BoardMesh name = "yellow-6-5"   rotation = {new Vector3(-Math.PI/2, 0,0)}          position = {new Vector3(2,1,0.5)} color ={Color3.FromInts(240,230,140)}/>  

              <BoardMesh name = "yellow-5-7"   rotation = {new Vector3(-Math.PI/2, 0,0)}          position = {new Vector3(0,2,0.5)}  color = {Color3.FromInts(75,54,33)}/>   
              <BoardMesh name = "yellow-5-6"   rotation = {new Vector3(-Math.PI/2, 0,0)}          position = {new Vector3(1,2,0.5)}  color ={Color3.FromInts(240,230,140)}/>   
              <BoardMesh name = "yellow-5-5"   rotation = {new Vector3(-Math.PI/2, 0,0)}          position = {new Vector3(2,2,0.5)}  color = {Color3.FromInts(75,54,33)}/> 



              <BoardMesh name = "green-7-7"   rotation = {new Vector3(0,0,-Math.PI/2)}           position = {new Vector3(-0.5,1,-1)}  color = {Color3.FromInts(75,54,33)}/>  
              <BoardMesh name = "green-7-6"   rotation = {new Vector3(0,0,-Math.PI/2)}           position = {new Vector3(-0.5,1,-2)}  color ={Color3.FromInts(240,230,140)} />  
              <BoardMesh name = "green-7-5"   rotation = {new Vector3(0,0,-Math.PI/2)}           position = {new Vector3(-0.5,1,-3)}  color = {Color3.FromInts(75,54,33)}/>   

              <BoardMesh name = "green-6-7"   rotation = {new Vector3(0,0,-Math.PI/2)}           position = {new Vector3(-0.5,2,-1)}  color ={Color3.FromInts(240,230,140)} />   
              <BoardMesh name = "green-6-6"   rotation = {new Vector3(0,0,-Math.PI/2)}           position = {new Vector3(-0.5,2,-2)}   color = {Color3.FromInts(75,54,33)}/>   
               <BoardMesh name = "green-6-5"   rotation = {new Vector3(0,0,-Math.PI/2)}          position = {new Vector3(-0.5,2,-3)}   color ={Color3.FromInts(240,230,140)}/> 

               <BoardMesh name = "green-5-7"   rotation = {new Vector3(0,0,-Math.PI/2)}          position = {new Vector3(-0.5,3,-1)}   color = {Color3.FromInts(75,54,33)}/>   
               <BoardMesh name = "green-5-6"   rotation = {new Vector3(0,0,-Math.PI/2)}          position = {new Vector3(-0.5,3,-2)}  color ={Color3.FromInts(240,230,140)}/>   
               <BoardMesh name = "green-5-5"   rotation = {new Vector3(0,0,-Math.PI/2)}          position = {new Vector3(-0.5,3,-3)}  color ={Color3.FromInts(75,54,33)}/>    

             </transformNode>     
             <WithUseClick1/>
             <WithUseClick2/>

             <sphere    diameter = {0.1} position={new Vector3(0,0,0)}/>
             

            
            
                
            </Scene>
        </Engine>
      </div>
   
  ) 
}

/*







 





 









 
            
*/           
