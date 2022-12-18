import { Button, Grid, Pagination, Stack } from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addCart, getkidsData } from "../../Redux/AppReducer/action";
import swal from "sweetalert";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

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

const Kids = () => {
  const [open, setOpen] = useState(false);
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
  const { kids, loading } = useSelector((state) => state.appreducer);
  const navigate = useNavigate();

  let time = new Date().toTimeString().split(" ")[0].split(":");

  let Time = [];

  if (time[0] > 12) {
    let hr = time[0] - 12;
    let min = time[1] + "PM";
    Time.push(hr);
    Time.push(min);
  } else {
    let hr = time[0];
    let min = time[1] + "AM";
    Time.push(hr);
    Time.push(min);
  }

  let date = new Date().toDateString().split(" ");

  let today = "" + date[2] + " " + date[1] + " " + date[3];

  // console.log(Time.join(":"))
  // console.log(today);

  useEffect(() => {
    dispatch(getkidsData());
  }, [dispatch]);

  let a = {
    isAuth: false,
    token: null,
  };

  let { isAuth, token } = JSON.parse(sessionStorage.getItem("user")) || a;

  const handleAdd = (e) => {
    if (!isAuth) {
      navigate("/signin");
    } else {
      const payload = {
        img: e.image_url,
        name: e.name,
        offer: e.offer,
        price: e.price,
        normalprice: e.strikedprice,
        orderdate: today,
        ordertime: Time.join(":"),
      };
      // console.log("payload", payload)
      dispatch(addCart(payload, token));
      swal("Add to the Cart");
    }
  };

  const [page, setPage] = useState(1);
  const perPage = 10;

  let totalPages;

  if (kids) {
    // totalPages = kids.length;
    totalPages = Math.ceil(kids.length / perPage);
  }

  console.log(totalPages);

  let end = page * perPage;
  let start = end - perPage;
  let paginatedProducts = kids.slice(start, end);

  // const [newpage, setnewPage] = React.useState(1);
  const handleChange = (ChangeEvent, value) => {
    setPage(value);
  };

  return (
    <Container>
      <Box color="#1976d2">{loading && "loading..."}</Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box display="flex" justifyContent="space-around" fontSize="12px">
            <Box>
              <img style={{ maxWidth: "8rem" }} src={data.image_url} alt="" />
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
                    {data.strikedprice}
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
      <Grid
        container
        spacing={{ xs: 2, md: 4 }}
        columns={{ xs: 4, sm: 12, md: 20 }}
      >
        {paginatedProducts &&
          paginatedProducts.map((element, index) => (
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
                      {element.strikedprice}
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
                    </Button>
                  </Box>
                  <Box>
                    <Button
                      onClick={() => handleAdd(element)}
                      variant="contained"
                    >
                      Add
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
      </Grid>
      <Box m="2rem" textAlign="center">
        <Stack spacing={8}>
          <Pagination
            count={totalPages}
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

export default Kids;
