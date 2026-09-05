 const LeadComments = ({
  comments = [],
  loading = false,
  error = null,
   onDelete
}) => {
  if (loading) {
    return (
      <div className="card mb-4">
        <div className="card-header">
          <h5 className="mb-0">Comments</h5>
        </div>

        <div className="card-body text-center py-4">
          <div
            className="spinner-border text-primary"
            role="status"
          >
            <span className="visually-hidden">
              Loading...
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="card mb-4">

      <div className="card-header">
        <h5 className="mb-0">
          Comments
        </h5>
      </div>

      <div className="card-body">

        {error && (
          <div className="alert alert-danger">
            {error}
          </div>
        )}

        {!error && comments.length === 0 && (
          <div className="alert alert-light border text-center">
            No comments available.
          </div>
        )}

        {!error &&
          comments.map((comment) => (
            <div
              key={comment._id}
              className="border rounded p-3 mb-3"
            >
              <div className="d-flex justify-content-between align-items-center mb-2">

                <h6 className="mb-0">
                  {comment.author?.name || comment.authorUser?.name ||"Unknown"}
                </h6>

                <small className="text-muted">
                  {new Date(
                    comment.createdAt
                  ).toLocaleString()}
                </small>
                            <button
 className="btn btn-sm btn-danger"
 onClick={()=>onDelete(comment._id)}
>
 Delete
</button>
              </div>

              <p className="mb-0">
                {comment.commentText}
              </p>

            </div>
          ))}

      </div>

    </div>
  );
};

export default LeadComments;