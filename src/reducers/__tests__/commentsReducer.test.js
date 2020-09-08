import commentsReducer from "../commentsReducer";
import { ADD_COMMENT } from "../../actions/actionTypes";

it(" handle action of type ADD_COMMENT ", () => {
  const action = {
    type: ADD_COMMENT,
    payload: "new comment",
  };
  const newState = commentsReducer([], action);
  expect(newState).toEqual(["new comment"]);
});

it("should'nt throw and error if the action type is unkown", () => {
  const newState = commentsReducer([], { type: ";lakdjf;ljdllf" });
  expect(newState).toEqual([]);
});
