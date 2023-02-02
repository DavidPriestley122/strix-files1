import React,  { useState }from 'react'
import { Vector3, MeshBuilder, SubMesh, StandardMaterial, MultiMaterial } from '@babylonjs/core';
import { Engine, Scene, useScene, useClick} from 'react-babylonjs'
import {Color3} from '@babylonjs/core/Maths/math.color';
import { ActionManager } from '@babylonjs/core/Actions/actionManager';
import { ExecuteCodeAction } from '@babylonjs/core/Actions/directActions';



var pieceIndex;

const  WithUseClickBrownOwl1 = () =>{
const [meshPosition, setPiecePosition] = useState(new Vector3(0.5,-3,-0.5));
const [hoot]= useClick(_=> {
setPiecePosition(meshPosition)  
});
return(
<cylinder name = "brownOwl" ref = {hoot} height = {14.2} diameter={0.55}  position = {meshPosition}>
<cylinder name = "brownOwlBody" height={6} diameter = {0.5}   position = {new Vector3(0,3,0)}>
<cylinder name = "brownOwlHead" height = {1} diameter = {0.5} position = {new Vector3(0,3.5,0)} >
<standardMaterial name = "brownTeam-mat" diffuseColor = {Color3.FromInts(88,54,41)} />
</cylinder>
<standardMaterial name = "owl-mat"  diffuseColor = {Color3.FromInts(204,153,102)}/>  
</cylinder>
<standardMaterial name = "clear-mat " alpha = {0} />
</cylinder>
   )
 }
const  WithUseClickBrownKite1 = () =>{
const [meshPosition, setPiecePosition] = useState(new Vector3(1.5,-3,-0.5));
const [shriek]= useClick(_=> {
setPiecePosition(meshPosition)  
});
return(
<cylinder name = "brownKite" ref = {shriek} height = {14.2} diameter={0.55}  position = {meshPosition}>
<cylinder name = "brownKiteBody" height={6} diameter = {0.5}   position = {new Vector3(0,3,0)}>
<cylinder name = "brownKiteHead" height = {1} diameter = {0.5} position = {new Vector3(0,3.5,0)} >
<standardMaterial name = "brownTeam-mat" diffuseColor = {Color3.FromInts(88,54,41)} />
</cylinder>
<standardMaterial name = "kite-mat"  diffuseColor = {Color3.FromInts(139,0,0)}/>  
</cylinder>
<standardMaterial name = "clear-mat " alpha = {0} />
</cylinder>
   )
 }
const  WithUseClickBrownRaven1 = () =>{
const [meshPosition, setPiecePosition] = useState(new Vector3(2.5,-3,-0.5));
const [cronk]= useClick(_=> {
setPiecePosition(meshPosition)  
});
return(
<cylinder name = "brownRaven" ref = {cronk} height = {14.2} diameter={0.55}  position = {meshPosition}>
<cylinder name = "brownRavenBody" height={6} diameter = {0.5}   position = {new Vector3(0,3,0)}>
<cylinder name = "brownRavenHead" height = {1} diameter = {0.5} position = {new Vector3(0,3.5,0)} >
<standardMaterial name = "brownTeam-mat" diffuseColor = {Color3.FromInts(88,54,41)} />
</cylinder>
<standardMaterial name = "raven-mat"  diffuseColor = {Color3.FromInts(10,10,10)}/>  
</cylinder>
<standardMaterial name = "clear-mat " alpha = {0} />
</cylinder>
   )
 }


const onCubeMakerCreatedb77 = (CubeMaker) => {
CubeMaker.actionManager = new ActionManager(CubeMaker.getScene());
CubeMaker.actionManager.registerAction(
new ExecuteCodeAction(
ActionManager.OnPickTrigger, function (ev) {

const brownTeamMat = new StandardMaterial("brownTeamMat") 
brownTeamMat.diffuseColor = Color3.FromInts(88,54,41)

if(pieceIndex===1) {    
const boxNew = MeshBuilder.CreateCylinder('brownOwl', {height: 7, diameter: 0.5, subdivisions: 7, });
boxNew.position = new Vector3(0.5,0.5,-0.5);
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

       }    
     )
  )           
}

const onCubeMakerCreatedb76 = (CubeMaker) => {
CubeMaker.actionManager = new ActionManager(CubeMaker.getScene());
CubeMaker.actionManager.registerAction(
new ExecuteCodeAction(
ActionManager.OnPickTrigger, function (ev) {
 
if(pieceIndex===1) {     
const boxNew = MeshBuilder.CreateCylinder('brownOwl', {height: 7, diameter: 0.5, subdivisions: 7, });
//boxNew.position = new Vector3(boxNew.position.x,boxNew.position.y,boxNew.position.z); 
 boxNew.position = new Vector3(1.5,0.5,-0.5)
//let multiMat = new StandardMaterial('multiMat');
  const multiMat1 = new StandardMaterial("mat1")
  const multiMat2 = new StandardMaterial("mat2")
  const multiMat3 = new StandardMaterial("mat3")
  const multiMat4 = new StandardMaterial("mat4")
  const multiMat5 = new StandardMaterial("mat5")
  const multiMat6 = new StandardMaterial("mat6")
  const multiMat7 = new StandardMaterial("mat7")
  
  multiMat1.diffuseColor = Color3.FromInts(204,153,102);
  multiMat2.diffuseColor = Color3.FromInts(204,153,102);
  multiMat3.diffuseColor = Color3.FromInts(204,153,102);
  multiMat4.diffuseColor = Color3.FromInts(204,153,102);
  multiMat5.diffuseColor = Color3.FromInts(204,153,102);
  multiMat6.diffuseColor = Color3.FromInts(204,153,102);
  multiMat7.diffuseColor = Color3.FromInts(88,54,41);
  const multiMat = new MultiMaterial("multi")
  multiMat.subMaterials.push(multiMat1);
  multiMat.subMaterials.push(multiMat2);
  multiMat.subMaterials.push(multiMat3);
  multiMat.subMaterials.push(multiMat4);
  multiMat.subMaterials.push(multiMat5);
  multiMat.subMaterials.push(multiMat6);
  multiMat.subMaterials.push(multiMat7);
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
  boxNew.material = multiMat;}

  else if (pieceIndex===2) {
    const boxNew = MeshBuilder.CreateCylinder('brownKite', {height: 7, diameter: 0.5, subdivisions: 7, });
    //boxNew.position = new Vector3(boxNew.position.x,boxNew.position.y,boxNew.position.z); 
    boxNew.position = new Vector3(1.5,0.5,-0.5)
    //let multiMat = new StandardMaterial('multiMat');
      const multiMat1 = new StandardMaterial("mat1")
      const multiMat2 = new StandardMaterial("mat2")
      const multiMat3 = new StandardMaterial("mat3")
      const multiMat4 = new StandardMaterial("mat4")
      const multiMat5 = new StandardMaterial("mat5")
      const multiMat6 = new StandardMaterial("mat6")
      const multiMat7 = new StandardMaterial("mat7")
      multiMat1.diffuseColor = Color3.FromInts(139,0,0);
      multiMat2.diffuseColor = Color3.FromInts(139,0,0);
      multiMat3.diffuseColor = Color3.FromInts(139,0,0);
      multiMat4.diffuseColor = Color3.FromInts(139,0,0);
      multiMat5.diffuseColor = Color3.FromInts(139,0,0);
      multiMat6.diffuseColor = Color3.FromInts(139,0,0);
      multiMat7.diffuseColor = Color3.FromInts(88,54,41);
      const multiMat = new MultiMaterial("multi")
      multiMat.subMaterials.push(multiMat1);
      multiMat.subMaterials.push(multiMat2);
      multiMat.subMaterials.push(multiMat3);
      multiMat.subMaterials.push(multiMat4);
      multiMat.subMaterials.push(multiMat5);
      multiMat.subMaterials.push(multiMat6);
      multiMat.subMaterials.push(multiMat7);
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
    //boxNew.position = new Vector3(boxNew.position.x,boxNew.position.y,boxNew.position.z); 
    boxNew.position = new Vector3(1.5,0.5,-0.5)
    //let multiMat = new StandardMaterial('multiMat');
      const multiMat1 = new StandardMaterial("mat1")
      const multiMat2 = new StandardMaterial("mat2")
      const multiMat3 = new StandardMaterial("mat3")
      const multiMat4 = new StandardMaterial("mat4")
      const multiMat5 = new StandardMaterial("mat5")
      const multiMat6 = new StandardMaterial("mat6")
      const multiMat7 = new StandardMaterial("mat7")
      multiMat1.diffuseColor = Color3.FromInts(10,10,10);
      multiMat2.diffuseColor = Color3.FromInts(10,10,10);
      multiMat3.diffuseColor = Color3.FromInts(10,10,10);
      multiMat4.diffuseColor = Color3.FromInts(10,10,10);
      multiMat5.diffuseColor = Color3.FromInts(10,10,10);
      multiMat6.diffuseColor = Color3.FromInts(10,10,10);
      multiMat7.diffuseColor = Color3.FromInts(88,54,41);
      const multiMat = new MultiMaterial("multi")
      multiMat.subMaterials.push(multiMat1);
      multiMat.subMaterials.push(multiMat2);
      multiMat.subMaterials.push(multiMat3);
      multiMat.subMaterials.push(multiMat4);
      multiMat.subMaterials.push(multiMat5);
      multiMat.subMaterials.push(multiMat6);
      multiMat.subMaterials.push(multiMat7);
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
    }
   )
  )           
}
const onCubeMakerCreatedb75 = (CubeMaker) => {
CubeMaker.actionManager = new ActionManager(CubeMaker.getScene());
CubeMaker.actionManager.registerAction(
new ExecuteCodeAction(
ActionManager.OnPickTrigger, function (ev) {

  if(pieceIndex===1) {     
    const boxNew = MeshBuilder.CreateCylinder('brownOwl', {height: 7, diameter: 0.5, subdivisions: 7, });
    //boxNew.position = new Vector3(boxNew.position.x,boxNew.position.y,boxNew.position.z); 
     boxNew.position = new Vector3(2.5,0.5,-0.5)
    //let multiMat = new StandardMaterial('multiMat');
      const multiMat1 = new StandardMaterial("mat1")
      const multiMat2 = new StandardMaterial("mat2")
      const multiMat3 = new StandardMaterial("mat3")
      const multiMat4 = new StandardMaterial("mat4")
      const multiMat5 = new StandardMaterial("mat5")
      const multiMat6 = new StandardMaterial("mat6")
      const multiMat7 = new StandardMaterial("mat7")
      
      multiMat1.diffuseColor = Color3.FromInts(204,153,102);
      multiMat2.diffuseColor = Color3.FromInts(204,153,102);
      multiMat3.diffuseColor = Color3.FromInts(204,153,102);
      multiMat4.diffuseColor = Color3.FromInts(204,153,102);
      multiMat5.diffuseColor = Color3.FromInts(204,153,102);
      multiMat6.diffuseColor = Color3.FromInts(204,153,102);
      multiMat7.diffuseColor = Color3.FromInts(88,54,41);
      const multiMat = new MultiMaterial("multi")
      multiMat.subMaterials.push(multiMat1);
      multiMat.subMaterials.push(multiMat2);
      multiMat.subMaterials.push(multiMat3);
      multiMat.subMaterials.push(multiMat4);
      multiMat.subMaterials.push(multiMat5);
      multiMat.subMaterials.push(multiMat6);
      multiMat.subMaterials.push(multiMat7);
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
      boxNew.material = multiMat;}
    
      else if (pieceIndex===2) {
        const boxNew = MeshBuilder.CreateCylinder('brownKite', {height: 7, diameter: 0.5, subdivisions: 7, });
        //boxNew.position = new Vector3(boxNew.position.x,boxNew.position.y,boxNew.position.z); 
        boxNew.position = new Vector3(2.5,0.5,-0.5)
        //let multiMat = new StandardMaterial('multiMat');
          const multiMat1 = new StandardMaterial("mat1")
          const multiMat2 = new StandardMaterial("mat2")
          const multiMat3 = new StandardMaterial("mat3")
          const multiMat4 = new StandardMaterial("mat4")
          const multiMat5 = new StandardMaterial("mat5")
          const multiMat6 = new StandardMaterial("mat6")
          const multiMat7 = new StandardMaterial("mat7")
          multiMat1.diffuseColor = Color3.FromInts(139,0,0);
          multiMat2.diffuseColor = Color3.FromInts(139,0,0);
          multiMat3.diffuseColor = Color3.FromInts(139,0,0);
          multiMat4.diffuseColor = Color3.FromInts(139,0,0);
          multiMat5.diffuseColor = Color3.FromInts(139,0,0);
          multiMat6.diffuseColor = Color3.FromInts(139,0,0);
          multiMat7.diffuseColor = Color3.FromInts(88,54,41);
          const multiMat = new MultiMaterial("multi")
          multiMat.subMaterials.push(multiMat1);
          multiMat.subMaterials.push(multiMat2);
          multiMat.subMaterials.push(multiMat3);
          multiMat.subMaterials.push(multiMat4);
          multiMat.subMaterials.push(multiMat5);
          multiMat.subMaterials.push(multiMat6);
          multiMat.subMaterials.push(multiMat7);
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
            //boxNew.position = new Vector3(boxNew.position.x,boxNew.position.y,boxNew.position.z); 
            boxNew.position = new Vector3(2.5,0.5,-0.5)
            //let multiMat = new StandardMaterial('multiMat');
              const multiMat1 = new StandardMaterial("mat1")
              const multiMat2 = new StandardMaterial("mat2")
              const multiMat3 = new StandardMaterial("mat3")
              const multiMat4 = new StandardMaterial("mat4")
              const multiMat5 = new StandardMaterial("mat5")
              const multiMat6 = new StandardMaterial("mat6")
              const multiMat7 = new StandardMaterial("mat7")
              multiMat1.diffuseColor = Color3.FromInts(10,10,10);
              multiMat2.diffuseColor = Color3.FromInts(10,10,10);
              multiMat3.diffuseColor = Color3.FromInts(10,10,10);
              multiMat4.diffuseColor = Color3.FromInts(10,10,10);
              multiMat5.diffuseColor = Color3.FromInts(10,10,10);
              multiMat6.diffuseColor = Color3.FromInts(10,10,10);
              multiMat7.diffuseColor = Color3.FromInts(88,54,41);
              const multiMat = new MultiMaterial("multi")
              multiMat.subMaterials.push(multiMat1);
              multiMat.subMaterials.push(multiMat2);
              multiMat.subMaterials.push(multiMat3);
              multiMat.subMaterials.push(multiMat4);
              multiMat.subMaterials.push(multiMat5);
              multiMat.subMaterials.push(multiMat6);
              multiMat.subMaterials.push(multiMat7);
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
   
        }
    )
  )           
}

const onCubeMakerCreatedb67 = (CubeMaker) => {
  CubeMaker.actionManager = new ActionManager(CubeMaker.getScene());
  CubeMaker.actionManager.registerAction(
  new ExecuteCodeAction(
  ActionManager.OnPickTrigger, function (ev) {
  
  if(pieceIndex===1) {    
  const boxNew = MeshBuilder.CreateCylinder('brownOwl', {height: 7, diameter: 0.5, subdivisions: 7, });
  //boxNew.position = new Vector3(boxNew.position.x,boxNew.position.y,boxNew.position.z); 
  boxNew.position = new Vector3(0.5,0.5,-1.5)
  //let multiMat = new StandardMaterial('multiMat');
  const multiMat1 = new StandardMaterial("mat1")
  const multiMat2 = new StandardMaterial("mat2")
  const multiMat3 = new StandardMaterial("mat3")
  const multiMat4 = new StandardMaterial("mat4")
  const multiMat5 = new StandardMaterial("mat5")
  const multiMat6 = new StandardMaterial("mat6")
  const multiMat7 = new StandardMaterial("mat7")
  multiMat1.diffuseColor = Color3.FromInts(204,153,102);
  multiMat2.diffuseColor = Color3.FromInts(204,153,102);
  multiMat3.diffuseColor = Color3.FromInts(204,153,102);
  multiMat4.diffuseColor = Color3.FromInts(204,153,102);
  multiMat5.diffuseColor = Color3.FromInts(204,153,102);
  multiMat6.diffuseColor = Color3.FromInts(204,153,102);
  multiMat7.diffuseColor = Color3.FromInts(88,54,41);
  const multiMat = new MultiMaterial("multi")
  multiMat.subMaterials.push(multiMat1);
  multiMat.subMaterials.push(multiMat2);
  multiMat.subMaterials.push(multiMat3);
  multiMat.subMaterials.push(multiMat4);
  multiMat.subMaterials.push(multiMat5);
  multiMat.subMaterials.push(multiMat6);
  multiMat.subMaterials.push(multiMat7);
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
  //boxNew.position = new Vector3(boxNew.position.x,boxNew.position.y,boxNew.position.z); 
  boxNew.position = new Vector3(0.5,0.5,-1.5)
  //let multiMat = new StandardMaterial('multiMat');
    const multiMat1 = new StandardMaterial("mat1")
    const multiMat2 = new StandardMaterial("mat2")
    const multiMat3 = new StandardMaterial("mat3")
    const multiMat4 = new StandardMaterial("mat4")
    const multiMat5 = new StandardMaterial("mat5")
    const multiMat6 = new StandardMaterial("mat6")
    const multiMat7 = new StandardMaterial("mat7")
    multiMat1.diffuseColor = Color3.FromInts(139,0,0);
    multiMat2.diffuseColor = Color3.FromInts(139,0,0);
    multiMat3.diffuseColor = Color3.FromInts(139,0,0);
    multiMat4.diffuseColor = Color3.FromInts(139,0,0);
    multiMat5.diffuseColor = Color3.FromInts(139,0,0);
    multiMat6.diffuseColor = Color3.FromInts(139,0,0);
    multiMat7.diffuseColor = Color3.FromInts(88,54,41);
    const multiMat = new MultiMaterial("multi")
    multiMat.subMaterials.push(multiMat1);
    multiMat.subMaterials.push(multiMat2);
    multiMat.subMaterials.push(multiMat3);
    multiMat.subMaterials.push(multiMat4);
    multiMat.subMaterials.push(multiMat5);
    multiMat.subMaterials.push(multiMat6);
    multiMat.subMaterials.push(multiMat7);
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
      //boxNew.position = new Vector3(boxNew.position.x,boxNew.position.y,boxNew.position.z); 
      boxNew.position = new Vector3(0.5,0.5,-1.5)
      //let multiMat = new StandardMaterial('multiMat');
        const multiMat1 = new StandardMaterial("mat1")
        const multiMat2 = new StandardMaterial("mat2")
        const multiMat3 = new StandardMaterial("mat3")
        const multiMat4 = new StandardMaterial("mat4")
        const multiMat5 = new StandardMaterial("mat5")
        const multiMat6 = new StandardMaterial("mat6")
        const multiMat7 = new StandardMaterial("mat7")
        multiMat1.diffuseColor = Color3.FromInts(10,10,10);
        multiMat2.diffuseColor = Color3.FromInts(10,10,10);
        multiMat3.diffuseColor = Color3.FromInts(10,10,10);
        multiMat4.diffuseColor = Color3.FromInts(10,10,10);
        multiMat5.diffuseColor = Color3.FromInts(10,10,10);
        multiMat6.diffuseColor = Color3.FromInts(10,10,10);
        multiMat7.diffuseColor = Color3.FromInts(88,54,41);
        const multiMat = new MultiMaterial("multi")
        multiMat.subMaterials.push(multiMat1);
        multiMat.subMaterials.push(multiMat2);
        multiMat.subMaterials.push(multiMat3);
        multiMat.subMaterials.push(multiMat4);
        multiMat.subMaterials.push(multiMat5);
        multiMat.subMaterials.push(multiMat6);
        multiMat.subMaterials.push(multiMat7);
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

          }    
       )
    )           
  }
  
  const onCubeMakerCreatedb66 = (CubeMaker) => {
  CubeMaker.actionManager = new ActionManager(CubeMaker.getScene());
  CubeMaker.actionManager.registerAction(
  new ExecuteCodeAction(
  ActionManager.OnPickTrigger, function (ev) {
   
  if(pieceIndex===1) {     
  const boxNew = MeshBuilder.CreateCylinder('brownOwl', {height: 7, diameter: 0.5, subdivisions: 7, });
  //boxNew.position = new Vector3(boxNew.position.x,boxNew.position.y,boxNew.position.z); 
   boxNew.position = new Vector3(1.5,0.5,-1.5)
  //let multiMat = new StandardMaterial('multiMat');
    const multiMat1 = new StandardMaterial("mat1")
    const multiMat2 = new StandardMaterial("mat2")
    const multiMat3 = new StandardMaterial("mat3")
    const multiMat4 = new StandardMaterial("mat4")
    const multiMat5 = new StandardMaterial("mat5")
    const multiMat6 = new StandardMaterial("mat6")
    const multiMat7 = new StandardMaterial("mat7")
    
    multiMat1.diffuseColor = Color3.FromInts(204,153,102);                   
    multiMat2.diffuseColor = Color3.FromInts(204,153,102);
    multiMat3.diffuseColor = Color3.FromInts(204,153,102);
    multiMat4.diffuseColor = Color3.FromInts(204,153,102);
    multiMat5.diffuseColor = Color3.FromInts(204,153,102);
    multiMat6.diffuseColor = Color3.FromInts(204,153,102);
    multiMat7.diffuseColor = Color3.FromInts(88,54,41);
    const multiMat = new MultiMaterial("multi")
    multiMat.subMaterials.push(multiMat1);
    multiMat.subMaterials.push(multiMat2);
    multiMat.subMaterials.push(multiMat3);
    multiMat.subMaterials.push(multiMat4);
    multiMat.subMaterials.push(multiMat5);
    multiMat.subMaterials.push(multiMat6);
    multiMat.subMaterials.push(multiMat7);
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
    boxNew.material = multiMat;}
  
    else if (pieceIndex===2) {
      const boxNew = MeshBuilder.CreateCylinder('brownKite', {height: 7, diameter: 0.5, subdivisions: 7, });
      //boxNew.position = new Vector3(boxNew.position.x,boxNew.position.y,boxNew.position.z); 
      boxNew.position = new Vector3(1.5,0.5,-1.5)
      //let multiMat = new StandardMaterial('multiMat');
        const multiMat1 = new StandardMaterial("mat1")
        const multiMat2 = new StandardMaterial("mat2")
        const multiMat3 = new StandardMaterial("mat3")
        const multiMat4 = new StandardMaterial("mat4")
        const multiMat5 = new StandardMaterial("mat5")
        const multiMat6 = new StandardMaterial("mat6")
        const multiMat7 = new StandardMaterial("mat7")
        multiMat1.diffuseColor = Color3.FromInts(139,0,0);
        multiMat2.diffuseColor = Color3.FromInts(139,0,0);
        multiMat3.diffuseColor = Color3.FromInts(139,0,0);
        multiMat4.diffuseColor = Color3.FromInts(139,0,0);
        multiMat5.diffuseColor = Color3.FromInts(139,0,0);
        multiMat6.diffuseColor = Color3.FromInts(139,0,0);
        multiMat7.diffuseColor = Color3.FromInts(88,54,41);
        const multiMat = new MultiMaterial("multi")
        multiMat.subMaterials.push(multiMat1);
        multiMat.subMaterials.push(multiMat2);
        multiMat.subMaterials.push(multiMat3);
        multiMat.subMaterials.push(multiMat4);
        multiMat.subMaterials.push(multiMat5);
        multiMat.subMaterials.push(multiMat6);
        multiMat.subMaterials.push(multiMat7);
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
          //boxNew.position = new Vector3(boxNew.position.x,boxNew.position.y,boxNew.position.z); 
          boxNew.position = new Vector3(1.5,0.5,-1.5)
          //let multiMat = new StandardMaterial('multiMat');
            const multiMat1 = new StandardMaterial("mat1")
            const multiMat2 = new StandardMaterial("mat2")
            const multiMat3 = new StandardMaterial("mat3")
            const multiMat4 = new StandardMaterial("mat4")
            const multiMat5 = new StandardMaterial("mat5")
            const multiMat6 = new StandardMaterial("mat6")
            const multiMat7 = new StandardMaterial("mat7")
            multiMat1.diffuseColor = Color3.FromInts(10,10,10);
            multiMat2.diffuseColor = Color3.FromInts(10,10,10);
            multiMat3.diffuseColor = Color3.FromInts(10,10,10);
            multiMat4.diffuseColor = Color3.FromInts(10,10,10);
            multiMat5.diffuseColor = Color3.FromInts(10,10,10);
            multiMat6.diffuseColor = Color3.FromInts(10,10,10);
            multiMat7.diffuseColor = Color3.FromInts(88,54,41);
            const multiMat = new MultiMaterial("multi")
            multiMat.subMaterials.push(multiMat1);
            multiMat.subMaterials.push(multiMat2);
            multiMat.subMaterials.push(multiMat3);
            multiMat.subMaterials.push(multiMat4);
            multiMat.subMaterials.push(multiMat5);
            multiMat.subMaterials.push(multiMat6);
            multiMat.subMaterials.push(multiMat7);
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
 
      }
     )
    )           
  }
  const onCubeMakerCreatedb65 = (CubeMaker) => {
  CubeMaker.actionManager = new ActionManager(CubeMaker.getScene());
  CubeMaker.actionManager.registerAction(
  new ExecuteCodeAction(
  ActionManager.OnPickTrigger, function (ev) {
  
    if(pieceIndex===1) {     
      const boxNew = MeshBuilder.CreateCylinder('brownOwl', {height: 7, diameter: 0.5, subdivisions: 7, });
      //boxNew.position = new Vector3(boxNew.position.x,boxNew.position.y,boxNew.position.z); 
       boxNew.position = new Vector3(2.5,0.5,-1.5)
      //let multiMat = new StandardMaterial('multiMat');
        const multiMat1 = new StandardMaterial("mat1")
        const multiMat2 = new StandardMaterial("mat2")
        const multiMat3 = new StandardMaterial("mat3")
        const multiMat4 = new StandardMaterial("mat4")
        const multiMat5 = new StandardMaterial("mat5")
        const multiMat6 = new StandardMaterial("mat6")
        const multiMat7 = new StandardMaterial("mat7")
        
        multiMat1.diffuseColor = Color3.FromInts(204,153,102);
        multiMat2.diffuseColor = Color3.FromInts(204,153,102);
        multiMat3.diffuseColor = Color3.FromInts(204,153,102);
        multiMat4.diffuseColor = Color3.FromInts(204,153,102);
        multiMat5.diffuseColor = Color3.FromInts(204,153,102);
        multiMat6.diffuseColor = Color3.FromInts(204,153,102);
        multiMat7.diffuseColor = Color3.FromInts(88,54,41);
        const multiMat = new MultiMaterial("multi")
        multiMat.subMaterials.push(multiMat1);
        multiMat.subMaterials.push(multiMat2);
        multiMat.subMaterials.push(multiMat3);
        multiMat.subMaterials.push(multiMat4);
        multiMat.subMaterials.push(multiMat5);
        multiMat.subMaterials.push(multiMat6);
        multiMat.subMaterials.push(multiMat7);
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
        boxNew.material = multiMat;}
      
        else if (pieceIndex===2) {
          const boxNew = MeshBuilder.CreateCylinder('brownKite', {height: 7, diameter: 0.5, subdivisions: 7, });
          //boxNew.position = new Vector3(boxNew.position.x,boxNew.position.y,boxNew.position.z); 
          boxNew.position = new Vector3(2.5,0.5,-1.5)
          //let multiMat = new StandardMaterial('multiMat');
            const multiMat1 = new StandardMaterial("mat1")
            const multiMat2 = new StandardMaterial("mat2")
            const multiMat3 = new StandardMaterial("mat3")
            const multiMat4 = new StandardMaterial("mat4")
            const multiMat5 = new StandardMaterial("mat5")
            const multiMat6 = new StandardMaterial("mat6")
            const multiMat7 = new StandardMaterial("mat7")
            multiMat1.diffuseColor = Color3.FromInts(139,0,0);
            multiMat2.diffuseColor = Color3.FromInts(139,0,0);
            multiMat3.diffuseColor = Color3.FromInts(139,0,0);
            multiMat4.diffuseColor = Color3.FromInts(139,0,0);
            multiMat5.diffuseColor = Color3.FromInts(139,0,0);
            multiMat6.diffuseColor = Color3.FromInts(139,0,0);
            multiMat7.diffuseColor = Color3.FromInts(88,54,41);
            const multiMat = new MultiMaterial("multi")
            multiMat.subMaterials.push(multiMat1);
            multiMat.subMaterials.push(multiMat2);
            multiMat.subMaterials.push(multiMat3);
            multiMat.subMaterials.push(multiMat4);
            multiMat.subMaterials.push(multiMat5);
            multiMat.subMaterials.push(multiMat6);
            multiMat.subMaterials.push(multiMat7);
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
              //boxNew.position = new Vector3(boxNew.position.x,boxNew.position.y,boxNew.position.z); 
              boxNew.position = new Vector3(2.5,0.5,-1.5)
              //let multiMat = new StandardMaterial('multiMat');
                const multiMat1 = new StandardMaterial("mat1")
                const multiMat2 = new StandardMaterial("mat2")
                const multiMat3 = new StandardMaterial("mat3")
                const multiMat4 = new StandardMaterial("mat4")
                const multiMat5 = new StandardMaterial("mat5")
                const multiMat6 = new StandardMaterial("mat6")
                const multiMat7 = new StandardMaterial("mat7")
                multiMat1.diffuseColor = Color3.FromInts(10,10,10);
                multiMat2.diffuseColor = Color3.FromInts(10,10,10);
                multiMat3.diffuseColor = Color3.FromInts(10,10,10);
                multiMat4.diffuseColor = Color3.FromInts(10,10,10);
                multiMat5.diffuseColor = Color3.FromInts(10,10,10);
                multiMat6.diffuseColor = Color3.FromInts(10,10,10);
                multiMat7.diffuseColor = Color3.FromInts(88,54,41);
                const multiMat = new MultiMaterial("multi")
                multiMat.subMaterials.push(multiMat1);
                multiMat.subMaterials.push(multiMat2);
                multiMat.subMaterials.push(multiMat3);
                multiMat.subMaterials.push(multiMat4);
                multiMat.subMaterials.push(multiMat5);
                multiMat.subMaterials.push(multiMat6);
                multiMat.subMaterials.push(multiMat7);
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
     
          }
      )
    )           
  }  
  const onCubeMakerCreatedb57 = (CubeMaker) => {
    CubeMaker.actionManager = new ActionManager(CubeMaker.getScene());
    CubeMaker.actionManager.registerAction(
    new ExecuteCodeAction(
    ActionManager.OnPickTrigger, function (ev) {
    
    if(pieceIndex===1) {    
    const boxNew = MeshBuilder.CreateCylinder('brownOwl', {height: 7, diameter: 0.5, subdivisions: 7, });
    //boxNew.position = new Vector3(boxNew.position.x,boxNew.position.y,boxNew.position.z); 
    boxNew.position = new Vector3(0.5,0.5,-2.5)
    //let multiMat = new StandardMaterial('multiMat');
    const multiMat1 = new StandardMaterial("mat1")
    const multiMat2 = new StandardMaterial("mat2")
    const multiMat3 = new StandardMaterial("mat3")
    const multiMat4 = new StandardMaterial("mat4")
    const multiMat5 = new StandardMaterial("mat5")
    const multiMat6 = new StandardMaterial("mat6")
    const multiMat7 = new StandardMaterial("mat7")
    multiMat1.diffuseColor = Color3.FromInts(204,153,102);
    multiMat2.diffuseColor = Color3.FromInts(204,153,102);
    multiMat3.diffuseColor = Color3.FromInts(204,153,102);
    multiMat4.diffuseColor = Color3.FromInts(204,153,102);
    multiMat5.diffuseColor = Color3.FromInts(204,153,102);
    multiMat6.diffuseColor = Color3.FromInts(204,153,102);
    multiMat7.diffuseColor = Color3.FromInts(88,54,41);
    const multiMat = new MultiMaterial("multi")
    multiMat.subMaterials.push(multiMat1);
    multiMat.subMaterials.push(multiMat2);
    multiMat.subMaterials.push(multiMat3);
    multiMat.subMaterials.push(multiMat4);
    multiMat.subMaterials.push(multiMat5);
    multiMat.subMaterials.push(multiMat6);
    multiMat.subMaterials.push(multiMat7);
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
    //boxNew.position = new Vector3(boxNew.position.x,boxNew.position.y,boxNew.position.z); 
    boxNew.position = new Vector3(0.5,0.5,-2.5)
    //let multiMat = new StandardMaterial('multiMat');
      const multiMat1 = new StandardMaterial("mat1")
      const multiMat2 = new StandardMaterial("mat2")
      const multiMat3 = new StandardMaterial("mat3")
      const multiMat4 = new StandardMaterial("mat4")
      const multiMat5 = new StandardMaterial("mat5")
      const multiMat6 = new StandardMaterial("mat6")
      const multiMat7 = new StandardMaterial("mat7")
      multiMat1.diffuseColor = Color3.FromInts(139,0,0);
      multiMat2.diffuseColor = Color3.FromInts(139,0,0);
      multiMat3.diffuseColor = Color3.FromInts(139,0,0);
      multiMat4.diffuseColor = Color3.FromInts(139,0,0);
      multiMat5.diffuseColor = Color3.FromInts(139,0,0);
      multiMat6.diffuseColor = Color3.FromInts(139,0,0);
      multiMat7.diffuseColor = Color3.FromInts(88,54,41);
      const multiMat = new MultiMaterial("multi")
      multiMat.subMaterials.push(multiMat1);
      multiMat.subMaterials.push(multiMat2);
      multiMat.subMaterials.push(multiMat3);
      multiMat.subMaterials.push(multiMat4);
      multiMat.subMaterials.push(multiMat5);
      multiMat.subMaterials.push(multiMat6);
      multiMat.subMaterials.push(multiMat7);
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
        //boxNew.position = new Vector3(boxNew.position.x,boxNew.position.y,boxNew.position.z); 
        boxNew.position = new Vector3(0.5,0.5,-2.5)
        //let multiMat = new StandardMaterial('multiMat');
          const multiMat1 = new StandardMaterial("mat1")
          const multiMat2 = new StandardMaterial("mat2")
          const multiMat3 = new StandardMaterial("mat3")
          const multiMat4 = new StandardMaterial("mat4")
          const multiMat5 = new StandardMaterial("mat5")
          const multiMat6 = new StandardMaterial("mat6")
          const multiMat7 = new StandardMaterial("mat7")
          multiMat1.diffuseColor = Color3.FromInts(10,10,10);
          multiMat2.diffuseColor = Color3.FromInts(10,10,10);
          multiMat3.diffuseColor = Color3.FromInts(10,10,10);
          multiMat4.diffuseColor = Color3.FromInts(10,10,10);
          multiMat5.diffuseColor = Color3.FromInts(10,10,10);
          multiMat6.diffuseColor = Color3.FromInts(10,10,10);
          multiMat7.diffuseColor = Color3.FromInts(88,54,41);
          const multiMat = new MultiMaterial("multi")
          multiMat.subMaterials.push(multiMat1);
          multiMat.subMaterials.push(multiMat2);
          multiMat.subMaterials.push(multiMat3);
          multiMat.subMaterials.push(multiMat4);
          multiMat.subMaterials.push(multiMat5);
          multiMat.subMaterials.push(multiMat6);
          multiMat.subMaterials.push(multiMat7);
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

            }    
         )
      )           
    }
    
    const onCubeMakerCreatedb56 = (CubeMaker) => {
    CubeMaker.actionManager = new ActionManager(CubeMaker.getScene());
    CubeMaker.actionManager.registerAction(
    new ExecuteCodeAction(
    ActionManager.OnPickTrigger, function (ev) {
     
    if(pieceIndex===1) {     
    const boxNew = MeshBuilder.CreateCylinder('brownOwl', {height: 7, diameter: 0.5, subdivisions: 7, });
    //boxNew.position = new Vector3(boxNew.position.x,boxNew.position.y,boxNew.position.z); 
     boxNew.position = new Vector3(1.5,0.5,-2.5)
    //let multiMat = new StandardMaterial('multiMat');
      const multiMat1 = new StandardMaterial("mat1")
      const multiMat2 = new StandardMaterial("mat2")
      const multiMat3 = new StandardMaterial("mat3")
      const multiMat4 = new StandardMaterial("mat4")
      const multiMat5 = new StandardMaterial("mat5")
      const multiMat6 = new StandardMaterial("mat6")
      const multiMat7 = new StandardMaterial("mat7")
      
      multiMat1.diffuseColor = Color3.FromInts(204,153,102);
      multiMat2.diffuseColor = Color3.FromInts(204,153,102);
      multiMat3.diffuseColor = Color3.FromInts(204,153,102);
      multiMat4.diffuseColor = Color3.FromInts(204,153,102);
      multiMat5.diffuseColor = Color3.FromInts(204,153,102);
      multiMat6.diffuseColor = Color3.FromInts(204,153,102);
      multiMat7.diffuseColor = Color3.FromInts(88,54,41);
      const multiMat = new MultiMaterial("multi")
      multiMat.subMaterials.push(multiMat1);
      multiMat.subMaterials.push(multiMat2);
      multiMat.subMaterials.push(multiMat3);
      multiMat.subMaterials.push(multiMat4);
      multiMat.subMaterials.push(multiMat5);
      multiMat.subMaterials.push(multiMat6);
      multiMat.subMaterials.push(multiMat7);
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
      boxNew.material = multiMat;}
    
      else if (pieceIndex===2) {
        const boxNew = MeshBuilder.CreateCylinder('brownKite', {height: 7, diameter: 0.5, subdivisions: 7, });
        //boxNew.position = new Vector3(boxNew.position.x,boxNew.position.y,boxNew.position.z); 
        boxNew.position = new Vector3(1.5,0.5,-2.5)
        //let multiMat = new StandardMaterial('multiMat');
          const multiMat1 = new StandardMaterial("mat1")
          const multiMat2 = new StandardMaterial("mat2")
          const multiMat3 = new StandardMaterial("mat3")
          const multiMat4 = new StandardMaterial("mat4")
          const multiMat5 = new StandardMaterial("mat5")
          const multiMat6 = new StandardMaterial("mat6")
          const multiMat7 = new StandardMaterial("mat7")
          multiMat1.diffuseColor = Color3.FromInts(139,0,0);
          multiMat2.diffuseColor = Color3.FromInts(139,0,0);
          multiMat3.diffuseColor = Color3.FromInts(139,0,0);
          multiMat4.diffuseColor = Color3.FromInts(139,0,0);
          multiMat5.diffuseColor = Color3.FromInts(139,0,0);
          multiMat6.diffuseColor = Color3.FromInts(139,0,0);
          multiMat7.diffuseColor = Color3.FromInts(88,54,41);
          const multiMat = new MultiMaterial("multi")
          multiMat.subMaterials.push(multiMat1);
          multiMat.subMaterials.push(multiMat2);
          multiMat.subMaterials.push(multiMat3);
          multiMat.subMaterials.push(multiMat4);
          multiMat.subMaterials.push(multiMat5);
          multiMat.subMaterials.push(multiMat6);
          multiMat.subMaterials.push(multiMat7);
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
            //boxNew.position = new Vector3(boxNew.position.x,boxNew.position.y,boxNew.position.z); 
            boxNew.position = new Vector3(1.5,0.5,-2.5)
            //let multiMat = new StandardMaterial('multiMat');
              const multiMat1 = new StandardMaterial("mat1")
              const multiMat2 = new StandardMaterial("mat2")
              const multiMat3 = new StandardMaterial("mat3")
              const multiMat4 = new StandardMaterial("mat4")
              const multiMat5 = new StandardMaterial("mat5")
              const multiMat6 = new StandardMaterial("mat6")
              const multiMat7 = new StandardMaterial("mat7")
              multiMat1.diffuseColor = Color3.FromInts(10,10,10);
              multiMat2.diffuseColor = Color3.FromInts(10,10,10);
              multiMat3.diffuseColor = Color3.FromInts(10,10,10);
              multiMat4.diffuseColor = Color3.FromInts(10,10,10);
              multiMat5.diffuseColor = Color3.FromInts(10,10,10);
              multiMat6.diffuseColor = Color3.FromInts(10,10,10);
              multiMat7.diffuseColor = Color3.FromInts(88,54,41);
              const multiMat = new MultiMaterial("multi")
              multiMat.subMaterials.push(multiMat1);
              multiMat.subMaterials.push(multiMat2);
              multiMat.subMaterials.push(multiMat3);
              multiMat.subMaterials.push(multiMat4);
              multiMat.subMaterials.push(multiMat5);
              multiMat.subMaterials.push(multiMat6);
              multiMat.subMaterials.push(multiMat7);
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
   
        }
       )
      )           
    }
    const onCubeMakerCreatedb55 = (CubeMaker) => {
    CubeMaker.actionManager = new ActionManager(CubeMaker.getScene());
    CubeMaker.actionManager.registerAction(
    new ExecuteCodeAction(
    ActionManager.OnPickTrigger, function (ev) {
    
      if(pieceIndex===1) {     
        const boxNew = MeshBuilder.CreateCylinder('brownOwl', {height: 7, diameter: 0.5, subdivisions: 7, });
        //boxNew.position = new Vector3(boxNew.position.x,boxNew.position.y,boxNew.position.z); 
         boxNew.position = new Vector3(2.5,0.5,-2.5)
        //let multiMat = new StandardMaterial('multiMat');
          const multiMat1 = new StandardMaterial("mat1")
          const multiMat2 = new StandardMaterial("mat2")
          const multiMat3 = new StandardMaterial("mat3")
          const multiMat4 = new StandardMaterial("mat4")
          const multiMat5 = new StandardMaterial("mat5")
          const multiMat6 = new StandardMaterial("mat6")
          const multiMat7 = new StandardMaterial("mat7")
          
          multiMat1.diffuseColor = Color3.FromInts(204,153,102);
          multiMat2.diffuseColor = Color3.FromInts(204,153,102);
          multiMat3.diffuseColor = Color3.FromInts(204,153,102);
          multiMat4.diffuseColor = Color3.FromInts(204,153,102);
          multiMat5.diffuseColor = Color3.FromInts(204,153,102);
          multiMat6.diffuseColor = Color3.FromInts(204,153,102);
          multiMat7.diffuseColor = Color3.FromInts(88,54,41);
          const multiMat = new MultiMaterial("multi")
          multiMat.subMaterials.push(multiMat1);
          multiMat.subMaterials.push(multiMat2);
          multiMat.subMaterials.push(multiMat3);
          multiMat.subMaterials.push(multiMat4);
          multiMat.subMaterials.push(multiMat5);
          multiMat.subMaterials.push(multiMat6);
          multiMat.subMaterials.push(multiMat7);
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
          boxNew.material = multiMat;}
        
          else if (pieceIndex===2) {
            const boxNew = MeshBuilder.CreateCylinder('brownKite', {height: 7, diameter: 0.5, subdivisions: 7, });
            //boxNew.position = new Vector3(boxNew.position.x,boxNew.position.y,boxNew.position.z); 
            boxNew.position = new Vector3(2.5,0.5,-2.5)
            //let multiMat = new StandardMaterial('multiMat');
              const multiMat1 = new StandardMaterial("mat1")
              const multiMat2 = new StandardMaterial("mat2")
              const multiMat3 = new StandardMaterial("mat3")
              const multiMat4 = new StandardMaterial("mat4")
              const multiMat5 = new StandardMaterial("mat5")
              const multiMat6 = new StandardMaterial("mat6")
              const multiMat7 = new StandardMaterial("mat7")
              multiMat1.diffuseColor = Color3.FromInts(139,0,0);
              multiMat2.diffuseColor = Color3.FromInts(139,0,0);
              multiMat3.diffuseColor = Color3.FromInts(139,0,0);
              multiMat4.diffuseColor = Color3.FromInts(139,0,0);
              multiMat5.diffuseColor = Color3.FromInts(139,0,0);
              multiMat6.diffuseColor = Color3.FromInts(139,0,0);
              multiMat7.diffuseColor = Color3.FromInts(88,54,41);
              const multiMat = new MultiMaterial("multi")
              multiMat.subMaterials.push(multiMat1);
              multiMat.subMaterials.push(multiMat2);
              multiMat.subMaterials.push(multiMat3);
              multiMat.subMaterials.push(multiMat4);
              multiMat.subMaterials.push(multiMat5);
              multiMat.subMaterials.push(multiMat6);
              multiMat.subMaterials.push(multiMat7);
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
                //boxNew.position = new Vector3(boxNew.position.x,boxNew.position.y,boxNew.position.z); 
                boxNew.position = new Vector3(2.5,0.5,-2.5)
                //let multiMat = new StandardMaterial('multiMat');
                  const multiMat1 = new StandardMaterial("mat1")
                  const multiMat2 = new StandardMaterial("mat2")
                  const multiMat3 = new StandardMaterial("mat3")
                  const multiMat4 = new StandardMaterial("mat4")
                  const multiMat5 = new StandardMaterial("mat5")
                  const multiMat6 = new StandardMaterial("mat6")
                  const multiMat7 = new StandardMaterial("mat7")
                  multiMat1.diffuseColor = Color3.FromInts(10,10,10);
                  multiMat2.diffuseColor = Color3.FromInts(10,10,10);
                  multiMat3.diffuseColor = Color3.FromInts(10,10,10);
                  multiMat4.diffuseColor = Color3.FromInts(10,10,10);
                  multiMat5.diffuseColor = Color3.FromInts(10,10,10);
                  multiMat6.diffuseColor = Color3.FromInts(10,10,10);
                  multiMat7.diffuseColor = Color3.FromInts(88,54,41);
                  const multiMat = new MultiMaterial("multi")
                  multiMat.subMaterials.push(multiMat1);
                  multiMat.subMaterials.push(multiMat2);
                  multiMat.subMaterials.push(multiMat3);
                  multiMat.subMaterials.push(multiMat4);
                  multiMat.subMaterials.push(multiMat5);
                  multiMat.subMaterials.push(multiMat6);
                  multiMat.subMaterials.push(multiMat7);
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
        
            }
        )
      )           
    }
  
function onMeshPicked(pickedMesh){
   if(pickedMesh.name === "brownOwl") {
       pieceIndex =1;
       pickedMesh.dispose()
       console.log(pieceIndex)
        }
  else if(pickedMesh.name === "brownKite") {
        pieceIndex = 2;
        pickedMesh.dispose()
        console.log(pieceIndex)
      }
  else if(pickedMesh.name === "brownRaven") {
        pieceIndex = 3;
        pickedMesh.dispose()
        console.log(pieceIndex)
      }
   }


 export const WithSquareTest= () => {
    return(
        <div className="App">
           <Engine antialias adaptToDeviceRatio canvasId='babylonJS'>
            <Scene onMeshPicked={onMeshPicked} >
             <arcRotateCamera  name="camera1"  target={new Vector3(0.5,-0.5,0)} alpha={-Math.PI/4 } beta={Math.PI / 3} radius={30} />
             <hemisphericLight name='light1' intensity={0.7} direction={Vector3.Up()} />
             <hemisphericLight name='light1' intensity={0.7} direction={Vector3.Down()} />
           
             <box name = "brown-7-7"    rotation = {new Vector3(0,0,0)}    position = {new Vector3(0.5,-3.5,-0.5)}  onCreated={onCubeMakerCreatedb77}> 
             <standardMaterial name = "dark square" diffuseColor =  {Color3.FromInts(75,54,33)} />  
             </box>
            <box name = "brown-7-6"   rotation = {new Vector3(0,0,0)}    position = {new Vector3(1.5,-3.5,-0.5)}    onCreated={onCubeMakerCreatedb76}>
             <standardMaterial name = "light square" diffuseColor =  {Color3.FromInts(240,230,140)} />  
            </box>

             <box name = "brown-7-5"   rotation = {new Vector3(0,0,0)}    position = {new Vector3(2.5,-3.5,-0.5)}    onCreated={onCubeMakerCreatedb75}>
             <standardMaterial name = "light square" diffuseColor =  {Color3.FromInts(75,54,33)} />  
            </box>

            <box name = "brown-6-7"    rotation = {new Vector3(0,0,0)}    position = {new Vector3(0.5,-3.5,-1.5)}  onCreated={onCubeMakerCreatedb67}> 
             <standardMaterial name = "dark square" diffuseColor =  {Color3.FromInts(240,230,140)} />  
             </box>
            <box name = "brown-6-6"    rotation = {new Vector3(0,0,0)}    position = {new Vector3(1.5,-3.5,-1.5)}  onCreated={onCubeMakerCreatedb66}> 
             <standardMaterial name = "dark square" diffuseColor =  {Color3.FromInts(75,54,33)} />  
             </box>
            <box name = "brown-6-5"    rotation = {new Vector3(0,0,0)}    position = {new Vector3(2.5,-3.5,-1.5)}  onCreated={onCubeMakerCreatedb65}> 
             <standardMaterial name = "dark square" diffuseColor =  {Color3.FromInts(240,230,140)} />  
             </box>

             <box name = "brown-5-7"    rotation = {new Vector3(0,0,0)}    position = {new Vector3(0.5,-3.5,-2.5)}  onCreated={onCubeMakerCreatedb57}> 
             <standardMaterial name = "dark square" diffuseColor =  {Color3.FromInts(75,54,33)} />  
             </box>
            <box name = "brown-5-6"   rotation = {new Vector3(0,0,0)}    position = {new Vector3(1.5,-3.5,-2.5)}    onCreated={onCubeMakerCreatedb56}>
             <standardMaterial name = "light square" diffuseColor =  {Color3.FromInts(240,230,140)} />  
            </box>

             <box name = "brown-5-5"   rotation = {new Vector3(0,0,0)}    position = {new Vector3(2.5,-3.5,-2.5)}    onCreated={onCubeMakerCreatedb55}>
             <standardMaterial name = "light square" diffuseColor =  {Color3.FromInts(75,54,33)} />  
            </box>


            <WithUseClickBrownOwl1/>       
            <WithUseClickBrownKite1/>       
            <WithUseClickBrownRaven1/>


            </Scene>
        </Engine>
      </div>
   
  ) 
}

/*<box name = "dark1" length={1} width={1} position = {new Vector3(2,2,2)}  onCreated={onCubeMakerCreated}>
<standardMaterial name = "dark square" diffuseColor =  {Color3.FromInts(75,54,33)} />  
</box>

<box name = "light1" length={1} width={1} position = {new Vector3(3,2,2)}  onCreated={onCubeMakerCreated1}>
<standardMaterial name = "light square" diffuseColor =  {Color3.FromInts(240,230,140)} />  
</box>
*/