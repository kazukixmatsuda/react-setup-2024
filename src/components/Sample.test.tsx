import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, test } from "vitest";

import Sample from "./Sample";

test("サンプルテスト", async () => {
  render(<Sample />);
  expect(screen.getByRole("heading")).toHaveTextContent("Hello, Anonymous");
  const button = screen.getByRole("button", { name: "ユーザー名取得" });
  userEvent.click(button);
  expect(await screen.findByText("Loading...")).toBeInTheDocument();
  expect(await screen.findByRole("heading")).toHaveTextContent(
    "Hello, John Maverick",
  );
});

test("スナップショットテスト", () => {
  const { container } = render(<Sample />);
  expect(container).toMatchSnapshot();
});
