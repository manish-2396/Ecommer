import { Box, Button, Container } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData, removeData, updateQuntity } from '../../Redux/AppReducer/action'
import swal from 'sweetalert';

const Cart = () => {

  const dispatch = useDispatch()
  const data = useSelector((state) => state.appreducer.cart.data)
  const { token } = JSON.parse(localStorage.getItem("user"))

  let sum = 0

  if (data) {
    for (let i = 0; i < data.length; i++) {
      sum += Number(data[i].price) * data[i].quntity
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

  const handleIncrease = (id) => {

    dispatch(updateQuntity(id, token, "increase"))


  }


  const handleDcrease = (id) => {

    dispatch(updateQuntity(id, token, "decrease"))

  }


  const handledelete = (id) => {
    dispatch(removeData(id, token))
    swal("Removed from the Cart")
    dispatch(getData(token))

  }


  return (
    <Container>
      <Box display={A}  >
        <Box display="flex" justifyContent="end" p="1rem">
          Total :-<span style={{ marginLeft: "1rem", fontWeight: "bolder" }} >Rs. {sum} </span>
        </Box>
        <Box  >
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
                  <Box mt="2rem">
                    <p>{item.orderdate}</p>
                    <p>{item.ordertime}</p>
                  </Box>
                  <Box mt="4rem" fontSize="1.4rem">
                    <button style={{ fontSize: "1.5rem", backgroundColor: "teal", marginRight: "1rem" }} onClick={() => handleDcrease(item._id)} disabled={item.quntity === 1} >-</button>
                    <span>{item.quntity}</span>
                    <button style={{ fontSize: "1.5rem", backgroundColor: "teal", marginLeft: "1rem" }} onClick={() => handleIncrease(item._id)} disabled={item.quntity >= 10} >+</button>
                  </Box>
                  <Box mt="3rem" >
                    <h3 >Rs.{item.price*item.quntity}</h3>
                  </Box>
                  <Box mt="4rem" >
                    <Button variant='contained' onClick={() => handledelete(item._id)} > Remove  </Button>
                  </Box>
                </Box>
              )
            })
          }
        </Box>
      </Box>
      <Box display={B} >
        <img src="https://img.freepik.com/free-vector/shopping-cart_1284-672.jpg?w=740&t=st=1668934253~exp=1668934853~hmac=bf94ef08514e1707565f8f27a60901c023df3a01a7c474697abf0ada3791f6f1" alt="cart" />
      </Box>

    </Container>
  )
}

export default Cart