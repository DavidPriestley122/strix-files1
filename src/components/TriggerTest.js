import React from 'react'
import { Vector3} from '@babylonjs/core';
import { Engine, Scene } from 'react-babylonjs'
import {Color3} from '@babylonjs/core/Maths/math.color';
import { ActionManager } from '@babylonjs/core/Actions/actionManager';
import { ExecuteCodeAction } from '@babylonjs/core/Actions/directActions';




const onSphereCreated = (sphere) => {
    sphere.actionManager = new ActionManager(sphere.getScene());
    sphere.actionManager.registerAction(
      new ExecuteCodeAction(
        ActionManager.OnPickTrigger, function (ev) {
            sphere.position.x +=1;
          //console.log('sphere clicked', ev);
        }
      )
    );
 }

 const onSphereCreated1 = (sphere) => {
    sphere.actionManager = new ActionManager(sphere.getScene());
    sphere.actionManager.registerAction(
      new ExecuteCodeAction(
        ActionManager.OnPickTrigger, function (ev) {
            sphere.position.x -=1;
          //console.log('sphere clicked', ev);
        }
      )
    );
 }


  
  export const TriggerTest = () => (
      <div style ={{ flex: 1, display: 'flex' }} >
       <Engine antialias adaptToDeviceRatio canvasId='babylonJS' >
        <Scene>
        <arcRotateCamera  name="camera1"  target={Vector3.Zero()} alpha={Math.PI / 2} beta={Math.PI / 2} radius={30} />
             <hemisphericLight name='light1' intensity={0.7} direction={Vector3.Up()} />
             <hemisphericLight name='light1' intensity={0.7} direction={Vector3.Down()} /> 

        <sphere  name="sphere1" diameter={2} segments={32} position={new Vector3(0, 1, 0)} onCreated={onSphereCreated} >
        <standardMaterial  name='mat' diffuseColor={new Color3.Red()}/>
        </sphere>
        <sphere  name="sphere2" diameter={2} segments={32} position={new Vector3(1, 1, 0)} onCreated={onSphereCreated1} >
        <standardMaterial  name='mat' diffuseColor={new Color3.Blue()}/>
        </sphere>
        </Scene>
      </Engine>
      </div>
   )
 