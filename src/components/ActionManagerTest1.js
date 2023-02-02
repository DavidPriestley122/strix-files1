import React,  { useState }from 'react'
import { Vector3, MeshBuilder, SubMesh, StandardMaterial, MultiMaterial } from '@babylonjs/core';
import { Engine, Scene, useScene, useClick} from 'react-babylonjs'
import {Color3} from '@babylonjs/core/Maths/math.color';
import { ActionManager } from '@babylonjs/core/Actions/actionManager';
import { ExecuteCodeAction } from '@babylonjs/core/Actions/directActions';



var pieceIndex =1;

/*function MakeTripleBoard() {

return(
    <transformNode name = "transform-node all3" rotation = {new Vector3(Math.PI/2, Math.PI/2,Math.PI/2)}>
        <transformNode name = 'transform-node 1' 
                rotation = {new Vector3(0,0,0)}
                scaling = {new Vector3(1,.5,1)}
                position = {new Vector3.Zero}
                >
        <MakeSingleBoard />
        </transformNode>

        <transformNode  name = 'transform-node 2'
                    rotation = {new Vector3(Math.PI/2,0,0)}
                    scaling = {new Vector3(1,.5,1)}
                    position = {new Vector3.Zero} >
        <MakeSingleBoard />
        </transformNode>

        <transformNode   name = 'transform-node 3'
                rotation = {new Vector3(0,0, -Math.PI/2)}
                scaling = {new Vector3(1,.5,1)}
                position = {new Vector3.Left}>
        <MakeSingleBoard />
        </transformNode>
        </transformNode>
        )
}
*/



const OnBoxesCreated = (Boxes) =>{
const boxMaster = MeshBuilder.CreateBox("box0", {width: 1}, Boxes.getScene())
const boxCount = 10;

//const maxIndex = boxCount-1;
for (let i=0; i<boxCount; i++){
  const box = i === 0? boxMaster: boxMaster.createInstance("box" );
  //box.position.x = -5+10*i/maxIndex;
  box.position.x = i;
  box.position.y = 1;
  box.actionManager = new ActionManager(Boxes.getScene())
  box.actionManager.registerAction(
    new ExecuteCodeAction(
      ActionManager.OnPickDownTrigger, function (ev){
        const brownTeamMat = new StandardMaterial("brownTeamMat") 
brownTeamMat.diffuseColor = Color3.FromInts(88,54,41)

if(pieceIndex===1) {    
const boxNew = MeshBuilder.CreateCylinder('brownOwl', {height: 7, diameter: 0.5, subdivisions: 7, });
//boxNew.position = new Vector3(0.5,0.5,-0.5);
boxNew.position = box.position;
const owlMat = new StandardMaterial("owlMat")
owlMat.diffuseColor = Color3.FromInts(204,153,102);
const multiMat = new MultiMaterial("multi")
multiMat.subMaterials.push(owlMat);
multiMat.subMaterials.push(owlMat);
multiMat.subMaterials.push(owlMat);
multiMat.subMaterials.push(owlMat);
multiMat.subMaterials.push(owlMat);
multiMat.subMaterials.push(owlMat);
multiMat.subMaterials.push(brownTeamMat);
boxNew.subMeshes = [];
let verticesCount = boxNew.getTotalVertices();
console.log(verticesCount)
boxNew.subMeshes.push(new SubMesh(0,0,verticesCount,0,144,boxNew))
boxNew.subMeshes.push(new SubMesh(1,0,verticesCount,144,144,boxNew))
boxNew.subMeshes.push(new SubMesh(2,0,verticesCount,288,144,boxNew))
boxNew.subMeshes.push(new SubMesh(3,0,verticesCount,432,144,boxNew))
boxNew.subMeshes.push(new SubMesh(4,0,verticesCount,576,144,boxNew))
boxNew.subMeshes.push(new SubMesh(5,0,verticesCount,720,144,boxNew))
boxNew.subMeshes.push(new SubMesh(6,0,verticesCount,864,144,boxNew))
boxNew.subMeshes.push(new SubMesh(6,0,verticesCount,1008,144,boxNew))
boxNew.material = multiMat;  }

else if (pieceIndex===2) {
const boxNew = MeshBuilder.CreateCylinder('brownKite', {height: 7, diameter: 0.5, subdivisions: 7, });
boxNew.position = new Vector3(0.5,0.5,-0.5)
const kiteMat = new StandardMaterial("kiteMat") 
kiteMat.diffuseColor = Color3.FromInts(139,0,0);
const multiMat = new MultiMaterial("multi")
multiMat.subMaterials.push(kiteMat);
multiMat.subMaterials.push(kiteMat);
multiMat.subMaterials.push(kiteMat);
multiMat.subMaterials.push(kiteMat);
multiMat.subMaterials.push(kiteMat);
multiMat.subMaterials.push(kiteMat);
multiMat.subMaterials.push(brownTeamMat);
boxNew.subMeshes = [];
let verticesCount = boxNew.getTotalVertices();
console.log(verticesCount)
boxNew.subMeshes.push(new SubMesh(0,0,verticesCount,0,144,boxNew))
boxNew.subMeshes.push(new SubMesh(1,0,verticesCount,144,144,boxNew))
boxNew.subMeshes.push(new SubMesh(2,0,verticesCount,288,144,boxNew))
boxNew.subMeshes.push(new SubMesh(3,0,verticesCount,432,144,boxNew))
boxNew.subMeshes.push(new SubMesh(4,0,verticesCount,576,144,boxNew))
boxNew.subMeshes.push(new SubMesh(5,0,verticesCount,720,144,boxNew))
boxNew.subMeshes.push(new SubMesh(6,0,verticesCount,864,144,boxNew))
boxNew.subMeshes.push(new SubMesh(6,0,verticesCount,1008,144,boxNew))
boxNew.material = multiMat; }

else if (pieceIndex===3) {
const boxNew = MeshBuilder.CreateCylinder('brownRaven', {height: 7, diameter: 0.5, subdivisions: 7, });
boxNew.position = new Vector3(0.5,0.5,-0.5)
const ravenMat = new StandardMaterial("ravenMat")
ravenMat.diffuseColor = Color3.FromInts(10,10,10);
const multiMat = new MultiMaterial("multi")
multiMat.subMaterials.push(ravenMat);
multiMat.subMaterials.push(ravenMat);
multiMat.subMaterials.push(ravenMat);
multiMat.subMaterials.push(ravenMat);
multiMat.subMaterials.push(ravenMat);
multiMat.subMaterials.push(ravenMat);
multiMat.subMaterials.push(brownTeamMat);
boxNew.subMeshes = [];
let verticesCount = boxNew.getTotalVertices();
console.log(verticesCount)
boxNew.subMeshes.push(new SubMesh(0,0,verticesCount,0,144,boxNew))
boxNew.subMeshes.push(new SubMesh(1,0,verticesCount,144,144,boxNew))
boxNew.subMeshes.push(new SubMesh(2,0,verticesCount,288,144,boxNew))
boxNew.subMeshes.push(new SubMesh(3,0,verticesCount,432,144,boxNew))
boxNew.subMeshes.push(new SubMesh(4,0,verticesCount,576,144,boxNew))
boxNew.subMeshes.push(new SubMesh(5,0,verticesCount,720,144,boxNew))
boxNew.subMeshes.push(new SubMesh(6,0,verticesCount,864,144,boxNew))
boxNew.subMeshes.push(new SubMesh(6,0,verticesCount,1008,144,boxNew))
boxNew.material = multiMat; }

      console.log ("hello")
           }
        )
     )
  }
}

export const ActionManagerTest1= () => (
      <div style={{ flex: 1, display: 'flex' }}>
        <Engine antialias adaptToDeviceRatio canvasId='babylonJS'>
          <Scene >
            
               <arcRotateCamera  name="camera1"  target={Vector3.Zero()} alpha={Math.PI / 2} beta={Math.PI / 2} radius={30} />
                  <hemisphericLight name='light1' intensity={0.7} direction={Vector3.Up()} />
                 
                       
                 
                 
                  <box onCreated =  {OnBoxesCreated}>
                  <standardMaterial name = "light square" diffuseColor =  {Color3.FromInts(255,0,0)} /> 
                  </box> 
                    
    
         </Scene>
        </Engine>
      </div>
    )
