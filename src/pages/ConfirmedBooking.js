import React from "react";
import "../styles/confirmed-booking.css";
import { Navbar, Footer } from "../components";
const ConfirmedBooking = () => {
  return (
    <>
      <Navbar />
      <div className="message-container">
        <h1 className="message">Booking has been confirmed!</h1>
      </div>
      <Footer />
    </>
  );
};

export default ConfirmedBooking;
