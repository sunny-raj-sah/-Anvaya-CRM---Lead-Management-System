 import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import useLead from "../../hooks/useLead";
import useComment from "../../hooks/useComment";

import PageHeader from "../../components/common/PageHeader";

import LeadInfoCard from "../../components/lead/details/LeadInfoCard";
import LeadComments from "../../components/lead/details/LeadComments";
import CommentForm from "../../components/lead/details/CommentForm";

const LeadDetails = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const {
    state: leadState,
    fetchLeadById,
  } = useLead();

  const {
    state: commentState,
    fetchComments,
    createComment,
     removeComment
  } = useComment();

  useEffect(() => {
    fetchLeadById(id);
    fetchComments(id);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const handleAddComment = async (commentText) => {
    await createComment(id, commentText );
     fetchComments(id);
  };

  if (leadState.loading) {
    return (
      <div className="container py-5 text-center">
        <div className="spinner-border text-primary"></div>
      </div>
    );
  }

  if (!leadState.selectedLead) {
    return (
      <div className="container py-5">
        <div className="alert alert-warning">
          Lead not found.
        </div>
      </div>
    );
  }

  return (
    <div className="container py-4">

      <PageHeader
        title={leadState.selectedLead.name}
        subtitle="Lead Details"
        buttonText="Edit Lead"
        onClick={() =>
          navigate(`/leads/edit/${leadState.selectedLead._id}`)
        }
      />

      <LeadInfoCard
        lead={leadState.selectedLead}
      />

      <LeadComments
       comments={commentState.comments}
 loading={commentState.loading}
 error={commentState.error}
 onDelete={removeComment}
      />

      <CommentForm
        onSubmit={handleAddComment}
      />

    </div>
  );
};

export default LeadDetails;