import { Box, Container } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../../Redux/AppReducer/action'

const Cart = () => {

  const dispatch = useDispatch()
  const data = useSelector((state) => state.appreducer.cart.data)
  const { token } = JSON.parse(localStorage.getItem("user"))

  let sum = 0

  if (data) {
    for (let i = 0; i < data.length; i++) {
      sum += Number(data[i].price)
    }
  }

  useEffect(() => {
    dispatch(getData(token))
  }, [dispatch, token])

  let A = "";
  let B = "none"

  if (data && data.length === 0) {
    A = "none";
    B = ""
  }

  return (
    <Container>
      <Box display={A}  >
        {
          data && data.map((item) => {
            return (
              <Box key={item._id} display="flex" className="shadow" p="5px" m="1rem" justifyContent="space-around">
                <Box>
                  <img style={{ width: "9rem" }} src={item.img} alt={item.name} />
                </Box>
                <Box width="30%">
                  <h4>{item.name}</h4>
                  <p>Rs. {item.price}</p>
                </Box>
                <Box mt="3rem">
                  <button  >-</button>
                  {item.quntity}
                  <button  >+</button>
                </Box>
                <Box>
                  <h3>Rs.{item.price}</h3>
                </Box>
              </Box>
            )
          })
        }
      </Box>
      <Box display="flex" justifyContent="end" p="1rem">
        Total :-<span style={{ marginLeft: "1rem", fontWeight: "bolder" }} >Rs. {sum} </span>
      </Box>
      <Box display={B} >
        no data in cart
      </Box>

    </Container>
  )
}

export default Cart