// import Comment from "../models/Comment.js";

// /*
// ----------------------------------------
// Get Comments By Lead
// ----------------------------------------
// */

// export const getCommentsByLead = async (
//   leadId
// ) => {
//   return await Comment.find({
//     lead: leadId,
//   })
//     .populate("author")
//     .sort({
//       createdAt: -1,
//     });
// };

// /*
// ----------------------------------------
// Create Comment
// ----------------------------------------
// */

// export const createNewComment = async (
//   commentData
// ) => {
//   return await Comment.create(commentData);
// };

// /*
// ----------------------------------------
// Delete Comment
// ----------------------------------------
// */

// export const deleteComment = async (
//   id
// ) => {
//   return await Comment.findByIdAndDelete(
//     id
//   );
// };
//  -----------------------------------------------------------------

import Comment from "../models/Comment.js";

export const getCommentsByLead = async (
  leadId
) => {
  return await Comment.find({
    lead: leadId,
  })
    .populate(
      "author",
      "name email phone"
    )
    .populate(
      "authorUser",
      "name email role"
    )
    .sort({
      createdAt: -1,
    });
};

export const createNewComment = async (
  commentData
) => {
  return await Comment.create(
    commentData
  );
};

export const deleteComment = async (
  id
) => {
  return await Comment.findByIdAndDelete(
    id
  );
};