import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Signin from './Authetication/Signin'
import Signup from './Authetication/Signup'

const AllRounts = () => {
    return (
        <div>
            <Routes>
                <Route path="/signup" element={ <Signup/> } />
                <Route  path="/signin" element={ <Signin/> } />
            </Routes>
        </div>
    )
}

export default AllRounts