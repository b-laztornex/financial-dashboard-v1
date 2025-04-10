/**
 * This file contains unit tests for the Card component to ensure that it
 * renders correct card details and matches the snapshot.
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Card, { CardProps } from "../components/Card";

describe("Card Component", () => {
  const props: CardProps = {
    balance: "$1,000",
    cardholder: "John Doe",
    validThru: "12/30",
    cardNumber: "1234 **** **** 5678",
  };

  test("renders cardholder name and balance", () => {
    render(<Card {...props} />);
    expect(screen.getByText(/John Doe/i)).toBeInTheDocument();
    expect(screen.getByText(/\$1,000/)).toBeInTheDocument();
  });

  test("renders masked card number and valid thru information", () => {
    render(<Card {...props} />);
    expect(screen.getByText(/1234 \*\*\*\* \*\*\*\* 5678/)).toBeInTheDocument();
    expect(screen.getByText(/12\/30/)).toBeInTheDocument();
  });

  test("matches snapshot", () => {
    const { container } = render(<Card {...props} />);
    expect(container).toMatchSnapshot();
  });
});
