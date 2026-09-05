import { createContext, useReducer } from "react";

import commentReducer, {
  initialCommentState,
} from "../reducers/commentReducer";

import {
  getComments,
  addComment,
  deleteComment,
} from "../services/commentService";
// import { CURRENT_USER } from "../constants/currentUser";


// eslint-disable-next-line react-refresh/only-export-components
export const CommentContext = createContext();

const CommentProvider = ({ children }) => {
  const [state, dispatch] = useReducer(commentReducer, initialCommentState);

  const fetchComments = async (leadId) => {
    try {
      dispatch({
        type: "SET_LOADING",
      });

      const { data } = await getComments(leadId);

      dispatch({
        type: "SET_COMMENTS",
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "SET_ERROR",
        payload: error.response?.data?.error || "Failed to load comments.",
      });
    }
  };

  const createComment = async (leadId, commentText ) => {
    try {
      const { data } = await addComment(leadId, {
        commentText,
        // author: CURRENT_USER.id ,
      });

      dispatch({
        type: "ADD_COMMENT",
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "SET_ERROR",
        payload: error.response?.data?.error || "Failed to add comment.",
      });
    }
  };

  const removeComment = async (id) => {
    try {
      await deleteComment(id);

      dispatch({
        type: "DELETE_COMMENT",
        payload: id,
      });
    } catch (error) {
      dispatch({
        type: "SET_ERROR",
        payload: `${error}:"Failed to delete comment`,
      });
    }
  };
  return (
    <CommentContext.Provider
      value={{
        state,
        fetchComments,
        createComment,
        removeComment,
      }}
    >
      {children}
    </CommentContext.Provider>
  );
};

export default CommentProvider;
