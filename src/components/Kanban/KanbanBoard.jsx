import { applicationsData } from "../../data/applicationsData";
import KanbanColumn from "./KanbanColumn";

const KanbanBoard = () => {
  const appliedApplications = applicationsData.filter(
    (application) => application.status === "Applied",
  );

  const interviewApplications = applicationsData.filter(
    (application) => application.status === "Interview",
  );

  const offerApplications = applicationsData.filter(
    (application) => application.status === "Offer",
  );

  const rejectedApplications = applicationsData.filter(
    (application) => application.status === "Rejected",
  );

  return (
    <div className="flex gap-5 overflow-x-auto pb-4">
      <KanbanColumn
        title="Applied"
        applications={appliedApplications}
      />

      <KanbanColumn
        title="Interview"
        applications={interviewApplications}
      />

      <KanbanColumn
        title="Offer"
        applications={offerApplications}
      />

      <KanbanColumn
        title="Rejected"
        applications={rejectedApplications}
      />
    </div>
  );
};

export default KanbanBoard;