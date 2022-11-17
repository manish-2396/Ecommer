import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import MailAuth from './Authetication/MailAuth'
import RestPassord from './Authetication/RestPassord'
import Signin from './Authetication/Signin'
import Signup from './Authetication/Signup'
import Navbar from './Navbar'
import Men from './Pages/Men'
import Women from './Pages/Women'
import Footer from './Pages/Footer'
import Kitchen from './Pages/Kitchen'
import Kids from './Pages/Kids'


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
                <Route path="/mens"  element={ <Men/> } />
                <Route path="/womens"  element={ <Women/> } />
                <Route path="/kids"  element={ <Kids/> } />
                <Route path="/home&kitchen"  element={ <Kitchen/> } />
            </Routes>
            <Footer/>
        </div>
    )
}

export default AllRounts