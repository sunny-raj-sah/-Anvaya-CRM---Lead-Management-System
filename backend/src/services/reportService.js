import Lead from "../models/Lead.js";

/*
----------------------------------------
Pipeline Report
----------------------------------------
*/

export const getPipelineReport =
  async () => {
    return await Lead.aggregate([
      {
        $group: {
          _id: "$status",

          count: {
            $sum: 1,
          },
        },
      },

      {
        $project: {
          _id: 0,

          status: "$_id",

          count: 1,
        },
      },
    ]);
  };

/*
----------------------------------------
Closed By Agent
----------------------------------------
*/

export const getClosedByAgentReport =
  async () => {
    return await Lead.aggregate([
      {
        $match: {
          status: "Closed",
        },
      },

      {
        $group: {
          _id: "$salesAgent",

          totalClosed: {
            $sum: 1,
          },
        },
      },

      {
        $lookup: {
          from: "agents",

          localField: "_id",

          foreignField: "_id",

          as: "agent",
        },
      },

      {
        $unwind: "$agent",
      },

      {
        $project: {
          _id: 0,

          name: "$agent.name",

          totalClosed: 1,
        },
      },
    ]);
  };

/*
----------------------------------------
Closed Last Week
----------------------------------------
*/

export const getLastWeekReport =
  async () => {
    const lastWeek = new Date();

    lastWeek.setDate(
      lastWeek.getDate() - 7
    );

    return await Lead.find({
      status: "Closed",

      updatedAt: {
        $gte: lastWeek,
      },
    }).populate("salesAgent");
  };