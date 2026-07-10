import { useEffect } from "react";

import useLead from "../../hooks/useLead";

import PageHeader from "../../components/common/PageHeader";


const LeadStatusView = () => {

  const {
    state,
    getAllLeads,
  } = useLead();


  useEffect(() => {

    getAllLeads();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const groupedLeads =
    state.leads.reduce((acc, lead) => {

      if (!acc[lead.status]) {
        acc[lead.status] = [];
      }

      acc[lead.status].push(lead);

      return acc;

    }, {});


  return (

    <div className="container py-4">


      <PageHeader
        title="Leads By Status"
        subtitle="Track leads according to pipeline stages"
      />


      {
        state.loading ?

        (
          <div className="text-center">

            <div className="spinner-border text-primary">
            </div>

          </div>

        )

        :

        (

        <div className="row">


        {
          Object.keys(groupedLeads)
          .map((status)=>(


          <div
            className="col-md-6 mb-4"
            key={status}
          >

            <div className="card shadow-sm">


              <div className="card-header bg-dark text-white">

                <h5 className="mb-0">
                  {status}
                </h5>

              </div>



              <div className="card-body">


              {
                groupedLeads[status]
                .map((lead)=>(


                <div
                  key={lead._id}
                  className="border rounded p-3 mb-3"
                >


                  <h6>
                    {lead.name}
                  </h6>


                  <p className="mb-1">

                    Agent:
                    {" "}
                    {lead.salesAgent?.name || "Not Assigned"}

                  </p>


                  <p className="mb-1">

                    Priority:
                    {" "}
                    {lead.priority}

                  </p>


                  <p className="mb-0">

                    Closing Time:
                    {" "}
                    {lead.timeToClose}
                    {" "}
                    Days

                  </p>


                </div>


                ))

              }


              </div>


            </div>


          </div>


          ))

        }


        </div>

        )

      }


    </div>

  );

};


export default LeadStatusView;