import { render, screen } from "@testing-library/react";
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
  it("changes the input state when author is changed", () => {
    const inputAuthor = screen.getByRole("textbox", { name: "Your Name" });
    userEvent.type(inputAuthor, "Srdjan");
    expect(inputAuthor).toHaveValue("Srdjan");
  });
  it("changes the input state when body is changed", () => {
    const inputBody = screen.getByRole("textbox", { name: "Your Comment" });
    userEvent.type(inputBody, "My Comment");
    expect(inputBody).toHaveValue("My Comment");
  });
  it("calls onSubmit when form is submitted", () => {
    const submitButton = screen.getByRole("button", { name: "Submit" });
    userEvent.click(submitButton);
    expect(func.mock.calls.length).toBe(1);
  });
  it("calls onSubmit with new comment passed in", () => {
    const inputAuthor = screen.getByRole("textbox", { name: "Your Name" });
    const inputBody = screen.getByRole("textbox", { name: "Your Comment" });
    userEvent.type(inputAuthor, "Srdjan");
    userEvent.type(inputBody, "My Comment");

    const newComment = { author: inputAuthor.value, body: inputBody.value };
    const submitButton = screen.getByRole("button", { name: "Submit" });

    userEvent.click(submitButton);
    expect(func.mock.calls[0][0]).toEqual(newComment);
  });
});

//func.mock.calls   [[newComment, resetInputs]]
