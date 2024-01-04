import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, test } from "vitest";

import Count from "./Count";

test("サンプルテスト", async () => {
  const user = userEvent.setup();
  render(<Count />);
  expect(screen.getByText("Current Count is 0")).toBeInTheDocument();
  await user.click(screen.getByRole("button", { name: "Count Up" }));
  expect(screen.getByText("Current Count is 1")).toBeInTheDocument();
});
