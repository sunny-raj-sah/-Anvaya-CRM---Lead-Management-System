import { createContext, useReducer } from "react";

import reportReducer, {
  initialReportState,
} from "../reducers/reportReducer";

import {
  getPipelineReport,
  getLastWeekReport,
  getClosedByAgentReport,
//   getStatusDistributionReport,
} from "../services/reportService";

// eslint-disable-next-line react-refresh/only-export-components
export const ReportContext = createContext();

const ReportProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    reportReducer,
    initialReportState
  );

  const fetchPipeline = async () => {
    try {
      dispatch({ type: "SET_LOADING" });

      const { data } = await getPipelineReport();

      dispatch({
        type: "SET_PIPELINE",
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "SET_ERROR",
        payload: error.message,
      });
    }
  };

  const fetchLastWeek = async () => {
    try {
      dispatch({ type: "SET_LOADING" });

      const { data } = await getLastWeekReport();

      dispatch({
        type: "SET_LAST_WEEK",
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "SET_ERROR",
        payload: error.message,
      });
    }
  };

  const fetchClosedByAgent = async () => {
    try {
      dispatch({ type: "SET_LOADING" });

      const { data } =
        await getClosedByAgentReport();

      dispatch({
        type: "SET_CLOSED_BY_AGENT",
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "SET_ERROR",
        payload: error.message,
      });
    }
  };

//   const fetchStatusDistribution = async () => {
//     try {
//       dispatch({ type: "SET_LOADING" });

//       const { data } =
//         await getStatusDistributionReport();

//       dispatch({
//         type: "SET_STATUS_DISTRIBUTION",
//         payload: data,
//       });
//     } catch (error) {
//       dispatch({
//         type: "SET_ERROR",
//         payload: error.message,
//       });
//     }
//   };

  return (
    <ReportContext.Provider
      value={{
        state,
        fetchPipeline,
        fetchLastWeek,
        fetchClosedByAgent,
        // fetchStatusDistribution,
      }}
    >
      {children}
    </ReportContext.Provider>
  );
};

export default ReportProvider;