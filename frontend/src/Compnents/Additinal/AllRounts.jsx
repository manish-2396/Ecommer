import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Navbar from './Navbar'
import Footer from '../Pages/Footer'
import{MailAuth , RestPassword ,Signin , Signup } from "../Authetication/index"
import{Kids , Men , Women , Kitchen } from "../Pages/index"


const AllRounts = () => {
    return (
        <div>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>} />

                <Route  path="/mailAuth" element={<MailAuth/>} />
                <Route path="/signup" element={<Signup/>} />
                <Route  path="/signin" element={<Signin/>} />
                <Route  path="/restmassage" element={<RestPassword/>} />

                <Route path="/mens"  element={<Men/>} />
                <Route path="/womens"  element={<Women/>} />
                <Route path="/kids"  element={<Kids/>} />
                <Route path="/home&kitchen"  element={<Kitchen/>} />

            </Routes>
            <Footer/>
        </div>
    )
}

export default AllRounts