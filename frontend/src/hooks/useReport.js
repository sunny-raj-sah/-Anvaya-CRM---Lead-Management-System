import { useContext } from "react";

import { ReportContext } from "../context/ReportContext";

const useReport = () => {
  return useContext(ReportContext);
};

export default useReport;