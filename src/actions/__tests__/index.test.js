import { addComment } from "../";
import { ADD_COMMENT } from "../actionTypes";

describe("addComment", () => {
  it("should return an action with the appropriate type", () => {
    const action = addComment();
    expect(action.type).toEqual(ADD_COMMENT);
  });
  it("should return an action the the appropriate payload", () => {
    const action = addComment("new comment");
    expect(action.payload).toEqual("new comment");
  });
});
