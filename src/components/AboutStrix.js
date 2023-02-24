import React from 'react'
import {Typography} from "@mui/material"
import {Box, Paper, Grid, Card, CardMedia}from "@mui/material"
import StrixInSolar1bandws from  "../images/StrixInSolar1bandws.jpg"
import StrixHeader1 from "../images/StrixHeader1.jpg"

export const AboutStrix = () => {
  return (
    
  <Paper sx={{padding: '20px', height: '100', width: '100%', margin: 'auto'}}  elevation={4}>

    <Grid container my={4} spacing = {2}>
              <Grid item xs={8} >
                   <Box sx={{backgroundColor:'#790e3c', color: 'white', height: '250px', width: '100%'}} >
                       <Typography variant = 'body1' padding = {2}>
                     
STRIX is a game for three players, played in three dimensions. 

                    </Typography>
                    <Typography variant = 'body2' padding = {2}>

Inspired by the aerial agility of birds, the STRIX board and pieces
represent a forest, dense but criss-crossed with sunlit glades, through
which three teams of birds, each comprising an Owl, a Kite and a Raven
vie to reach the Owl's nest in the centre.
Each player, Brown, Yellow or Green, starts the game with three
pieces — an 'Owl', a 'Kite' and a 'Raven' — and aims to move the Owl
to the board's centre — the 'Owl's Nest' — while gathering the greatest number of points.

                       </Typography>
                   </Box> 
                </Grid>

             <Grid item xs = {4}>
               <Box sx={{ height: '100px', width: '250px'}} >
                     <Card>
                       <CardMedia component = 'img' height= "250px" width = '100%' image={StrixHeader1} />
                     </Card>
                </Box> 
              </Grid>
            </Grid>
  </Paper>       
    
     )
}




