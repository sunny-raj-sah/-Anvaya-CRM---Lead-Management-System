// eslint-disable-next-line no-unused-vars
import React from "react";

const StatusCards = ({ leads = [] }) => {

  const statusList = [
    {
      title: "New",
      color: "primary",
    },
    {
      title: "Contacted",
      color: "info",
    },
    {
      title: "Qualified",
      color: "warning",
    },
    {
      title: "Proposal Sent",
      color: "secondary",
    },
    {
      title: "Closed",
      color: "success",
    },
  ];


  const getStatusCount = (status) => {
    return leads.filter(
      (lead) => lead.status === status
    ).length;
  };


  return (
    <div>

      <h5 className="mb-3">
        Lead Status Overview
      </h5>


      <div className="row g-3">

        {
          statusList.map((item) => (

            <div
              className="col-md-4 col-lg-3"
              key={item.title}
            >

              <div
                className={`card border-${item.color} shadow-sm`}
              >

                <div className="card-body text-center">

                  <h6 className="text-muted">
                    {item.title}
                  </h6>


                  <h2
                    className={`text-${item.color}`}
                  >
                    {getStatusCount(item.title)}
                  </h2>


                  <p className="mb-0">
                    Leads
                  </p>

                </div>

              </div>

            </div>

          ))
        }

      </div>

    </div>
  );
};


export default StatusCards;