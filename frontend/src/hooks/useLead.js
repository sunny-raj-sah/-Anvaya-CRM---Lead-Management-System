import { useContext } from "react";
import { LeadContext } from "../context/LeadContext";

const useLead = () => {
  const context = useContext(LeadContext);

  if (!context) {
    throw new Error(
      "useLead must be used inside LeadProvider."
    );
  }

  return context;
};

export default useLead;