import LeadProvider from "./LeadContext";
import CommentProvider from "./CommentContext";
import AgentProvider from "./AgentContext";
import ReportProvider from "./ReportContext";

const AppProvider = ({ children }) => {
  return <LeadProvider>
    
     <CommentProvider>
     <AgentProvider>
       <ReportProvider>
        {children}
      </ReportProvider>
        </AgentProvider>

     </CommentProvider>
     </LeadProvider>;
};

export default AppProvider;