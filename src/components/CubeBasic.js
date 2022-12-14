import React from 'react';
import {Engine, Scene} from 'react-babylonjs';
import {Vector3} from '@babylonjs/core/Maths/math';
import {Color3} from '@babylonjs/core/Maths/math.color';



const CubePrototype = (props)=> {
    return (
    <>
        <box name= {props.name} position = {props.position}>
        <standardMaterial diffuseColor = {props.color} specularColor = {Color3.Black()}/>
        </box>
       
        <ground name='ground1'  width={6} height={6} subdivisions={2}> 
        <standardMaterial diffuseColor = {Color3.Blue()} specularColor = {Color3.Black()}/>
        </ground>
        
    </>
   )
}

export const CubeBasic = () => (
  <div style={{flex: 1, display: 'flex'}}> 
    <Engine antialias adaptToDeviceRatio canvasId='babylonJS'>
       <Scene>
         <freeCamera name= 'camera1' position={new Vector3(0,5,-10)} setTarget = {[Vector3.Zero()]}/>
          <hemisphericLight name='light1' intensity={0.7} direction={Vector3.Up()}/>

            <CubePrototype name = 'numberOneCube'  position = {new Vector3(0, 1, 0)} color = {Color3.Red()}/>
            <CubePrototype name = 'numberTwoCube'  position = {new Vector3(-1, 1, 0)} color = {Color3.Yellow()}/>
               
        </Scene>
 </Engine>
 </div>
)
