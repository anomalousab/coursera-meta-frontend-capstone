import { fireEvent, render, act } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Bookingpage from "./pages/Bookingpage";
import { fetchAPI } from "./api/api";

describe("Reserve a table functionality", () => {
  test("initializeTimes works properly", () => {
    const { getByText } = render(
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
    const { queryByText, getByLabelText, debug } = render(
      <MemoryRouter>
        <Bookingpage />
      </MemoryRouter>
    );
    const todaysAvailableTimesExpected = fetchAPI(new Date()).join(", ");
    const chooseDateElement = getByLabelText("Choose date");
    act(() =>
      fireEvent.input(chooseDateElement, { target: { value: "2023-01-31" } })
    );
    const availableTimesElement = queryByText(todaysAvailableTimesExpected);
    expect(availableTimesElement).not.toBeInTheDocument();
  });
  test("Form Validations", async () => {
    const { getByLabelText, findByTestId, getAllByTestId, debug } = render(
      <MemoryRouter>
        <Bookingpage />
      </MemoryRouter>
    );
    const chooseDateElement = getByLabelText("Choose date");
    const chooseTimeElement = getByLabelText("Choose time");
    const guestsElement = getByLabelText("Number of guests");
    const occasionElement = getByLabelText("Occasion");

    act(() => {
      fireEvent.input(chooseDateElement, { target: { value: "2022-12-01" } });
      fireEvent.blur(chooseDateElement);
      fireEvent.input(chooseTimeElement, { target: { value: "" } });
      fireEvent.blur(chooseTimeElement);
      fireEvent.input(guestsElement, { target: { value: "50" } });
      fireEvent.blur(guestsElement);
      fireEvent.input(occasionElement, { target: { value: "" } });
      fireEvent.blur(occasionElement);
    });
    const dateValidationWarning = await findByTestId("date");
    const timeValidationWarning = await findByTestId("time");
    const guestsValidationWarning = await findByTestId("guests");
    const occasionOptions = getAllByTestId("occasion");

    expect(dateValidationWarning).toBeInTheDocument();
    expect(timeValidationWarning).toBeInTheDocument();
    expect(occasionOptions.length).toBe(3);
    expect(guestsValidationWarning).toBeInTheDocument();
  });
});
