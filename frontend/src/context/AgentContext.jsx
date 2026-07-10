import { createContext, useReducer } from "react";

import agentReducer, {
  initialAgentState,
} from "../reducers/agentReducer";

import {
  getAgents,
  createAgent,
} from "../services/agentService";

// eslint-disable-next-line react-refresh/only-export-components
export const AgentContext = createContext();

const AgentProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    agentReducer,
    initialAgentState
  );

  const getAllAgents = async () => {
    try {
      dispatch({
        type: "SET_LOADING",
      });

      const { data } = await getAgents();

      dispatch({
        type: "SET_AGENTS",
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "SET_ERROR",
        payload:
          error.response?.data?.error ||
          "Failed to fetch agents.",
      });
    }
  };

  const addAgent = async (agentData) => {
    try {
      const { data } =
        await createAgent(agentData);

      dispatch({
        type: "ADD_AGENT",
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "SET_ERROR",
        payload:
          error.response?.data?.error ||
          "Failed to create agent.",
      });
    }
  };

  return (
    <AgentContext.Provider
      value={{
        state,
        getAllAgents,
        addAgent,
      }}
    >
      {children}
    </AgentContext.Provider>
  );
};

export default AgentProvider;