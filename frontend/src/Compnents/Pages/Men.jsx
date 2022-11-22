import { Button, Grid } from '@mui/material'
import { Box, Container } from '@mui/system'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addCart,  getManData } from '../../Redux/AppReducer/action'
import swal from 'sweetalert';  

const Men = () => {
  const dispatch = useDispatch()
  const { Men, loading } = useSelector((state) => state.appreducer)
  const navigate = useNavigate();
  // console.log(Men , loading)

  let time = new Date().toTimeString().split(" ")[0].split(":")

  let Time = []

  if (time[0] > 12) {
    let hr = time[0] - 12
    let min = time[1] + "PM"
    Time.push(hr)
    Time.push(min)
  } else {
    let hr = time[0]
    let min = time[1] + "AM"
    Time.push(hr)
    Time.push(min)
  }

  let date = new Date().toDateString().split(" ")

  let today = "" + date[2] +" " + date[1]+ " " + date[3];


  // console.log(Time.join(":"))
  // console.log(today);

  useEffect(() => {
    dispatch(getManData())
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
        offer: e.offer,
        price: e.price,
        normalprice: e.strikedoffprice,
        orderdate:today,
        ordertime:Time.join(":")

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
        {Men && Men.map((element, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>

            <Box className="shadow" height="auto" p="1rem">
              <Box fontSize="10px" position="absolute" borderRadius="50%" bgcolor="red" color="#fff" border="1px solid red" p="5px" >
                {element.offer}
              </Box>
              <img style={{ maxWidth: "100%", height: "10rem" }} src={element.image_url} alt={element.name} />
              <Box height="3rem" >
                <p style={{ color: "#a4a4a4", fontSize: "14px" }}>{element.name}</p>
              </Box>
              <Box display="flex" justifyContent="space-around" >
                <Box><h5 style={{ textDecoration: "line-through" , color: "#a4a4a4" }} >{element.strikedoffprice}</h5></Box>
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

export default Men