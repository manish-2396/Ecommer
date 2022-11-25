import { Box, Container } from '@mui/system'
import React from 'react'

const Home = () => {
  return (
    <Container>
      <Box m="auto" maxWidth="50%" fontSize="2rem" fontFamily="monospace" color="#323332" ><h3>Top Categories to choose from</h3></Box>

      <Box maxHeight="auto" display="flex" justifyContent="space-between" p="1.5rem" flexWrap="wrap" id="backgrond-img1" >
        <Box m="auto">
          <img  style={{width:"100%"}} src="https://images.meesho.com/images/marketing/1649760442043.webp" alt="" />
        </Box >
        <Box m="auto">
          <img  style={{width:"100%"}} src="https://images.meesho.com/images/marketing/1649760423313.webp" alt="" />
        </Box >
        <Box m="auto">
          <img  style={{width:"100%"}} src="https://images.meesho.com/images/marketing/1649759799809.webp" alt="" />
        </Box>
      </Box>

      <Box maxHeight="auto" display="flex" justifyContent="end" mt="3rem" p="1.5rem" id="backgrond-img2" >
        <Box display="flex" justifyContent="space-between" p="1.5rem" gap="2rem" flexWrap="wrap" >
          <Box m="auto">
            <img  style={{width:"100%"}} src="https://images.meesho.com/images/marketing/1649760808952.webp" alt="" />
          </Box >
          <Box m="auto">
            <img style={{width:"100%"}} src="https://images.meesho.com/images/marketing/1649760703179.webp" alt="" />
          </Box >
          <Box m="auto">
            <img style={{width:"100%"}} src="https://images.meesho.com/images/marketing/1649760786763.webp" alt="" />
          </Box>
        </Box>

      </Box>

    </Container>
  )
}

export default Home