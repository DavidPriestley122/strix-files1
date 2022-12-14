import React, {useRef, useState, useEffect} from 'react'
import {Engine, Scene, useClick, useScene } from 'react-babylonjs'
import { Vector3, Mesh, VertexData, MeshBuilder} from '@babylonjs/core';
import {StandardMaterial} from '@babylonjs/core/Materials/standardMaterial';
import {Color3} from "@babylonjs/core/Maths/math.color";
import { ActionManager } from '@babylonjs/core/Actions/actionManager';
import { ExecuteCodeAction } from '@babylonjs/core/Actions/directActions';



const CubeMaker = (props) => {
    const scene = useScene();
    const [customMesh] = useState(() => {
    const cube = new Mesh(props.name, scene);
    var positions = [ 1,0,0,    1,0.5,0,  0,0,0, 
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
     /*var colors =  [1,0,0,1,  1,0,0,1, 1,0,0,1,
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
                    */
      var normals = [];
      var vertexData = new VertexData();
      VertexData.ComputeNormals(positions, indices, normals,);
      vertexData.positions = positions;    
      vertexData.indices = indices;
      vertexData.normals = normals;
     // vertexData.colors = colors;
      vertexData.applyToMesh(cube);

      return cube

    })
      
    return (
        <mesh name = "singleCube" fromInstance={customMesh}  index = {props.index} disposeInstanceOnUnmount rotation={props.rotation}  scaling = {props.scaling} position={props.position} >
           <standardMaterial  name = "singleCubeMat"  diffuseColor= {props.color} height = {props.height} wireframe={props.useWireframe}  />
        </mesh>
    )
  } 


  const onMeshPicked = (pickedMesh) => {
     
    if (pickedMesh.name === "singleCube") {
     const xValue = pickedMesh?.position.x;
     const yValue = pickedMesh?.position.y;
     const zValue = pickedMesh?.position.z;
     const positionOfSquare = [xValue,yValue,zValue]
     console.log(positionOfSquare)
         }
       }


   const getCoords = (function () {
   const Positions = [[5,10,6]]
    let i = 0;
    return () => { 
      i++;
   return Positions[0]
   }
   })(); 


const startingPositionOfPiece = new Vector3(4,5,6);
   
function WithUseClick1() {
const [meshPosition, setMeshPosition] = useState(startingPositionOfPiece);
const [clicker] = useClick(_=> {
const meshPosition =  getCoords();
      setMeshPosition(new Vector3.FromArray(meshPosition.map(x=>x-=8)))         
      console.log(clicker.current.name)
});

 return  <cylinder  name="brownOwl" ref = {clicker} height = {3} diameter = {0.5} position = {meshPosition}  > 
<standardMaterial  name = "owlMat" diffuseColor= {new Color3.Red()}  />
</cylinder>
}   



const startingPosition2 = new Vector3(3,4,5);  
  
function WithUseClick2() {
const [meshPosition2, setMeshPosition2] = useState(startingPosition2);
const [ref] = useClick(_=> {
const meshPosition2= getCoords();
      setMeshPosition2(new Vector3.FromArray(meshPosition2.map(x=>x-=5)))
      console.log("clicked")
});
    

  return  <cylinder  name="blackRaven" ref = {ref} height = {5} diameter = {0.5} position = {meshPosition2}  > 
  <standardMaterial  name = "ravenMat" diffuseColor= {new Color3.Blue()}  />
  </cylinder>
            
  }

      


 function WithUseClickForSquare() {
  const [clacker] = useClick(_=> {
    clacker.current.position.x +=1; 
    console.log(clacker.current.name)
    console.log(clacker.current.position.y)
    console.log(clacker.current.position.z)
  });
  return  <cylinder  name="brownOwl1" ref = {clacker} height = {3} diameter = {0.5} position={new Vector3(6,7,8)} > 
<standardMaterial  name = "owlMat1" diffuseColor= {new Color3.Yellow()}  />
</cylinder>
}
    




  

  export const Chequerboard12 = () => (

    <div style={{flex: 1, display: 'flex'}}>
      <Engine antialias adaptToDeviceRatio canvasId='babylonJS'>
        <Scene onMeshPicked={onMeshPicked} > 
       

           <arcRotateCamera  name="camera1"  target={new Vector3(0.5,-0.5,0)} alpha={-Math.PI/4 } beta={Math.PI / 3} radius={30} />
            <hemisphericLight name='light1' intensity={0.7} direction={Vector3.Up()} />
            <hemisphericLight name='light1' intensity={0.7} direction={Vector3.Down()} />

                
            <CubeMaker index = {1}  name = "brown-7-7" position = {new Vector3(0.5,-0.5,0)} color = {Color3.FromInts(75,54,33)}  />   
            <CubeMaker index = {2} name = "brown-7-6" position = {new Vector3(1.5,-0.5,0)} color = {Color3.FromInts(240,230,140)} />   
            <CubeMaker name = "brown-7-5"    position = {new Vector3(2.5,-0.5,0)} color = {Color3.FromInts(75,54,33)}/>

            <CubeMaker name = "brown-6-7"    position = {new Vector3(0.5,-0.5,-1)} color = {Color3.FromInts(240,230,140)}  />   
            <CubeMaker name = "brown-6-6"    position = {new Vector3(1.5,-0.5,-1)} color = {Color3.FromInts(75,54,33)} />   
            <CubeMaker name = "brown-6-5"    position = {new Vector3(2.5,-0.5,-1)} color = {Color3.FromInts(240,230,140)}/>   

            <CubeMaker name = "brown-5-7"    position = {new Vector3(0.5,-0.5,-2)} color = {Color3.FromInts(75,54,33)} />   
            <CubeMaker name = "brown-5-6"    position = {new Vector3(1.5,-0.5,-2)} color = {Color3.FromInts(240,230,140)} />   
            <CubeMaker name = "brown-5-5"    position = {new Vector3(2.5,-0.5,-2)} color = {Color3.FromInts(75,54,33)} />   
            


            <CubeMaker name = "yellow-7-7"   rotation = {new Vector3(-Math.PI/2, 0,0)} position = {new Vector3(0.5,0,1.5)} color = {Color3.FromInts(75,54,33)}  />   
            <CubeMaker name = "yellow-7-6"   rotation = {new Vector3(-Math.PI/2, 0,0)} position = {new Vector3(0.5,1,1.5)} color ={Color3.FromInts(240,230,140)} />   
            <CubeMaker name = "yellow-7-5"   rotation = {new Vector3(-Math.PI/2, 0,0)} position = {new Vector3(0.5,2,1.5)} color = {Color3.FromInts(75,54,33)} />  

            <CubeMaker name = "yellow-6-7"   rotation = {new Vector3(-Math.PI/2, 0,0)} position = {new Vector3(1.5, 0, 1.5)} color ={Color3.FromInts(240,230,140)}/>   
            <CubeMaker name = "yellow-6-6"   rotation = {new Vector3(-Math.PI/2, 0,0)} position = {new Vector3(1.5, 1, 1.5)} color = {Color3.FromInts(75,54,33)}/>   
            <CubeMaker name = "yellow-6-5"   rotation = {new Vector3(-Math.PI/2, 0,0)} position = {new Vector3(1.5, 2, 1.5)} color ={Color3.FromInts(240,230,140)}/>  

            <CubeMaker name = "yellow-5-7"   rotation = {new Vector3(-Math.PI/2, 0,0)} position = {new Vector3(2.5, 0, 1.5)}  color = {Color3.FromInts(75,54,33)}/>   
            <CubeMaker name = "yellow-5-6"   rotation = {new Vector3(-Math.PI/2, 0,0)} position = {new Vector3(2.5, 1, 1.5)}  color ={Color3.FromInts(240,230,140)}/>   
            <CubeMaker name = "yellow-5-5"   rotation = {new Vector3(-Math.PI/2, 0,0)} position = {new Vector3(2.5, 2, 1.5)}  color = {Color3.FromInts(75,54,33)}/>  


           
            <CubeMaker name = "green-7-7"   rotation = {new Vector3(Math.PI,Math.PI,Math.PI/2)} position = {new Vector3(0,1,0)}  color = {Color3.FromInts(75,54,33)}/>   
            <CubeMaker name = "green-7-6"   rotation = {new Vector3(Math.PI,Math.PI,Math.PI/2)} position = {new Vector3(0,1,-1)} color ={Color3.FromInts(240,230,140)} />   
            <CubeMaker name = "green-7-5"   rotation = {new Vector3(Math.PI,Math.PI,Math.PI/2)} position = {new Vector3(0,1,-2)} color = {Color3.FromInts(75,54,33)}/>  

            <CubeMaker name = "green-6-7"   rotation = {new Vector3(Math.PI,Math.PI,Math.PI/2)} position = {new Vector3(0,2,0)}  color ={Color3.FromInts(240,230,140)} />   
            <CubeMaker name = "green-6-6"   rotation = {new Vector3(Math.PI,Math.PI,Math.PI/2)} position = {new Vector3(0,2,-1)} color = {Color3.FromInts(75,54,33)}/>   
            <CubeMaker name = "green-6-5"   rotation = {new Vector3(Math.PI,Math.PI,Math.PI/2)} position = {new Vector3(0,2,-2)} color ={Color3.FromInts(240,230,140)}/> 

            <CubeMaker name = "green-5-7"   rotation = {new Vector3(Math.PI,Math.PI,Math.PI/2)} position = {new Vector3(0,3,0)}   color = {Color3.FromInts(75,54,33)}/>   
            <CubeMaker name = "green-5-6"   rotation = {new Vector3(Math.PI,Math.PI,Math.PI/2)} position = {new Vector3(0,3,-1)}  color ={Color3.FromInts(240,230,140)}/>   
            <CubeMaker name = "green-5-5"   rotation = {new Vector3(Math.PI,Math.PI,Math.PI/2)} position = {new Vector3(0,3,-2)}  color ={Color3.FromInts(75,54,33)}/>   
                  
           <WithUseClick1 />
           <WithUseClick2 />

           <WithUseClickForSquare />
          
           
           </Scene>
    </Engine>
 </div>
  )