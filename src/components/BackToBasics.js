import React, {useRef, } from 'react'
import {Engine, Scene,useScene} from 'react-babylonjs'
import { Vector3,CSG, Mesh} from '@babylonjs/core';
import {Color3} from "@babylonjs/core/Maths/math.color";
import {StandardMaterial} from '@babylonjs/core/Materials/standardMaterial';




  const MakeAMergeMeshMark2 = (props) => {

   
    
  }
  





  
  export const BackToBasics = () =>(   
    <div style={{flex: 1, display: 'flex'}}>
      <Engine antialias adaptToDeviceRatio canvasId='babylonJS'>
        <Scene > 
        
        <arcRotateCamera  name="camera1"  target={Vector3.Zero()} alpha={Math.PI / 2} beta={Math.PI / 2} radius={30} />
        <hemisphericLight name='light1' intensity={.7} direction={Vector3.Up()} />
        <hemisphericLight name='light2' intensity={.7} direction={Vector3.Down()} />
           
             
              
              <MakeAMergeMeshMark2 name = "mesh1" x={10} y={6} z={7}  />
              
             
           
             
    
      </Scene>
    </Engine>
</div>
)