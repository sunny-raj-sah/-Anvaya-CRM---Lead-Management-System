import api from "./axios";
import { API } from "../constants/api";

export const getPipelineReport = () => {
  return api.get(API.REPORTS.PIPELINE);
};

export const getLastWeekReport = () => {
  return api.get(API.REPORTS.LAST_WEEK);
};

export const getClosedByAgentReport = () => {
  return api.get(API.REPORTS.CLOSED_BY_AGENT);
  
};