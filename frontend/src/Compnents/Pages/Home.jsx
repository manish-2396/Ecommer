import { Box, Container } from '@mui/system'
import React from 'react'

const Home = () => {
  return (
    <Container>
      <Box m="auto" maxWidth="50%" fontSize="2rem" fontFamily="monospace" color="red" ><h3>Top Categories to choose from</h3></Box>

      <Box border="1px solid black" maxHeight="30rem" display="flex" gap="1rem">
        <Box>
          <img src="https://images.meesho.com/images/marketing/1649760442043.webp" alt="" />
        </Box>
        <Box>
          <img src="https://images.meesho.com/images/marketing/1649760423313.webp" alt="" />
        </Box>
        <Box>
          <img src="https://images.meesho.com/images/marketing/1649759799809.webp" alt="" />
        </Box>
      </Box>

    </Container>
  )
}

export default Home