// import mongoose from "mongoose";

// const commentSchema = new mongoose.Schema(
//   {
//     lead: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "Lead",
//       required: true,
//     },

//     author: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "Agent",
//       required: true,
//     },

//     commentText: {
//       type: String,
//       required: [true, "Comment is required"],
//       trim: true,
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// const Comment = mongoose.model(
//   "Comment",
//   commentSchema
// );

// export default Comment;


// -----------------------------------------------------------------------
 import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    lead: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Lead",
      required: true,
    },

    // Fixed CRM sales agent
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Agent",
    },

    // Authenticated application user
    authorUser: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    commentText: {
      type: String,
      required: [true, "Comment is required"],
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Comment = mongoose.model(
  "Comment",
  commentSchema
);

export default Comment;