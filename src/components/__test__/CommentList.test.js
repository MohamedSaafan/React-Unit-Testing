import React from "react";
import { mount } from "enzyme";

import Root from "../../Root";
import CommentList from "../CommentList";

let component;
beforeEach(
  () =>
    (component = mount(
      <Root initialState={{ comments: ["comment1", "comment2"] }}>
        <CommentList />
      </Root>
    ))
);

it("should render one li per comment", () => {
  expect(component.find("ul li").length).toBe(2);
});
it("should shows the text of each comment", () => {
  expect(component.render().find("li").text()).toContain("comment1");
  expect(component.render().find("li").text()).toContain("comment2");
});
