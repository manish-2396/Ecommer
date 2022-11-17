import { Container } from '@mui/material'
import { Box } from '@mui/system';
import React, { useCallback, useEffect, useRef, useState } from 'react'

const Timmer = () => {
    const [mins, setMins] = useState(2);
    const [secs , setSecs] = useState(60);
    const min = useRef(null);
    const sec = useRef(null);

   


    


    const start = useCallback(() => {

        
        if (sec.current !== null) return;

        sec.current = setInterval(() => {
            setSecs(pre => pre - 1)
        }, 1000)

        if (min.current !== null) return; 

        min.current = setInterval(() => {
            setMins((pre) => pre - 1)
        }, 1000 * 60)

        

       
    } , [])

    useEffect(() => {
        start()
        if(secs < 0) {
            setSecs(60)
        }
    }, [start , secs ])


    var color = "green"
    if(mins < 0){
        color = "red"

    }






    return (
        <Container>
            <Box color={color} fontWeight="bold" >
                {mins} min : {secs} sec
            </Box>
            
        </Container>
    )
}

export default Timmer