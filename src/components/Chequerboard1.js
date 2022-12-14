import React, { useRef } from 'react'
import { Vector3} from '@babylonjs/core';
import { Engine, Scene } from 'react-babylonjs'
import {Color3} from '@babylonjs/core/Maths/math.color';
//import '../../style.css';

function MakeSingleBoard() {
  
  const groupRef = useRef(null);
  const position = Vector3.Zero();
  const onCreated = _ => {
   };

  const cubes = getCubes(7);

  return(
  <transformNode name='group' ref={groupRef} position={position} onCreated={onCreated}>
      {cubes}
  </transformNode>
  )
}
function getCubes(count) {
  const results = [];

  for (let i = -count ; i < 0 ; i++) {
    for (let j = -count ; j < 0; j++) {
      const key = `cube-${i}-${j}`;
      if(j%2 ===0 && i%2 ===0)
      results.push(
        <box name={key} key={key} position={new Vector3(i, 1, j)} >
            <standardMaterial diffuseColor = {Color3.Black()} specularColor = {Color3.Black()}/> 
        </box>
      )
      else 
      results. push( 
      <box name={key} key={key} position={new Vector3(i, 1, j)} >
      <standardMaterial diffuseColor = {Color3.Yellow()} specularColor = {Color3.Black()}/> 
        </box>
      )
        if (j%2!==0 && i%2!==0)
        results. push( 
            <box name={key} key={key} diameter={0.5} segments={16} position={new Vector3(i, 1, j)} >
            <standardMaterial diffuseColor = {Color3.Black()} specularColor = {Color3.Black()}/> 
              </box>
      )
    }
  }
 return results;
}





export const Chequerboard1 = () => (
  <div style={{ flex: 1, display: 'flex' }}>
    <Engine antialias adaptToDeviceRatio canvasId='babylonJS'>
      <Scene >
        
           <arcRotateCamera  name="camera1"  target={Vector3.Zero()} alpha={Math.PI / 2} beta={Math.PI / 2} radius={30} />
              <hemisphericLight name='light1' intensity={0.7} direction={Vector3.Up()} />
              <transformNode name='transform-node all3' rotation = {new Vector3(Math.PI/2, Math.PI/2,Math.PI/2)}>
                  <transformNode name = 'transform-node 1'
                   rotation ={new Vector3(0,0,0)} 
                   scaling = {new Vector3(1,.5,1)}
                   position= {new Vector3.Zero}
                   >
                  <MakeSingleBoard />
                  </transformNode>

                  <transformNode name = 'transform-node 2'
                   rotation ={new Vector3(Math.PI/2,0, 0)}
                    scaling = {new Vector3(1,.5,1)} 
                    position= {new Vector3.Zero}>
                  <MakeSingleBoard />
                  </transformNode>

                  <transformNode name = 'transform-node 3'
                   rotation ={new Vector3(0,0,-Math.PI/2)} 
                   scaling = {new Vector3(1,.5,1)}
                   position= {new Vector3.Left}>
                   <MakeSingleBoard />
                   </transformNode>
              </transformNode> 

     </Scene>
    </Engine>
  </div>
)