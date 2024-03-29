import { Button, Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addCart, getkitchenData } from "../../Redux/AppReducer/action";
import swal from "sweetalert";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Paginataion } from "../Additinal/Pagination";
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

const Kitchen = () => {
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [data, setData] = useState({});
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
  const dispatch = useDispatch();
  const { kitchen, loading, kitchenpages } = useSelector(
    (state) => state.appreducer
  );
  const navigate = useNavigate();
  // console.log(kitchen , loading)

  useEffect(() => {
    dispatch(getkitchenData(10, page));
  }, [dispatch , page]);

  let a = {
    isAuth: false,
    token: null,
  };

  let { isAuth, token } = JSON.parse(sessionStorage.getItem("user")) || a;

  const { current_date, current_time } = getCurrentTime();

  const handleAdd = (e) => {
    if (!isAuth) {
      navigate("/signin");
    } else {
      // console.log(e)
      const payload = {
        img: e.image_url,
        name: e.name,
        offer: e.discount,
        price: e.price,
        normalprice: e.strikedOffPrice,
        orderdate: current_date,
        ordertime: current_time,
      };
      // console.log("payload", payload)
      dispatch(addCart(payload, token));
      swal("Add to the Cart", "", "success");
    }
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
          <Box display="flex" justifyContent="space-around" fontSize="12px">
            <Box p="2rem">
              <img style={{ maxWidth: "8rem" }} src={data.image_url} alt="" />
            </Box>
            <Box>
              <h1 style={{ color: "#a4a4a4", fontSize: "20px" }}>
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
                    Rs.{data.strikedOffPrice}
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
        {kitchen &&
          kitchen.map((element, index) => (
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
                  {element.discount}
                </Box>
                <img
                  style={{ maxWidth: "100%", height: "10rem" }}
                  src={element.image_url}
                  alt={element.name}
                />
                <Box height="5rem">
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
                      Rs.{element.strikedOffPrice}
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
      <Box mt="2rem">
        <Paginataion page={page} setPage={setPage} totalPages={kitchenpages} />
      </Box>
    </Container>
  );
};

export default Kitchen;
