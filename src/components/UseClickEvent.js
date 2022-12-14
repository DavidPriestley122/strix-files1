import React, {useState} from 'react'
import {Engine, Scene, useClick} from 'react-babylonjs'
import {Vector3} from '@babylonjs/core/Maths/math'
import {Color3} from "@babylonjs/core/Maths/math.color";



const getRandomPosition = (function () {

  const Positions =  [[1,1,1], [2,2,2],[3,3,3],[4,4,4]]

   let i = 0;
   return () => {
    i++;
    return Positions[i % Positions.length] 
   }

 }) (); 
  
  const startingPosition = new Vector3.FromArray(getRandomPosition())
  
  
 const  WithUseClick1 = () =>{
      const [meshPosition, setMeshPosition] = useState(startingPosition);
      const [ref]= useClick(_=> {
        const meshPosition= getRandomPosition();
        setMeshPosition(new Vector3.FromArray(meshPosition))
      });
      return (

      <cylinder  name="pieceName" ref = {ref} height = {5} diameter = {0.5}  position= {meshPosition}> 
      <standardMaterial  diffuseColor= {new Color3.Red()}  />
      </cylinder>
      )
 }



const getRandomColor = (function () {
  // const Colors = ['#4F86EC', '#D9503F', '#F2BD42', '#58A55C'];
  const Colors = [[0.31, 0.53, 0.93, 1], [0.85, 0.31, 0.25, 1], [0.95, 0.74, 0.26, 1], [0.35, 0.65, 0.36, 1]];

  let i = 0;
  return () => {
    i++;
    return Colors[i % Colors.length];
  }

  
})();

const initialColor = Color3.FromArray(getRandomColor());

function WithUseClick() {
  const [color, setColor] = useState(initialColor);
  const [ref] = useClick(_ => {
    const color = getRandomColor();
    setColor(Color3.FromArray(color))
  });

  return <cylinder name='cylinder1' ref={ref}
                 height={3} diameter = {0.5}
                 position={new Vector3(1, 2, 3)}>
    <standardMaterial  name='mat' diffuseColor={color}/>
  </cylinder>
}

















export const UseClickEvent = () => (
  <div style={{flex: 1, display: 'flex'}}>
    <Engine antialias adaptToDeviceRatio canvasId='babylonJS'>
      <Scene>
        <freeCamera name='camera1' position={new Vector3(0, 5, -10)} setTarget={[Vector3.Zero()]}/>
        <hemisphericLight name='light1' intensity={0.7} direction={Vector3.Up()}/>
        <WithUseClick/>
        <WithUseClick1/>
        <ground name='ground1' width={6} height={6} subdivisions={2}/>
      </Scene>
    </Engine>
  </div>
);

UseClickEvent.story = {
   name: 'useClick'
  }