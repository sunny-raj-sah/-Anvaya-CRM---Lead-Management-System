import api from "./axios";

export const getComments = (leadId) => {
  return api.get(`/leads/${leadId}/comments`);
};

export const addComment = (leadId, commentData) => {
  return api.post(
    `/leads/${leadId}/comments`,
    commentData
  );
};

export const deleteComment = (id) => {
  return api.delete(
    `/leads/comments/${id}`
  );
};