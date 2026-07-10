export const initialCommentState = {
  comments: [],
  loading: false,
  error: null,
};

const commentReducer = (state, action) => {
  switch (action.type) {

    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      };

    case "SET_ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case "SET_COMMENTS":
      return {
        ...state,
        loading: false,
        comments: action.payload,
      };

    case "ADD_COMMENT":
      return {
        ...state,
        loading: false,
        comments: [
          ...state.comments,
          action.payload,
        ],
      };

      case "DELETE_COMMENT":

return{
 ...state,
 comments:
 state.comments.filter(
 comment=>comment._id !== action.payload
 )
};

    default:
      return state;
  }
};

export default commentReducer;