import api from "./axios";
import { API } from "../constants/api";

export const getAgents = () => {
  return api.get(API.AGENTS);
};

export const createAgent = (agentData) => {
  return api.post(API.AGENTS, agentData);
};