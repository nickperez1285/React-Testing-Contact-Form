
import React from "react";
import ContactForm from "./ContactForm";
import { render, fireEvent, waitForElement } from "@testing-library/react";

test("contact form renders", () => {
    render(<ContactForm />);
});


test("form inputs are rendered ", () => {
  const { getByText } = render(<ContactForm />);
  const firstName = getByText(/first name/i);
  const lastName =  getByText(/last name/i);
  const email = getByText(/email/i);
  const message = getByText(/message/i);
});


test("form inputs are rendered within component ", () => {
  const { getByText } = render(<ContactForm />);
    const firstName = getByText(/first name/i);
  const lastName =  getByText(/last name/i);
  const email = getByText(/email/i);
  const message = getByText(/message/i);

  expect(firstName).toBeInTheDocument();
  expect(lastName).toBeInTheDocument();
  expect(email).toBeInTheDocument();
  expect(message).toBeInTheDocument();
  
});

//  ReferenceError: getByLabelText is not defined
// test("form inputs are accept proper values ", () => {
//   const { getByText } = render(<ContactForm />);
//     const firstName= getByText(/first name/i);
//   const lastName =  getByText(/last name/i);
//   const email = getByText(/email/i);
//   const message = getByText(/message/i);

//     fireEvent.change(getByLabelText(/first name/i), {target: { value: "test"}})
//   fireEvent.change(lastName, { target: { value: "Testing2" } });
//   fireEvent.change(email, { target: { value: "testing@test.com" } });
  
// });