import { Box, Button, Container, Grid } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addCart, getWomanData } from '../../Redux/AppReducer/action'
import swal from 'sweetalert';  

const Women = () => {

  const dispatch = useDispatch()
  const { Women, loading } = useSelector((state) => state.appreducer)
  const navigate = useNavigate();
  // console.log(Women , loading)

  useEffect(() => {
    dispatch(getWomanData())
  }, [dispatch])





  let a = {
    isAuth: false,
    token: null
  }

  let { isAuth, token } = JSON.parse(localStorage.getItem("user")) || a

  const handleAdd = (e) => {
    if (!isAuth) {
      navigate("/signin")
    } else {
      // console.log(e)
      const payload = {
        img: e.image_url,
        name: e.name,
        offer: e.offprice,
        price: e.price,
        normalprice: e.strikedoffprice,
        orderdate:new Date().toDateString(),
        ordertime:new Date().toTimeString()
      }
      // console.log("payload", payload)
      dispatch(addCart(payload, token))
      swal("Add to the Cart")
    }

  }

  return (
    <Container>
      <Box color="#1976d2" >{loading && "loading..."}</Box>
      <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 12, md: 20 }}>
        {Women && Women.map((element, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>

            <Box className="shadow" height="auto" p="1rem">
              <Box fontSize="10px" position="absolute" borderRadius="50%" bgcolor="red" color="#fff" border="1px solid red" p="5px" >
                {element.offprice}
              </Box>
              <img style={{ maxWidth: "100%", height: "10rem" }} src={element.image_url} alt={element.name} />
              <Box height="3rem" >
                <p style={{ color: "#a4a4a4", fontSize: "12px" }}>{element.name}</p>
              </Box>
              <Box display="flex" justifyContent="space-around" >
                <Box><h5 style={{ textDecoration: "line-through" , color: "#a4a4a4" }} >Rs.{element.strikedoffprice}</h5></Box>
                <Box><h5>Rs.{element.price}</h5></Box>
              </Box>
              <Box display="flex" justifyContent="space-around" >
                <Box  ><Button variant="contained" >Buy</Button> </Box>
                <Box><Button onClick={() => handleAdd(element)} variant="contained" >Add</Button> </Box>
              </Box>

            </Box>

          </Grid>
        ))}
      </Grid>

    </Container>
  )
}

export default Women