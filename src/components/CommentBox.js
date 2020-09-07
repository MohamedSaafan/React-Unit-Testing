import React from "react";

class CommentBox extends React.Component {
  state = {
    comment: "",
  };

  handleChange = (e) => {
    this.setState({
      comment: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      comment: "",
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h4>Add Comment</h4>
        <textarea value={this.state.comment} onChange={this.handleChange} />
        <button type="submit">Submit Comment</button>
      </form>
    );
  }
}
export default CommentBox;
