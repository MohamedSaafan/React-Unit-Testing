import React from "react";
import { shallow } from "enzyme";
import App from "../App";
import CommentList from "../CommentList";
import CommentBox from "../CommentBox";

describe("the rendering of the App component", () => {
  let component;
  beforeEach(() => (component = shallow(<App />)));

  it("should render CommentList component", () => {
    expect(component.find(CommentList).length).toEqual(1);
  });

  it("should render One Instance of CommentBox", () => {
    expect(component.find(CommentBox).length).toEqual(1);
  });
});
