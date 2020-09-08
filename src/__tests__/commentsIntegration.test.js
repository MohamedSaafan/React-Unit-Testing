import React from "react";
import { mount } from "enzyme";

import App from "../components/App";
import Root from "../Root";

// we will render the entire app and test the funcitionality we want to test
// so in this case we will render our app and interact with it
// and trigger the button that fetches our comments and see if our comments are being rendered appropriatelly

// mocking fetch api
// Part 1
const unmockedFetch = global.fetch;

// Part 2
beforeAll(() => {
  global.fetch = () =>
    Promise.resolve({ json: () => [{ name: "name1" }, { name: "name2" }] });
});

// Part 3
afterAll(() => {
  global.fetch = unmockedFetch;
});

it("can fetch our comments and display them appropriatelly", (done) => {
  // render the *entire* app
  let wrapper = mount(
    <Root>
      <App />
    </Root>
  );
  // find the fetchComments button and click it

  let fetchCommentsButton = wrapper.find('[data-test="fetch_comments_button"]');
  fetchCommentsButton.simulate("click");

  // Expect to find a list of comments
  // the code below will run before fetch return its value
  // that's mean that the will not be dispatched yet
  // so we need to put it inside a setTimeout to put the code below into the eventloop
  // but we need to put it in which it be after the fetch api in the eventQueue
  // but jest will result the test case after the thread is finished
  // so we need to tell jest that we won't need the result untill the code below ( that we will put in the event Queue is finished)
  // so jest provide an arguement to the call back of the it called done -by convension-
  // if it see you call it it will wait untill it is been called

  setTimeout(() => {
    wrapper.update();
    expect(wrapper.find("li").length).toEqual(2);
    done();
  }, 100);
});
