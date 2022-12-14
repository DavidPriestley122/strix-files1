import React, { useState } from 'react'
import { Vector3, Mesh, VertexData} from '@babylonjs/core';
import { Engine, Scene, useScene } from 'react-babylonjs'
import {Color3} from '@babylonjs/core/Maths/math.color';


const CustomMesh = (props) => {
    const scene = useScene();
  
    const [customMesh] = useState(() => {
   
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
                    1,0,1,1,  1,0,1,1, 1,0,1,1,
                  ]
  
      
   
      //Empty array to contain calculated values
      var normals = [];
      
      var vertexData = new VertexData();
      VertexData.ComputeNormals(positions, indices, normals,);
  
      //Assign positions, indices and normals to vertexData
      vertexData.positions = positions;    
      vertexData.indices = indices;
      vertexData.normals = normals;
      //vertexData.colors = colors;
      
  
      //Apply vertexData to custom mesh
      vertexData.applyToMesh(meshInstance);
  
      return meshInstance;
    })
  
    return (
        <mesh fromInstance={customMesh}  disposeInstanceOnUnmount  scaling = {props.scaling} position={props.position} >
           <standardMaterial    diffuseColor= {props.color} height = {props.height} wireframe={props.useWireframe} />
        </mesh>
    )
  }



function getCubes(count) {
  const results = [];

 for (let i = 1 ; i <= count ; i++) {
    for (let j = 1 ; j <= count; j++) {
      const key = `brown cube${i}${j}`;
      if(j%2 ===0 && i%2 ===0)
      results.push(
        <CustomMesh color = {Color3.Black()} name={key} key={key} scaling={new Vector3(1, .5, 1)} position={new Vector3(i, .5, j)}  height={0.5}>
        </CustomMesh>
      )
      else 
      results.push( 
        <CustomMesh name={key} color = {Color3.Yellow()}  key={key} scaling={new Vector3(1, .5, 1)} position={new Vector3(i, .5, j)} height ={0.5}>
        </CustomMesh>
      )
        
        if (j%2!==0 && i%2!==0)
        results.push( 
        <CustomMesh color = {Color3.Black()} name={key} key={key} scaling={new Vector3(1, .5, 1)} position={new Vector3(i, .5, j)} height = {0.5}>
        </CustomMesh>
      )

      if (j===7 && i===1)
      results.push(
        <CustomMesh color = {Color3.FromInts(111, 78, 55)} name={key} key={key} scaling={new Vector3(1, .5, 1)} position={new Vector3(i, .5, j)} height = {0.5}>
        </CustomMesh>
      )

    }
  } 
  
  for (let i = 1; i <= count ; i++) {
    for (let j = 1 ; j <= count; j++) {
      const key = `yellow cube${i}${j}`;
      if(j%2 ===0 && i%2 ===0)
      results.push(
        <CustomMesh color = {Color3.Black()} name={key} key={key} scaling={new Vector3(.5, 1, 1)} position={new Vector3(.5, i, j)} width={.5}>
        </CustomMesh>
      )
      else 
      results.push( 
        <CustomMesh color = {Color3.Yellow()} name={key} key={key} scaling={new Vector3(.5, 1, 1)} position={new Vector3(.5, i, j)} width ={0.5}>
        </CustomMesh>
      )
        
        if (j%2!==0 && i%2!==0)
        results.push( 
        <CustomMesh color = {Color3.Black()} name={key} key={key} scaling={new Vector3(.5, 1, 1)} position={new Vector3(.5, i, j)} width = {0.5}>
        </CustomMesh>
      )
     // results.pop(
     //   <CustomMesh  name={key} key={key}   >
      //  </CustomMesh>
     // )

      results.push(
        <CustomMesh color = {Color3.FromInts(253, 218, 13)} name={key} key={key} scaling={new Vector3(.5, 1, 1)} position={new Vector3(1, 5, 4)} height = {0.5}>
        </CustomMesh>
      )

    }
  } 
  for (let i = 1; i <= count ; i++) {
    for (let j = 1 ; j <= count; j++) {
      const key = `green cube${i}${j}`;
      if(j%2 ===0 && i%2 ===0)
      results.push(
        <CustomMesh color = {Color3.Black()} name={key} key={key} scaling={new Vector3(1, 1,.5)} position={new Vector3(i, j, .5)} >
        </CustomMesh>
      )
      else 
      results.push( 
        <CustomMesh color = {Color3.Yellow()} name={key} key={key} scaling={new Vector3(1, 1,.5)} position={new Vector3(i, j, .5)} >
        </CustomMesh>
      )
        
        if (j%2!==0 && i%2!==0)
        results.push( 
        <CustomMesh color = {Color3.Black()} name={key} key={key} scaling={new Vector3(1, 1,.5)} position={new Vector3(i, j, .5)} >
        </CustomMesh>
      )

    }
  }
 return results;
}

const MakeSingleBoard = () =>{
  
  return(
      <transformNode  name = "transformNode1">
      {getCubes(7)}
      </transformNode> 
      )

}




export const Chequerboard2 = () => {
  const [displayLast, setDisplayLast] = useState(true);
   const toggleDisplay = () => {
     setDisplayLast(cur => !cur);
   };

  return(
    <>
    <div>
      <button onClick={toggleDisplay}>Toggle Top Triangle Visibility</button>
    </div>

    <div style={{ flex: 1, display: 'flex' }}>
     <Engine antialias adaptToDeviceRatio canvasId='babylonJS'>
      <Scene>
       
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
            {getCubes(7)}
            </transformNode> 
            
            </Scene>
       </Engine>
     </div>
   </>
  ) 
}

//<CustomMesh name='custom-2' position={new Vector3(0, 2, 0)} useWireframe={true} />
 //           { displayLast &&
 //             <CustomMesh name='custom-4' position={new Vector3(0, 4, 0)} useWireframe={false} />

 //           }

 //<CustomMesh name='custom-0' position={new Vector3(0, 0, 0)} useWireframe={false} />