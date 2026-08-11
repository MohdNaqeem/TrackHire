import { useState } from "react";
import { applicationsData } from "../../data/applicationsData";
import KanbanColumn from "./KanbanColumn";
import ApplicationDetailsModal from "./ApplicationDetailsModal";

const KanbanBoard = () => {
  const [applications, setApplications] = useState(applicationsData);

  const [selectedApplication, setSelectedApplication] =
    useState(null);

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

  const handleApplicationClick = (application) => {
    setSelectedApplication(application);
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
    <>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
        <KanbanColumn
          title="Applied"
          applications={appliedApplications}
          onDrop={handleDrop}
          onApplicationClick={handleApplicationClick}
        />

        <KanbanColumn
          title="Interview"
          applications={interviewApplications}
          onDrop={handleDrop}
          onApplicationClick={handleApplicationClick}
        />

        <KanbanColumn
          title="Offer"
          applications={offerApplications}
          onDrop={handleDrop}
          onApplicationClick={handleApplicationClick}
        />

        <KanbanColumn
          title="Rejected"
          applications={rejectedApplications}
          onDrop={handleDrop}
          onApplicationClick={handleApplicationClick}
        />
      </div>

      {selectedApplication && (
        <ApplicationDetailsModal
          application={selectedApplication}
          onClose={() => setSelectedApplication(null)}
        />
      )}
    </>
  );
};

export default KanbanBoard;