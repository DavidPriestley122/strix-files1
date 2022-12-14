import React, {useState} from 'react'
import {Engine, Scene, useHover} from 'react-babylonjs'
import {Vector3, Mesh} from '@babylonjs/core';
import {Color3} from "@babylonjs/core/Maths/math.color";
import {StandardMaterial} from '@babylonjs/core/Materials/standardMaterial';
import { ActionManager, ExecuteCodeAction } from 'babylonjs';


const onMeshPicked = (pickedMesh) => {
  if (pickedMesh.name === 'PTT1') {
        console.log("clicked")
  }
 }


//The main app
const PieceMover = () =>{
 
//The next four functions determine the colour and position of the board squares
  function squareColor1(b=250) {
       return(
    Color3.FromInts(0,b,0)
   )
  }
  function squareColor2(b) {
    return(
     Color3.FromInts(b,0,0)
    )
  }
  function squarePosition1(a=2) {
    return(
    new Vector3(a,0,0)
    )
  }
  function squarePosition2(a=1) {
    return(
    new Vector3(a,0,0)
    )
  }
// A nonsense function to test whether new attributes can be invented. Seems yes. 
  function blahValue(x=2) {
  console.log(x)
  return(
     x
    )
  }
  // The next four functions determine the colour and positions of the playing piece. The first places
  // the piece at the location of the board square.
  // The first is the position of the head of the piece.

  function comboPiecePosition1(placeSync) {
   placeSync = squarePosition1()
   return(
    new Vector3(placeSync.x, placeSync.y+5.5, placeSync.z)
    )
  }
  // This is the body of the playing piece, always three lower than the head. 
  function comboPiecePosition2(offset) {
    offset = comboPiecePosition1()
    return(
    new Vector3(offset.x,((offset.y)-3),offset.z)
    )
  }
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
  // This joins the head and body of the playing piece
  function PieceTypeAndTeam(props) {
    return(
     <transformNode name='TF1'   >
          <cylinder name="head"  height={1} diameter={.5}  position={comboPiecePosition1()} >
          <standardMaterial name = "cylinder-headMat" diffuseColor={props.head}/>
       </cylinder>
       <cylinder name="body"  height={5} diameter={.5}  position={comboPiecePosition2()} >
         <standardMaterial name = "cylinder-bodyMat" diffuseColor={props.body}/>
       </cylinder>
    </transformNode>
    )
  }
  // this connects the board squares 
  function TheBoard1(){
    const joinedBoard = [];
    const count =2;
    for (let i = 1  ; i <= count ; i++) {
    const key = `${i}`;
    if(i%2===0)
    joinedBoard.push(
      <box name="first"  key = {key} blahValue = {blahValue()} height={.5} depth = {1} width={1} position={squarePosition1()} isPickable = {true} >
      <standardMaterial name = "first-mat" diffuseColor={squareColor1()} />
      </box>  
     ) 
     if(i%2!==0)
     joinedBoard.push(
        <box name="second" key={key} height={.5} depth = {1} width={1} position={squarePosition2()}  >
        <standardMaterial name = "second-mat2" diffuseColor={squareColor2(255)} />
              </box>    
     )
    }
    return(
      joinedBoard
    )
   }

   return (
      <>
           <PieceTypeAndTeam name= "PTT1" head={headColor1()}  body={bodyColor1()}   />  
           <transformNode name = "transformer1" >
           <pointerDragBehavior dragAxis={new Vector3(1, 0, 0)}
                            useObjectOrientationForDragging={true}
                            onDragStartObservable={_ => console.log('dragStart')}
                            onDragObservable={_ => console.log('drag')}
                            onDragEndObservable={_ => console.log('dragEnd')}/>         
           <TheBoard1 name = "board name"/>
           </transformNode>
      </>
    )
 }
      
 export const NewCBoard2 = () =>(  
  
       <div style={{flex: 1, display: 'flex'}}>
        <Engine antialias adaptToDeviceRatio canvasId='babylonJS'>
        <Scene onMeshPicked={onMeshPicked} >
        <arcRotateCamera  name="camera1"  target={Vector3.Zero()} alpha={Math.PI / 2} beta={Math.PI / 2} radius={30} />
        <hemisphericLight name='light1' intensity={.7} direction={Vector3.Up()} />
        <hemisphericLight name='light2' intensity={.7} direction={Vector3.Down()} />
                               
        <PieceMover name = "pieceTransport" />
        <box name = "box1" />
                                                             
      </Scene>
    </Engine>
</div>
)