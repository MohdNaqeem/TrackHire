import { useState } from "react";
import { applicationsData } from "../../data/applicationsData";
import KanbanColumn from "./KanbanColumn";

const KanbanBoard = () => {
  const [applications, setApplications] = useState(applicationsData);

  const handleDrop = (applicationId, newStatus) => {
    setApplications((currentApplications) =>
      currentApplications.map((application) =>
        application.id === applicationId
          ? {
              ...application,
              status: newStatus,
            }
          : application,
      ),
    );
  };

  const appliedApplications = applications.filter(
    (application) => application.status === "Applied",
  );

  const interviewApplications = applications.filter(
    (application) => application.status === "Interview",
  );

  const offerApplications = applications.filter(
    (application) => application.status === "Offer",
  );

  const rejectedApplications = applications.filter(
    (application) => application.status === "Rejected",
  );

  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      <KanbanColumn
        title="Applied"
        applications={appliedApplications}
        onDrop={handleDrop}
      />

      <KanbanColumn
        title="Interview"
        applications={interviewApplications}
        onDrop={handleDrop}
      />

      <KanbanColumn
        title="Offer"
        applications={offerApplications}
        onDrop={handleDrop}
      />

      <KanbanColumn
        title="Rejected"
        applications={rejectedApplications}
        onDrop={handleDrop}
      />
    </div>
  );
};

export default KanbanBoard;
