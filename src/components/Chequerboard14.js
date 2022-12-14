import React, {useState, useRef} from 'react'
import {Engine, Scene, useScene} from 'react-babylonjs'
import { Vector3, Mesh, VertexData} from '@babylonjs/core';
import {Color3} from "@babylonjs/core/Maths/math.color";
import { PointerInfo } from "@babylonjs/core/Events/pointerEvents";
import { PointerEventTypes } from "@babylonjs/core/Events/pointerEvents";


const CubeMaker = (props) => {
    const scene = useScene();
    const [customMesh] = useState(() => {
    const cube = new Mesh(props.name, scene);
    var positions = [ 1,0,0,    1,0.5,0,  0,0,0, 
                      0,0,0,    1,0.5,0,  0,0.5,0,    
                      1,0,0,    1,0.5,1,  1,0.5,0,  
                      1,0,0,    1,0,1,    1,0.5,1,  
                      1,0.5,0,  0,0.5,1,  0,0.5,0, 
                      1,0.5,0,  1,0.5,1,  0,0.5,1, 
                      0,0.5,0,  0,0,1,    0,0,0, 
                      0,0.5,0,  0,0.5,1,  0,0,1,
                      0,0,0,    1,0,1,    1,0,0, 
                      0,0,0,    0,0,1,    1,0,1, 
                      0,0,1,    1,0.5,1,  1,0,1, 
                      0,0,1,    0,0.5,1,  1,0.5,1, ]

     var indices = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36];
     /*var colors =  [1,0,0,1,  1,0,0,1, 1,0,0,1,
                    1,0,0,1,  1,0,0,1, 1,0,0,1, 
                    0,0,1,1,  0,0,1,1, 0,0,1,1,
                    0,0,1,1,  0,0,1,1, 0,0,1,1,
                    0,1,0,1,  0,1,0,1, 0,1,0,1,
                    0,1,0,1,  0,1,0,1, 0,1,0,1,
                    0,1,1,1,  0,1,1,1, 0,1,1,1,
                    0,1,1,1,  0,1,1,1, 0,1,1,1,
                    1,1,0,1,  1,1,0,1, 1,1,0,1,
                    1,1,0,1,  1,1,0,1, 1,1,0,1,
                    1,0,1,1,  1,0,1,1, 1,0,1,1,
                    1,0,1,1,  1,0,1,1, 1,0,1,1,]
                    */
      var normals = [];
      var vertexData = new VertexData();
      VertexData.ComputeNormals(positions, indices, normals,);
      vertexData.positions = positions;    
      vertexData.indices = indices;
      vertexData.normals = normals;
     // vertexData.colors = colors;
      vertexData.applyToMesh(cube);
      return cube
    })
    return (
        <mesh name = "singleCube" fromInstance={customMesh}  disposeInstanceOnUnmount rotation={props.rotation}  scaling = {props.scaling} position={props.position} isPickable>
           <standardMaterial name = "singleCube-Mat"   diffuseColor= {props.color} height = {props.height} wireframe={props.useWireframe}  />
        </mesh>
    )
   } 

  /* //var lastSelection = null; 
   var clicked = false;

   const onMeshPicked = (pickedMesh) => {
    if (pickedMesh.name==='Cylinder1') {
        if(lastSelection){
            if (pickedMesh.name ==='Sphere1')
            pickedMesh.position.x += 1;
            lastSelection=null;
    }
   }
}
*/

    

    

    /*const onMeshPicked = (pickedMesh) => {
       
        if ((pickedMesh.name==='Cylinder1') || (pickedMesh.name==='Sphere1')  &&  (pickedMesh.name==='Cylinder') ) {
                  pickedMesh.position +=1;
            }

            /*console.log(pickedMesh.getAbsolutePosition())    
            pickedMesh.setAbsolutePosition()        
            console.log('sphereRef.current')}

            return  (
                <cylinder name={props.name}  height={5} diameter={.5}  position={props.position}>
                <standardMaterial name = {`${props.name}-mat`} diffuseColor={props.color}/>
                </cylinder>
                )      
                    
             */     
          //  }
           
       




  
  const MakeACylinder = (props) => {
    return (
   <cylinder name={props.name}  height={5} diameter={.5}  position={props.position} >
   <standardMaterial name = {`${props.name}-mat`} diffuseColor={props.color} />
   </cylinder>
   )      
}

const MakeASphere = (props) => {
   return    (
   <sphere name={props.name}  diameter={2}  position={props.position}>
   <standardMaterial name = {`${props.name}-mat`} diffuseColor={props.color}/>
   </sphere>
   )
 }
 
 export const Chequerboard14 = () =>(
    <div style={{flex: 1, display: 'flex'}}>
      <Engine antialias adaptToDeviceRatio canvasId='babylonJS'>
        <Scene onPointerObservable= {(evt) => {
              if (evt.type === PointerEventTypes.POINTERDOWN){
               if (evt.pickInfo?.pickedMesh) {
                const {pickedPoint} = evt.pickInfo;
              console.log(`${pickedPoint.x}`)
            }}}
        }>
         

        <arcRotateCamera  name="camera1"  target={new Vector3(0.5,-0.5,0)} alpha={-Math.PI/4 } beta={Math.PI / 3} radius={30} />
         <hemisphericLight name='light1' intensity={.7} direction={Vector3.Up()} />
         <hemisphericLight name='light2' intensity={.7} direction={Vector3.Down()} />

             <CubeMaker  name = "brown-7-7"  position = {new Vector3(0.5,-0.5,0)} color = {Color3.FromInts(75,54,33)} isPickable={true}/>   
             <CubeMaker name = "brown-7-6"    position = {new Vector3(1.5,-0.5,0)} color = {Color3.FromInts(240,230,140)} />   
             <CubeMaker name = "brown-7-5"    position = {new Vector3(2.5,-0.5,0)} color = {Color3.FromInts(75,54,33)}/>

             <CubeMaker name = "brown-6-7"    position = {new Vector3(0.5,-0.5,-1)} color = {Color3.FromInts(240,230,140)}  />   
             <CubeMaker name = "brown-6-6"    position = {new Vector3(1.5,-0.5,-1)} color = {Color3.FromInts(75,54,33)} />   
             <CubeMaker name = "brown-6-5"    position = {new Vector3(2.5,-0.5,-1)} color = {Color3.FromInts(240,230,140)}/>   

             <CubeMaker name = "brown-5-7"    position = {new Vector3(0.5,-0.5,-2)} color = {Color3.FromInts(75,54,33)} />   
             <CubeMaker name = "brown-5-6"    position = {new Vector3(1.5,-0.5,-2)} color = {Color3.FromInts(240,230,140)} />   
             <CubeMaker name = "brown-5-5"    position = {new Vector3(2.5,-0.5,-2)} color = {Color3.FromInts(75,54,33)} />   
             


             <CubeMaker name = "yellow-7-7"   rotation = {new Vector3(-Math.PI/2, 0,0)} position = {new Vector3(0.5,0,1.5)} color = {Color3.FromInts(75,54,33)}  />   
             <CubeMaker name = "yellow-7-6"   rotation = {new Vector3(-Math.PI/2, 0,0)} position = {new Vector3(0.5,1,1.5)} color ={Color3.FromInts(240,230,140)} />   
             <CubeMaker name = "yellow-7-5"   rotation = {new Vector3(-Math.PI/2, 0,0)} position = {new Vector3(0.5,2,1.5)} color = {Color3.FromInts(75,54,33)} />  

             <CubeMaker name = "yellow-6-7"   rotation = {new Vector3(-Math.PI/2, 0,0)} position = {new Vector3(1.5, 0, 1.5)} color ={Color3.FromInts(240,230,140)}/>   
             <CubeMaker name = "yellow-6-6"   rotation = {new Vector3(-Math.PI/2, 0,0)} position = {new Vector3(1.5, 1, 1.5)} color = {Color3.FromInts(75,54,33)}/>   
             <CubeMaker name = "yellow-6-5"   rotation = {new Vector3(-Math.PI/2, 0,0)} position = {new Vector3(1.5, 2, 1.5)} color ={Color3.FromInts(240,230,140)}/>  

             <CubeMaker name = "yellow-5-7"   rotation = {new Vector3(-Math.PI/2, 0,0)} position = {new Vector3(2.5, 0, 1.5)}  color = {Color3.FromInts(75,54,33)}/>   
             <CubeMaker name = "yellow-5-6"   rotation = {new Vector3(-Math.PI/2, 0,0)} position = {new Vector3(2.5, 1, 1.5)}  color ={Color3.FromInts(240,230,140)}/>   
             <CubeMaker name = "yellow-5-5"   rotation = {new Vector3(-Math.PI/2, 0,0)} position = {new Vector3(2.5, 2, 1.5)}  color = {Color3.FromInts(75,54,33)}/>  


            
             <CubeMaker name = "green-7-7"   rotation = {new Vector3(Math.PI,Math.PI,Math.PI/2)} position = {new Vector3(0,1,0)}  color = {Color3.FromInts(75,54,33)}/>   
             <CubeMaker name = "green-7-6"   rotation = {new Vector3(Math.PI,Math.PI,Math.PI/2)} position = {new Vector3(0,1,-1)} color ={Color3.FromInts(240,230,140)} />   
             <CubeMaker name = "green-7-5"   rotation = {new Vector3(Math.PI,Math.PI,Math.PI/2)} position = {new Vector3(0,1,-2)} color = {Color3.FromInts(75,54,33)}/>  

             <CubeMaker name = "green-6-7"   rotation = {new Vector3(Math.PI,Math.PI,Math.PI/2)} position = {new Vector3(0,2,0)}  color ={Color3.FromInts(240,230,140)} />   
             <CubeMaker name = "green-6-6"   rotation = {new Vector3(Math.PI,Math.PI,Math.PI/2)} position = {new Vector3(0,2,-1)} color = {Color3.FromInts(75,54,33)}/>   
             <CubeMaker name = "green-6-5"   rotation = {new Vector3(Math.PI,Math.PI,Math.PI/2)} position = {new Vector3(0,2,-2)} color ={Color3.FromInts(240,230,140)}/> 

             <CubeMaker name = "green-5-7"   rotation = {new Vector3(Math.PI,Math.PI,Math.PI/2)} position = {new Vector3(0,3,0)}   color = {Color3.FromInts(75,54,33)}/>   
             <CubeMaker name = "green-5-6"   rotation = {new Vector3(Math.PI,Math.PI,Math.PI/2)} position = {new Vector3(0,3,-1)}  color ={Color3.FromInts(240,230,140)}/>   
             <CubeMaker name = "green-5-5"   rotation = {new Vector3(Math.PI,Math.PI,Math.PI/2)} position = {new Vector3(0,3,-2)}  color ={Color3.FromInts(75,54,33)}/>   
                        
                          
              <MakeACylinder name="Cylinder1"  position={new Vector3(1, 1.5, 0.5)} color={new Color3.Red()}  />
              <MakeASphere  name ="Sphere1"   position={new Vector3(5, 0, 0)} color={new Color3.Blue()}  />

             </Scene>
        </Engine>
   </div>
)