import React from "react";
import { mount } from "enzyme";

// use mount for full dom rendering

// when using mount be sure to unmount the element after you ran your tests over it

import CommentBox from "../CommentBox";

describe("testing the CommentBox Component", () => {
  let wrapper;
  beforeEach(() => (wrapper = mount(<CommentBox />)));
  afterEach(() => wrapper.unmount());
  it("should render a button and a textarea", () => {
    expect(wrapper.find("button").length).toEqual(1);
    expect(wrapper.find("textarea").length).toEqual(1);
  });

  describe("testing the textarea values", () => {
    beforeEach(() => {
      wrapper.find("textarea").simulate("change", {
        target: {
          value: "changed",
        },
      });
      wrapper.update();
    });
    // setting the state is an asynconous action so if you wrote an assertion based on that change then it will fail
    // so we must force the component to rerender  now
    it("has a text area that a user can type in", () => {
      expect(wrapper.find("textarea").prop("value")).toEqual("changed");
    });

    it("should render an empty textarea input when the form is sumbmitted", () => {
      wrapper.find("form").simulate("submit", { preventDefault: () => {} });
      wrapper.update();
      expect(wrapper.find("textarea").prop("value")).toBe("");
    });
  });
});
