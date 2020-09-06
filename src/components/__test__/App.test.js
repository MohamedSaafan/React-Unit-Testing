import React from "react";
import { shallow } from "enzyme";
import App from "../App";
import CommentList from "../CommentList";

describe("testing the App Component", () => {
  const app = shallow(<App />);
  it("should render CommentList component", () => {
    const comments = shallow(<CommentList />);

    expect(app).toHaveHTML("div");
  });
});
