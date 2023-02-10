import React, {useState }from 'react'
import {Vector3, MeshBuilder, SubMesh, StandardMaterial, MultiMaterial} from '@babylonjs/core';
import {Engine, Scene, useClick} from 'react-babylonjs'
import {Color3} from '@babylonjs/core/Maths/math.color';
import {ActionManager } from '@babylonjs/core/Actions/actionManager';
import {ExecuteCodeAction } from '@babylonjs/core/Actions/directActions';


//This variable changes value depending on which piece is clicked, and determines which piece is generated when a square is clicked. 
let pieceIndex =0;

// the following three functions are called by the actionManagers, to generate the different pieces. 
function OwlMaker(pieceName, piecePosition, pieceRotation,TeamMat) {
const pieceNew = MeshBuilder.CreateCylinder(pieceName, {height: 7, diameter: 0.5, subdivisions: 7, });
pieceNew.position = piecePosition 
pieceNew.rotation = pieceRotation
const owlMat = new StandardMaterial("owlMat")
owlMat.diffuseColor = Color3.FromInts(204,153,102);
const multiMat = new MultiMaterial("multi")
multiMat.subMaterials.push(owlMat);
multiMat.subMaterials.push(owlMat);
multiMat.subMaterials.push(owlMat);
multiMat.subMaterials.push(owlMat);
multiMat.subMaterials.push(owlMat);
multiMat.subMaterials.push(owlMat);
multiMat.subMaterials.push(TeamMat);
pieceNew.subMeshes = [];
let verticesCount = pieceNew.getTotalVertices();
console.log(verticesCount)
pieceNew.subMeshes.push(new SubMesh(0,0,verticesCount,0,144,pieceNew))
pieceNew.subMeshes.push(new SubMesh(1,0,verticesCount,144,144,pieceNew))
pieceNew.subMeshes.push(new SubMesh(2,0,verticesCount,288,144,pieceNew))
pieceNew.subMeshes.push(new SubMesh(3,0,verticesCount,432,144,pieceNew))
pieceNew.subMeshes.push(new SubMesh(4,0,verticesCount,576,144,pieceNew))
pieceNew.subMeshes.push(new SubMesh(5,0,verticesCount,720,144,pieceNew))
pieceNew.subMeshes.push(new SubMesh(6,0,verticesCount,864,144,pieceNew))
pieceNew.subMeshes.push(new SubMesh(6,0,verticesCount,1008,144,pieceNew))
pieceNew.material = multiMat; 
return(
pieceNew 
)
}
function KiteMaker(pieceName, piecePosition, pieceRotation, TeamMat) {
const pieceNew = MeshBuilder.CreateCylinder(pieceName, {height: 7, diameter: 0.5, subdivisions: 7, });
pieceNew.position = piecePosition
pieceNew.rotation = pieceRotation
const kiteMat = new StandardMaterial("kiteMat") 
kiteMat.diffuseColor = Color3.FromInts(139,0,0);
const multiMat = new MultiMaterial("multi")
multiMat.subMaterials.push(kiteMat);
multiMat.subMaterials.push(kiteMat);
multiMat.subMaterials.push(kiteMat);
multiMat.subMaterials.push(kiteMat);
multiMat.subMaterials.push(kiteMat);
multiMat.subMaterials.push(kiteMat);
multiMat.subMaterials.push(TeamMat);
pieceNew.subMeshes = [];
let verticesCount = pieceNew.getTotalVertices();
console.log(verticesCount)
pieceNew.subMeshes.push(new SubMesh(0,0,verticesCount,0,144,pieceNew))
pieceNew.subMeshes.push(new SubMesh(1,0,verticesCount,144,144,pieceNew))
pieceNew.subMeshes.push(new SubMesh(2,0,verticesCount,288,144,pieceNew))
pieceNew.subMeshes.push(new SubMesh(3,0,verticesCount,432,144,pieceNew))
pieceNew.subMeshes.push(new SubMesh(4,0,verticesCount,576,144,pieceNew))
pieceNew.subMeshes.push(new SubMesh(5,0,verticesCount,720,144,pieceNew))
pieceNew.subMeshes.push(new SubMesh(6,0,verticesCount,864,144,pieceNew))
pieceNew.subMeshes.push(new SubMesh(6,0,verticesCount,1008,144,pieceNew))
pieceNew.material = multiMat;
return(
pieceNew
 )
}
function RavenMaker(pieceName,piecePosition, pieceRotation, TeamMat){
const pieceNew = MeshBuilder.CreateCylinder(pieceName, {height: 7, diameter: 0.5, subdivisions: 7, });
pieceNew.position = piecePosition
pieceNew.rotation = pieceRotation
const ravenMat = new StandardMaterial("ravenMat")
ravenMat.diffuseColor = Color3.FromInts(10,10,10);
const multiMat = new MultiMaterial("multi")
multiMat.subMaterials.push(ravenMat);
multiMat.subMaterials.push(ravenMat);
multiMat.subMaterials.push(ravenMat);
multiMat.subMaterials.push(ravenMat);
multiMat.subMaterials.push(ravenMat);
multiMat.subMaterials.push(ravenMat);
multiMat.subMaterials.push(TeamMat);
pieceNew.subMeshes = [];
let verticesCount = pieceNew.getTotalVertices();
console.log(verticesCount)
pieceNew.subMeshes.push(new SubMesh(0,0,verticesCount,0,144,pieceNew))
pieceNew.subMeshes.push(new SubMesh(1,0,verticesCount,144,144,pieceNew))
pieceNew.subMeshes.push(new SubMesh(2,0,verticesCount,288,144,pieceNew))
pieceNew.subMeshes.push(new SubMesh(3,0,verticesCount,432,144,pieceNew))
pieceNew.subMeshes.push(new SubMesh(4,0,verticesCount,576,144,pieceNew))
pieceNew.subMeshes.push(new SubMesh(5,0,verticesCount,720,144,pieceNew))
pieceNew.subMeshes.push(new SubMesh(6,0,verticesCount,864,144,pieceNew))
pieceNew.subMeshes.push(new SubMesh(6,0,verticesCount,1008,144,pieceNew))
pieceNew.material = multiMat; 
return(
pieceNew
 )
}  
//the following nine blocks set up the initial positions of the pieces.
const  WithUseClickBrownOwl1 = () =>{
const [meshPosition, setPiecePosition] = useState(new Vector3(6,-2.75,-.5));
const [meshRotation, setPieceRotation] = useState(new Vector3(Math.PI/2,0,0))
const [hoot]= useClick(_=> {
setPiecePosition(meshPosition)  
setPieceRotation(meshRotation)
});
return(
<cylinder name = "brownOwl" ref = {hoot} height = {14.2} diameter={0.55}  position = {meshPosition} rotation = {meshRotation}>
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
const [meshPosition, setPiecePosition] = useState(new Vector3(5,-1.75,-.5));
const [meshRotation, setPieceRotation] = useState(new Vector3(Math.PI/2,0,0))
const [shriek]= useClick(_=> {
setPiecePosition(meshPosition) 
setPieceRotation(meshRotation) 
});
return(
<cylinder name = "brownKite" ref = {shriek} height = {14.2} diameter={0.55}  position = {meshPosition} rotation = {meshRotation}>
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
const [meshPosition, setPiecePosition] = useState(new Vector3(4,-.75, -.5));
const [meshRotation, setPieceRotation] = useState(new Vector3(Math.PI/2,0,0))
const [cronk]= useClick(_=> {
setPiecePosition(meshPosition) 
setPieceRotation(meshRotation) 
});
return(
<cylinder name = "brownRaven" ref = {cronk} height = {14.2} diameter={0.55}  position = {meshPosition} rotation = {meshRotation}>
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
const  WithUseClickYellowOwl1 = () =>{
const [meshPosition, setPiecePosition] = useState(new Vector3(0, -3.25, 6));
const [meshRotation, setPieceRotation] = useState(new Vector3(0,0,0));
const [hoot]= useClick(_=> {
setPiecePosition(meshPosition)  
setPieceRotation(meshRotation)
});
return(
<cylinder name = "yellowOwl" ref = {hoot} height = {14.2} diameter={0.55}  position = {meshPosition} rotation = {meshRotation}>
<cylinder name = "yellowOwlBody" height={6} diameter = {0.5}   position = {new Vector3(0,3,0)}>
<cylinder name = "yellowOwlHead" height = {1} diameter = {0.5} position = {new Vector3(0,3.5,0)} >
<standardMaterial name = "yellowTeam-mat" diffuseColor = {Color3.FromInts(255,204,0)} />
</cylinder>
<standardMaterial name = "owl-mat"  diffuseColor = {Color3.FromInts(204,153,102)}/>  
</cylinder>
<standardMaterial name = "clear-mat " alpha = {0} />
</cylinder>
   ) 
}
const  WithUseClickYellowKite1 = () =>{
const [meshPosition, setPiecePosition] = useState(new Vector3(1, -3.25, 5));
const [meshRotation, setPieceRotation] = useState(new Vector3(0,0,0));
const [shriek]= useClick(_=> {
setPiecePosition(meshPosition) 
setPieceRotation(meshRotation) 
});
return(
<cylinder name = "yellowKite" ref = {shriek} height = {14.2} diameter={0.55}  position = {meshPosition} rotation = {meshRotation}>
<cylinder name = "yellowKiteBody" height={6} diameter = {0.5}   position = {new Vector3(0,3,0)}>
<cylinder name = "yellowKiteHead" height = {1} diameter = {0.5} position = {new Vector3(0,3.5,0)} >
<standardMaterial name = "yellowTeam-mat" diffuseColor = {Color3.FromInts(255,204,0)} />
</cylinder>
<standardMaterial name = "kite-mat"  diffuseColor = {Color3.FromInts(139,0,0)}/>  
</cylinder>
<standardMaterial name = "clear-mat " alpha = {0} />
</cylinder>
   )
}
const  WithUseClickYellowRaven1 = () =>{
const [meshPosition, setPiecePosition] = useState(new Vector3(2,-3.25, 4));
const [meshRotation, setPieceRotation] = useState(new Vector3(0,0,0))
const [cronk]= useClick(_=> {
setPiecePosition(meshPosition) 
setPieceRotation(meshRotation) 
});
return(
<cylinder name = "yellowRaven" ref = {cronk} height = {14.2} diameter={0.55}  position = {meshPosition} rotation = {meshRotation}>
<cylinder name = "yellowRavenBody" height={6} diameter = {0.5}   position = {new Vector3(0,3,0)}>
<cylinder name = "yellowRavenHead" height = {1} diameter = {0.5} position = {new Vector3(0,3.5,0)} >
<standardMaterial name = "yellowTeam-mat" diffuseColor = {Color3.FromInts(255,204,0)} />
</cylinder>
<standardMaterial name = "raven-mat"  diffuseColor = {Color3.FromInts(10,10,10)}/>  
</cylinder>
<standardMaterial name = "clear-mat " alpha = {0} />
</cylinder>
    )
 }
const  WithUseClickGreenOwl1 = () =>{
const [meshPosition, setPiecePosition] = useState(new Vector3(-0.5,3.25,0));
const [meshRotation, setPieceRotation] = useState(new Vector3(0,0, -Math.PI/2));
const [hoot]= useClick(_=> {
setPiecePosition(meshPosition)  
setPieceRotation(meshRotation)
});
return(
<cylinder name = "greenOwl" ref = {hoot} height = {14.2} diameter={0.55}  position = {meshPosition} rotation = {meshRotation}>
<cylinder name = "greenOwlBody" height={6} diameter = {0.5}   position = {new Vector3(0,3,0)}>
<cylinder name = "greenOwlHead" height = {1} diameter = {0.5} position = {new Vector3(0,3.5,0)} >
<standardMaterial name = "greenTeam-mat" diffuseColor = {Color3.FromInts(8,64,0)} />
</cylinder>
<standardMaterial name = "owl-mat"  diffuseColor = {Color3.FromInts(204,153,102)}/>  
</cylinder>
<standardMaterial name = "clear-mat " alpha = {0} />
</cylinder>
    ) 
 }
const  WithUseClickGreenKite1 = () =>{
const [meshPosition, setPiecePosition] = useState(new Vector3(-0.5,2.25,1));
const [meshRotation, setPieceRotation] = useState(new Vector3(0,0,-Math.PI/2))
const [cronk]= useClick(_=> {
setPiecePosition(meshPosition) 
setPieceRotation(meshRotation) 
});
return(
<cylinder name = "greenKite" ref = {cronk} height = {14.2} diameter={0.55}  position = {meshPosition} rotation = {meshRotation}>
<cylinder name = "greenKiteBody" height={6} diameter = {0.5}   position = {new Vector3(0,3,0)}>
<cylinder name = "greenKiteHead" height = {1} diameter = {0.5} position = {new Vector3(0,3.5,0)} >
<standardMaterial name = "greenTeam-mat" diffuseColor = {Color3.FromInts(8,64,0)} />
</cylinder>
<standardMaterial name = "kite-mat"  diffuseColor = {Color3.FromInts(139,0,0)}/>  
</cylinder>
<standardMaterial name = "clear-mat " alpha = {0} />
</cylinder>
   )
 }
 const  WithUseClickGreenRaven1 = () =>{
const [meshPosition, setPiecePosition] = useState(new Vector3(-0.5,1.25,2));
const [meshRotation, setPieceRotation] = useState(new Vector3(0,0,-Math.PI/2))
const [cronk]= useClick(_=> {
setPiecePosition(meshPosition) 
setPieceRotation(meshRotation) 
});
return(
<cylinder name = "greenRaven" ref = {cronk} height = {14.2} diameter={0.55}  position = {meshPosition} rotation = {meshRotation}>
<cylinder name = "greenRavenBody" height={6} diameter = {0.5}   position = {new Vector3(0,3,0)}>
<cylinder name = "greenRavenHead" height = {1} diameter = {0.5} position = {new Vector3(0,3.5,0)} >
<standardMaterial name = "greenTeam-mat" diffuseColor = {Color3.FromInts(8,64,0)} />
</cylinder>
<standardMaterial name = "raven-mat"  diffuseColor = {Color3.FromInts(10,10,10)}/>  
</cylinder>
<standardMaterial name = "clear-mat " alpha = {0} />
</cylinder>
   )
}
 //the following nine blocks (three faces, three sets of cubes making up each face)
 // establish actionManagers on each square that can make any of the nine different pieces
const OnBoxesCreatedBlackOuterYellowFace = (Box) =>{
const boxCount = 7;
for (let i=0; i<boxCount; i++){
for(let j=0; j<boxCount; j++){
if(j%2 ===0 && i%2 ===0){
const box = MeshBuilder.CreateBox("box0", {width: 1, height: 0.5}, Box.getScene());
box.position.x = i;
box.position.y = -3.5;
box.position.z = j;
const myMaterial = new StandardMaterial("myMat")
myMaterial.diffuseColor = Color3.FromInts(75,54,33)
myMaterial.specularColor = Color3.Black()
box.material = myMaterial
box.actionManager = new ActionManager(Box.getScene())
box.actionManager.registerAction(
new ExecuteCodeAction(
ActionManager.OnPickDownTrigger, function (ev){
const brownTeamMat = new StandardMaterial("brownTeamMat") 
brownTeamMat.diffuseColor = Color3.FromInts(88,54,41)
const yellowTeamMat = new StandardMaterial("yellowTeamMat") 
yellowTeamMat.diffuseColor = Color3.FromInts(255,204,0)  
const greenTeamMat = new StandardMaterial("greenTeamMat") 
greenTeamMat.diffuseColor =  Color3.FromInts(8,64,0)

if(pieceIndex===1) {  
OwlMaker("brownOwl", new Vector3(box.position.x, box.position.y+3.75, box.position.z), new Vector3(0,0,0), brownTeamMat)
}
else if (pieceIndex===2) {
KiteMaker("brownKite", new Vector3(box.position.x, box.position.y+3.75, box.position.z), new Vector3(0,0,0,), brownTeamMat)
}
else if (pieceIndex===3) {
RavenMaker("brownRaven", new Vector3(box.position.x, box.position.y+3.75, box.position.z), new Vector3(0,0,0), brownTeamMat)
}
else if (pieceIndex===4) {
OwlMaker("yellowOwl",  new Vector3(box.position.x, box.position.y+3.75, box.position.z), new Vector3(0,0,0), yellowTeamMat)
}
else if (pieceIndex===5) {
KiteMaker("yellowKite", new Vector3(box.position.x, box.position.y+3.75, box.position.z), new Vector3(0,0,0), yellowTeamMat)
 }                     
else if (pieceIndex===6) {
RavenMaker("yellowRaven", new Vector3(box.position.x, box.position.y+3.75, box.position.z), new Vector3(0,0,0), yellowTeamMat)
  } 
else if (pieceIndex===7) {
OwlMaker("greenOwl", new Vector3(box.position.x, box.position.y+3.75, box.position.z), new Vector3(0,0,0), greenTeamMat)
  } 
else if (pieceIndex===8) {
KiteMaker("greenKite", new Vector3(box.position.x, box.position.y+3.75, box.position.z), new Vector3(0,0,0), greenTeamMat)
  } 
else if (pieceIndex===9) {
RavenMaker("greenRaven", new Vector3(box.position.x, box.position.y+3.75, box.position.z), new Vector3(0,0,0), greenTeamMat)
  } 
                  }
               )
            )
         }
       }
     }
}


const OnBoxesCreatedBlackInnerYellowFace = (Box) =>{
const boxCount = 7;
for (let i=0; i<boxCount; i++){
for(let j=0; j<boxCount; j++){
if (j%2!==0 && i%2!==0){
const box = MeshBuilder.CreateBox("box0", {width: 1, height: 0.5}, Box.getScene());
box.position.x = i;
box.position.y = -3.5;
box.position.z = j;
const myMaterial = new StandardMaterial("myMat")
myMaterial.diffuseColor = Color3.FromInts(75,54,33)
myMaterial.specularColor = Color3.Black()
box.material = myMaterial
box.actionManager = new ActionManager(Box.getScene())
box.actionManager.registerAction(
new ExecuteCodeAction(
ActionManager.OnPickDownTrigger, function (ev){
const brownTeamMat = new StandardMaterial("brownTeamMat") 
brownTeamMat.diffuseColor = Color3.FromInts(88,54,41)
const yellowTeamMat = new StandardMaterial("yellowTeamMat") 
yellowTeamMat.diffuseColor = Color3.FromInts(255,204,0) 
const greenTeamMat = new StandardMaterial("greenTeamMat") 
greenTeamMat.diffuseColor =  Color3.FromInts(8,64,0)


if(pieceIndex===1) {  
OwlMaker("brownOwl", new Vector3(box.position.x, box.position.y+3.75, box.position.z), new Vector3(0,0,0), brownTeamMat)
}
else if (pieceIndex===2) {
KiteMaker("brownKite", new Vector3(box.position.x, box.position.y+3.75, box.position.z), new Vector3(0,0,0), brownTeamMat)
}
else if (pieceIndex===3) {
RavenMaker("brownRaven", new Vector3(box.position.x, box.position.y+3.75, box.position.z), new Vector3(0,0,0),brownTeamMat)
}
else if (pieceIndex===4) {
OwlMaker("yellowOwl",  new Vector3(box.position.x, box.position.y+3.75, box.position.z), new Vector3(0,0,0), yellowTeamMat)
}
else if (pieceIndex===5) {
KiteMaker("yellowKite", new Vector3(box.position.x, box.position.y+3.75, box.position.z), new Vector3(0,0,0), yellowTeamMat)
   }    
else if (pieceIndex===6) {
RavenMaker("yellowRaven", new Vector3(box.position.x, box.position.y+3.75, box.position.z), new Vector3(0,0,0), yellowTeamMat)
   }  
else if (pieceIndex===7) {
OwlMaker("greenOwl", new Vector3(box.position.x, box.position.y+3.75, box.position.z), new Vector3(0,0,0), greenTeamMat)
   } 
else if (pieceIndex===8) {
KiteMaker("greenKite", new Vector3(box.position.x, box.position.y+3.75, box.position.z), new Vector3(0,0,0), greenTeamMat)
  } 
else if (pieceIndex===9) {
RavenMaker("greenRaven", new Vector3(box.position.x, box.position.y+3.75, box.position.z), new Vector3(0,0,0), greenTeamMat)
  }            
                          }
                     )
                  )
               }
            }
        }
  }


const OnBoxesCreatedWhiteYellowFace = (Box) =>{
const boxCount = 7;
for (let i=0; i<boxCount; i++){
for(let j=0; j<boxCount; j++){
if((i+j)%2!==0) { 
const box = MeshBuilder.CreateBox("box0", {width: 1, height:0.5}, Box.getScene());
box.position.x = i;
box.position.y = -3.5;
box.position.z = j;
const myMaterial = new StandardMaterial("myMat")
myMaterial.diffuseColor = Color3.FromInts(240,230,140)
myMaterial.specularColor = Color3.Black()
box.material = myMaterial
box.actionManager = new ActionManager(Box.getScene())
box.actionManager.registerAction(
new ExecuteCodeAction(
ActionManager.OnPickDownTrigger, function (ev){
const brownTeamMat = new StandardMaterial("brownTeamMat") 
brownTeamMat.diffuseColor = Color3.FromInts(88,54,41)
const yellowTeamMat = new StandardMaterial("yellowTeamMat") 
yellowTeamMat.diffuseColor = Color3.FromInts(255,204,0)  
const greenTeamMat = new StandardMaterial("greenTeamMat") 
greenTeamMat.diffuseColor =  Color3.FromInts(8,64,0) 


if(pieceIndex===1) {  
OwlMaker("brownOwl", new Vector3(box.position.x, box.position.y+3.75, box.position.z),new Vector3(0,0,0), brownTeamMat)
}
else if (pieceIndex===2) {
KiteMaker("brownKite", new Vector3(box.position.x, box.position.y+3.75, box.position.z), new Vector3(0,0,0), brownTeamMat)
}
else if (pieceIndex===3) {
RavenMaker("brownRaven", new Vector3(box.position.x, box.position.y+3.75, box.position.z), new Vector3(0,0,0), brownTeamMat)
}
else if (pieceIndex===4) {
OwlMaker("yellowOwl",  new Vector3(box.position.x, box.position.y+3.75, box.position.z), new Vector3(0,0,0), yellowTeamMat)
}
else if (pieceIndex===5) {
KiteMaker("yellowKite", new Vector3(box.position.x, box.position.y+3.75, box.position.z), new Vector3(0,0,0), yellowTeamMat)   
} 
else if (pieceIndex===6) {
RavenMaker("yellowRaven", new Vector3(box.position.x, box.position.y+3.75, box.position.z), new Vector3(0,0,0), yellowTeamMat)
} 
else if (pieceIndex===7) {
OwlMaker("greenOwl", new Vector3(box.position.x, box.position.y+3.75, box.position.z), new Vector3(0,0,0), greenTeamMat)
  }  
else if (pieceIndex===8) {
KiteMaker("greenKite", new Vector3(box.position.x, box.position.y+3.75, box.position.z), new Vector3(0,0,0), greenTeamMat)
   } 
else if (pieceIndex===9) {
RavenMaker("greenRaven", new Vector3(box.position.x, box.position.y+3.75, box.position.z), new Vector3(0,0,0), greenTeamMat)
   }                                     
                }
            )
         )
      }
    }
  }
}
const OnBoxesCreatedBlackOuterGreenFace = (Box) =>{
const boxCount = 7;
for (let i=0; i<boxCount; i++){
for(let j=0; j<boxCount; j++){
if(j%2 ===0 && i%2 ===0){
const box =  MeshBuilder.CreateBox("box0", {width: 1, height: 0.5}, Box.getScene());
box.position.x = -.75;
box.position.y = i-2.75;
box.position.z = j;
box.rotation.z = -Math.PI/2
const myMaterial = new StandardMaterial("myMat")
myMaterial.diffuseColor = Color3.FromInts(75,54,33)
myMaterial.specularColor = Color3.Black()
box.material = myMaterial
box.actionManager = new ActionManager(Box.getScene())
box.actionManager.registerAction(
new ExecuteCodeAction(
ActionManager.OnPickDownTrigger, function (ev){
const brownTeamMat = new StandardMaterial("brownTeamMat") 
brownTeamMat.diffuseColor = Color3.FromInts(88,54,41)
const yellowTeamMat = new StandardMaterial("yellowTeamMat") 
yellowTeamMat.diffuseColor = Color3.FromInts(255,204,0)
const greenTeamMat = new StandardMaterial("greenTeamMat") 
greenTeamMat.diffuseColor =  Color3.FromInts(8,64,0)   

if(pieceIndex===1) {  
OwlMaker("brownOwl", new Vector3(box.position.x+3.75, box.position.y, box.position.z), new Vector3(0, 0, -Math.PI/2), brownTeamMat)
}
else if (pieceIndex===2) {
KiteMaker("brownKite", new Vector3(box.position.x+3.75, box.position.y, box.position.z), new Vector3(0, 0, -Math.PI/2), brownTeamMat)
}
else if (pieceIndex===3) {
RavenMaker("brownRaven", new Vector3(box.position.x+3.75, box.position.y, box.position.z), new Vector3(0, 0, -Math.PI/2), brownTeamMat)
}
else if (pieceIndex===4) {
OwlMaker("yellowOwl",  new Vector3(box.position.x+3.75, box.position.y, box.position.z), new Vector3(0, 0, -Math.PI/2),yellowTeamMat)
}
else if (pieceIndex===5) {
KiteMaker("yellowKite", new Vector3(box.position.x+3.75, box.position.y, box.position.z), new Vector3(0, 0, -Math.PI/2), yellowTeamMat)
   }                 
else if (pieceIndex===6) {
RavenMaker("yellowRaven", new Vector3(box.position.x+3.75, box.position.y, box.position.z), new Vector3(0, 0, -Math.PI/2), yellowTeamMat)
   }                 
else if (pieceIndex===7) {
OwlMaker("greenOwl", new Vector3(box.position.x+3.75, box.position.y, box.position.z), new Vector3(0, 0, -Math.PI/2), greenTeamMat)
   }                 
else if (pieceIndex===8) {
KiteMaker("greenKite", new Vector3(box.position.x+3.75, box.position.y, box.position.z), new Vector3(0, 0, -Math.PI/2), greenTeamMat)
   }                 
else if (pieceIndex===9) {
RavenMaker("greenRaven", new Vector3(box.position.x+3.75, box.position.y, box.position.z), new Vector3(0, 0, -Math.PI/2), greenTeamMat)
   }                 
                     }
                  )
               )
            }
          }
       }
    }
const OnBoxesCreatedBlackInnerGreenFace = (Box) =>{
const boxCount = 7;
for (let i=0; i<boxCount; i++){
for(let j=0; j<boxCount; j++){
if (j%2!==0 && i%2!==0){
const box =  MeshBuilder.CreateBox("box0", {width: 1, height: 0.5}, Box.getScene());
box.position.x = -.75;
box.position.y = i-2.75;
box.position.z = j;
box.rotation.z = -Math.PI/2
const myMaterial = new StandardMaterial("myMat")
myMaterial.diffuseColor = Color3.FromInts(75,54,33)
myMaterial.specularColor = Color3.Black()
box.material = myMaterial
box.actionManager = new ActionManager(Box.getScene())
box.actionManager.registerAction(
new ExecuteCodeAction(
ActionManager.OnPickDownTrigger, function (ev){
const brownTeamMat = new StandardMaterial("brownTeamMat") 
brownTeamMat.diffuseColor = Color3.FromInts(88,54,41)
const yellowTeamMat = new StandardMaterial("yellowTeamMat") 
yellowTeamMat.diffuseColor = Color3.FromInts(255,204,0)  
const greenTeamMat = new StandardMaterial("greenTeamMat") 
greenTeamMat.diffuseColor =  Color3.FromInts(8,64,0)      

if(pieceIndex===1) {  
OwlMaker("brownOwl", new Vector3(box.position.x+3.75, box.position.y, box.position.z), new Vector3(0, 0, -Math.PI/2), brownTeamMat)
}
else if (pieceIndex===2) {
KiteMaker("brownKite", new Vector3(box.position.x+3.75, box.position.y, box.position.z), new Vector3(0, 0, -Math.PI/2), brownTeamMat)
}
else if (pieceIndex===3) {
RavenMaker("brownRaven", new Vector3(box.position.x+3.75, box.position.y, box.position.z), new Vector3(0, 0, -Math.PI/2), brownTeamMat)
}
else if (pieceIndex===4) {
OwlMaker("yellowOwl",  new Vector3(box.position.x+3.75, box.position.y, box.position.z), new Vector3(0, 0, -Math.PI/2),yellowTeamMat)
}
else if (pieceIndex===5) {
KiteMaker("yellowKite", new Vector3(box.position.x+3.75, box.position.y, box.position.z), new Vector3(0, 0, -Math.PI/2), yellowTeamMat)
   }    
else if (pieceIndex===6) {
RavenMaker("yellowRaven", new Vector3(box.position.x+3.75, box.position.y, box.position.z), new Vector3(0, 0, -Math.PI/2), yellowTeamMat)
    } 
else if (pieceIndex===7) {
OwlMaker("greenOwl", new Vector3(box.position.x+3.75, box.position.y, box.position.z), new Vector3(0, 0, -Math.PI/2), greenTeamMat)
  } 
else if (pieceIndex===8) {
KiteMaker("greenKite", new Vector3(box.position.x+3.75, box.position.y, box.position.z), new Vector3(0, 0, -Math.PI/2), greenTeamMat)
   } 
else if (pieceIndex===9) {
RavenMaker("greenRaven", new Vector3(box.position.x+3.75, box.position.y, box.position.z), new Vector3(0, 0, -Math.PI/2), greenTeamMat)
   }                              
                        }
                   )
                )
             }
           }
        }
      }
const OnBoxesCreatedWhiteGreenFace = (Box) =>{
const boxCount = 7;
for (let i=0; i<boxCount; i++){
for(let j=0; j<boxCount; j++){
if((i+j)%2!==0) { 
const box = MeshBuilder.CreateBox("box0", {width: 1, height:0.5}, Box.getScene());
box.position.x = -0.75;
box.position.y = i-2.75;
box.position.z = j;
box.rotation.z = -Math.PI/2;
const myMaterial = new StandardMaterial("myMat")
myMaterial.diffuseColor = Color3.FromInts(240,230,140)
myMaterial.specularColor = Color3.Black()
box.material = myMaterial
box.actionManager = new ActionManager(Box.getScene())
box.actionManager.registerAction(
new ExecuteCodeAction(
ActionManager.OnPickDownTrigger, function (ev){
const brownTeamMat = new StandardMaterial("brownTeamMat") 
brownTeamMat.diffuseColor = Color3.FromInts(88,54,41)
const yellowTeamMat = new StandardMaterial("yellowTeamMat") 
yellowTeamMat.diffuseColor = Color3.FromInts(255,204,0)
const greenTeamMat = new StandardMaterial("greenTeamMat") 
greenTeamMat.diffuseColor =  Color3.FromInts(8,64,0)      

if(pieceIndex===1) {  
OwlMaker("brownOwl", new Vector3(box.position.x+3.75, box.position.y, box.position.z), new Vector3(0, 0, -Math.PI/2), brownTeamMat)
}
else if (pieceIndex===2) {
KiteMaker("brownKite", new Vector3(box.position.x+3.75, box.position.y, box.position.z), new Vector3(0, 0, -Math.PI/2), brownTeamMat)
}
else if (pieceIndex===3) {
RavenMaker("brownRaven", new Vector3(box.position.x+3.75, box.position.y, box.position.z), new Vector3(0, 0, -Math.PI/2), brownTeamMat)
}
else if (pieceIndex===4) {
OwlMaker("yellowOwl",  new Vector3(box.position.x+3.75, box.position.y, box.position.z), new Vector3(0, 0, -Math.PI/2),yellowTeamMat)
}
else if (pieceIndex===5) {
KiteMaker("yellowKite", new Vector3(box.position.x+3.75, box.position.y, box.position.z), new Vector3(0, 0, -Math.PI/2), yellowTeamMat)
   }
else if (pieceIndex===6) {
RavenMaker("yellowRaven", new Vector3(box.position.x+3.75, box.position.y, box.position.z), new Vector3(0, 0, -Math.PI/2), yellowTeamMat)
   } 
else if (pieceIndex===7) {
OwlMaker("greenOwl", new Vector3(box.position.x+3.75, box.position.y, box.position.z), new Vector3(0, 0, -Math.PI/2), greenTeamMat)
   } 
else if (pieceIndex===8) {
KiteMaker("greenKite", new Vector3(box.position.x+3.75, box.position.y, box.position.z), new Vector3(0, 0, -Math.PI/2), greenTeamMat)
   } 
else if (pieceIndex===9) {
RavenMaker("greenRaven", new Vector3(box.position.x+3.75, box.position.y, box.position.z), new Vector3(0, 0, -Math.PI/2), greenTeamMat)
         }                     
                         }               
                    )
                 )
              }
           }
        }
    } 
const OnBoxesCreatedBlackOuterBrownFace = (Box) =>{
const boxCount = 7;
for (let i=0; i<boxCount; i++){
for(let j=0; j<boxCount; j++){
if(j%2 ===0 && i%2 ===0){
const box =  MeshBuilder.CreateBox("box0", {width: 1, height: 0.5}, Box.getScene());
box.position.x = i;
box.position.y = j-2.75;
box.position.z = -.75;
box.rotation.x = Math.PI/2
const myMaterial = new StandardMaterial("myMat")
myMaterial.diffuseColor = Color3.FromInts(75,54,33)
myMaterial.specularColor = Color3.Black()
box.material = myMaterial
box.actionManager = new ActionManager(Box.getScene())
box.actionManager.registerAction(
new ExecuteCodeAction(
ActionManager.OnPickDownTrigger, function (ev){
const brownTeamMat = new StandardMaterial("brownTeamMat") 
brownTeamMat.diffuseColor = Color3.FromInts(88,54,41)
const yellowTeamMat = new StandardMaterial("yellowTeamMat") 
yellowTeamMat.diffuseColor = Color3.FromInts(255,204,0)
const greenTeamMat = new StandardMaterial("greenTeamMat") 
greenTeamMat.diffuseColor =  Color3.FromInts(8,64,0)     

if(pieceIndex===1) {  
OwlMaker("brownOwl", new Vector3(box.position.x, box.position.y, box.position.z+3.75), new Vector3(Math.PI/2, 0,0), brownTeamMat)
}
else if (pieceIndex===2) {
KiteMaker("brownKite", new Vector3(box.position.x, box.position.y, box.position.z+3.75), new Vector3(Math.PI/2, 0,0), brownTeamMat)
}
else if (pieceIndex===3) {
RavenMaker("brownRaven", new Vector3(box.position.x, box.position.y, box.position.z+3.75), new Vector3(Math.PI/2, 0,0), brownTeamMat)
}
else if (pieceIndex===4) {
OwlMaker("yellowOwl",  new Vector3(box.position.x, box.position.y, box.position.z+3.75), new Vector3(Math.PI/2, 0,0),yellowTeamMat)
}
else if (pieceIndex===5) {
KiteMaker("yellowKite", new Vector3(box.position.x, box.position.y, box.position.z+3.75), new Vector3(Math.PI/2, 0,0), yellowTeamMat)
   }    
else if (pieceIndex===6) {
RavenMaker("yellowRaven", new Vector3(box.position.x, box.position.y, box.position.z+3.75), new Vector3(Math.PI/2, 0,0), yellowTeamMat)
   }    
else if (pieceIndex===7) {
OwlMaker("greenOwl", new Vector3(box.position.x, box.position.y, box.position.z+3.75), new Vector3(Math.PI/2, 0,0), greenTeamMat)
   }    
else if (pieceIndex===8) {
KiteMaker("greenKite", new Vector3(box.position.x, box.position.y, box.position.z+3.75), new Vector3(Math.PI/2, 0,0), greenTeamMat)
   }    
else if (pieceIndex===9) {
RavenMaker("greenRaven", new Vector3(box.position.x, box.position.y, box.position.z+3.75), new Vector3(Math.PI/2, 0,0), greenTeamMat)
   }    
                        }
                  )
               )
            }
         }
      }
   }
      
const OnBoxesCreatedBlackInnerBrownFace = (Box) =>{
const boxCount = 7;
for (let i=0; i<boxCount; i++){
for(let j=0; j<boxCount; j++){
if (j%2!==0 && i%2!==0){
const box =  MeshBuilder.CreateBox("box0", {width: 1, height: 0.5}, Box.getScene());
box.position.x = i;
box.position.y = j-2.75;
box.position.z = -.75;
box.rotation.x = Math.PI/2
const myMaterial = new StandardMaterial("myMat")
myMaterial.diffuseColor = Color3.FromInts(75,54,33)
myMaterial.specularColor = Color3.Black()
box.material = myMaterial
box.actionManager = new ActionManager(Box.getScene())
box.actionManager.registerAction(
new ExecuteCodeAction(
ActionManager.OnPickDownTrigger, function (ev){
const brownTeamMat = new StandardMaterial("brownTeamMat") 
brownTeamMat.diffuseColor = Color3.FromInts(88,54,41)
const yellowTeamMat = new StandardMaterial("yellowTeamMat") 
yellowTeamMat.diffuseColor = Color3.FromInts(255,204,0) 
const greenTeamMat = new StandardMaterial("greenTeamMat") 
greenTeamMat.diffuseColor =  Color3.FromInts(8,64,0)      

if(pieceIndex===1) {  
OwlMaker("brownOwl", new Vector3(box.position.x, box.position.y, box.position.z+3.75), new Vector3(Math.PI/2, 0,0), brownTeamMat)
}
else if (pieceIndex===2) {
KiteMaker("brownKite", new Vector3(box.position.x, box.position.y, box.position.z+3.75), new Vector3(Math.PI/2, 0,0), brownTeamMat)
}
else if (pieceIndex===3) {
RavenMaker("brownRaven", new Vector3(box.position.x, box.position.y, box.position.z+3.75), new Vector3(Math.PI/2, 0,0), brownTeamMat)
}
else if (pieceIndex===4) {
OwlMaker("yellowOwl",  new Vector3(box.position.x, box.position.y, box.position.z+3.75), new Vector3(Math.PI/2, 0,0),yellowTeamMat)
}
else if (pieceIndex===5) {
KiteMaker("yellowKite", new Vector3(box.position.x, box.position.y, box.position.z+3.75), new Vector3(Math.PI/2, 0,0), yellowTeamMat)
   } 
else if (pieceIndex===6) {
RavenMaker("yellowRaven", new Vector3(box.position.x, box.position.y, box.position.z+3.75), new Vector3(Math.PI/2, 0,0), yellowTeamMat)
   } 
else if (pieceIndex===7) {
OwlMaker("greenOwl", new Vector3(box.position.x, box.position.y, box.position.z+3.75), new Vector3(Math.PI/2, 0,0), greenTeamMat)
   }
else if (pieceIndex===8) {
KiteMaker("greenKite", new Vector3(box.position.x, box.position.y, box.position.z+3.75), new Vector3(Math.PI/2, 0,0), greenTeamMat)
   }
else if (pieceIndex===9) {
RavenMaker("greenRaven", new Vector3(box.position.x, box.position.y, box.position.z+3.75), new Vector3(Math.PI/2, 0,0), greenTeamMat)
   }                                
                  }
               )
            )
          }
        }
      }
   }
      
const OnBoxesCreatedWhiteBrownFace = (Box) =>{
const boxCount = 7;
for (let i=0; i<boxCount; i++){
for(let j=0; j<boxCount; j++){
if((i+j)%2!==0) { 
const box = MeshBuilder.CreateBox("box0", {width: 1, height:0.5}, Box.getScene());
box.position.x = i;
box.position.y = j-2.75;
box.position.z = -.75;
box.rotation.x = Math.PI/2 
const myMaterial = new StandardMaterial("myMat")
myMaterial.diffuseColor = Color3.FromInts(240,230,140)
myMaterial.specularColor = Color3.Black() 
box.material = myMaterial
box.actionManager = new ActionManager(Box.getScene())
box.actionManager.registerAction(
new ExecuteCodeAction(
ActionManager.OnPickDownTrigger, function (ev){
const brownTeamMat = new StandardMaterial("brownTeamMat") 
brownTeamMat.diffuseColor = Color3.FromInts(88,54,41)
const yellowTeamMat = new StandardMaterial("yellowTeamMat") 
yellowTeamMat.diffuseColor = Color3.FromInts(255,204,0)  
const greenTeamMat = new StandardMaterial("greenTeamMat") 
greenTeamMat.diffuseColor =  Color3.FromInts(8,64,0)      

if(pieceIndex===1) {  
OwlMaker("brownOwl", new Vector3(box.position.x, box.position.y, box.position.z+3.75), new Vector3(Math.PI/2, 0,0), brownTeamMat)
}
else if (pieceIndex===2) {
KiteMaker("brownKite", new Vector3(box.position.x, box.position.y, box.position.z+3.75), new Vector3(Math.PI/2, 0,0), brownTeamMat)
}
else if (pieceIndex===3) {
RavenMaker("brownRaven", new Vector3(box.position.x, box.position.y, box.position.z+3.75), new Vector3(Math.PI/2, 0,0), brownTeamMat)
}
else if (pieceIndex===4) {
OwlMaker("yellowOwl",  new Vector3(box.position.x, box.position.y, box.position.z+3.75), new Vector3(Math.PI/2, 0,0),yellowTeamMat)
}
else if (pieceIndex===5) {
KiteMaker("yellowKite", new Vector3(box.position.x, box.position.y, box.position.z+3.75), new Vector3(Math.PI/2, 0,0), yellowTeamMat)
   }  
else if (pieceIndex===6) {
RavenMaker("yellowRaven", new Vector3(box.position.x, box.position.y, box.position.z+3.75), new Vector3(Math.PI/2, 0,0), yellowTeamMat)
   } 
else if (pieceIndex===7) {
OwlMaker("greenOwl", new Vector3(box.position.x, box.position.y, box.position.z+3.75), new Vector3(Math.PI/2, 0,0), greenTeamMat)
   } 
else if (pieceIndex===8) {
KiteMaker("greenKite", new Vector3(box.position.x, box.position.y, box.position.z+3.75), new Vector3(Math.PI/2, 0,0), greenTeamMat)
   } 
else if (pieceIndex===9) {
RavenMaker("greenRaven", new Vector3(box.position.x, box.position.y, box.position.z+3.75), new Vector3(Math.PI/2, 0,0), greenTeamMat)
         }                        
                     }
                  )
               )
            }
         }
      }
   }
// these onMeshPicked blocks determine the value of pieceIndex depending on which piece is clicked
function onMeshPicked(pickedMesh){
if(pickedMesh.name === "brownOwl") {
pieceIndex =1;
pickedMesh.dispose()
console.log(pieceIndex)
console.log(pickedMesh.position)
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
else if(pickedMesh.name === "yellowOwl") {
pieceIndex = 4;
pickedMesh.dispose()
console.log(pieceIndex)
    }
else if(pickedMesh.name === "yellowKite") {
pieceIndex = 5;
pickedMesh.dispose()
console.log(pieceIndex)
      }
else if(pickedMesh.name === "yellowRaven") {
pieceIndex = 6;
pickedMesh.dispose()
console.log(pieceIndex)
      }
else if(pickedMesh.name === "greenOwl") {
pieceIndex = 7;
pickedMesh.dispose()
console.log(pieceIndex)
      }
else if(pickedMesh.name === "greenKite") {
pieceIndex = 8;
pickedMesh.dispose()
console.log(pieceIndex)
      }
else if(pickedMesh.name === "greenRaven") {
pieceIndex = 9;
pickedMesh.dispose()
console.log(pieceIndex)
      }
}
   

export const StrixGameVersion2= () => (
<div style={{ flex: 1, display: 'flex' }}>
<Engine antialias adaptToDeviceRatio canvasId='babylonJS'>
<Scene onMeshPicked = {onMeshPicked}>

<arcRotateCamera  name="camera1"  target={new Vector3(0,-2,0)} alpha={Math.PI/4 } beta={Math.PI / 3} radius={30} />
<directionalLight  name="dl"  intensity={1.5}  direction={new Vector3(-3,-4,-3)}  position={new Vector3(5, -5, -5)} />

<transformNode  name = "transformNode1" rotation = {new Vector3(Math.PI/2,0,0)} position = {new Vector3(-.5,-3.25,-.5)}  >  
<box      name = "greenSiding1" rotation = {new Vector3(0,0,0)}    scaling = {new Vector3(7.5,.1,.5)} position = {new Vector3(3.25,7.02,.25)}>
<standardMaterial name = "sidingColor" diffuseColor= {new Color3.FromInts(8,64,0)}/>
</box>
<box      name = "greenSiding2" rotation = {new Vector3(0,Math.PI/2,0)}    scaling = {new Vector3(7,.1,.5)} position = {new Vector3(-.25,7.02,-3.5)}>
<standardMaterial name = "sidingColor" diffuseColor= {Color3.FromInts(8,64,0)}/>
</box> 
<box      name = "greenSiding3" rotation = {new Vector3(0,0,Math.PI/2,0)}    scaling = {new Vector3(7,.1,.5)} position = {new Vector3(7.02,3.5,0.25)}>
<standardMaterial name = "sidingColor" diffuseColor= {Color3.FromInts(8,64,0)}/>
</box> 
<box      name = "greenSiding4" rotation = {new Vector3(Math.PI/2,Math.PI/2,0)}    scaling = {new Vector3(7.5,.1,.5)} position = {new Vector3(7.02,-.25,-3.25)}>
<standardMaterial name = "sidingColor" diffuseColor= {Color3.FromInts(8,64,0)}/>
</box> 
<box      name = "greenSiding5" rotation = {new Vector3(Math.PI/2,0,0)}    scaling = {new Vector3(7,.1,.5)} position = {new Vector3(3.5,-.25,-7.02)}>
<standardMaterial name = "sidingColor" diffuseColor= {Color3.FromInts(8,64,0)}/>
</box> 
<box      name = "greenSiding6" rotation = {new Vector3(0,Math.PI/2,Math.PI/2)}    scaling = {new Vector3(7.5,.1,.5)} position = {new Vector3(-.25,3.25,-7.02)}>
<standardMaterial name = "sidingColor" diffuseColor= {Color3.FromInts(8,64,0)}/>
</box> 

<box     name="backPanel1" rotation = {new Vector3(0,0,0)} scaling = {new Vector3(7.5,7.5,.1)} position = {new Vector3(3.25,3.25,.5)}>
<standardMaterial name = "backPanelColor1" diffuseColor= {Color3.FromInts(8,64,0)}/>  
</box>
<box     name="backPanel2" rotation = {new Vector3(-Math.PI/2,0,0)} scaling = {new Vector3(7.5,7.5,.1)} position = {new Vector3(3.25,-.5,-3.25)}>
<standardMaterial name = "backPanelColor2" diffuseColor= {Color3.FromInts(8,64,0)}/>  
</box>
<box     name="backPanel3" rotation = {new Vector3(0,-Math.PI/2,0)} scaling = {new Vector3(7.5,7.5,.1)} position = {new Vector3(-.5,3.25,-3.25)}>
<standardMaterial name = "backPanelColor2" diffuseColor= {Color3.FromInts(8,64,0)}/>  
</box>
</transformNode>


<transformNode  name = "boardMover" position = {new Vector3(0,-5,0,)}>

<box name = "boxes0" onCreated =  {OnBoxesCreatedBlackOuterYellowFace}>
<standardMaterial name = "clear-mat " alpha = {0} />
</box> 

<box name ="boxes1" onCreated =  {OnBoxesCreatedBlackInnerYellowFace}>
<standardMaterial name = "clear-mat " alpha = {0} />
</box> 

<box name = "boxes2" onCreated =  {OnBoxesCreatedWhiteYellowFace}>
<standardMaterial name = "clear-mat " alpha = {0} />
</box> 

<box name = "boxes3" onCreated =  {OnBoxesCreatedBlackOuterGreenFace}>
<standardMaterial name = "clear-mat " alpha = {0} />
</box> 

<box name = "boxes4" onCreated =  {OnBoxesCreatedBlackInnerGreenFace}>
<standardMaterial name = "clear-mat " alpha = {0} />
</box> 

<box name = "boxes5" onCreated =  {OnBoxesCreatedWhiteGreenFace}>
<standardMaterial name = "clear-mat " alpha = {0} />
</box> 

<box name = "boxes6" onCreated =  {OnBoxesCreatedBlackOuterBrownFace}>
<standardMaterial name = "clear-mat " alpha = {0} />
</box> 

<box name = "boxes7" onCreated =  {OnBoxesCreatedBlackInnerBrownFace}>
<standardMaterial name = "clear-mat " alpha = {0} />
</box> 

<box name = "boxes8"  onCreated =  {OnBoxesCreatedWhiteBrownFace}>
<standardMaterial name = "clear-mat " alpha = {0} />
</box> 
</transformNode>

<WithUseClickBrownOwl1/>
<WithUseClickBrownKite1/>
<WithUseClickBrownRaven1/>
<WithUseClickYellowOwl1/>
<WithUseClickYellowKite1/>
<WithUseClickYellowRaven1/>
<WithUseClickGreenOwl1/>
<WithUseClickGreenKite1/>
<WithUseClickGreenRaven1/>

<torus name = "yellowOwlSquare" height = {0.05} diameter = {0.6} thickness = {0.1} position = {new Vector3(0,-3.27,6,)} rotation = {new Vector3(0,0,0,)}>
<standardMaterial name = "yellowOwlSquareMat " diffuseColor={Color3.FromInts(255,204,0)} />  
</torus>

<torus name = "greenOwlSquare" height = {0.05} diameter = {0.6} thickness = {0.1} position = {new Vector3(-.52,3.25,0)} rotation = {new Vector3(0,0, Math.PI/2)}>
<standardMaterial name = "greenOwlSquareMat " diffuseColor={Color3.FromInts(8,64,0)} />  
</torus>

<torus name = "brownOwlSquare" height = {0.05} diameter = {0.6} thickness = {0.1} position = {new Vector3(6,-2.75,-0.52)} rotation = {new Vector3(Math.PI/2,0,0)}>
<standardMaterial name = "brownOwlSquareMat " diffuseColor={Color3.FromInts(88,54,41)} />  
</torus>
  
</Scene>
</Engine>
</div>
)
