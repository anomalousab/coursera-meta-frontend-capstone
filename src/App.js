import { Homepage, Bookingpage, ConfirmedBooking } from "./pages";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" index element={<Homepage />} />
        <Route path="/book" element={<Bookingpage />} />
        <Route path="/confirmed-booking" element={<ConfirmedBooking />} />
        <Route path="*" element={<h1>404 : Not found</h1>} />
      </Routes>
    </>
  );
}

export default App;
