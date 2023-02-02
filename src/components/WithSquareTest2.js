import React from 'react'
import { Vector3, MeshBuilder } from '@babylonjs/core';
import {Engine, Scene, useScene} from 'react-babylonjs'



/*function onPickDownHandler(event){
    console.log(event.source.name)
}


/*const SphereMaster = MeshBuilder.CreateSphere("sphere0", {diameter:1, segments:32}) ;
const SPHERE_COUNT = 10;
const MAX_INDEX = SPHERE_COUNT -1;
for (let i=0; SPHERE_COUNT;i++){
    const sphere = i === 0? SphereMaster: SphereMaster.createInstance("sphere"+1);
    sphere.position.x = -5 + 10*i  /MAX_INDEX;
    sphere.position.y = 1;


    sphere.actionManager = new ActionManager(SphereMaster.getScene());


    sphere.actionManager.registerAction(
        new ExecuteCodeAction(
            ActionManager.OnPickDownTrigger, function (ev)
        )
    );
}
*/
/*const MyProg = () =>{
const [mesh, setMesh] = useState(null)
const scene = useScene();
useMemo(()=>{
setMesh(MeshBuilder.CreateBox('test', {size:1}, scene))
//const PieceMaker = MeshBuilder.CreateBox( "Box0", {width:1},scene );
const boxCount = 63;
const maxIndex = boxCount-1;
for (let i=0; boxCount; i++) {
    const box = i ===0? MyProg: MyProg.CreateInstance("box" + 1)
    box.position.x = -5 + 10*i/maxIndex;
    box.position.y = 1; }
}, [])
return(
    <>
    {mesh && (
        <mesh
        fromInstance = {mesh} >
        <standardMaterial diffuseColor = {Color3.Blue()}   />
        </mesh>
             )
       }
    </>
)

 }
*/ 

const ActionTester = () => {
 const scene = useScene();
 const pieceCount = 10;
 for (let i=0; pieceCount; i++) {
    var box = new MeshBuilder.CreateBox('test', {size:1}, scene)}
    box.position.x = -2
 }


export const WithSquareTest2= () => {
    return(
        <div className="App">
           <Engine antialias adaptToDeviceRatio canvasId='babylonJS'>
            <Scene  >
             <arcRotateCamera  name="camera1"  target={new Vector3(0.5,-0.5,0)} alpha={-Math.PI/4 } beta={Math.PI / 3} radius={30} />
             <hemisphericLight name='light1' intensity={0.7} direction={Vector3.Up()} />
             <hemisphericLight name='light1' intensity={0.7} direction={Vector3.Down()} />
           
             <ActionTester/>

            
            </Scene>
        </Engine>
      </div>
   
  ) 
}