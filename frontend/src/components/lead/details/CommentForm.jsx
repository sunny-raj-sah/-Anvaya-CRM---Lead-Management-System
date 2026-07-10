import { useState } from "react";

const CommentForm = ({
  onSubmit,
}) => {
  const [commentText, setCommentText] =
    useState("");

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!commentText.trim()) return;

  await onSubmit(commentText);

  setCommentText("");
};

  return (
    <div className="card">

      <div className="card-header">
        <h5 className="mb-0">
          Add Comment
        </h5>
      </div>

      <div className="card-body">

        <form onSubmit={handleSubmit}>

          <textarea
            className="form-control mb-3"
            rows="4"
            placeholder="Write your comment..."
            value={commentText}
            onChange={(e) =>
              setCommentText(e.target.value)
            }
          />

          <button
            className="btn btn-primary"
            type="submit"
          >
            Add Comment
          </button>

        </form>

      </div>

    </div>
  );
};

export default CommentForm;