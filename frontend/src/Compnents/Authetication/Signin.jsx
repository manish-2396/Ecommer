import { Avatar, Button, CssBaseline, Grid, TextField, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signin } from '../../Redux/AuthReducer/action'
import { NavLink, useNavigate } from 'react-router-dom';

const Signin = () => {

  const dispatch = useDispatch()
  const data = useSelector((state) => state.authreducer)
  const navigate = useNavigate();
  // console.log(data);

  const [form, setForm] = useState({
    email: "",
    password: ""
  })


  




  const handleChange = (event) => {
    setForm(form => ({
      ...form,
      [event.target.name]: event.target.value
    }))
  };


  const handleSubmit = (event) => {
    event.preventDefault()

    dispatch(signin(form))
  }

 
  if(data.ResponseSignin.isAuth){
    console.log()
    localStorage.setItem("user", JSON.stringify(data.ResponseSignin))
  }

  
  
  let user = JSON.parse(localStorage.getItem("user"))

  console.log(user)

  useEffect(() => {
    if (user.isAuth) {
      navigate("/home")
    }
  }, [user.isAuth , navigate])




  return (
    <Container component="main" maxWidth="xs"  >
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
      </Box>
      <form action="" onSubmit={handleSubmit}>
        <Box m={1.5}>
          <TextField fullWidth id="email" label="Email Address" required autoFocus name="email" value={form.email} onChange={handleChange} />
        </Box>
        <Box m={1.5} >
          <TextField fullWidth id="password" label="Password" required autoComplete="current-password" name="password" value={form.password} onChange={handleChange} />
        </Box>

        <Box>
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} >Submit</Button>
          <Grid container>
            <Grid item xs>
              <NavLink to="/restmassage" style={{ textDecoration: "none", fontSize: "15px" }}>
                Forgot password?
              </NavLink>
            </Grid>
            <Grid item>
              <NavLink to="/mailAuth" style={{ textDecoration: "none", fontSize: "15px" }}>
                {"Don't have an account? Sign Up"}
              </NavLink>
            </Grid>
          </Grid>
        </Box>
      </form>
    </Container>
  )
}

export default Signin