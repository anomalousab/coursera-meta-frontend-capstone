import React, { useEffect} from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "../styles/booking.css";
const BookingForm = ({ availableTimes, dispatch }) => {
  const getDate = (todayDate = new Date()) => {
    return todayDate.toISOString().slice(0, 10);
  };
  const formSchema = Yup.object({
    date: Yup.date()
      .min(getDate(), "Can't choose a date before today")
      .required("Required to proceed"),
    time: Yup.string()
      .required("Please choose a time")
      .test("time", "Please choose a time", (value) => {
        const timeRegex = /^([01][0-9]|2[0-3]):[0-5][0-9]$/;
        return timeRegex.test(value);
      }),
    guests: Yup.number()
      .min(1, "Atleast one guest is required to book a table")
      .max(10, "Maximum seating capacity is 10")
      .required("Required to proceed"),
    occasion: Yup.string().required("Required to proceed"),
  });

  useEffect(() => {
    dispatch({ type: "initializeTimes" });
    //eslint-disable-next-line
  }, []);

  const { values, touched, errors, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        date: getDate(),
        time: "Choose a time",
        guests: 1,
        occasion: "None",
      },
      validationSchema: formSchema,
      onSubmit: (values, action) => {
        const payload = {
          date: values.date,
          time: values.time,
          guests: values.guests,
          occasion: values.occasion,
        };
        dispatch({
          type: "submitForm",
          payload: payload,
        });
        action.resetForm();
      },
    });

  return (
    <>
      <section className="flex reserve-table">
        <div className="form-outer">
          <div className="heading-container">
            <h1 className="form-heading display-title">Reserve a table</h1>
            {values.date && (
              <div className="form-subheading">
                <h3>
                  Available time slots for{" "}
                  {getDate() === values.date ? "today" : values.date} are&nbsp;:
                </h3>
                <p>{availableTimes?.join(", ")}</p>
              </div>
            )}
          </div>
          <form onSubmit={handleSubmit} className="form">
            <div className="form-date form-input-container">
              <div className="form-label-container">
                <label className="form-label" htmlFor="res-date">
                  Choose date
                </label>
                {touched.date && errors.date && (
                  <span data-testid="date" role="alert" className="form-alert">
                    {errors.date}
                  </span>
                )}
              </div>
              <input
                name="date"
                value={values.date}
                onChange={(e) => {
                  const newDate = e.target.value;
                  dispatch({
                    type: "updateTimes",
                    payload: new Date(Date.parse(newDate)),
                  });
                  // calling the formik onchange
                  handleChange(e);
                }}
                onBlur={handleBlur}
                min={getDate()}
                type="date"
                id="res-date"
                required
                className={`form-input ${errors.date && "warn"}`}
              />
            </div>

            <div className="form-time form-input-container">
              <div className="form-label-container">
                <label className="form-label" htmlFor="res-time">
                  Choose time
                </label>
                {touched.time && errors.time && (
                  <span role="alert" className="form-alert" data-testid="time">
                    {errors.time}
                  </span>
                )}
              </div>
              <select
                name="time"
                value={values.time}
                onChange={handleChange}
                onBlur={handleBlur}
                id="res-time"
                aria-label="time"
                className={`form-input ${errors.time && "warn"}`}
              >
                <option value="Choose a time">Choose a time</option>
                {availableTimes?.map((time) => (
                  <option value={time} key={time}>
                    {time}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-guests form-input-container">
              <div className="form-label-container">
                <label className="form-label" htmlFor="guests">
                  Number of guests
                </label>
                {touched.guests && errors.guests && (
                  <span
                    data-testid="guests"
                    role="alert"
                    className="form-alert"
                  >
                    {errors.guests}
                  </span>
                )}
              </div>
              <input
                name="guests"
                value={values.guests}
                onChange={handleChange}
                onBlur={handleBlur}
                type="number"
                placeholder="1"
                min="1"
                max="10"
                id="guests"
                aria-label="guests"
                className={`form-input ${errors.guests && "warn"}`}
              />
            </div>
            <div className="form-occasion form-input-container">
              <label className="form-label" htmlFor="occasion">
                Occasion
              </label>
              <select
                name="occasion"
                value={values.occasion}
                onChange={handleChange}
                onBlur={handleBlur}
                id="occasion"
                className={`form-input ${errors.occasion && "warn"}`}
              >
                <option data-testid="occasion">None</option>
                <option data-testid="occasion">Birthday</option>
                <option data-testid="occasion">Anniversary</option>
              </select>
            </div>
            {/*SUBMIT */}
            <input
              type="submit"
              aria-label="On click"
              value="Make Your reservation"
              className="form-submit"
            />
          </form>
        </div>
      </section>
    </>
  );
};

export default BookingForm;
