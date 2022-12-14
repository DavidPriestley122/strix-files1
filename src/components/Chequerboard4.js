import React, { useState, useEffect, useRef } from 'react'
import { Vector3, Mesh, Texture, VertexData} from '@babylonjs/core';
import { Engine, Scene, useScene, useClick } from 'react-babylonjs'
import {Color3} from '@babylonjs/core/Maths/math.color';


const BoardMesh = (props) => {
    const scene = useScene();
    const [customMesh] = useState(()=>{
    const meshInstance = new Mesh(props.name, scene);
    var positions = [1,0,0,  1,1,0,  0,0,0, 
                      0,0,0,  1,1,0,  0,1,0,    
                      1,0,0,  1,1,1,  1,1,0,  
                      1,0,0,  1,0,1,  1,1,1,  
                      1,1,0,  0,1,1,  0,1,0, 
                      1,1,0,  1,1,1,  0,1,1, 
                      0,1,0,  0,0,1,  0,0,0, 
                      0,1,0,  0,1,1,  0,0,1,
                      0,0,0,  1,0,1,  1,0,0, 
                      0,0,0,  0,0,1,  1,0,1, 
                      0,0,1,  1,1,1,  1,0,1, 
                      0,0,1,  0,1,1,  1,1,1 ]
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
        <mesh fromInstance={customMesh}  disposeInstanceOnUnmount rotation={props.rotation}  scaling = {props.scaling} position={props.position} >
           <standardMaterial    diffuseColor= {props.color} height = {props.height} wireframe={props.useWireframe} />
        </mesh>
    )
  }

   
  
  



const  ThreeBoard =()=> {
  const results = [];
  const count = 7;

  
  let k=1;
 
 for (let i = 1  ; i <= count ; i++) {
         for (let j = 1 ; j <= count; j++) {
      const key = `brown cube${i}${j}${k}`;
      if(j%2 ===0 && i%2 ===0)
      results.push(
        <BoardMesh  name={key} key={key} color = {Color3.FromInts(75,54,33)} scaling={new Vector3(1, 1, 0.5)} position={new Vector3(i,j,(k-0.5))} >
        </BoardMesh>
      )
      else 
      results.push( 
        <BoardMesh name={key} key={key} color = {Color3.FromInts(240,230,140)} scaling={new Vector3(1, 1, 0.5)} position={new Vector3(i,j,(k-0.5))} >
        </BoardMesh>
      )
       if (j%2!==0 && i%2!==0)
        results.push( 
        <BoardMesh  name={key} key={key} color = {Color3.FromInts(75,54,33)} scaling={new Vector3(1, 1, 0.5)} position={new Vector3(i,j,(k-0.5))} >
        </BoardMesh>
      )
        results.push(
        <BoardMesh  name={key} key={key} color = {Color3.FromInts(111, 78, 55)} scaling={new Vector3(1, 1, 0.5)} position={new Vector3(7,1,1)} >
        </BoardMesh>
      )
    }
  } 

  let j=1;
    for (let k=1; k <= count ; k++) {
    for (let i=1 ; i <= count; i++) {
      const key = `yellow cube${i}${j}${k}`;
      if(i%2 ===0 && k%2 ===0)
      results.push(
        <BoardMesh  name={key} key={key} color = {Color3.FromInts(75,54,33)} scaling={new Vector3(1,0.5,1)} position={new Vector3(i, (j-0.5), k)} >
        </BoardMesh>
      )
      else 
      results.push( 
        <BoardMesh  name={key} key={key} color = {Color3.FromInts(240,230,140)} scaling={new Vector3(1,0.5,1)} position={new Vector3(i, (j-0.5), k)} >
        </BoardMesh>
      )
        if (i%2!==0 && k%2!==0)
        results.push( 
        <BoardMesh  name={key} key={key} color = {Color3.FromInts(75,54,33)} scaling={new Vector3(1,0.5,1)} position={new Vector3(i, (j- 0.5), k)} >
        </BoardMesh>
      )
        results.push(
        <BoardMesh   name={key} key={key} color = {Color3.FromInts(253, 218, 13)}  scaling={new Vector3(0.5, 1, 1)} position={new Vector3(1, 1, 7)} >
        </BoardMesh>
       )
    }
  }
  let i=1;
  for (let k = 1 ; k <= count ; k++) {
    for (let j = 1 ; j <= count; j++) {
      const key = `green cube${i}${j}${k}`;
      if(j%2 ===0 && k%2 ===0)
      results.push(
        <BoardMesh  name={key} key={key} color = {Color3.FromInts(75,54,33)}scaling={new Vector3(0.5, 1, 1)} position={new Vector3((i-0.5),j,k)} >
        </BoardMesh>
      )
      else 
      results.push( 
        <BoardMesh  name={key} key={key} color = {Color3.FromInts(240,230,140)}scaling={new Vector3(0.5, 1, 1)} position={new Vector3((i-0.5),j,k)} >
        </BoardMesh>
      )
        if (j%2!==0 && k%2!==0)
        results.push( 
        <BoardMesh  name={key} key={key} color = {Color3.FromInts(75,54,33)} scaling={new Vector3(0.5, 1, 1)} position={new Vector3((i-0.5),j,k)} >
        </BoardMesh>
      )
        results.push(
       <BoardMesh    name={key} key={key} color = {Color3.FromInts(34, 139, 34)}scaling={new Vector3(1, 1, .5)} position={new Vector3(1,7,1)} >
       </BoardMesh>
      )
    }
  } 
 return results;
}

const MoveablePiece = (props) => {
  //const [piecePosition, setPiecePosition] = useState(Vector3(0,0,0))

  const pieceMoveBoundary = 7;
  const validateDrag = (targetPosition) => {
  return Math.max(Math.abs(targetPosition.x)-1, Math.abs(targetPosition.z)-1)<= pieceMoveBoundary && Math.min(Math.abs(targetPosition.x)-1, Math.abs(targetPosition.z)-1)>=0
  } 
  return (
    <cylinder name= {props.name} height = {7} diameter = {.5} position = {props.startingPosition}>
    <standardMaterial  diffuseColor= {props.color} />
    <pointerDragBehavior dragPlaneNormal = {new Vector3(0,1,0)} validateDrag={validateDrag}/>
    </cylinder>  
  )
  }
 
const onButtonClicked = () => {
      return(
        <MoveablePiece name="Owl" color= {Color3.Yellow()} startingPosition = {new Vector3(3.5,7.5,2.5)}/>
      )
      }
   

export const Chequerboard4 = () => {
     return(
    <>
    <div style={{ flex: 1, display: 'flex' }}>
          <Engine antialias adaptToDeviceRatio canvasId='babylonJS'>
           <Scene  >
           
            <arcRotateCamera  name="camera1"  target={Vector3.Zero()} alpha={Math.PI / 2} beta={Math.PI / 2} radius={30} />
            <hemisphericLight name='light1' intensity={0.7} direction={Vector3.Up()} />
            <hemisphericLight name='light1' intensity={0.7} direction={Vector3.Down()} />
                    
            <transformNode  name = "transformNode1">
            {ThreeBoard()}
            </transformNode>

            <MoveablePiece name="Owl" startingPosition = {new Vector3(3.5,4.5,2.5)}  color = {Color3.Red()} />             
            <MoveablePiece name="Raven" startingPosition = {new Vector3(6.5,4.5,2.5)}  color = {Color3.Blue()} />   
            

            <plane name="dialog" size={2} position={new Vector3(15, 6, 10)} rotation = {new Vector3(Math.PI, 0, Math.PI)} sideOrientation={Mesh.BACKSIDE}>
            <advancedDynamicTexture  name="dialogTexture"
             height={1024} width={1024}
              createForParentMesh={true}
              hasAlpha={true}
              generateMipMaps={true}
              samplingMode={Texture.TRILINEAR_SAMPLINGMODE}
    >
            <rectangle name="rect-1" height={10} width={15} thickness={12} cornerRadius={12}>
              <rectangle>
                 <babylon-button name="close-icon" background="green" onPointerDownObservable={onButtonClicked} >
                  <textBlock text={'\uf00d click me'} fontFamily="FontAwesome" fontStyle="bold" fontSize={200} color="white" />
                  </babylon-button>
                  </rectangle>
                 </rectangle>
                </advancedDynamicTexture>
              </plane>                 
            </Scene>
            
       </Engine>
     </div>
   </>
  ) 
}

