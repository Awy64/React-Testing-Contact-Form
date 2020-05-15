import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import App from "./App";
// import { act } from "react-dom/test-utils";

test("renders App without crashing", () => {

    render(<App />);

  
});


test("Able to add names over 3 charaters.",async () => {

  const {getByTestId, queryAllByTestId} = render(<App />);
  const firstName = getByTestId('firstName')
  
  await waitFor(() => {
    fireEvent.change(firstName, {target: {value: 'AddyHacker'}})
  fireEvent.blur(firstName)
  })
  

  expect(await queryAllByTestId("firstname_error")).toStrictEqual([])


    
    console.log(queryAllByTestId("firstname_error"))
})