import { Button, Container } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { payment } from "../../Redux/AppReducer/action";

const Payment = () => {
  const price = sessionStorage.getItem("payment");
  const navigate = useNavigate();
  // console.log(price);
  const [cart, setCart] = useState("");
  const [date, setDate] = useState("");
  const [CVV, setCVV] = useState("");
  const dispatch = useDispatch();

  const {token} = JSON.parse(sessionStorage.getItem("user")) // JSON.parse(sessionStorage.getItem("user"))

  const handleSubmit = (event) => {
    event.preventDefault();
    swal("Payment is Successfully Received");
    setTimeout(() => {
      return navigate("/");
    }, 5000);
    dispatch(payment(token))
  };

  return (
    <Container>
      <Box display="flex" justifyContent="end">
        <h3>Rs.{price}</h3>
      </Box>
      <Box maxWidth="70%" display="flex" justifyContent="space-around" flexWrap="wrap"  m="auto">
        <Box
          border="1px solid black"
          p="2rem"
          borderRadius="15px"
          width="15rem"
          bgcolor="teal"
         
        >
          <Box>
            <h4>Debit Cart</h4>
          </Box>

          <Box display="flex" justifyContent="space-between" mb="0.5rem">
            <Box>
              Cart No
            </Box>
            <Box>{cart}</Box>
          </Box>
          <Box display="flex" justifyContent="space-between" mb="0.5rem">
            <Box>
              expiry date
            </Box>
            <Box>{date}</Box>
          </Box>
          <Box display="flex" justifyContent="space-between" mb="0.5rem">
            <Box>
              CVV No
            </Box>
            <Box>{CVV}</Box>
          </Box>
        </Box>

        <Box mt="3rem">
          <form onSubmit={handleSubmit}>
            <Box display="flex" justifyContent="space-between" mb="0.5rem">
              <Box width="8rem">
                Cart No.
              </Box>
              <Box width="8rem">
                <input
                  maxLength={16}
                  minLength={16}
                  width="2rem"
                  required
                  type={"number"}
                  onChange={(e) => setCart(e.target.value)}
                />
              </Box>
            </Box>
            <Box display="flex" justifyContent="space-between" mb="0.5rem">
              <Box width="8rem">
                Expiry Date
              </Box>
              <Box width="8rem">
                <input
                  width="2rem"
                  required
                  onChange={(e) => setDate(e.target.value)}
                  type={"date"}
                />
              </Box>
            </Box>
            <Box display="flex" justifyContent="space-between" mb="0.5rem">
              <Box width="8rem">
                CVV No.
              </Box>
              <Box width="8rem">
                <input
                  maxLength={3}
                  width="2rem"
                  required
                  type={"number"}
                  onChange={(e) => setCVV(e.target.value)}
                />
              </Box>
            </Box>
            <Box>
              <Button type="submit" variant="contained">
                Pay
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
    </Container>
  );
};

export default Payment;
