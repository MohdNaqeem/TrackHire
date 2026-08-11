import { useState } from "react";

import { applicationsData } from "../../data/applicationsData";

import KanbanColumn from "./KanbanColumn";
import ApplicationDetailsModal from "./ApplicationDetailsModal";

import AddApplicationModal from "../Applications/AddApplicationModal";

const KanbanBoard = () => {
  // Applications State
  const [applications, setApplications] = useState(applicationsData);

  // Selected Application
  const [selectedApplication, setSelectedApplication] =
    useState(null);

  // Edit State
  const [editingApplication, setEditingApplication] =
    useState(null);

  // Modal State
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

  // Handle Drag & Drop
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

  // Handle Card Click
  const handleApplicationClick = (application) => {
    setSelectedApplication(application);
  };

  // Handle Edit
  const handleEdit = (application) => {
    // Store application being edited
    setEditingApplication(application);

    // Fill form with existing application data
    setFormData({
      company: application.company,
      position: application.position,
      status: application.status,
      appliedDate: application.appliedDate,
      location: application.location,
    });

    // Clear previous validation errors
    setFormErrors({});

    // Close details modal
    setSelectedApplication(null);

    // Open edit modal
    setIsModalOpen(true);
  };

  // Handle Input Change
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  // Validate Form
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

  // Handle Submit
  const handleSubmit = () => {
    if (!validateForm()) {
      return;
    }

    // Update Existing Application
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

    // Clear Errors
    setFormErrors({});

    // Exit Edit Mode
    setEditingApplication(null);

    // Close Modal
    setIsModalOpen(false);
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

      {/* Application Details Modal */}
      {selectedApplication && (
        <ApplicationDetailsModal
          application={selectedApplication}
          onClose={() => setSelectedApplication(null)}
          onEdit={handleEdit}
        />
      )}

      {/* Edit Application Modal */}
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
    </>
  );
};

export default KanbanBoard;