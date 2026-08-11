import { useState } from "react";

import { applicationsData } from "../../data/applicationsData";

import KanbanColumn from "./KanbanColumn";
import ApplicationDetailsModal from "./ApplicationDetailsModal";

import AddApplicationModal from "../Applications/AddApplicationModal";
import DeleteApplicationModal from "../Applications/DeleteApplicationModal";

const KanbanBoard = () => {
  // Applications State
  const [applications, setApplications] = useState(applicationsData);

  // Selected Application
  const [selectedApplication, setSelectedApplication] =
    useState(null);

  // Edit State
  const [editingApplication, setEditingApplication] =
    useState(null);

  // Delete State
  const [deletingApplication, setDeletingApplication] =
    useState(null);

  // Edit Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    company: "",
    position: "",
    status: "Applied",
    appliedDate: "",
    location: "",
  });

  // Form Validation State
  const [formErrors, setFormErrors] = useState({});

  // Drag & Drop
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

  // Card Click
  const handleApplicationClick = (application) => {
    setSelectedApplication(application);
  };

  // Edit Application
  const handleEdit = (application) => {
    setEditingApplication(application);

    setFormData({
      company: application.company,
      position: application.position,
      status: application.status,
      appliedDate: application.appliedDate,
      location: application.location,
    });

    setFormErrors({});

    setSelectedApplication(null);

    setIsModalOpen(true);
  };

  // Input Change
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  // Form Validation
  const validateForm = () => {
    const errors = {};

    if (!formData.company.trim()) {
      errors.company = "Company name is required.";
    }

    if (!formData.position.trim()) {
      errors.position = "Position is required.";
    }

    if (!formData.appliedDate) {
      errors.appliedDate = "Applied date is required.";
    }

    if (!formData.location.trim()) {
      errors.location = "Location is required.";
    }

    setFormErrors(errors);

    return Object.keys(errors).length === 0;
  };

  // Submit Edit
  const handleSubmit = () => {
    if (!validateForm()) {
      return;
    }

    if (editingApplication) {
      setApplications((currentApplications) =>
        currentApplications.map((application) =>
          application.id === editingApplication.id
            ? {
                ...application,
                ...formData,
              }
            : application,
        ),
      );
    }

    // Reset Form
    setFormData({
      company: "",
      position: "",
      status: "Applied",
      appliedDate: "",
      location: "",
    });

    setFormErrors({});
    setEditingApplication(null);
    setIsModalOpen(false);
  };

  // Open Delete Confirmation
  const handleDelete = (application) => {
    setSelectedApplication(null);
    setDeletingApplication(application);
  };

  // Confirm Delete
  const confirmDelete = () => {
    if (!deletingApplication) {
      return;
    }

    setApplications((currentApplications) =>
      currentApplications.filter(
        (application) =>
          application.id !== deletingApplication.id,
      ),
    );

    setDeletingApplication(null);
  };

  // Applications by Status
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
      {/* Kanban Board */}
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

      {/* Application Details */}
      {selectedApplication && (
        <ApplicationDetailsModal
          application={selectedApplication}
          onClose={() => setSelectedApplication(null)}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      )}

      {/* Edit Application */}
      {isModalOpen && (
        <AddApplicationModal
          onClose={() => {
            setIsModalOpen(false);
            setEditingApplication(null);
          }}
          formData={formData}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          editingApplication={editingApplication}
          formErrors={formErrors}
        />
      )}

      {/* Delete Confirmation */}
      {deletingApplication && (
        <DeleteApplicationModal
          application={deletingApplication}
          onClose={() => setDeletingApplication(null)}
          onConfirm={confirmDelete}
        />
      )}
    </>
  );
};

export default KanbanBoard;