import { Avatar, Box, Button, Container, CssBaseline, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ExitToAppSharpIcon from '@mui/icons-material/ExitToAppSharp';
import { signup } from '../../Redux/AuthReducer/action';
import { useNavigate } from 'react-router-dom';

const Signup = () => {


  const dispatch = useDispatch()
  const navigate = useNavigate()




  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    age: ""
  })

  let email = sessionStorage.getItem("email");





  const handleChange = (event) => {
    setForm(form => ({
      ...form,
      [event.target.name]: event.target.value
    }))
  };


  const handleSubmit = (event) => {
    event.preventDefault()
    form.email= email 
    dispatch(signup(form))
    console.log(form)
  }

  const data = useSelector((state) => state.authreducer.ResponseSignin.Massage);


  console.log(data)

  useEffect(() => {

    if(data === "resistance successfully completed"){
      navigate("/signin")
    }

  },[data , navigate])

  return (
    <Container maxWidth="sm">
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
            <ExitToAppSharpIcon/>
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>

          </Box>
      <form action="" onSubmit={handleSubmit} >
        <Box m="1rem" >
          <TextField fullWidth required id="name" autoFocus label="Name" name="name" value={form.name} onChange={handleChange} />
        </Box>
        <Box m="1rem" >
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Gender</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="gender"
              value={form.gender}
              label="Gender"
              onChange={handleChange}
              fullWidth
              required
            >
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box m="1rem" >
          <TextField fullWidth type="number" required id="age" label="Age" name="age" value={form.age} onChange={handleChange} />
        </Box>
        <Box m="1rem" >
          <TextField type="password" fullWidth required id="password" label="Password" name="password" value={form.password} onChange={handleChange} />
        </Box>
        <Box m="1rem" >
          <Button type='submit' fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} >Submit</Button>
        </Box>
      </form>
    </Container>
  )
}

export default Signup