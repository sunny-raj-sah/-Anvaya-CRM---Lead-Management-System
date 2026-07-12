import Lead from "../models/Lead.js";
import SalesAgent from "../models/Agent.js";

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


  // for searching on the lead page use it in the leadfilter.js on frontend
//  if (filters.search) {
//   query.$or = [
//     {
//       name: {
//         $regex: filters.search,
//         $options: "i",
//       },
//     },
//     {
//       source: {
//         $regex: filters.search,
//         $options: "i",
//       },
//     },
//     // {
//     //   status: {
//     //     $regex: filters.search,
//     //     $options: "i",
//     //   },
//     // },
//     // {
//     //   priority: {
//     //     $regex: filters.search,
//     //     $options: "i",
//     //   },
//     // },
//   ];
// }


if (filters.search) {
  const matchingAgents = await SalesAgent.find({
    name: {
      $regex: filters.search,
      $options: "i",
    },
  }).select("_id");

  const agentIds = matchingAgents.map(
    (agent) => agent._id
  );

  query.$or = [
    {
      name: {
        $regex: filters.search,
        $options: "i",
      },
    },
    {
      source: {
        $regex: filters.search,
        $options: "i",
      },
    },
    {
      status: {
        $regex: filters.search,
        $options: "i",
      },
    },
    {
      priority: {
        $regex: filters.search,
        $options: "i",
      },
    },
    {
      salesAgent: {
        $in: agentIds,
      },
    },
  ];
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