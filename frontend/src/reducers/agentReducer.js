export const initialAgentState = {
  agents: [],
  loading: false,
  error: null,
};

const agentReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      };

    case "SET_AGENTS":
      return {
        ...state,
        loading: false,
        agents: action.payload,
      };

    case "ADD_AGENT":
      return {
        ...state,
        loading: false,
        agents: [...state.agents, action.payload],
      };

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

export default agentReducer;