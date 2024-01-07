import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";

import User from "./User";

test("サンプルテスト", async () => {
  render(<User />);
  expect(screen.getByText("Loading...")).toBeInTheDocument();
  expect(await screen.findByText("Hello, John Maverick")).toBeInTheDocument();
});
