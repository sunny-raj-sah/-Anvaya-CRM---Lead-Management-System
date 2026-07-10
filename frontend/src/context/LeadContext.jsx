 import { createContext, useReducer } from "react";

import {
  leadReducer,
  initialLeadState,
} from "../reducers/leadReducer";

import { LEAD_ACTIONS } from "../constants/leadActions";

import {
  getLeads,
  createLead,
  updateLead,
  deleteLead,
  getLeadById,
} from "../services/leadService";


// agent Service


import {
  getAgents,
  createAgent,
} from "../services/agentService";

// eslint-disable-next-line react-refresh/only-export-components
export const LeadContext = createContext();

const LeadProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    leadReducer,
    initialLeadState
  );

  // ===========================
  // Get All Leads
  // ===========================

  const getAllLeads = async (params = {}) => {
    dispatch({
      type: LEAD_ACTIONS.SET_LOADING,
      payload: true,
    });

    dispatch({
      type: LEAD_ACTIONS.CLEAR_ERROR,
    });

    try {
      const response = await getLeads(params);

      dispatch({
        type: LEAD_ACTIONS.GET_LEADS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: LEAD_ACTIONS.SET_ERROR,
        payload:
          error.response?.data?.error ||
          "Failed to fetch leads.",
      });
    } finally {
      dispatch({
        type: LEAD_ACTIONS.SET_LOADING,
        payload: false,
      });
    }
  };


// Add fetchAgents()

  const fetchAgents = async () => {
  dispatch({
    type: LEAD_ACTIONS.SET_LOADING,
    payload: true,
  });

  try {
    const response = await getAgents();

    dispatch({
      type: LEAD_ACTIONS.SET_AGENTS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: LEAD_ACTIONS.SET_ERROR,
      payload:
        error.response?.data?.error ||
        "Failed to fetch sales agents.",
    });
  } finally {
    dispatch({
      type: LEAD_ACTIONS.SET_LOADING,
      payload: false,
    });
  }
};

// Add addAgent()

const addAgent = async (agentData) => {
  dispatch({
    type: LEAD_ACTIONS.SET_LOADING,
    payload: true,
  });

  try {
    const response = await createAgent(agentData);

    dispatch({
      type: LEAD_ACTIONS.ADD_AGENT,
      payload: response.data,
    });

    return response.data;
  } catch (error) {
    dispatch({
      type: LEAD_ACTIONS.SET_ERROR,
      payload:
        error.response?.data?.error ||
        "Unable to create sales agent.",
    });

    throw error;
  } finally {
    dispatch({
      type: LEAD_ACTIONS.SET_LOADING,
      payload: false,
    });
  }
};
  // ===========================
  // Create Lead
  // ===========================

  const addLead = async (leadData) => {
    dispatch({
      type: LEAD_ACTIONS.SET_LOADING,
      payload: true,
    });

    dispatch({
      type: LEAD_ACTIONS.CLEAR_ERROR,
    });

    try {
      const response = await createLead(leadData);

      dispatch({
        type: LEAD_ACTIONS.ADD_LEAD,
        payload: response.data,
      });

      return response.data;
    } catch (error) {
      dispatch({
        type: LEAD_ACTIONS.SET_ERROR,
        payload:
          error.response?.data?.error ||
          "Unable to create lead.",
      });

      throw error;
    } finally {
      dispatch({
        type: LEAD_ACTIONS.SET_LOADING,
        payload: false,
      });
    }
  };

  // ===========================
  // Get Lead By ID
  // ===========================

  const fetchLeadById = async (id) => {
    dispatch({
      type: LEAD_ACTIONS.SET_LOADING,
      payload: true,
    });

    try {
      const response = await getLeadById(id);

      dispatch({
        type: LEAD_ACTIONS.SET_SELECTED_LEAD,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: LEAD_ACTIONS.SET_ERROR,
        payload:
          error.response?.data?.error ||
          "Lead not found.",
      });
    } finally {
      dispatch({
        type: LEAD_ACTIONS.SET_LOADING,
        payload: false,
      });
    }
  };

  // ===========================
  // Update Lead
  // ===========================

  const editLead = async (id, leadData) => {
    dispatch({
      type: LEAD_ACTIONS.SET_LOADING,
      payload: true,
    });

    try {
      const response = await updateLead(
        id,
        leadData
      );

      dispatch({
        type: LEAD_ACTIONS.UPDATE_LEAD,
        payload: response.data,
      });

      return response.data;
    } catch (error) {
      dispatch({
        type: LEAD_ACTIONS.SET_ERROR,
        payload:
          error.response?.data?.error ||
          "Unable to update lead.",
      });

      throw error;
    } finally {
      dispatch({
        type: LEAD_ACTIONS.SET_LOADING,
        payload: false,
      });
    }
  };

  // ===========================
  // Delete Lead
  // ===========================

  const removeLead = async (id) => {
    dispatch({
      type: LEAD_ACTIONS.SET_LOADING,
      payload: true,
    });

    try {
      await deleteLead(id);

      dispatch({
        type: LEAD_ACTIONS.DELETE_LEAD,
        payload: id,
      });
    } catch (error) {
      dispatch({
        type: LEAD_ACTIONS.SET_ERROR,
        payload:
          error.response?.data?.error ||
          "Unable to delete lead.",
      });
    } finally {
      dispatch({
        type: LEAD_ACTIONS.SET_LOADING,
        payload: false,
      });
    }
  };

  // ===========================
  // Filters
  // ===========================

  const setFilters = (filters) => {
    dispatch({
      type: LEAD_ACTIONS.SET_FILTERS,
      payload: filters,
    });
  };

  const resetFilters = () => {
    dispatch({
      type: LEAD_ACTIONS.RESET_FILTERS,
    });
  };

  return (
    <LeadContext.Provider
      value={{
        state,

        getAllLeads,

        addLead,

        editLead,

        removeLead,

        fetchLeadById,

        setFilters,

        resetFilters,

        fetchAgents,

addAgent,
      }}
    >
      {children}
    </LeadContext.Provider>
  );
};

export default LeadProvider;