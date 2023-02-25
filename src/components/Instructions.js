import React from 'react'
import {Typography} from "@mui/material"
import {Box, Paper, Grid, Card, CardMedia}from "@mui/material"

export const Instructions = () => {
  return (
    
  <Paper sx={{ height: '100', width: '90%', margin: 'auto'}}  elevation={4}>
    <Box >
        <Card sx={{backgroundColor:'#000000', color: 'white', height: '600px', width: '100%', alignContent: 'center'}}>
                                        
        <Typography variant = 'body1' padding = {1}>
                     
    To get a feel for Strix try our movable game set above. To angle the board for better viewing, click outside and drag.
    To move a piece, click on it and then click on the destination square. To take a piece, click on it. 

        </Typography>  

        <Typography variant = 'body1' padding = {1} >
          Very briefly, to give an idea, the rules are as follows:
        </Typography>
        <Typography variant = 'body1' padding = {1}>
          Three teams, Brown, Yellow, Green, take turns in that order. 
        </Typography>
        <Typography variant = 'body1' padding = {1}>
        Pieces must be able to stand freely, without clashing (in the physical game) or intersecting (in the online version)
        </Typography>
        <Typography variant = 'body1' padding = {1} >
          All pieces move orthogonally, on face and from face to face, as far as they like, apart from the Owl which moves only one square at a time.
        </Typography>
        <Typography variant = 'body1' padding = {1}  >
          Owls take like kings in Chess; Kites take by swooping down and landing beside the foot of their victim; Ravens take by 'mobbing' their victim,
          trapping it as if between chopsticks, using a Raven from another team as partner. 
        </Typography>
        <Typography variant = 'body1' padding = {1}>
          Owls on dark squares are vulnerable only to other Owls. 
        </Typography>
        <Typography variant = 'body1' padding = {1}>
          Owls have a special move - 'ghosting' - where they pivot around a piece blocking their way crosswise and land on the third face. 
        </Typography>
        <Typography variant = 'body1' padding = {1}>
          An important dynamic in the game is avoiding the main type of foul, called 'preparing the enemy's way' or 'preparation' for short, where one 
          player's move allows another to win, leaving the third helpless. 
        </Typography>
        <Typography variant = 'body1' padding = {1}>
          Points are allocated for taking and gaining the Nest - when the game ends - and deducted for fouls. The player with most points wins. 
         </Typography>
         <Typography variant = 'h6' padding = {1}>
         A full set of the The Rules of Strix with illustrations are available on request.  
         </Typography>
      
          </Card> 
        </Box> 
          
  </Paper>       
   
     )
}


