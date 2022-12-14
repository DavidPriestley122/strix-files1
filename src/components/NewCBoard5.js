import React, {useState} from 'react'
import {Engine, Scene, useClick} from 'react-babylonjs'
import {Vector3} from '@babylonjs/core';
import {Color3} from "@babylonjs/core/Maths/math.color";


 
//The next four functions determine the colour and position of the board squares
  function squareColor1(a,b,c) {
       return(
    Color3.FromInts(a,b,c)
   )
  }
  function squareColor2(a,b,c) {
    return(
     Color3.FromInts(a,b,c)
    )
  }
  function squarePosition1() {
    return(
    new Vector3(1,0,0)
    )
  }
  function squarePosition2() {
    const a=2;
    if(a<=3)
    return(
    new Vector3(5,0,0)
    )
  }
   // The next four functions determine the colour and positions of the playing piece. The first places
  // the piece at the location of the board square.
  // The first is the position of the head of the piece.
  /*function comboPiecePosition1(placeSync) {
   placeSync = squarePosition1()
   return(
    new Vector3(placeSync.x, placeSync.y+5.5, placeSync.z)
    )
  }
 /* // This is the body of the playing piece, always three lower than the head. 
  function comboPiecePosition2(offset) {
    offset = comboPiecePosition1()
    return(
    new Vector3(offset.x,((offset.y)-3),offset.z)
    )
  }
  */
  function headColor1() {
  return(
  Color3.FromInts(0,0,255)
    )
  }
  
  function bodyColor1() {
  return(
  Color3.FromInts(255,0,0)
  )
   }

  // this creates a board square
   function TheBoardPiece1(props){
    return(
       <box name="first"  height={.5} depth = {1} width={1} position = {props.position} >
      <standardMaterial name = "first-mat" diffuseColor = {props.color}/>
      </box>
     )
   }

   function onMeshPicked (pickedMesh) {
    if (pickedMesh.name === 'first') {
      const xValue = pickedMesh?.position.x;
      const yValue = pickedMesh?.position.y;
      const zValue = pickedMesh?.position.z;
      const positionOfSquare = [xValue,yValue,zValue]
      console.log(positionOfSquare)
          //console.log("clicked")
      return(
        positionOfSquare
       )
     }
   }    
  const startingPosition1 = squarePosition1()

  const  WithUseClick1 = () =>{
       const [meshPosition, setComboPiecePosition] = useState(startingPosition1);
       const [ref]= useClick(_=> {
         //const meshPosition = squarePosition1();
         setComboPiecePosition(squarePosition2())
       });
      
        
        return(
          <cylinder ref ={ref}  height={6} diameter = {0.5} position = {meshPosition}>
    
            <cylinder height = {1} diameter = {0.5} position = {new Vector3(0,3.5,0)} >
            <standardMaterial name = "first-mat" diffuseColor = {headColor1()}/>
            </cylinder>
            
          <standardMaterial name = "second-mat" diffuseColor = {bodyColor1()}/>  
          </cylinder>
    
        )
       }
      
 export const NewCBoard5 = () =>(  
         <div style={{flex: 1, display: 'flex'}}>
        <Engine antialias adaptToDeviceRatio canvasId='babylonJS'>
        <Scene onMeshPicked={onMeshPicked} >
        <arcRotateCamera  name="camera1"  target={Vector3.Zero()} alpha={Math.PI / 2} beta={Math.PI / 2} radius={30} />
        <hemisphericLight name='light1' intensity={.7} direction={Vector3.Up()} />
        <hemisphericLight name='light2' intensity={.7} direction={Vector3.Down()} />
                  
         <TheBoardPiece1 name = "board1" position = {squarePosition1()} color = {squareColor1(0,255,0)} />
         <TheBoardPiece1 name = "board2" position = {squarePosition2()} color ={squareColor2(255,0,0)}/>
        <WithUseClick1/>
       
      
                                 
      </Scene>
    </Engine>
</div>
)