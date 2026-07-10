export const initialReportState = {
  pipeline: [],
  lastWeek: [],
  closedByAgent: [],
//   statusDistribution: [],

  loading: false,
  error: null,
};

const reportReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      };

    case "SET_PIPELINE":
      return {
        ...state,
        loading: false,
        pipeline: action.payload,
      };

    case "SET_LAST_WEEK":
      return {
        ...state,
        loading: false,
        lastWeek: action.payload,
      };

    case "SET_CLOSED_BY_AGENT":
      return {
        ...state,
        loading: false,
        closedByAgent: action.payload,
      };

    // case "SET_STATUS_DISTRIBUTION":
    //   return {
    //     ...state,
    //     loading: false,
    //     statusDistribution: action.payload,
    //   };

    case "SET_ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default reportReducer;