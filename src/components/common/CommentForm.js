import { useState } from "react";
import { auth } from "../../firebase";

function CommentForm() {
  const [commentData, setCommentData] = useState({
    commentor: "",
    comment: "",
  });

  let name, value;

  const postCommentData = (e) => {
    name = e.target.name;
    value = e.target.value;
    setCommentData({ ...commentData, [name]: value });
  };

  const submitData = (e) => {
    e.preventDefault();
  };
  return (
    <div className="commentForm">
      <div className="details__commentForm mt-5 p-4 bg-light border rounded shadow-sm">
        <h4 className="mb-5">Your feedback is important for us!</h4>

        <form className="addProject__form" onSubmit={submitData}>
          <div className="mb-4">
            <label for="exampleFormControlInput1" className="form-label">
              Your name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Abdullah"
              value={commentData.commentor}
            />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">
              Place your comment here...
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              onChange={postCommentData}
              value={commentData.comment}
            />
          </div>

          <button
            type="submit"
            className="btn btn-success"
            //  onSubmit={submitData}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default CommentForm;
