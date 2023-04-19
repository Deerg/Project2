import { test, describe, expect } from "vitest";
import Home from "./Home";
import { render, screen, fireEvent, waitfor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import axios from "axios";

jest.mock("axios");

describe("Create", () => {
  test("send title and content", async () => {
    const title = "Title";
    const content = "content";
    const data = { title, content };

    await submit(title, content);
    expect(axios.post).toHaveBeenCalledWith(
      "http://localhost:3001/v1/api/posts",
      data
    );
  });
});

describe("Reading", () => {
  test("fetching data from server", async () => {
    const data = [{ id: 1, title: "title", content: "content" }];
    axios.get.mockResolvedValue({ data: data });
    const setData = jest.fn();
    await get(setData);
    expect(setData).toHaveBeenCalledWith(data);
  });
});
