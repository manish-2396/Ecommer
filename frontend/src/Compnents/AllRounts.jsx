import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Authetication/Home'
import MailAuth from './Authetication/MailAuth'
import RestPassord from './Authetication/RestPassord'
import Signin from './Authetication/Signin'
import Signup from './Authetication/Signup'
import Navbar from './Navbar'

const AllRounts = () => {
    return (
        <div>
            <Navbar/>
            <Routes>
                <Route path="/" element={ <Home/> } ></Route>
                <Route  path="/mailAuth" element={  <MailAuth/> } />
                <Route path="/signup" element={ <Signup/> } />
                <Route  path="/signin" element={ <Signin/> } />
                <Route  path="/restmassage" element={ <RestPassord/> } />
            </Routes>
        </div>
    )
}

export default AllRounts