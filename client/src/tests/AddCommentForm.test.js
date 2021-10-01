import React from "react";

import { fireEvent, render, screen, within } from "@testing-library/react";

import userEvent from "@testing-library/user-event";

import AddCommentForm from "../components/AddCommentForm";

describe("AddCommentForm", () => {
  let func;
  beforeEach(() => {
    func = jest.fn();
    render(<AddCommentForm onSubmit={func} />);
  });

  it("has h2 heading", () => {
    const heading = screen.getByRole("heading", {
      level: 2,
      name: "Post a Comment",
    });
    expect(heading).toBeInTheDocument();
  });
  it("changes the state when author is changed", () => {
    const inputAuthor = screen.getByRole("textbox", { name: "Your Name" });
    userEvent.type(inputAuthor, "Srdjan");
    expect(inputAuthor.value).toEqual("Srdjan");
  });
  it("changes the state when body is changed", () => {
    const inputBody = screen.getByRole("textbox", { name: "Your Comment" });
    userEvent.type(inputBody, "My Comment");
    expect(inputBody.value).toEqual("My Comment");
  });
  it("calls onSubmit when form is submitted", () => {
    const form = screen.getByRole("form");
    fireEvent.submit(form);
    expect(func.mock.calls.length).toBe(1);
  });
  it("calls onSubmit when form is submitted", () => {
    const form = screen.getByRole("form");

    const inputAuthor = screen.getByRole("textbox", { name: "Your Name" });
    userEvent.type(inputAuthor, "Srdjan");
    const inputBody = screen.getByRole("textbox", { name: "Your Comment" });
    userEvent.type(inputBody, "My Comment");
    const newComment = {
      author: inputAuthor.value,
      body: inputBody.value,
    };
    fireEvent.submit(form);
    expect(func.mock.calls[0][0]).toEqual(newComment);
  });
});
