import { ADD_COMMENT, FETCH_COMMENTS } from "./actionTypes";

export const addComment = (comment) => {
  return {
    type: ADD_COMMENT,
    payload: comment,
  };
};

export const fetchComments = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/comments");
  const data = await response.json();
  return {
    type: FETCH_COMMENTS,
    payload: data,
  };
};
