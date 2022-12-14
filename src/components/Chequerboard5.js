import React, { useState, useMemo } from 'react'
import { Vector3, Mesh, VertexData, MeshBuilder} from '@babylonjs/core';
import { Engine, Scene, useScene } from 'react-babylonjs'
import {Color3} from '@babylonjs/core/Maths/math.color';



const BoardMesh = (props) => {
    const scene = useScene();
    const [customMesh] = useState(()=>{
    const meshInstance = new Mesh(props.name, scene);
    var positions = [1,0,0,  1,1,0,  0,0,0, 
                      0,0,0,  1,1,0,  0,1,0,    
                      1,0,0,  1,1,1,  1,1,0,  
                      1,0,0,  1,0,1,  1,1,1,  
                      1,1,0,  0,1,1,  0,1,0, 
                      1,1,0,  1,1,1,  0,1,1, 
                      0,1,0,  0,0,1,  0,0,0, 
                      0,1,0,  0,1,1,  0,0,1,
                      0,0,0,  1,0,1,  1,0,0, 
                      0,0,0,  0,0,1,  1,0,1, 
                      0,0,1,  1,1,1,  1,0,1, 
                      0,0,1,  0,1,1,  1,1,1 ]
     var indices = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36];
     var colors =  [1,0,0,1,  1,0,0,1, 1,0,0,1,
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
      var normals = [];
      var vertexData = new VertexData();
      VertexData.ComputeNormals(positions, indices, normals,);
      vertexData.positions = positions;    
      vertexData.indices = indices;
      vertexData.normals = normals;
      //vertexData.colors = colors;
      vertexData.applyToMesh(meshInstance);

      return meshInstance;
     })
      
    return (
        <mesh fromInstance={customMesh}  disposeInstanceOnUnmount rotation={props.rotation}  scaling = {props.scaling} position={props.position} >
           <standardMaterial  name = "singleCube"  diffuseColor= {props.color} height = {props.height} wireframe={props.useWireframe} />
        </mesh>
    )
  }

  

const  ThreeBoard =()=> {
  const results = [];
  const count = 7;
  
let k=1;
  for (let i = 1  ; i <= count ; i++) {
         for (let j = 1 ; j <= count; j++) {
      const key = `brown-${i}-${j}`;

      if(j%2 ===0 && i%2 ===0)
      results.push(
        <BoardMesh  name= {key} key={key} color = {Color3.FromInts(75,54,33)} scaling={new Vector3(1, 1, 0.5)} position={new Vector3(i,j,(k-0.5))} >
        </BoardMesh>
      )
      if (j%2===0 && i%2!==0) 
      results.push( 
        <BoardMesh  name="first twelve yellows on brown"  key = {key}  color = {Color3.FromInts(240,230,140)}scaling={new Vector3(1, 1, 0.5)} position={new Vector3(i,j,(k-0.5))} >
        </BoardMesh>
      )
      if (j%2!==0 && i%2===0) 
      results.push( 
        <BoardMesh  name= "second twelve yellows on brown"  key = {key}  color = {Color3.FromInts(240,230,140)}scaling={new Vector3(1, 1, 0.5)} position={new Vector3(i,j,(k-0.5))} >
        </BoardMesh>
      )
      if (j%2!==0 && i%2!==0)
        results.push( 
        <BoardMesh  name="sixteen browns on brown"  key ={key} color = {Color3.FromInts(75,54,33)} scaling={new Vector3(1, 1, 0.5)} position={new Vector3(i,j,(k-0.5))} >
        </BoardMesh>
      )
      if (j===1 && i===7)
      results.push(
        <BoardMesh  name= "brown Owl Square"  key = "brown Owl square" color = {Color3.FromInts(111, 78, 55)} scaling={new Vector3(1, 1, 0.5)} position={new Vector3(7,1,1)} >
        </BoardMesh>
      )
    }
  } 

  let j=1;
    for (let k=1; k <= count ; k++) {
    for (let i=1 ; i <= count; i++) {
      const key = `yellow-${i}-${k}`;

      if(i%2 ===0 && k%2 ===0)
      results.push(
        <BoardMesh  name="nine browns on yellow"  key = {key} color = {Color3.FromInts(75,54,33)} scaling={new Vector3(1,0.5,1)} position={new Vector3(i, (j-0.5), k)} >
        </BoardMesh>
      )
      if (i%2===0 && k%2!==0) 
      results.push( 
        <BoardMesh  name="first twelve yellows on yellow"  key = {key}  color = {Color3.FromInts(240,230,140)}scaling={new Vector3(1, 0.5, 1)} position={new Vector3(i,(j-0.5),k)} >
        </BoardMesh>
      )

      if ( i%2!==0 && k%2===0) 
      results.push( 
        <BoardMesh  name= "second twelve yellows on yellow"  key = {key}  color = {Color3.FromInts(240,230,140)}scaling={new Vector3(1, 0.5, 1)} position={new Vector3(i,(j-0.5),k)} >
        </BoardMesh>
      )
     
        if (i%2!==0 && k%2!==0)
        results.push( 
        <BoardMesh  name="sixteen browns on yellow"  key = {key} color = {Color3.FromInts(75,54,33)} scaling={new Vector3(1,0.5,1)} position={new Vector3(i, (j- 0.5), k)} >
        </BoardMesh>
      )
      if (i===1 && k===7)
        results.push(
        <BoardMesh   name={"yellow Owl Square"}  key = "yellow Owl Square" color = {Color3.FromInts(253, 218, 13)}  scaling={new Vector3(0.5, 1, 1)} position={new Vector3(1, 1, 7)} >
        </BoardMesh>
       )
    }
  }
  let i=1;
  for (let k = 1 ; k <= count ; k++) {
    for (let j = 1 ; j <= count; j++) {
      const key = `green-${j}-${k}`;

      if(j%2 ===0 && k%2 ===0)
      results.push(
        <BoardMesh  name="nine browns on green" key = {key} color = {Color3.FromInts(75,54,33)}scaling={new Vector3(0.5, 1, 1)} position={new Vector3((i-0.5),j,k)} >
        </BoardMesh>
      )
      
      if (j%2===0 && k%2!==0) 
      results.push( 
        <BoardMesh  name="first twelve yellows on green"  key = {key}  color = {Color3.FromInts(240,230,140)}scaling={new Vector3(0.5, 1, 1)} position={new Vector3((i-0.5),j,k)} >
        </BoardMesh>
      )

      if (j%2!==0 && k%2===0) 
      results.push( 
        <BoardMesh  name= "second twelve yellows on green"  key = {key}  color = {Color3.FromInts(240,230,140)}scaling={new Vector3(0.5, 1, 1)} position={new Vector3((i-0.5),j,k)} >
        </BoardMesh>
      )
      
        if (j%2!==0 && k%2!==0)
        results.push( 
        <BoardMesh  name="sixteen browns on green" key = {key} color = {Color3.FromInts(75,54,33)} scaling={new Vector3(0.5, 1, 1)} position={new Vector3((i-0.5),j,k)} >
        </BoardMesh>
      )
       if (j===1 && k===7)
        results.push(
       <BoardMesh    name="green Owl Square"  key = "green Owl Square" color = {Color3.FromInts(34, 139, 34)}scaling={new Vector3(0.5,1, 1)} position={new Vector3(1,7,1)} >
       </BoardMesh>
      )
    }
  } 
 return results; 
}

/*const GizmoBox = (props) => (
  <cylinder  height={7} diameter = {0.5} position={props.position}>
    <standardMaterial diffuseColor={props.color} specularColor={Color3.Black()} />
    <positionGizmo/>
    <rotationGizmo/>
  </cylinder>
)
*/

const GizmoBox2 = () => (
  <cylinder  height={7} diameter = {0.5} position={new Vector3(2.5,4.5,6.5)}>
    <standardMaterial diffuseColor={Color3.Blue()} specularColor={Color3.Black()} />
    <positionGizmo/>
    <rotationGizmo/>
  </cylinder>
)

const GizmoBox3 = () => (
  <cylinder  height={7} diameter = {0.5} position={new Vector3(5.5,4.5,6.5)}>
    <standardMaterial diffuseColor={Color3.Red()} specularColor={Color3.Black()} />
    <positionGizmo   planarGizmoEnabled={true}  />  
    <rotationGizmo/>
  </cylinder>
)

const onMeshPicked = (pickedMesh) => {
  if (pickedMesh.name === 'brown-2-4') {
    pickedMesh.position.x += 1;
  }
 }



export const Chequerboard5 = () => {
    return(
        <div className="App">
           <Engine antialias adaptToDeviceRatio canvasId='babylonJS'>
            <Scene onMeshPicked = {onMeshPicked}>
             <arcRotateCamera  name="camera1"  target={Vector3.Zero()} alpha={Math.PI / 2} beta={Math.PI / 2} radius={30} />
             <hemisphericLight name='light1' intensity={0.7} direction={Vector3.Up()} />
             <hemisphericLight name='light1' intensity={0.7} direction={Vector3.Down()} />
                    
              <transformNode  name = "transformNode1">
              {ThreeBoard()}
              </transformNode>
              
                <ThreeBoard name = "brown-2-4"/>
               
               <utilityLayerRenderer>
               <GizmoBox2/>
               <GizmoBox3/>
              </utilityLayerRenderer>
                   
            </Scene>
        </Engine>
      </div>
   
  ) 
}


/*<cylinder name='brown Owl' height = {7} diameter = {0.5} position = {new Vector3(2.5,4.5,3.5)} >
          <standardMaterial diffuseColor = {new Color3.Red()}/>
          </cylinder>
         
 <GizmoBox color={Color3.Red()} position={new Vector3(2.5, 4.5, 3.5)} />
               <GizmoBox color={Color3.Yellow()} position={new Vector3(2.5, 4.5, 5.5)} />

          <cylinder name='yellow Owl' height = {7} diameter = {0.5} position = {new Vector3(2.5,4.5,5.5)} >
          <standardMaterial diffuseColor = {new Color3.Blue()}/>
          </cylinder>
*/

/*const CreatePlayingPiece = () => {
  return(
        <transformNode name = "brown Owl">  
        <cylinder name = "green Owl body" height = {5} diameter = {0.5} position = {new Vector3(2.5, 2.5, 3.5)}>
           <standardMaterial  diffuseColor = {new Color3.Red()}/>
         </cylinder>
        <cylinder name = "green Owl body" height = {2} diameter = {0.5} position = {new Vector3(2.5, 2.5, 3.5)}>
           <standardMaterial  diffuseColor = {new Color3.Blue()}/>
         </cylinder>
         </transformNode>
      
     
  )
}

  const onMeshPicked = (pickedMesh) => {
    if (pickedMesh.name === 'brown Owl') {
      pickedMesh.position.x += 1;
    }
   }
*/
/*const MyMesh = (props) => {
    const [mesh, setMesh] = useState(null);
    const scene = useScene();
    useMemo(() => {
     console.log('creating a cylinder with scene', scene);
     setMesh(MeshBuilder.CreateCylinder('test', { height:7, diameter:0.5}, scene));
    }, []);
  
    return (
      <>
        {mesh &&
         <mesh fromInstance={mesh} rotation={props.rotation} position = {props.position}  disposeInstanceOnUnmount>
          <standardMaterial name='boxmat' diffuseColor={Color3.Blue()} specularColor={Color3.Black()} />
          </mesh>
        }
      </>
    )
  }
*/
  /*const MyRedMesh = (props) => {
    const [mesh, setMesh] = useState(null);
    const scene = useScene();
    useMemo(() => {
     console.log('creating a cylinder with scene', scene);
     setMesh(MeshBuilder.CreateCylinder('test', {height:7, diameter:0.5}, scene));
    }, []);
  
    return (
      <>
        {mesh &&
         <mesh fromInstance={mesh} rotation={props.rotation}  position = {props.position} disposeInstanceOnUnmount>
          <standardMaterial name='boxmat' diffuseColor={Color3.Red()} specularColor={Color3.Black()} />
          </mesh>
        }
      </>
    )
  }
  */
 /* const [position, setPosition] = useState(new Vector3(2.5, 4.5, 3.5));
  //const [position2, setPosition] = useState (new Vector3(2.5, 5.5, 3.5) )
  
  const changePosition = () => {
    setPosition((state) => new Vector3(position.x +1, 4.5, 3.5));
  };          
  const changePositionBack = () =>{
   setPosition((state) => new Vector3(position.x-1, 4.5,3.5))
 };
 */