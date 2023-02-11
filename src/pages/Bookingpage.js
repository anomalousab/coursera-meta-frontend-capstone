import React, { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAPI, submitAPI } from "../api/api";

import { BookingForm, Navbar, Footer } from "../components";

const Bookingpage = () => {
  const navigate = useNavigate();
  const timesReducer = (state, action) => {
    switch (action.type) {
      case "initializeTimes":
        const initialTimes = fetchAPI(new Date());
        return initialTimes;
      case "updateTimes":
        const updatedTimes = fetchAPI(action.payload);
        return updatedTimes;
      case "submitForm":
        const submitted = submitAPI(action.payload);
        if (submitted) navigate("/confirmed-booking");
        break;
      default:
        return state;
    }
  };

  const [availableTimes, dispatch] = useReducer(timesReducer, []);

  return (
    <>
      <Navbar />
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
      <Footer />
    </>
  );
};

export default Bookingpage;
