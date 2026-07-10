import Lead from "../models/Lead.js";

/*
----------------------------------------
Get All Leads
----------------------------------------
*/
export const getAllLeads = async (
  filters = {}
) => {
  const query = {};

  if (filters.status) {
    query.status = filters.status;
  }

  if (filters.priority) {
    query.priority = filters.priority;
  }

  if (filters.source) {
    query.source = filters.source;
  }

  if (filters.salesAgent) {
    query.salesAgent =
      filters.salesAgent;
  }

  const leads = await Lead.find(query)
    .populate("salesAgent")
    .sort({
      createdAt: -1,
    });

  return leads;
};

/*
----------------------------------------
Get Lead By Id
----------------------------------------
*/
export const getLeadById = async (
  id
) => {
  return await Lead.findById(id)
    .populate("salesAgent");
};

/*
----------------------------------------
Create Lead
----------------------------------------
*/
export const createLead = async (
  leadData
) => {
  return await Lead.create(leadData);
};

/*
----------------------------------------
Update Lead
----------------------------------------
*/
export const updateLead = async (
  id,
  leadData
) => {
  return await Lead.findByIdAndUpdate(
    id,
    leadData,
    {
      new: true,
      runValidators: true,
    }
  ).populate("salesAgent");
};

/*
----------------------------------------
Delete Lead
----------------------------------------
*/
export const deleteLead = async (
  id
) => {
  return await Lead.findByIdAndDelete(id);
};