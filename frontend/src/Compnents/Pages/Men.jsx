import { Button, Grid, Pagination, Stack } from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addCart, getManData } from "../../Redux/AppReducer/action";
import swal from "sweetalert";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { getCurrentTime } from "../Additinal/currentTime";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
let a = {
  isAuth: false,
  token: null,
};
let { isAuth, token } = JSON.parse(sessionStorage.getItem("user")) || a;
const Men = () => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({});
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const { Men, loading, menpages } = useSelector((state) => state.appreducer);
  console.log(menpages, page);
  const navigate = useNavigate();
  const handleOpen = (element) => {
    setData(element);
    setOpen(true);
    sessionStorage.setItem("payment", element.price);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handlePayment = () => {
    return navigate("/payment");
  };
  useEffect(() => {
    dispatch(getManData(10, page));
  }, [dispatch, page]);

  const { current_date, current_time } = getCurrentTime();
console.log(isAuth)
  const handleAdd = (e) => {
    if (!isAuth) {
      navigate("/signin");
    } else {
      console.log(e)
      const payload = {
        img: e.image_url,
        name: e.name,
        offer: e.offer,
        price: e.price,
        normalprice: e.strikedoffprice,
        orderdate: current_date,
        ordertime: current_time,
      };
      // console.log("payload", payload)
      dispatch(addCart(payload, token));
      swal("Add to the Cart", "", "success");
    }
  };

  const handleChange = (ChangeEvent, value) => {
    setPage(value);
  };

  return (
    <Container>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            display="flex"
            justifyContent="space-around"
            fontSize="12px"
            flexWrap="wrap"
          >
            <Box p="2rem">
              <img style={{ maxWidth: "10rem" }} src={data.image_url} alt="" />
            </Box>
            <Box>
              <h1 style={{ color: "#a4a4a4", fontSize: "25px" }}>
                {data.name}
              </h1>
              <Box display="flex" justifyContent="space-between" mt="3rem">
                <Box>
                  <h5
                    style={{
                      textDecoration: "line-through",
                      color: "#a4a4a4",
                    }}
                  >
                    {data.strikedoffprice}
                  </h5>
                </Box>
                <Box>
                  <h5>Rs.{data.price}</h5>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box display="flex" justifyContent="space-around" mt="2rem">
            <Box>
              <Button variant="contained" onClick={handleClose}>
                back
              </Button>
            </Box>
            <Box>
              <Button variant="contained" onClick={handlePayment}>
                Checkout
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
      {loading && (
        <Box color="#1976d2" textAlign="center">
          Loading...
        </Box>
      )}
      <Grid
        container
        spacing={{ xs: 2, md: 4 }}
        columns={{ xs: 4, sm: 12, md: 20 }}
      >
        {Men &&
          Men.map((element, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <Box className="shadow" height="auto" p="1rem">
                <Box
                  fontSize="10px"
                  position="absolute"
                  borderRadius="50%"
                  bgcolor="red"
                  color="#fff"
                  border="1px solid red"
                  p="5px"
                >
                  {element.offer}
                </Box>
                <img
                  style={{ maxWidth: "100%", height: "10rem" }}
                  src={element.image_url}
                  alt={element.name}
                />
                <Box height="3rem">
                  <p style={{ color: "#a4a4a4", fontSize: "14px" }}>
                    {element.name}
                  </p>
                </Box>
                <Box display="flex" justifyContent="space-around">
                  <Box>
                    <h5
                      style={{
                        textDecoration: "line-through",
                        color: "#a4a4a4",
                      }}
                    >
                      {element.strikedoffprice}
                    </h5>
                  </Box>
                  <Box>
                    <h5>Rs.{element.price}</h5>
                  </Box>
                </Box>

                <Box display="flex" justifyContent="space-around">
                  <Box>
                    <Button
                      variant="contained"
                      onClick={() => handleOpen(element)}
                    >
                      Buy
                    </Button>{" "}
                  </Box>
                  <Box>
                    <Button
                      onClick={() => handleAdd(element)}
                      variant="contained"
                    >
                      Add
                    </Button>{" "}
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
      </Grid>
      <Box m="2rem" textAlign="center">
        <Stack spacing={8}>
          <Pagination
            count={menpages}
            page={page}
            defaultPage={6}
            onChange={handleChange}
            siblingCount={0}
          />
        </Stack>
      </Box>
    </Container>
  );
};

export default Men;
