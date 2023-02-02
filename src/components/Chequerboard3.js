import React, { useState } from 'react'
import { Vector3, Mesh, VertexData} from '@babylonjs/core';
import { Engine, Scene, useScene, useClick } from 'react-babylonjs'
import {Color3, DirectonalLight} from '@babylonjs/core/Maths/math.color';
import { Control } from "@babylonjs/gui/2D/controls/control";
import { InputText } from "@babylonjs/gui/2D/controls/inputText";


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

  

  

  const getRandomPosition = (function () {
      // const Colors = ['#4F86EC', '#D9503F', '#F2BD42', '#58A55C'];
      const Positions = [[0,1,1], [1, 2, 3], [-1,3,5], [7,0,2]];
    
      let i = 0;
      return () => {
        i++;
        return Positions[i % Positions.length];
    }
    })();

  

  const  WithUseClick = () => {
      const initialPosition = (new Vector3(3, 4, 1));
      const [position, setPosition] = useState(initialPosition);
      const [ref] = useClick(_ => {
        const position = getRandomPosition();
       setPosition(Vector3.FromArray(position))
      });
    
      return <cylinder name='cylinder1' ref={ref}
                    diameter={.5} height = {7}
                     position={position}>
        <standardMaterial  name='mat' diffuseColor={Color3.Red()}/>
      </cylinder>
    }
  

/*const PlayingPiece = (props) => {
    return(
    <cylinder name = {props.name} scaling = {props.scaling} position = {props.position} diameter = {.5} height={7} isPickable={false}>
        <standardMaterial  diffuseColor = {props.color} />
    </cylinder>
    )
}
/*
const onPiecePicked = (PlayingPiece) => {
  if(PlayingPiece.name == "owl") {
    PlayingPiece.scaling.y += 0.1;
  }
}
*/
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
        <BoardMesh   name={key} key={key} color = {Color3.FromInts(253, 218, 13)}  scaling={new Vector3(0.5, 1, 1)} position={new Vector3(1, 7, 1)} >
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
       <BoardMesh    name={key} key={key} color = {Color3.FromInts(34, 139, 34)}scaling={new Vector3(1, 0.5, 1)} position={new Vector3(1,1,7)} >
       </BoardMesh>
      )
    }
  } 
 return results;
}
 

export const Chequerboard3 = () => {
    return(
    <>
    <div style={{ flex: 1, display: 'flex' }}>
        
     <Engine antialias adaptToDeviceRatio canvasId='babylonJS'>
      <Scene  >
            <arcRotateCamera
            name="camera1"
            target={Vector3.Zero()}
            alpha={Math.PI / 2}
            beta={Math.PI / 2}
            radius={20}
            />
            <hemisphericLight name='light1' intensity={0.7} direction={Vector3.Up()} />
            <hemisphericLight name='light1' intensity={0.7} direction={Vector3.Down()} />


                        <transformNode  name = "transformNode1">
            {ThreeBoard()}
            </transformNode>

            <WithUseClick/>

            <plane name = "dialogTexture" height = {2} width = {2} position = {new Vector3(10,4,-3)} rotation = {new Vector3(Math.PI, 0, Math.PI)} createForParentMesh = {true}>
              <advancedDynamicTexture name = "dialogueTexture" height = {1024} width = {1024} createForParentMesh= {true} hasAlpha = {true}>
                  <rectangle  name="rect-outer" height={0.5} width={1} thickness={12}  cornerRadius={12}>
                  <stackPanel name="sp-1" height={1.0}>
                  <rectangle   name="rect-inner1" height="200px" verticalAlignment={Control.VERTICAL_ALIGNMENT_TOP} horizontalAlignment={Control.HORIZONTAL_ALIGNMENT_LEFT}>
                    <textBlock  text={"Enter Text"} fontStyle="bold" fontSize={200} color="white"/>
                  </rectangle>
                  <rectangle name="rect-inner2" height="200px" verticalAlignment={Control.VERTICAL_ALIGNMENT_TOP} horizontalAlignment={Control.HORIZONTAL_ALIGNMENT_LEFT}>
                  <inputText text="circle" color="white" fontSize={150} width={1.0} onTextChangedObservable={(InputText)} />
                   </rectangle>
                  </stackPanel>
                </rectangle>
                </advancedDynamicTexture>
             </plane>
            </Scene>
       </Engine>
     </div>
   </>
  ) 
}

