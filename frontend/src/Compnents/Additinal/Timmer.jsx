import { Container } from '@mui/material'
import { Box } from '@mui/system';
import React, { useCallback, useEffect, useRef, useState } from 'react'

const Timmer = () => {
    const [mins, setMins] = useState(2);
    const [secs, setSecs] = useState(59);
    const min = useRef(null);
    const sec = useRef(null);

    const stop = useRef(false);

    var displaytime, showtime

    if (stop.current) {
        displaytime = "none"
    } else {
        showtime = "none"
    }








    const start = useCallback(() => {


        if (sec.current !== null) return;

        sec.current = setInterval(() => {
            setSecs(pre => pre - 1)
        }, 1000)

        if (min.current !== null) return;

        min.current = setInterval(() => {
            setMins((pre) => pre - 1)
        }, 1000 * 60)




    }, [])

    useEffect(() => {
        start()
        if (secs < 0) {
            setSecs(59)
        }
        if (mins < 0) {
            clearInterval(min.current)
            clearInterval(sec.current)
            stop.current = true;
            
        }
    }, [start, secs, mins])


    var color = "green"
    if (mins < 0) {
        color = "red"

    }






    return (
        <Container>
            <Box display={displaytime} color={color} fontWeight="bold" >
                {mins} min : {secs} sec
            </Box>
            <Box color="red" display={showtime} >
                time end
            </Box>
        </Container>
    )
}

export default Timmer