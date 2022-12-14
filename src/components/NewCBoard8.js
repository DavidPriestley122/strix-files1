import React, { useState } from 'react'
import { Vector3, Mesh, VertexData} from '@babylonjs/core';
import { Engine, Scene, useScene, useClick   } from 'react-babylonjs'
import {Color3,Color4} from '@babylonjs/core/Maths/math.color';


const PieceMesh = (props) => {
    const scene = useScene(); 
    const [customMesh] = useState(()=>{
    const meshInstance = new Mesh(props.name, scene);
    var positions = [  
        
        0,0,0,          -0.5,0,0,                    -.48296,0,.12941,
        0,0,0,          -.48296,0,.12941,            -.43301,0,.25, 
        0,0,0,          -.43301,0,.25,               -.35335,0,.35335,
        0,0,0,          -.35335,0,.35335,            -.25,0,.43301,
        0,0,0,          -.25,0,.43301,             -.12940,0,.48296,
        0,0,0,          -.12940,0,.48296,             0,0,0.5,

        0,0,0,           0,0,0.5,                    .12940,0,.48296,
        0,0,0,          .12940,0,.48296,             .25,0,.43301, 
        0,0,0,          .25,0, .43301,               .35335,0,.35335, 
        0,0,0,          .35335,0,.35335,             .43301,0,.25, 
        0,0,0,          .43301,0,.25,                .48296,0,.12941, 
        0,0,0,          .48296,0,.12941,              0.5,0,0,

        0,0,0,            0.5,0,0,                    .48296,0,-.12941,
        0,0,0,           .48296,0,-.12941,            .43301,0, -.25, 
        0,0,0,           .43301,0,-.25,               .35335,0,-.35335, 
        0,0,0,           .35335,0,-.35335,             .25,0, -.43301, 
        0,0,0,            .25,0,-.43301,              .12940,0,-.48296,
        0,0,0,           .12940,0,-.48296,             0,0,-0.5,

        0,0,0,            0,0,-0.5,                    -.12940,0, -.48296,
        0,0,0,           -.12940,0,-.48296,            -.25,0, -.43301,
        0,0,0,           -.25,0, -.43301,              -.35335,0,-.35335,
        0,0,0,           -.35335,0, -.35335,           -.43301,0,-.25, 
        0,0,0,           -.43301,0, -.25,              -.48296,0,-.12941,
        0,0,0,            -.48296,0,-.12941,            -0.5,0,0,


            0,0,-.5,        .12940,0,-.48296,                0,1,-.5,
       .12940,0,-.48296,      .12940,1,-.48296,                0,1,-.5, 
       .12940,0,-.48296,         .25,0,-.43301,           .12940,1,-.48296, 
          .25,0,-.43301,         .25,1,-.43301,           .12940,1,-.48296, 
          .25,0,-.43301,      .35335,0,-.35335,              .25,1,-.43301, 
       .35335,0,-.35335,      .35335,1,-.35335,              .25,1,-.43301,
       .35335,0,-.35335,      .43301,0,-.25,              .35335,1,-.35335,  
       .43301,0,-.25,         .43301,1,-.25,              .35335,1,-.35335,
       .43301,0,-.25,         .48296,0,-.12941,           .43301,1,-.25, 
       .48296,0,-.12941,      .48296,1,-.12941,           .43301,1,-.25,    
       .48296,0,-.12941,          .5,0,0,                 .48296,1,-.12941,  
           .5,0,0,                .5,1,0,                 .48296,1,-.12941, 
           .5,0,0,         .48296,0,.12941,                   .5,1,0, 
       .48296,0,.12941,       .48296,1,.12941,                .5,1,0, 
       .48296,0,.12941,       .43301,0,.25,               .48296,1,.12941,  
       .43301,0,.25,          .43301,1,.25,               .48296,1,.12941,
       .43301,0,.25,          .35335,0,.35335,            .43301,1,.25, 
       .35335,0,.35335,       .35335,1,.35335,            .43301,1,.25, 
       .35335,0,.35335,          .25,0,.43301,            .35335,1,.35335,
          .25,0,.43301,          .25,1,.43301,            .35335,1,.35335, 
          .25,0,.43301,       .12940,0,.48296,               .25,1,.43301, 
       .12940,0,.48296,       .12940,1,.48296,               .25,1,.43301, 
       .12940,0,.48296,            0,0,.5,                .12940,1,.48296,
            0,0,.5,                0,1,.5,                .12940,1,.48296,    
            0,0,.5,          -.12940,0,.48296,                 0,1,.5, 
      -.12940,0,.48296,      -.12940,1,.48296,                 0,1,.5, 
      -.12940,0,.48296,         -.25,0,.43301,           -.12940,1,.48296, 
      -.25,0,.43301,            -.25,1,.43301,           -.12940,1,.48296,  
      -.25,0,.43301,         -.35335,0,.35335,              -.25,1,.43301,     
      -.35335,0,.35335,      -.35335,1,.35335,              -.25,1,.43301,   
      -.35335,0,.35335,      -.43301,0,.25,              -.35335,1,.35335, 
      -.43301,0,.25,         -.43301,1,.25,              -.35335,1,.35335,
      -.43301,0,.25,         -.48296,0,.12941,           -.43301,1,.25, 
      -.48296,0,.12941,      -.48296,1,.12941,           -.43301,1,.25, 
      -.48296,0,.12941,          -.5,0,0,                -.48296,1,.12941, 
          -.5,0,0,               -.5,1,0,                -.48296,1,.12941, 
          -.5,0,0,           -.48296,0,-.12941,              -.5,1,0,  
      -.48296,0,-.12941,     -.48296,1,-.12941,              -.5,1,0,  
      -.48296,0,-.12941,     -.43301,0,-.25,             -.48296,1,-.12941, 
      -.43301,0,-.25,        -.43301,1,-.25,             -.48296,1,-.12941, 
      -.43301,0,-.25,        -.35335,0,-.35335,          -.43301,1,-.25, 
      -.35335,0,-.35335,     -.35335,1,-.35335,          -.43301,1,-.25, 
      -.35335,0,-.35335,        -.25,0,-.43301,          -.35335,1,-.35335, 
         -.25,0,-.43301,        -.25,1,-.43301,          -.35335,1,-.35335, 
         -.25,0,-.43301,     -.12940,0,-.48296,             -.25,1,-.43301, 
       -.12940,0,-.48296,    -.12940,1,-.48296,             -.25,1,-.43301, 
       -.12940,0,-.48296,          0,0,-.5,                -.12940,1,-.48296, 
             0,0,-.5,              0,1,-.5,                 -.12940,1,-.48296,   


          0,1,0,                 -0.5,1,0,                  -.48296,1,-.12941, 
          0,1,0,              -.48296,1,-.12941,            -.43301,1,-.25, 
          0,1,0,              -.43301,1,-.25,               -.35335,1,-.35335,
          0,1,0,              -.35335,1,-.35335,               -.25,1,-.43301,
          0,1,0,                 -.25,1,-.43301,            -.12940,1,-.48296,  
          0,1,0,              -.12940,1,-.48296,                  0,1,-.5, 
          0,1,0,                    0,1,-.5,                 .12940,1,-.48296,  
          0,1,0,               .12940,1,-.48296,                .25,1,-.43301,   
          0,1,0,                  .25,1,-.43301,             .35335,1,-.35335, 
          0,1,0,               .35335,1,-.35335,             .43301,1,-.25,  
          0,1,0,               .43301,1,-.25,                .48296,1,-.12941,
          0,1,0,               .48296,1,-.12941,                 .5,1,0, 
          0,1,0,                   .5,1,0,                   .48296,1,.12941,
          0,1,0,               .48296,1,.12941,              .43301,1,.25, 
          0,1,0,               .43301,1,.25,                 .35335,1,.35335,
          0,1,0,               .35335,1,.35335,                 .25,1,.43301, 
          0,1,0,                  .25,1,.43301,              .12940,1,.48296, 
          0,1,0,               .12940,1,.48296,                   0,1,0.5,
          0,1,0,                    0,1,0.5,                -.12940,1,.48296, 
          0,1,0,              -.12940,1,.48296,                -.25,1,.43301, 
          0,1,0,                 -.25,1,.43301,              -.35335,1,.35335,
          0,1,0,              -.35335,1,.35335,              -.43301,1,.25, 
          0,1,0,              -.43301,1,.25,                 -.48296,1,.12941, 
          0,1,0,              -.48296,1,.12941,                  -.5,1,0
                   
           
         ]

                    
     var indices = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,
                    60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,
                    113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,
                   156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,
                   200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,
                   244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288];

     var colors =  [
                    0,1,0,1,       0,1,0,1,       0,1,0,1,      0,1,0,1,        0,1,0,1,      0,1,0,1,    0,1,0,1,       0,1,0,1,      0,1,0,1,     0,1,0,1,
                    0,1,0,1,       0,1,0,1,       0,1,0,1,      0,1,0,1,        0,1,0,1,      0,1,0,1,    0,1,0,1,       0,1,0,1,      0,1,0,1,     0,1,0,1,
                    0,1,0,1,       0,1,0,1,       0,1,0,1,      0,1,0,1,        0,1,0,1,      0,1,0,1,    0,1,0,1,       0,1,0,1,      0,1,0,1,     0,1,0,1,
                    0,1,0,1,       0,1,0,1,       0,1,0,1,      0,1,0,1,        0,1,0,1,      0,1,0,1,    0,1,0,1,       0,1,0,1,      0,1,0,1,     0,1,0,1,
                    0,1,0,1,       0,1,0,1,       0,1,0,1,      0,1,0,1,        0,1,0,1,      0,1,0,1,    0,1,0,1,       0,1,0,1,      0,1,0,1,     0,1,0,1,
                    0,1,0,1,       0,1,0,1,       0,1,0,1,      0,1,0,1,        0,1,0,1,      0,1,0,1,    0,1,0,1,       0,1,0,1,      0,1,0,1,     0,1,0,1,
                    0,1,0,1,       0,1,0,1,       0,1,0,1,      0,1,0,1,        0,1,0,1,      0,1,0,1,    0,1,0,1,       0,1,0,1,      0,1,0,1,     0,1,0,1,
                    0,1,0,1,       0,1,0,1,       0,1,0,1,      0,1,0,1,        0,1,0,1,      0,1,0,1,    0,1,0,1,       0,1,0,1,      0,1,0,1,     0,1,0,1,
                    0,1,0,1,       0,1,0,1,       0,1,0,1,      0,1,0,1,        0,1,0,1,      0,1,0,1,    0,1,0,1,       0,1,0,1,      0,1,0,1,     0,1,0,1,
                    0,1,0,1,       0,1,0,1,       0,1,0,1,      0,1,0,1,        0,1,0,1,      0,1,0,1,    0,1,0,1,       0,1,0,1,      0,1,0,1,     0,1,0,1,

                    0,1,0,1,       0,1,0,1,       0,1,0,1,      0,1,0,1,        0,1,0,1,      0,1,0,1,    0,1,0,1,       0,1,0,1,      0,1,0,1,     0,1,0,1,
                    0,1,0,1,       0,1,0,1,       0,1,0,1,      0,1,0,1,        0,1,0,1,      0,1,0,1,    0,1,0,1,       0,1,0,1,      0,1,0,1,     0,1,0,1,
                    0,1,0,1,       0,1,0,1,       0,1,0,1,      0,1,0,1,        0,1,0,1,      0,1,0,1,    0,1,0,1,       0,1,0,1,      0,1,0,1,     0,1,0,1,
                    0,1,0,1,       0,1,0,1,       0,1,0,1,      0,1,0,1,        0,1,0,1,      0,1,0,1,    0,1,0,1,       0,1,0,1,      0,1,0,1,     0,1,0,1,
                    0,1,0,1,       0,1,0,1,       0,1,0,1,      0,1,0,1,        0,1,0,1,      0,1,0,1,    0,1,0,1,       0,1,0,1,      0,1,0,1,     0,1,0,1,
                    0,1,0,1,       0,1,0,1,       0,1,0,1,      0,1,0,1,        0,1,0,1,      0,1,0,1,    0,1,0,1,       0,1,0,1,      0,1,0,1,     0,1,0,1,
                    0,1,0,1,       0,1,0,1,       0,1,0,1,      0,1,0,1,        0,1,0,1,      0,1,0,1,    0,1,0,1,       0,1,0,1,      0,1,0,1,     0,1,0,1,
                    0,1,0,1,       0,1,0,1,       0,1,0,1,      0,1,0,1,        0,1,0,1,      0,1,0,1,    0,1,0,1,       0,1,0,1,      0,1,0,1,     0,1,0,1,
                    0,1,0,1,       0,1,0,1,       0,1,0,1,      0,1,0,1,        0,1,0,1,      0,1,0,1,    0,1,0,1,       0,1,0,1,      0,1,0,1,     0,1,0,1,
                    0,1,0,1,       0,1,0,1,       0,1,0,1,      0,1,0,1,        0,1,0,1,      0,1,0,1,    0,1,0,1,       0,1,0,1,      0,1,0,1,     0,1,0,1,

                    0,1,0,1,       0,1,0,1,       0,1,0,1,      0,1,0,1,        0,1,0,1,      0,1,0,1,    0,1,0,1,       0,1,0,1,      0,1,0,1,     0,1,0,1,
                    0,1,0,1,       0,1,0,1,       0,1,0,1,      0,1,0,1,        0,1,0,1,      0,1,0,1,    0,1,0,1,       0,1,0,1,      0,1,0,1,     0,1,0,1,
                    0,1,0,1,       0,1,0,1,       0,1,0,1,      0,1,0,1,        0,1,0,1,      0,1,0,1,    0,1,0,1,       0,1,0,1,      0,1,0,1,     0,1,0,1,
                    0,1,0,1,       0,1,0,1,       0,1,0,1,      0,1,0,1,        0,1,0,1,      0,1,0,1,    0,1,0,1,       0,1,0,1,      0,1,0,1,     0,1,0,1,
                    0,1,0,1,       0,1,0,1,       0,1,0,1,      0,1,0,1,        0,1,0,1,      0,1,0,1,    0,1,0,1,       0,1,0,1,      0,1,0,1,     0,1,0,1,
                    0,1,0,1,       0,1,0,1,       0,1,0,1,      0,1,0,1,        0,1,0,1,      0,1,0,1,    0,1,0,1,       0,1,0,1,      0,1,0,1,     0,1,0,1,
                    0,1,0,1,       0,1,0,1,       0,1,0,1,      0,1,0,1,        0,1,0,1,      0,1,0,1,    0,1,0,1,       0,1,0,1,      0,1,0,1,     0,1,0,1,
                    0,1,0,1,       0,1,0,1,       0,1,0,1,      0,1,0,1,        0,1,0,1,      0,1,0,1,    0,1,0,1,       0,1,0,1,      0,1,0,1,     0,1,0,1,
                    0,1,0,1,       0,1,0,1,       0,1,0,1,      0,1,0,1,        0,1,0,1,      0,1,0,1,    0,1,0,1,       0,1,0,1,      0,1,0,1,     0,1,0,1,
                    0,1,0,1,       0,1,0,1,       0,1,0,1,      0,1,0,1,        0,1,0,1,      0,1,0,1,    0,1,0,1,       0,1,0,1,      0,1,0,1,     0,1,0,1,
        

                 
                ]
      var normals = [];
      var vertexData = new VertexData();
      VertexData.ComputeNormals(positions, indices, normals,);
      vertexData.positions = positions;    
      vertexData.indices = indices;
      vertexData.normals = normals;
      vertexData.colors = colors;
      vertexData.applyToMesh(meshInstance);
       
      return meshInstance;
     })
    return (
        <mesh fromInstance={customMesh} name = "meshPieceName1" rotation={props.rotation}  scaling = {props.scaling} position={props.position} >
           <standardMaterial  name = "singlePieceShaft1"  diffuseColor= {props.color}  />
        </mesh>
    )
  }


const BoardMesh = (props) => {
    const scene = useScene(); 
    const [customMesh] = useState(()=>{
    const meshInstance = new Mesh(props.name, scene);
    var positions = [0,0,0,            0,0,0.5,         -0.5,0,0.5,
                    0,0,0,            -0.5,0,0.5,       -0.5,0,0,
                    0,0,0,            -0.5,0,0,         -0.5,0,-0.5,
                    0,0,0,            -0.5,0,-0.5,       0,0,-0.5,
                    0,0,0,            0,0,-0.5,          0.5,0,-0.5,
                    0,0,0,            0.5,0,-0.5,     0.5,0,0,
                    0,0,0,            0.5,0,0,           0.5,0,0.5,
                    0,0,0,            0.5,0,0.5,         0,0,0.5,
                    
                    0.5,-0.5,-0.5,     0.5,0,-0.5,      -0.5,-0.5,-0.5,
                    -0.5,-0.5,-0.5,    0.5,0,-0.5,      -0.5,0,-0.5,
                    0.5,-0.5,-0.5,     0.5,-0.5,0.5,     0.5,0,0.5,
                    0.5,-0.5,-0.5,     0.5,0,0.5,        0.5,0,-0.5,
                    0.5,-0.5,0.5,      -0.5,-0.5,0.5,    -0.5,0,0.5,   
                    0.5,-0.5,0.5,      -0.5,0,0.5,       0.5,0,0.5,
                    -0.5,-0.5,0.5,     -0.5,-0.5,-0.5,   -0.5,0,-0.5,
                    -0.5,-0.5,0.5,     -0.5,0,-0.5,      -0.5,0,0.5, 
                    -0.5,-0.5,-0.5,    0.5,-0.5,0.5,      0.5,-0.5,-0.5,
                    -0.5,-0.5,-0.5,    -0.5,-0.5,0.5,     0.5,-0.5,0.5,]


     var indices = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,];
     var colors =  [
                    0,1,0,1,           0,1,0,1,         0,1,0,1,       
                    0,1,0,1,           0,1,0,1,         0,1,0,1,      
                    0,1,0,1,           0,1,0,1,         0,1,0,1,       
                    0,1,0,1,           0,1,0,1,         0,1,0,1,        
                    0,1,0,1,           0,1,0,1,         0,1,0,1,       
                    0,1,0,1,           0,1,0,1,         0,1,0,1,       
                    0,1,0,1,           0,1,0,1,         0,1,0,1,       
                    0,1,0,1,           0,1,0,1,         0,1,0,1,       
              
                    1,0,0,1,          1,0,0,1,          1,0,0,1,
                    1,0,0,1,          1,0,0,1,          1,0,0,1, 
                    0,0,1,1,          0,0,1,1,          0,0,1,1,
                    0,0,1,1,          0,0,1,1,          0,0,1,1,
                    0,1,1,1,          0,1,1,1,          0,1,1,1,
                    0,1,1,1,          0,1,1,1,          0,1,1,1,
                    1,1,0,1,          1,1,0,1,          1,1,0,1,
                    1,1,0,1,          1,1,0,1,          1,1,0,1,
                    1,0,1,1,          1,0,1,1,          1,0,1,1,
                    1,0,1,1,          1,0,1,1,         1,0,1,1,]
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
        <mesh fromInstance={customMesh} name = "meshName1" rotation={props.rotation}  scaling = {props.scaling} position={props.position} >
           <standardMaterial  name = "singleCube"  diffuseColor= {props.color} height = {props.height} />
        </mesh>
    )
  }

function squarePositionNew(){
   return(
     new Vector3.FromArray(positionOfSquare)
    )
}

function squarePositionRotationNew(){

    if(positionOfSquare[0] === 0)
    return(
        new Vector3(0,0,-Math.PI/2)
    )
    else if (positionOfSquare[1]=== 0)
    return(
        new Vector3(0,0,0)  
    ) 
    else if (positionOfSquare[2] === 0)
    return(
        new Vector3(-Math.PI/2, 0,0)
    )
    
}

function headColor1() {
    return(
    Color3.FromInts(0,0,255)
      )
    }
function headColor2() {
    return(
        Color3.FromInts(0,255,0)   
    )
}    
function bodyColor1() {
    return(
    Color3.FromInts(255,0,0)
      )
    }
function bodyColor2() {
    return(
    Color3.FromInts(0,0,255)
     )
    }



const  WithUseClick1 = () =>{
const [meshPosition, setPiecePosition] = useState(new Vector3(7,7,-1));
const [meshRotation, setPieceRotation] = useState(Vector3.Zero)
const [ref]= useClick(_=> {
const meshPosition = squarePositionNew();
const meshRotation = squarePositionRotationNew();
      setPiecePosition(meshPosition)  
      setPieceRotation(meshRotation)
      });

    return(
        <cylinder name = "cylHead1" ref={ref} height = {1} diameter = {0.5}  rotation = {meshRotation}  position = {meshPosition}>
        <cylinder name = "cylShaft1" height=  {6} diameter = {0.5} position = {new Vector3(0,-3.5,0)} >
        <standardMaterial name = "body-mat" diffuseColor = {bodyColor1()}/>
        </cylinder>   
        <standardMaterial name = "head-mat" diffuseColor = {headColor1()}/>  
        </cylinder>   
             
    )
    }  
const  WithUseClick2 = () =>{
const [meshPosition, setPiecePosition] = useState(new Vector3(.5,0,-6.5));
const [meshRotation, setPieceRotation] = useState(Vector3.Zero)
const [ref]= useClick(_=> {
const meshPosition = squarePositionNew();
const meshRotation = squarePositionRotationNew();
      setPiecePosition(meshPosition)  
      setPieceRotation(meshRotation)
      });
      return(
      <cylinder name = "hollow sleeve" ref = {ref} height = {14}  rotation = {meshRotation} position = {meshPosition}>

      <cylinder name = "cylShaft2" height={6} diameter = {0.5}   position = {new Vector3(0,3,0)}>

      <cylinder name = "cylHead2a" height = {1} diameter = {0.5} position = {new Vector3(0,3.5,0)} >
      <standardMaterial name = "first-mat" diffuseColor = {new Color3(255,0,0,)}/>
      </cylinder>

      <standardMaterial name = "second-mat"  diffuseColor = {new Color3(0,0,255)}/>  
      </cylinder>

      <standardMaterial name = "clear-mat " alpha = {0} diffuseColor = {new Color3(0,0,255)}/>
      </cylinder>
      )
    } 
    





var positionOfSquare=[0,0,0]
const onMeshPicked = (pickedMesh) => {
if (pickedMesh.name === "meshName1") {
const xValue = pickedMesh.position.x ;
const yValue = pickedMesh.position.y ;
const zValue = pickedMesh.position.z ;
     positionOfSquare = [xValue,yValue,zValue]  
      console.log(positionOfSquare)
      }
     }

     

export const NewCBoard8= () => {
    return(
        <div className="App">
           <Engine antialias adaptToDeviceRatio canvasId='babylonJS'>
            <Scene onMeshPicked= {onMeshPicked}>
             <arcRotateCamera  name="camera1"  target={new Vector3(0.5,-0.5,0)} alpha={-Math.PI/4 } beta={Math.PI / 3} radius={30} />
             <hemisphericLight name='light1' intensity={0.7} direction={Vector3.Up()} />
             <hemisphericLight name='light1' intensity={0.7} direction={Vector3.Down()} />

             <transformNode  name = "transformNode1"  >  

             <BoardMesh name = "brown-7-7"    rotation = {new Vector3(0,0,0)}    position = {new Vector3(0.5,0,-0.5)}  color =  {Color3.FromInts(75,54,33)} /> 
             <BoardMesh name = "brown-7-6"    rotation = {new Vector3(0,0,0)}    position = {new Vector3(1.5,0,-0.5)}  color =  {Color3.FromInts(240,230,140)}/>
             <BoardMesh name = "brown-7-5"    rotation = {new Vector3(0,0,0)}    position = {new Vector3(2.5,0,-0.5)}  color = {Color3.FromInts(75,54,33)}/>  
             <BoardMesh name = "brown-7-4"    rotation = {new Vector3(0,0,0)}    position = {new Vector3(3.5,0,-0.5)}  color = {Color3.FromInts(240,230,140)}/>  
             <BoardMesh name = "brown-7-3"    rotation = {new Vector3(0,0,0)}    position = {new Vector3(4.5,0,-0.5)}  color = {Color3.FromInts(75,54,33)}/>  
             <BoardMesh name = "brown-7-2"    rotation = {new Vector3(0,0,0)}    position = {new Vector3(5.5,0,-0.5)}  color = {Color3.FromInts(240,230,140)}/>  
             <BoardMesh name = "brown-7-1"    rotation = {new Vector3(0,0,0)}    position = {new Vector3(6.5,0,-0.5)}  color = {Color3.FromInts(75,54,33)}/>  

             <BoardMesh name = "brown-6-7"    rotation = {new Vector3(0,0,0)}    position = {new Vector3(0.5,0,-1.5)} color = {Color3.FromInts(240,230,140)}  />   
             <BoardMesh name = "brown-6-6"    rotation = {new Vector3(0,0,0)}    position = {new Vector3(1.5,0,-1.5)} color = {Color3.FromInts(75,54,33)} />   
             <BoardMesh name = "brown-6-5"    rotation = {new Vector3(0,0,0)}    position = {new Vector3(2.5,0,-1.5)} color = {Color3.FromInts(240,230,140)}/> 
             <BoardMesh name = "brown-6-4"    rotation = {new Vector3(0,0,0)}    position = {new Vector3(3.5,0,-1.5)}  color = {Color3.FromInts(75,54,33)}/>  
             <BoardMesh name = "brown-6-3"    rotation = {new Vector3(0,0,0)}    position = {new Vector3(4.5,0,-1.5)}  color = {Color3.FromInts(240,230,140)}/>  
             <BoardMesh name = "brown-6-2"    rotation = {new Vector3(0,0,0)}    position = {new Vector3(5.5,0,-1.5)}  color = {Color3.FromInts(75,54,33)}/>  
             <BoardMesh name = "brown-6-1"    rotation = {new Vector3(0,0,0)}    position = {new Vector3(6.5,0,-1.5)}  color = {Color3.FromInts(240,230,140)}/>  


             <BoardMesh name = "brown-5-7"   rotation = {new Vector3(0,0,0)}      position = {new Vector3(0.5,0,-2.5)} color = {Color3.FromInts(75,54,33)} />   
             <BoardMesh name = "brown-5-6"   rotation = {new Vector3(0,0,0)}      position = {new Vector3(1.5,0,-2.5)} color = {Color3.FromInts(240,230,140)} />   
             <BoardMesh name = "brown-5-5"   rotation = {new Vector3(0,0,0)}      position = {new Vector3(2.5,0,-2.5)} color = {Color3.FromInts(75,54,33)} />   
             <BoardMesh name = "brown-7-4"    rotation = {new Vector3(0,0,0)}     position = {new Vector3(3.5,0,-2.5)}  color = {Color3.FromInts(240,230,140)}/>  
             <BoardMesh name = "brown-7-3"    rotation = {new Vector3(0,0,0)}     position = {new Vector3(4.5,0,-2.5)}  color = {Color3.FromInts(75,54,33)}/>  
             <BoardMesh name = "brown-7-2"    rotation = {new Vector3(0,0,0)}     position = {new Vector3(5.5,0,-2.5)}  color = {Color3.FromInts(240,230,140)}/>  
             <BoardMesh name = "brown-7-1"    rotation = {new Vector3(0,0,0)}     position = {new Vector3(6.5,0,-2.5)}  color = {Color3.FromInts(75,54,33)}/>  


             <BoardMesh name = "brown-4-7"   rotation = {new Vector3(0,0,0)}      position = {new Vector3(0.5,0,-3.5)} color = {Color3.FromInts(240,230,140)} />   
             <BoardMesh name = "brown-4-6"   rotation = {new Vector3(0,0,0)}      position = {new Vector3(1.5,0,-3.5)} color = {Color3.FromInts(75,54,33)} />   
             <BoardMesh name = "brown-4-5"   rotation = {new Vector3(0,0,0)}      position = {new Vector3(2.5,0,-3.5)} color = {Color3.FromInts(240,230,140)} />   
             <BoardMesh name = "brown-6-4"    rotation = {new Vector3(0,0,0)}     position = {new Vector3(3.5,0,-3.5)}  color = {Color3.FromInts(75,54,33)}/>  
             <BoardMesh name = "brown-6-3"    rotation = {new Vector3(0,0,0)}     position = {new Vector3(4.5,0,-3.5)}  color = {Color3.FromInts(240,230,140)}/>  
             <BoardMesh name = "brown-6-2"    rotation = {new Vector3(0,0,0)}     position = {new Vector3(5.5,0,-3.5)}  color = {Color3.FromInts(75,54,33)}/>  
             <BoardMesh name = "brown-6-1"    rotation = {new Vector3(0,0,0)}     position = {new Vector3(6.5,0,-3.5)}  color = {Color3.FromInts(240,230,140)}/>     

             <BoardMesh name = "brown-3-7"   rotation = {new Vector3(0,0,0)}      position = {new Vector3(0.5,0,-4.5)} color = {Color3.FromInts(75,54,33)} />   
             <BoardMesh name = "brown-3-6"   rotation = {new Vector3(0,0,0)}      position = {new Vector3(1.5,0,-4.5)} color = {Color3.FromInts(240,230,140)} />   
             <BoardMesh name = "brown-3-5"   rotation = {new Vector3(0,0,0)}      position = {new Vector3(2.5,0,-4.5)} color = {Color3.FromInts(75,54,33)} />   
             <BoardMesh name = "brown-3-4"    rotation = {new Vector3(0,0,0)}     position = {new Vector3(3.5,0,-4.5)}  color = {Color3.FromInts(240,230,140)}/>  
             <BoardMesh name = "brown-3-3"    rotation = {new Vector3(0,0,0)}     position = {new Vector3(4.5,0,-4.5)}  color = {Color3.FromInts(75,54,33)}/>  
             <BoardMesh name = "brown-3-2"    rotation = {new Vector3(0,0,0)}     position = {new Vector3(5.5,0,-4.5)}  color = {Color3.FromInts(240,230,140)}/>  
             <BoardMesh name = "brown-3-1"    rotation = {new Vector3(0,0,0)}     position = {new Vector3(6.5,0,-4.5)}  color = {Color3.FromInts(75,54,33)}/>  

             <BoardMesh name = "brown-2-7"   rotation = {new Vector3(0,0,0)}      position = {new Vector3(0.5,0,-5.5)} color = {Color3.FromInts(240,230,140)} />   
             <BoardMesh name = "brown-2-6"   rotation = {new Vector3(0,0,0)}      position = {new Vector3(1.5,0,-5.5)} color = {Color3.FromInts(75,54,33)} />   
             <BoardMesh name = "brown-2-5"   rotation = {new Vector3(0,0,0)}      position = {new Vector3(2.5,0,-5.5)} color = {Color3.FromInts(240,230,140)} />   
             <BoardMesh name = "brown-2-4"    rotation = {new Vector3(0,0,0)}     position = {new Vector3(3.5,0,-5.5)}  color = {Color3.FromInts(75,54,33)}/>  
             <BoardMesh name = "brown-2-3"    rotation = {new Vector3(0,0,0)}     position = {new Vector3(4.5,0,-5.5)}  color = {Color3.FromInts(240,230,140)}/>  
             <BoardMesh name = "brown-2-2"    rotation = {new Vector3(0,0,0)}     position = {new Vector3(5.5,0,-5.5)}  color = {Color3.FromInts(75,54,33)}/>  
             <BoardMesh name = "brown-2-1"    rotation = {new Vector3(0,0,0)}     position = {new Vector3(6.5,0,-5.5)}  color = {Color3.FromInts(240,230,140)}/> 

             <BoardMesh name = "brown-2-7"   rotation = {new Vector3(0,0,0)}      position = {new Vector3(0.5,0,-6.5)} color = {Color3.FromInts(75,54,33)} />   
             <BoardMesh name = "brown-2-6"   rotation = {new Vector3(0,0,0)}      position = {new Vector3(1.5,0,-6.5)} color = {Color3.FromInts(240,230,140)} />   
             <BoardMesh name = "brown-2-5"   rotation = {new Vector3(0,0,0)}      position = {new Vector3(2.5,0,-6.5)} color = {Color3.FromInts(75,54,33)} />   
             <BoardMesh name = "brown-2-4"    rotation = {new Vector3(0,0,0)}     position = {new Vector3(3.5,0,-6.5)}  color = {Color3.FromInts(240,230,140)}/>  
             <BoardMesh name = "brown-2-3"    rotation = {new Vector3(0,0,0)}     position = {new Vector3(4.5,0,-6.5)}  color = {Color3.FromInts(75,54,33)}/>  
             <BoardMesh name = "brown-2-2"    rotation = {new Vector3(0,0,0)}     position = {new Vector3(5.5,0,-6.5)}  color = {Color3.FromInts(240,230,140)}/>  
             <BoardMesh name = "brown-2-1"    rotation = {new Vector3(0,0,0)}     position = {new Vector3(6.5,0,-6.5)}  color = {Color3.FromInts(75,54,33)}/>     







             <BoardMesh name = "yellow-7-7"   rotation = {new Vector3(-Math.PI/2,0,0)}       position = {new Vector3(0.5,0.5,0)} color = {Color3.FromInts(75,54,33)}  />   
             <BoardMesh name = "yellow-7-6"   rotation = {new Vector3(-Math.PI/2,0,0)}       position = {new Vector3(1.5,0.5,0)} color ={Color3.FromInts(240,230,140)} />   
             <BoardMesh name = "yellow-7-5"   rotation = {new Vector3(-Math.PI/2,0,0)}       position = {new Vector3(2.5,0.5,0)} color = {Color3.FromInts(75,54,33)} /> 
             <BoardMesh name = "yellow-7-4"   rotation = {new Vector3(-Math.PI/2,0,0)}       position = {new Vector3(3.5,0.5,0)} color = {Color3.FromInts(240,230,140)} />    
             <BoardMesh name = "yellow-7-3"   rotation = {new Vector3(-Math.PI/2,0,0)}       position = {new Vector3(4.5,0.5,0)} color = {Color3.FromInts(75,54,33)} /> 
             <BoardMesh name = "yellow-7-2"   rotation = {new Vector3(-Math.PI/2,0,0)}       position = {new Vector3(5.5,0.5,0)} color = {Color3.FromInts(240,230,140)} />  
             <BoardMesh name = "yellow-7-1"   rotation = {new Vector3(-Math.PI/2,0,0)}       position = {new Vector3(6.5,0.5,0)} color = {Color3.FromInts(75,54,33)} /> 

             <BoardMesh name = "yellow-6-7"   rotation = {new Vector3(-Math.PI/2,0,0)}       position = {new Vector3(0.5,1.5,0)} color ={Color3.FromInts(240,230,140)}/>   
             <BoardMesh name = "yellow-6-6"   rotation = {new Vector3(-Math.PI/2,0,0)}       position = {new Vector3(1.5,1.5,0)} color = {Color3.FromInts(75,54,33)}/>   
             <BoardMesh name = "yellow-6-5"   rotation = {new Vector3(-Math.PI/2,0,0)}       position = {new Vector3(2.5,1.5,0)} color ={Color3.FromInts(240,230,140)}/> 
             <BoardMesh name = "yellow-6-4"   rotation = {new Vector3(-Math.PI/2,0,0)}       position = {new Vector3(3.5,1.5,0)} color = {Color3.FromInts(75,54,33)} /> 
             <BoardMesh name = "yellow-6-3"   rotation = {new Vector3(-Math.PI/2,0,0)}       position = {new Vector3(4.5,1.5,0)} color = {Color3.FromInts(240,230,140)} />    
             <BoardMesh name = "yellow-6-2"   rotation = {new Vector3(-Math.PI/2,0,0)}       position = {new Vector3(5.5,1.5,0)} color = {Color3.FromInts(75,54,33)} /> 
             <BoardMesh name = "yellow-6-1"   rotation = {new Vector3(-Math.PI/2,0,0)}       position = {new Vector3(6.5,1.5,0)} color = {Color3.FromInts(240,230,140)} />   

             <BoardMesh name = "yellow-5-7"   rotation = {new Vector3(-Math.PI/2,0,0)}       position = {new Vector3(0.5,2.5,0)}  color = {Color3.FromInts(75,54,33)}/>   
             <BoardMesh name = "yellow-5-6"   rotation = {new Vector3(-Math.PI/2,0,0)}       position = {new Vector3(1.5,2.5,0)}  color ={Color3.FromInts(240,230,140)}/>   
             <BoardMesh name = "yellow-5-5"   rotation = {new Vector3(-Math.PI/2,0,0)}       position = {new Vector3(2.5,2.5,0)}  color = {Color3.FromInts(75,54,33)}/> 
             <BoardMesh name = "yellow-5-4"   rotation = {new Vector3(-Math.PI/2,0,0)}       position = {new Vector3(3.5,2.5,0)} color = {Color3.FromInts(240,230,140)} />    
             <BoardMesh name = "yellow-5-3"   rotation = {new Vector3(-Math.PI/2,0,0)}       position = {new Vector3(4.5,2.5,0)} color = {Color3.FromInts(75,54,33)} /> 
             <BoardMesh name = "yellow-5-2"   rotation = {new Vector3(-Math.PI/2,0,0)}       position = {new Vector3(5.5,2.5,0)} color = {Color3.FromInts(240,230,140)} />  
             <BoardMesh name = "yellow-5-1"   rotation = {new Vector3(-Math.PI/2,0,0)}       position = {new Vector3(6.5,2.5,0)} color = {Color3.FromInts(75,54,33)} /> 

             <BoardMesh name = "yellow-4-7"   rotation = {new Vector3(-Math.PI/2,0,0)}       position = {new Vector3(0.5,3.5,0)} color ={Color3.FromInts(240,230,140)}/>   
             <BoardMesh name = "yellow-4-6"   rotation = {new Vector3(-Math.PI/2,0,0)}       position = {new Vector3(1.5,3.5,0)} color = {Color3.FromInts(75,54,33)}/>   
             <BoardMesh name = "yellow-4-5"   rotation = {new Vector3(-Math.PI/2,0,0)}       position = {new Vector3(2.5,3.5,0)} color ={Color3.FromInts(240,230,140)}/> 
             <BoardMesh name = "yellow-4-4"   rotation = {new Vector3(-Math.PI/2,0,0)}       position = {new Vector3(3.5,3.5,0)} color = {Color3.FromInts(75,54,33)} /> 
             <BoardMesh name = "yellow-4-3"   rotation = {new Vector3(-Math.PI/2,0,0)}       position = {new Vector3(4.5,3.5,0)} color = {Color3.FromInts(240,230,140)} />    
             <BoardMesh name = "yellow-4-2"   rotation = {new Vector3(-Math.PI/2,0,0)}       position = {new Vector3(5.5,3.5,0)} color = {Color3.FromInts(75,54,33)} /> 
             <BoardMesh name = "yellow-4-1"   rotation = {new Vector3(-Math.PI/2,0,0)}       position = {new Vector3(6.5,3.5,0)} color = {Color3.FromInts(240,230,140)} />  

             <BoardMesh name = "yellow-3-7"   rotation = {new Vector3(-Math.PI/2,0,0)}       position = {new Vector3(0.5,4.5,0)}  color = {Color3.FromInts(75,54,33)}/>   
             <BoardMesh name = "yellow-3-6"   rotation = {new Vector3(-Math.PI/2,0,0)}       position = {new Vector3(1.5,4.5,0)}  color ={Color3.FromInts(240,230,140)}/>   
             <BoardMesh name = "yellow-3-5"   rotation = {new Vector3(-Math.PI/2,0,0)}       position = {new Vector3(2.5,4.5,0)}  color = {Color3.FromInts(75,54,33)}/> 
             <BoardMesh name = "yellow-3-4"   rotation = {new Vector3(-Math.PI/2,0,0)}       position = {new Vector3(3.5,4.5,0)}  color = {Color3.FromInts(240,230,140)} />    
             <BoardMesh name = "yellow-3-3"   rotation = {new Vector3(-Math.PI/2,0,0)}       position = {new Vector3(4.5,4.5,0)}  color = {Color3.FromInts(75,54,33)} /> 
             <BoardMesh name = "yellow-3-2"   rotation = {new Vector3(-Math.PI/2,0,0)}       position = {new Vector3(5.5,4.5,0)}  color = {Color3.FromInts(240,230,140)} />  
             <BoardMesh name = "yellow-3-1"   rotation = {new Vector3(-Math.PI/2,0,0)}       position = {new Vector3(6.5,4.5,0)}  color = {Color3.FromInts(75,54,33)} /> 

             <BoardMesh name = "yellow-2-7"   rotation = {new Vector3(-Math.PI/2,0,0)}       position = {new Vector3(0.5,5.5,0)} color ={Color3.FromInts(240,230,140)}/>   
             <BoardMesh name = "yellow-2-6"   rotation = {new Vector3(-Math.PI/2,0,0)}       position = {new Vector3(1.5,5.5,0)} color = {Color3.FromInts(75,54,33)}/>   
             <BoardMesh name = "yellow-2-5"   rotation = {new Vector3(-Math.PI/2,0,0)}       position = {new Vector3(2.5,5.5,0)} color ={Color3.FromInts(240,230,140)}/> 
             <BoardMesh name = "yellow-2-4"   rotation = {new Vector3(-Math.PI/2,0,0)}       position = {new Vector3(3.5,5.5,0)} color = {Color3.FromInts(75,54,33)} /> 
             <BoardMesh name = "yellow-2-3"   rotation = {new Vector3(-Math.PI/2,0,0)}       position = {new Vector3(4.5,5.5,0)} color = {Color3.FromInts(240,230,140)} />    
             <BoardMesh name = "yellow-2-2"   rotation = {new Vector3(-Math.PI/2,0,0)}       position = {new Vector3(5.5,5.5,0)} color = {Color3.FromInts(75,54,33)} /> 
             <BoardMesh name = "yellow-2-1"   rotation = {new Vector3(-Math.PI/2,0,0)}       position = {new Vector3(6.5,5.5,0)} color = {Color3.FromInts(240,230,140)} />  

             <BoardMesh name = "yellow-1-7"   rotation = {new Vector3(-Math.PI/2,0,0)}       position = {new Vector3(0.5,6.5,0)}  color = {Color3.FromInts(75,54,33)}/>   
             <BoardMesh name = "yellow-1-6"   rotation = {new Vector3(-Math.PI/2,0,0)}       position = {new Vector3(1.5,6.5,0)}  color ={Color3.FromInts(240,230,140)}/>   
             <BoardMesh name = "yellow-1-5"   rotation = {new Vector3(-Math.PI/2,0,0)}       position = {new Vector3(2.5,6.5,0)}  color = {Color3.FromInts(75,54,33)}/> 
             <BoardMesh name = "yellow-1-4"   rotation = {new Vector3(-Math.PI/2,0,0)}       position = {new Vector3(3.5,6.5,0)}  color = {Color3.FromInts(240,230,140)} />    
             <BoardMesh name = "yellow-1-3"   rotation = {new Vector3(-Math.PI/2,0,0)}       position = {new Vector3(4.5,6.5,0)}  color = {Color3.FromInts(75,54,33)} /> 
             <BoardMesh name = "yellow-1-2"   rotation = {new Vector3(-Math.PI/2,0,0)}       position = {new Vector3(5.5,6.5,0)}  color = {Color3.FromInts(240,230,140)} />  
             <BoardMesh name = "yellow-1-1"   rotation = {new Vector3(-Math.PI/2,0,0)}       position = {new Vector3(6.5,6.5,0)}  color = {Color3.FromInts(75,54,33)} /> 


             <BoardMesh name = "green-7-7"   rotation = {new Vector3(0,0,-Math.PI/2)}           position = {new Vector3(0,0.5,-0.5)}  color = {Color3.FromInts(75,54,33)}/>  
             <BoardMesh name = "green-7-6"   rotation = {new Vector3(0,0,-Math.PI/2)}           position = {new Vector3(0,0.5,-1.5)}  color ={Color3.FromInts(240,230,140)} />  
             <BoardMesh name = "green-7-5"   rotation = {new Vector3(0,0,-Math.PI/2)}           position = {new Vector3(0,0.5,-2.5)}  color = {Color3.FromInts(75,54,33)}/>   
             <BoardMesh name = "green-7-4"   rotation = {new Vector3(0,0,-Math.PI/2)}           position = {new Vector3(0,0.5,-3.5)}  color ={Color3.FromInts(240,230,140)} />  
             <BoardMesh name = "green-7-3"   rotation = {new Vector3(0,0,-Math.PI/2)}           position = {new Vector3(0,0.5,-4.5)}  color = {Color3.FromInts(75,54,33)}/> 
             <BoardMesh name = "green-7-2"   rotation = {new Vector3(0,0,-Math.PI/2)}           position = {new Vector3(0,0.5,-5.5)}  color ={Color3.FromInts(240,230,140)} />  
             <BoardMesh name = "green-7-1"   rotation = {new Vector3(0,0,-Math.PI/2)}           position = {new Vector3(0,0.5,-6.5)}  color = {Color3.FromInts(75,54,33)}/> 

            <BoardMesh name = "green-6-7"   rotation = {new Vector3(0,0,-Math.PI/2)}           position = {new Vector3(0,1.5,-0.5)}  color ={Color3.FromInts(240,230,140)} />   
            <BoardMesh name = "green-6-6"   rotation = {new Vector3(0,0,-Math.PI/2)}           position = {new Vector3(0,1.5,-1.5)}   color = {Color3.FromInts(75,54,33)}/>   
            <BoardMesh name = "green-6-5"   rotation = {new Vector3(0,0,-Math.PI/2)}           position = {new Vector3(0,1.5,-2.5)}   color ={Color3.FromInts(240,230,140)}/>   
            <BoardMesh name = "green-6-4"   rotation = {new Vector3(0,0,-Math.PI/2)}           position = {new Vector3(0,1.5,-3.5)}   color = {Color3.FromInts(75,54,33)}/>   
            <BoardMesh name = "green-6-3"   rotation = {new Vector3(0,0,-Math.PI/2)}           position = {new Vector3(0,1.5,-4.5)}   color ={Color3.FromInts(240,230,140)}/>  
            <BoardMesh name = "green-6-2"   rotation = {new Vector3(0,0,-Math.PI/2)}           position = {new Vector3(0,1.5,-5.5)}   color ={Color3.FromInts(75,54,33)}/>   
            <BoardMesh name = "green-6-1"   rotation = {new Vector3(0,0,-Math.PI/2)}           position = {new Vector3(0,1.5,-6.5)}   color = {Color3.FromInts(240,230,140)}/>   
           
            <BoardMesh name = "green-5-7"   rotation = {new Vector3(0,0,-Math.PI/2)}          position = {new Vector3(0,2.5,-0.5)}   color = {Color3.FromInts(75,54,33)}/>   
            <BoardMesh name = "green-5-6"   rotation = {new Vector3(0,0,-Math.PI/2)}          position = {new Vector3(0,2.5,-1.5)}   color ={Color3.FromInts(240,230,140)}/>   
            <BoardMesh name = "green-5-5"   rotation = {new Vector3(0,0,-Math.PI/2)}          position = {new Vector3(0,2.5,-2.5)}   color ={Color3.FromInts(75,54,33)}/>  
            <BoardMesh name = "green-5-4"   rotation = {new Vector3(0,0,-Math.PI/2)}          position = {new Vector3(0,2.5,-3.5)}   color ={Color3.FromInts(240,230,140)}/>   
            <BoardMesh name = "green-5-3"   rotation = {new Vector3(0,0,-Math.PI/2)}          position = {new Vector3(0,2.5,-4.5)}   color = {Color3.FromInts(75,54,33)}/>   
            <BoardMesh name = "green-5-2"   rotation = {new Vector3(0,0,-Math.PI/2)}          position = {new Vector3(0,2.5,-5.5)}   color ={Color3.FromInts(240,230,140)}/>  
            <BoardMesh name = "green-5-1"   rotation = {new Vector3(0,0,-Math.PI/2)}          position = {new Vector3(0,2.5,-6.5)}   color ={Color3.FromInts(75,54,33)}/>  

            <BoardMesh name = "green-4-7"   rotation = {new Vector3(0,0,-Math.PI/2)}           position = {new Vector3(0,3.5,-0.5)}  color ={Color3.FromInts(240,230,140)} />   
            <BoardMesh name = "green-4-6"   rotation = {new Vector3(0,0,-Math.PI/2)}           position = {new Vector3(0,3.5,-1.5)}   color = {Color3.FromInts(75,54,33)}/>   
            <BoardMesh name = "green-4-5"   rotation = {new Vector3(0,0,-Math.PI/2)}           position = {new Vector3(0,3.5,-2.5)}   color ={Color3.FromInts(240,230,140)}/>   
            <BoardMesh name = "green-4-4"   rotation = {new Vector3(0,0,-Math.PI/2)}           position = {new Vector3(0,3.5,-3.5)}   color = {Color3.FromInts(75,54,33)}/>   
            <BoardMesh name = "green-4-3"   rotation = {new Vector3(0,0,-Math.PI/2)}           position = {new Vector3(0,3.5,-4.5)}   color ={Color3.FromInts(240,230,140)}/>  
            <BoardMesh name = "green-4-2"   rotation = {new Vector3(0,0,-Math.PI/2)}           position = {new Vector3(0,3.5,-5.5)}   color ={Color3.FromInts(75,54,33)}/>   
            <BoardMesh name = "green-4-1"   rotation = {new Vector3(0,0,-Math.PI/2)}           position = {new Vector3(0,3.5,-6.5)}   color = {Color3.FromInts(240,230,140)}/>   

            <BoardMesh name = "green-3-7"   rotation = {new Vector3(0,0,-Math.PI/2)}          position = {new Vector3(0,4.5,-0.5)}   color = {Color3.FromInts(75,54,33)}/>   
            <BoardMesh name = "green-3-6"   rotation = {new Vector3(0,0,-Math.PI/2)}          position = {new Vector3(0,4.5,-1.5)}   color ={Color3.FromInts(240,230,140)}/>   
            <BoardMesh name = "green-3-5"   rotation = {new Vector3(0,0,-Math.PI/2)}          position = {new Vector3(0,4.5,-2.5)}   color ={Color3.FromInts(75,54,33)}/>  
            <BoardMesh name = "green-3-4"   rotation = {new Vector3(0,0,-Math.PI/2)}          position = {new Vector3(0,4.5,-3.5)}   color ={Color3.FromInts(240,230,140)}/>   
            <BoardMesh name = "green-3-3"   rotation = {new Vector3(0,0,-Math.PI/2)}          position = {new Vector3(0,4.5,-4.5)}   color = {Color3.FromInts(75,54,33)}/>   
            <BoardMesh name = "green-3-2"   rotation = {new Vector3(0,0,-Math.PI/2)}          position = {new Vector3(0,4.5,-5.5)}   color ={Color3.FromInts(240,230,140)}/>  
            <BoardMesh name = "green-3-1"   rotation = {new Vector3(0,0,-Math.PI/2)}          position = {new Vector3(0,4.5,-6.5)}   color ={Color3.FromInts(75,54,33)}/>  

            <BoardMesh name = "green-2-7"   rotation = {new Vector3(0,0,-Math.PI/2)}           position = {new Vector3(0,5.5,-0.5)}  color ={Color3.FromInts(240,230,140)} />   
            <BoardMesh name = "green-2-6"   rotation = {new Vector3(0,0,-Math.PI/2)}           position = {new Vector3(0,5.5,-1.5)}   color = {Color3.FromInts(75,54,33)}/>   
            <BoardMesh name = "green-2-5"   rotation = {new Vector3(0,0,-Math.PI/2)}           position = {new Vector3(0,5.5,-2.5)}   color ={Color3.FromInts(240,230,140)}/>   
            <BoardMesh name = "green-2-4"   rotation = {new Vector3(0,0,-Math.PI/2)}           position = {new Vector3(0,5.5,-3.5)}   color = {Color3.FromInts(75,54,33)}/>   
            <BoardMesh name = "green-2-3"   rotation = {new Vector3(0,0,-Math.PI/2)}           position = {new Vector3(0,5.5,-4.5)}   color ={Color3.FromInts(240,230,140)}/>  
            <BoardMesh name = "green-2-2"   rotation = {new Vector3(0,0,-Math.PI/2)}           position = {new Vector3(0,5.5,-5.5)}   color ={Color3.FromInts(75,54,33)}/>   
            <BoardMesh name = "green-2-1"   rotation = {new Vector3(0,0,-Math.PI/2)}           position = {new Vector3(0,5.5,-6.5)}   color = {Color3.FromInts(240,230,140)}/>  

            <BoardMesh name = "green-1-7"   rotation = {new Vector3(0,0,-Math.PI/2)}          position = {new Vector3(0,6.5,-0.5)}   color = {Color3.FromInts(75,54,33)}/>   
            <BoardMesh name = "green-1-6"   rotation = {new Vector3(0,0,-Math.PI/2)}          position = {new Vector3(0,6.5,-1.5)}   color ={Color3.FromInts(240,230,140)}/>   
            <BoardMesh name = "green-1-5"   rotation = {new Vector3(0,0,-Math.PI/2)}          position = {new Vector3(0,6.5,-2.5)}   color ={Color3.FromInts(75,54,33)}/>  
            <BoardMesh name = "green-1-4"   rotation = {new Vector3(0,0,-Math.PI/2)}          position = {new Vector3(0,6.5,-3.5)}   color ={Color3.FromInts(240,230,140)}/>   
            <BoardMesh name = "green-1-3"   rotation = {new Vector3(0,0,-Math.PI/2)}          position = {new Vector3(0,6.5,-4.5)}   color = {Color3.FromInts(75,54,33)}/>   
            <BoardMesh name = "green-1-2"   rotation = {new Vector3(0,0,-Math.PI/2)}          position = {new Vector3(0,6.5,-5.5)}   color ={Color3.FromInts(240,230,140)}/>  
            <BoardMesh name = "green-1-1"   rotation = {new Vector3(0,0,-Math.PI/2)}          position = {new Vector3(0,6.5,-6.5)}   color ={Color3.FromInts(75,54,33)}/>  

 
             </transformNode>     
            
              <WithUseClick1/>
              <WithUseClick2/>
             

            

              <sphere  name = "origin"  diameter = {0.1} position={new Vector3(0,0,0)}/>
                             
            </Scene>
        </Engine>
      </div>
   
  ) 
}

  
