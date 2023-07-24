import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Location } from "../pages/Location";
import { Time } from "../pages/Time";
import { Country } from "../pages/Country";
import { More } from "../pages/More";
import { Header } from "../components/Header";
import { Searched } from "../components/Searched";
import { IP_Context } from "../context/UserIPAddress";
import { useState, useEffect } from "react";
import axios from "axios";

export const AppRouter = () => {
  const [userip, setuserip] = useState("149.102.238.104");
  const [ipres, setipres] = useState("");

  //?data çektim
  const getData = async () => {
    try {
      const response = await axios(
        `https://api.getgeoapi.com/v2/ip/${userip}?api_key=06805694df4af50781a5fd6be1a076a51f3a5c29`
      );
      // console.log(response);
      setipres(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  //? userip icinde varsa getDatayi cektim.
  useEffect(() => {
    if (userip) {
      getData();
    }
  }, [userip]);

  return (
    <>
      <IP_Context.Provider value={{ userip, setuserip, ipres, setipres }}>
        <Header />

        <Routes>
          {/* <Route path='/'  element={<Home/>}/> */}
          <Route index element={<Location />} />
          <Route path="time" element={<Time />} />
          <Route path="country" element={<Country />} />
          <Route path="more" element={<More />} />
          <Route path="*" element={<Navigate to="/" />} />
          {/* </Route> */}
        </Routes>

        <Searched />
      </IP_Context.Provider>
    </>
  );
};
