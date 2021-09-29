import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CommentThread from "../components/CommentThread";

describe("CommentThread", () => {
  const comment = {
    id: "4b2d74e6-7d1a-4ba3-9e95-0f52ee8ebc6e",
    author: "Reed Fisher",
    body: "Sint in in sunt amet.",
    postedAt: 1550488214207,
    replies_count: 3,
    replies: [
      {
        id: "116dbd01-d5f3-4dfb-afeb-f822a9264a5e",
        comment_id: "4b2d74e6-7d1a-4ba3-9e95-0f52ee8ebc6e",
        author: "Kathleen Nikolaus",
        body: "Officia suscipit sint sint impedit nemo. Labore aut et quia quasi ut. Eos voluptatibus quidem eius delectus beatae excepturi.",
        postedAt: 1550419941546,
      },
      {
        id: "116dbd01-d5f3-4dfb-afeb-f822a9264",
        comment_id: "4b2d74e6-7d1a-4ba3-9e95-0f52ee8ebc6e",
        author: "Kathleen Nikolaus",
        body: "Officia suscipit sint sint impedit nemo. Labore aut et quia quasi ut. Eos voluptatibus quidem eius delectus beatae excepturi.",
        postedAt: 1550419941546,
      },
    ],
  };
  let func;
  beforeEach(() => {
    func = jest.fn();
    render(<CommentThread comment={comment} onMoreReplies={func} />);
  });
  it("contains show more replies link", () => {
    const link = screen.getByRole("link", { name: /Show More Replies/ });
    expect(link).toBeInTheDocument();
  });
  it("onMoreReplies called when link is clicked", () => {
    const link = screen.getByRole("link", { name: /Show More Replies/ });
    userEvent.click(link);
    expect(func.mock.calls.length).toBe(1);
  });
  it("onMoreReplies called with the commentId when link is clicked", () => {
    const link = screen.getByRole("link", { name: /Show More Replies/ });
    userEvent.click(link);
    expect(func.mock.calls[0][0]).toBe(comment.id);
  });
  it("renders replies", () => {
    const replies = within(screen.getByTestId("replies")).getAllByTestId(
      "comment"
    );
    expect(replies.length).toBe(comment.replies.length);
  });
});

// func.mock.calls -> [[commentId]]
// func.mock.calls.length === 2
