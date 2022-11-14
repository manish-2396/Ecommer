import { Container, Grid, TextField, } from '@mui/material'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { mailcheck, otpcheck } from '../../Redux/AuthReducer/action';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const MailAuth = () => {

    const [open, setOpen] = useState(false)
    const [isShow, setIsShow] = useState(false)
    const [email, setEmail] = useState("");
    const [OTP, setOTP] = useState("")

    const dispatch = useDispatch()
    const navigate = useNavigate()
    // const data = useSelector((state) => state);

    // console.log(data);


    sessionStorage.setItem("email", email);



    const handleOpen = useCallback(() => {
        setOpen(true);
        setIsShow(true);

        return
    },[])
    // const handleClose = () => {
    //     setOpen(false);
    //     setIsShow(false);

    // }

    const handleClose = useCallback(() => {
        setOpen(false);
        setIsShow(false);
    } , [])

    const data = useSelector((state) => state.authreducer);

    

    const handleMail = () => {
        dispatch(mailcheck({ email: email }))
    }

    const handleOtp = () => {
        const payload = {
            email: email,
            code: OTP
        }

        dispatch(otpcheck(payload))
        // console.log("payload",payload)
    }

    // console.log("data" ,data.ResponseOtp.Massage)

    useEffect(() => {
        if (data.ResponseOtp.Massage && data.ResponseOtp.Massage === "move to signup") {
            navigate("/signup")
        } else if (data.ResponseOtp.Massage && data.ResponseOtp.Massage === "Please Enter Correct OTP!") {
            alert("Please Enter Correct OTP!")
            handleClose()
        }

    }, [data.ResponseOtp.Massage , handleClose , navigate])

    


    useEffect(() => {
        if (data.ResponseMail.Massage && data.ResponseMail.Massage === "User already registered") {
            alert("User already registered")
        } else if (data.ResponseMail.Massage && data.ResponseMail.Massage === "checkotp") {
            handleOpen();
        }
    }, [data.ResponseMail.Massage , handleOpen])









    let show = isShow ? "none" : ""

    return (
        <Container maxWidth="xs">
            <Box display={show} >
                <Box m={1.5}>
                    <TextField fullWidth id="email" label="Email Address" required autoFocus name="email" onChange={(e) => setEmail(e.target.value)} />
                </Box>
                <Box>
                    <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} onClick={handleMail}>Submit</Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <NavLink to="/signin" style={{ textDecoration: "none", fontSize: "15px" }} >
                                Already have an account? Sign in
                            </NavLink>
                        </Grid>
                    </Grid>
                </Box>

            </Box>
            <Box>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Container maxWidth="sm">
                            <Box p="2px">
                                <TextField id="otp" label="One Time Password" required autoFocus name="otp" onChange={(e) => setOTP(e.target.value)} />
                                <Button variant="contained" onClick={handleOtp} sx={{ ml: 3, mt: 1 }} >
                                    Submit
                                </Button>
                            </Box>
                        </Container>
                    </Box>
                </Modal>
            </Box>


        </Container>
    )
}

export default MailAuth


/*
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

*/