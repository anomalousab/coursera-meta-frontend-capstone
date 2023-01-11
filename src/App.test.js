import { fireEvent, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
// import App from './App';
import Bookingpage from "./pages/Bookingpage";
import { fetchAPI, submitAPI } from "./api/api";

describe("Reserve a table functionality", () => {
  test("initializeTimes works properly", () => {
    const {getByText} = render(
      <MemoryRouter>
        <Bookingpage />
      </MemoryRouter>
    );
    const todaysAvailableTimesExpected = fetchAPI(new Date()).join(", ");
    const availableTimesElement = getByText(todaysAvailableTimesExpected);
    // expecting the element to have same values as returned by the fetchAPI function
    expect(availableTimesElement).toBeInTheDocument();
  });

  test("updateTimes works properly", () => {
    const {queryByText, getByRole, debug} = render(
      <MemoryRouter>
        <Bookingpage />
      </MemoryRouter>
    )
    const todaysAvailableTimesExpected = fetchAPI(new Date()).join(", ");
    const datePickerElement = getByRole('datepicker')
    fireEvent.input(datePickerElement, {target:{value: '2023-01-31'}})
    const availableTimesElement = queryByText(todaysAvailableTimesExpected)
    expect(availableTimesElement).not.toBeInTheDocument();

  })
  test("Form Validations", () => {
    
  })
});
