// import {
//   getCommentsByLead,
//   createNewComment,
//   deleteComment,
   
// } from "../services/commentService.js";

// /*
// ----------------------------------------
// GET Comments By Lead
// ----------------------------------------
// */

// export const getComments = async (
//   req,
//   res
// ) => {
//   try {
//     const comments =
//       await getCommentsByLead(
//         req.params.leadId
//       ) ;

//     res.status(200).json(comments);
//   } catch (error) {
//     res.status(500).json({
//       message: error.message,
//     });
//   }
// };

// /*
// ----------------------------------------
// POST Comment
// ----------------------------------------
// */

// export const addComment = async (
//   req,
//   res
// ) => {
//   try {
//     const comment =
//       await createNewComment({
//         lead: req.params.leadId,
//         ...req.body,
            
  
      
//       });


   
//     res.status(201).json(comment);
//   } catch (error) {
//     res.status(500).json({
//       message: error.message,
//     });
//   }
// };

// /*
// ----------------------------------------
// DELETE Comment
// ----------------------------------------
// */

// export const removeComment = async (
//   req,
//   res
// ) => {
//   try {
//     const comment =
//       await deleteComment(
//         req.params.id
//       );

//     if (!comment) {
//       return res.status(404).json({
//         message: "Comment not found",
//       });
//     }

//     res.status(200).json({
//       message:
//         "Comment deleted successfully",
//     });
//   } catch (error) {
//     res.status(500).json({
//       message: error.message,
//     });
//   }
// };

//  -------------------------------------------------------------------------------------
 import {
  getCommentsByLead,
  createNewComment,
  deleteComment,
} from "../services/commentService.js";

export const getComments = async (
  req,
  res
) => {
  try {
    const comments =
      await getCommentsByLead(
        req.params.leadId
      );

    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const addComment = async (
  req,
  res
) => {
  try {
    const comment =
      await createNewComment({
        lead: req.params.leadId,

        authorUser:
          req.user.userId,

        commentText:
          req.body.commentText,
      });

    const populatedComment =
      await comment.populate([
        {
          path: "author",
          select: "name email phone",
        },
        {
          path: "authorUser",
          select: "name email role",
        },
      ]);

    res.status(201).json(
      populatedComment
    );
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const removeComment = async (
  req,
  res
) => {
  try {
    const comment =
      await deleteComment(
        req.params.id
      );

    if (!comment) {
      return res.status(404).json({
        message: "Comment not found",
      });
    }

    res.status(200).json({
      message:
        "Comment deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};