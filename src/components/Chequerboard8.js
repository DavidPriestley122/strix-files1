import React , {useState} from 'react';
import { Engine, Scene, useClick } from 'react-babylonjs';
import { Vector3} from '@babylonjs/core';
import {Color3} from '@babylonjs/core/Maths/math.color';
     
   
 
 const boardSquareClicked = (function () {

const Positions =  [[1,1,1], [2,10,2],[3,3,3],[9,4,4]]
let i = 0;
return () => { i++;
return Positions[i % Positions.length]
   }
 })(); 
  
  const startingPosition = new Vector3.FromArray(boardSquareClicked());
  
  
 function WithUseClick1() {
      const [meshPosition, setMeshPosition] = useState(startingPosition);
      const [ref] = useClick(_=> {
        const meshPosition= boardSquareClicked();
        setMeshPosition(new Vector3.FromArray(meshPosition))
        console.log("clicked")
      });

      return  <cylinder  name="pieceName" ref = {ref} height = {5} diameter = {0.5} position = {meshPosition}  > 
      <standardMaterial  name = "pieceMat" diffuseColor= {new Color3.Red()}  />
      </cylinder>
      
 }

          
export const Chequerboard8 = () => (
    
        <div style ={{ flex: 1, display: 'flex' }} >
           <Engine antialias adaptToDeviceRatio canvasId='babylonJS'>
              <Scene>
               <arcRotateCamera  name="camera1"  target={Vector3.Zero()} alpha={Math.PI / 2} beta={Math.PI / 2} radius={30} />
               <hemisphericLight name='light1' intensity={0.7} direction={Vector3.Up()}/>                    
               <WithUseClick1 />
               <ground name='ground1' width={6} height={6} subdivisions={2}/>   
               <box name= "littleBox1"/>     
            </Scene>
        </Engine>
      </div>
);


  
    