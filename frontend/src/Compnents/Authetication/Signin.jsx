import { Button, FormControl, Input, InputLabel } from '@mui/material'
import { Box, Container } from '@mui/system'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { signin } from '../../Redux/AuthReducer/action'

const Signin = () => {

  const dispatch = useDispatch()

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



  return (
    <Container maxWidth="sm">
      <form action="" onSubmit={handleSubmit}>
        <Box m={1.5}>
          <FormControl>
            <InputLabel htmlFor="my-input">Email address</InputLabel>
            <Input id="email" name="email" value={form.email} onChange={handleChange} />
          </FormControl>
        </Box>
        <Box m={1.5} >
          <FormControl>
            <InputLabel htmlFor="my-input">Password</InputLabel>
            <Input id="password" name="password" value={form.password} onChange={handleChange} />
          </FormControl>
        </Box>
        <Box>
          <Button type='submit'>Submit</Button>
        </Box>
      </form>
    </Container>
  )
}

export default Signin