import {
  getPipelineReport,
  getLastWeekReport,
  getClosedByAgentReport,
} from "../services/reportService.js";

/*
----------------------------------------
GET Pipeline Report
----------------------------------------
*/

export const pipelineReport = async (
  req,
  res
) => {
  try {
    const report =
      await getPipelineReport();

    res.status(200).json(report);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

/*
----------------------------------------
GET Closed Last Week
----------------------------------------
*/

export const lastWeekReport = async (
  req,
  res
) => {
  try {
    const report =
      await getLastWeekReport();

    res.status(200).json(report);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

/*
----------------------------------------
GET Closed By Agent
----------------------------------------
*/

export const closedByAgentReport =
  async (req, res) => {
    try {
      const report =
        await getClosedByAgentReport();

      res.status(200).json(report);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };