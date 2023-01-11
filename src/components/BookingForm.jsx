import React, { useEffect, useState } from "react";

const BookingForm = ({ availableTimes, dispatch }) => {
  const getDate = (todayDate = new Date()) => {
    return todayDate.toISOString().slice(0, 10);
  };
  console.log(typeof getDate() === "string");
  const [date, setDate] = useState("");
  const [time, setTime] = useState(availableTimes[0]);
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("None");

  useEffect(() => {
    const today = getDate();
    setDate(today);
    dispatch({ type: "initializeTimes" });
    //eslint-disable-next-line
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "submitForm",
      payload: {
        date: date,
        time: time,
        guests: guests,
        occasion: occasion,
      },
    });
    setDate("");
    setTime("");
    setGuests(1);
    setOccasion("None");
  };
  return (
    <>
      {date && (
        <div>
        <h3>
          Available times for {date} are :
        </h3>
        <p>
        {availableTimes.join(", ")}
        </p>
        </div>
      )}
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 20%",
        }}
      >
        <label htmlFor="res-date">Choose date</label>
        {/* DATE */}
        <input
          name="date"
          role="datepicker"
          value={date}
          onChange={(e) => {
            const newDate = e.target.value;
            console.log("date passed by input field :", newDate);
            setDate(newDate);
            dispatch({
              type: "updateTimes",
              payload: new Date(Date.parse(newDate)),
            });
          }}
          min={getDate()}
          type="date"
          id="res-date"
          required
        />
        <label htmlFor="res-time">Choose time</label>
        {/* TIME */}
        <select
          name="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          id="res-time "
        >
          {availableTimes?.map((time) => (
            <option value={time} key={time}>
              {time}
            </option>
          ))}
        </select>
        <label htmlFor="guests">Number of guests</label>
        {/* GUESTS */}
        <input
          name="guests"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
        />
        <label htmlFor="occasion">Occasion</label>
        {/* OCCASION */}
        <select
          name="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
          id="occasion"
        >
          <option>None</option>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        {/*SUBMIT */}
        <input type="submit" value="Make Your reservation" />
      </form>
    </>
  );
};

export default BookingForm;
