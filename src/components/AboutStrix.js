import React from 'react'
import {Typography} from "@mui/material"
import {Box}from "@mui/material"
import {LoremIpsum} from 'react-lorem-ipsum'

export const AboutStrix = () => {
  return (
    <>
     <Box   sx ={{backgroundColor: '#275e16',
                color: 'white',
                height: '40px',
                width: '90vw',
                padding: '16px',
                marginLeft: 'auto',
                marginRight:'auto',
                border:10,
                borderColor: '#275e16',
                }}>
        <Typography align='center' variant = "h6">
        To move a piece, click on it, then click the destination square.
                To take a piece, click on it.
        </Typography>
     </Box>

    <Box   sx ={{backgroundColor: '#790e3c',
                color: 'white',
                height: '120px',
                width: '50vw',
                padding: '16px',
                marginLeft: 'auto',
                marginRight:'auto',
                border:10,
                borderColor: '#275e16',
                }}>
        <Typography align='center' variant = "h4">
        STRIX is a game for three players, played in three dimensions. 
        </Typography>
     </Box>
   

   <Box sx ={{backgroundColor: '#ae7519',
                color: 'white',
                height: '100px',
                width: '80vw',
                padding: '16px',
                marginLeft: 'auto',
                marginRight:'auto',
                border:10,
                borderColor: '#275e16'
                }}>
        <Typography  variant = "h6" sx={{paddingBottom:'20px'}}>
        Inspired by the aerial agility of birds, the STRIX board and pieces represent a forest, dense but criss-crossed with sunlit glades, through which three teams of birds, each comprising an Owl, a Kite and a Raven vie to reach the Owl’s nest in the centre.
        </Typography>

    </Box>

    <Box sx ={{backgroundColor: '#000000',
                color: 'white',
                height: '100px',
                width: '80vw',
                padding: '16px',
                marginLeft: 'auto',
                marginRight:'auto',
                border:10,
                borderColor: '#275e16'
              }}>
        <Typography variant = "h6">
        Each player – Brown, Yellow and Green – starts the game with three pieces – an ‘Owl’, a ‘Kite’ and a ‘Raven’ – and aims to move the Owl to the board’s centre – the ‘Owl’s Nest’  - while gathering the greatest number of points.
        </Typography>
     </Box>
     
    <Box sx ={{backgroundColor: '#275e16',
                color: 'white',
                height: '100px',
                width: '80vw',
                padding: '16px',
                marginLeft: 'auto',
                marginRight:'auto',
              }}>
        
     </Box>



   </>
  )
}

