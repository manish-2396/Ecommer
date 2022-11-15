import { Container, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { forgetemail, forgetotp } from '../../Redux/AuthReducer/action';
import { useNavigate } from 'react-router-dom';


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



const RestPassord = () => {


    const [open, setOpen] = useState(false)
    const [isShow, setIsShow] = useState(false)
    const dispatch = useDispatch();
    const data = useSelector((state) => state.authreducer)
    const navigate = useNavigate();

    const [form, setForm] = useState({
        password: "",
        conformpassword: "",
        code: ""
    })


    const handleChange = (event) => {
        setForm(form => ({
            ...form,
            [event.target.name]: event.target.value
        }))
    };




    const handleClose = () => {
        form.email = email;
        dispatch(forgetotp(form))

        console.log(form)
    }

    let show = isShow ? "none" : ""

    const [email, setEmail] = useState("")

    const handleClik = () => {
        console.log(email, "email")
        dispatch(forgetemail({ email: email }))
    }

    console.log("data", data);
    // ResponseForgetMail
    useEffect(() => {
        if (data.ResponseForgetMail.Massage === "Please Check your Email") {
            setOpen(true);
            setIsShow(true);
        } else if (data.ResponseForgetMail.Massage === "Email not found") {
            navigate("/mailAuth")
        }
    }, [data.ResponseForgetMail.Massage, navigate])

    useEffect(() => {
        if (data.ResponseForgetOtp.Massage === "Password updated sucessfully!") {
            navigate("/signin");
        } else if (data.ResponseForgetOtp.Massage === "OTP is Expired!") {
            setOpen(false);
            setIsShow(false);
        }
    }, [data.ResponseForgetOtp.Massage, navigate])

    return (
        <Container maxWidth="xs" >
            <Box display={show}>
                <Box pt="2rem">
                    <TextField id="email" fullWidth label="Email Address" required autoFocus name="email" onChange={(e) => setEmail(e.target.value)} />
                </Box>
                <Box pt="1rem">
                    <Button type="submit" fullWidth variant="contained" onClick={handleClik} >Submit</Button>
                </Box>
            </Box>
            <Box>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style} >
                        <Container maxWidth="sm">
                            <Box p="2px">
                                <Box m="1rem" >
                                    <TextField type="password" id="password" label="Password" required autoFocus name="password" value={form.password} onChange={handleChange} />
                                </Box>
                                <Box m="1rem" >
                                    <TextField type="password" id="conformpassword" label="Conform-Password" required name="conformpassword" value={form.conformpassword} onChange={handleChange} />
                                </Box>
                                <Box m="1rem" >
                                    <TextField type="number" id="otp" label="One Time Password" required name="code" value={form.code} onChange={handleChange} />
                                </Box>
                                <Button variant="contained" onClick={handleClose} sx={{ ml: 3, mt: 1 }} >Submit</Button>
                            </Box>
                        </Container>
                    </Box>
                </Modal>
            </Box>

        </Container>
    )
}

export default RestPassord