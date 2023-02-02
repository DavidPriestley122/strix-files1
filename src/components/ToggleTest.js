import React, { useState } from 'react'
import { Engine, Scene } from 'react-babylonjs'
import { Vector3 } from '@babylonjs/core/Maths/math'
import { Color3 } from "@babylonjs/core";


export default { title: 'Babylon Basic' };



function WithToggleMesh() {
  const [isShown, toggleShown] = useState(true);

  const onClick = () => {
    console.log('toggle clicked:', isShown);
    toggleShown(isShown => !isShown)
  };

  return (
    <>
      {isShown &&
         <sphere name='sphere1' diameter={2} segments={16}
            position={new Vector3(-2, 1, 0)}>
          </sphere>
          }

       <box name="box1" onPointerDownObservable={onClick}>
       </box>    

     
    </>
   





  )
}

export const ToggleTest = () => (
  <div style={{ flex: 1, display: 'flex' }}>
    <Engine antialias adaptToDeviceRatio canvasId='babylonJS'>
     <Scene>
       <freeCamera name='camera1' position={new Vector3(0, 5, -10)}
         setTarget={[Vector3.Zero()]} />
        <hemisphericLight name='light1' intensity={0.7} direction={Vector3.Up()} />
        <WithToggleMesh />
      </Scene>
    </Engine>
  </div>
)