import React from "react";
import Navbar from "./Navbar";
import Footer from "../Pages/Footer";
import { Route, Routes } from "react-router-dom";
import {
  MailAuth,
  RestPassword,
  Signin,
  Signup,
  PrivateRoute,
} from "../Authetication/index";
import { Kids, Men, Women, Kitchen, Cart, Profile, Home } from "../Pages/index";
import Payment from "../Pages/Payment";

const AllRounts = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/mailAuth" element={<MailAuth />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/restmassage" element={<RestPassword />} />

        <Route path="/mens" element={<Men />} />
        <Route path="/womens" element={<Women />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/home&kitchen" element={<Kitchen />} />
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
          path="/payment"
          element={
            <PrivateRoute>
              <Payment />
            </PrivateRoute>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default AllRounts;
