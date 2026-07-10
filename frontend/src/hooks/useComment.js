import {
  useContext,
} from "react";

import {
  CommentContext,
} from "../context/CommentContext";

const useComment = () => {
  return useContext(CommentContext);
};

export default useComment;