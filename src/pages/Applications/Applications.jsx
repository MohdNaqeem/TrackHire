import { useMemo, useState } from "react";

import ApplicationsHeader from "../../components/Applications/ApplicationsHeader";
import ApplicationsToolbar from "../../components/Applications/ApplicationsToolbar";
import ApplicationsTable from "../../components/Applications/ApplicationsTable";

import { applicationsData } from "../../data/applicationsData";
import Pagination from "../../components/Applications/Pagination";
import AddApplicationModal from "../../components/Applications/AddApplicationModal";
import DeleteApplicationModal from "../../components/Applications/DeleteApplicationModal";

const Applications = () => {
  // Search State
  const [searchTerm, setSearchTerm] = useState("");

  // Filter State
  const [selectedStatus, setSelectedStatus] = useState("All Status");

  // Sort State
  const [sortBy, setSortBy] = useState("Newest");

  // Pagination page
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Applications State
  const [applications, setApplications] = useState(applicationsData);

  // Form State
  const [formData, setFormData] = useState({
    company: "",
    position: "",
    status: "Applied",
    appliedDate: "",
    location: "",
  });

  // Edit State
  const [editingApplication, setEditingApplication] = useState(null);

  // Delete state
  const [deletingApplication, setDeletingApplication] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    // Basic Validation
    if (
      !formData.company.trim() ||
      !formData.position.trim() ||
      !formData.appliedDate ||
      !formData.location.trim()
    ) {
      alert("Please fill all fields.");
      return;
    }

    if (editingApplication) {
      // Update Existing Application
      setApplications((prevApplications) =>
        prevApplications.map((application) =>
          application.id === editingApplication.id
            ? {
                ...application,
                ...formData,
              }
            : application,
        ),
      );
    } else {
      // Add New Application
      const newApplication = {
        id: crypto.randomUUID(),
        ...formData,
      };

      setApplications((prevApplications) => [
        newApplication,
        ...prevApplications,
      ]);
    }

    // Reset Form
    setFormData({
      company: "",
      position: "",
      status: "Applied",
      appliedDate: "",
      location: "",
    });

    // Exit Edit Mode
    setEditingApplication(null);

    // Go to First Page
    setCurrentPage(1);

    // Close Modal
    setIsModalOpen(false);
  };

  const handleEdit = (application) => {
    // Store the application being edited
    setEditingApplication(application);

    // Fill the form with existing values
    setFormData({
      company: application.company,
      position: application.position,
      status: application.status,
      appliedDate: application.appliedDate,
      location: application.location,
    });

    // Open the modal
    setIsModalOpen(true);
  };

  // delete function
  const handleDelete = (application) => {
    setDeletingApplication(application);
  };

  const confirmDelete = () => {
  if (!deletingApplication) {
    return;
  }

  const updatedApplications = applications.filter(
    (application) =>
      application.id !== deletingApplication.id
  );

  setApplications(updatedApplications);

  const newTotalPages = Math.ceil(
    updatedApplications.length / itemsPerPage
  );

  setCurrentPage((prevPage) =>
    Math.min(prevPage, Math.max(newTotalPages, 1))
  );

  setDeletingApplication(null);
};

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Search + Filter + Sort
  const filteredApplications = useMemo(() => {
    let filtered = [...applications];

    // Search
    if (searchTerm.trim() !== "") {
      filtered = filtered.filter(
        (application) =>
          application.company
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          application.position.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    }

    // Status Filter
    if (selectedStatus !== "All Status") {
      filtered = filtered.filter(
        (application) => application.status === selectedStatus,
      );
    }

    // Sorting
    switch (sortBy) {
      case "Oldest":
        filtered.reverse();
        break;

      case "Company (A-Z)":
        filtered.sort((a, b) => a.company.localeCompare(b.company));
        break;

      case "Company (Z-A)":
        filtered.sort((a, b) => b.company.localeCompare(a.company));
        break;

      default:
        break;
    }

    return filtered;
  }, [applications, searchTerm, selectedStatus, sortBy]);

  // Pagination
  const totalPages = Math.ceil(filteredApplications.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentApplications = filteredApplications.slice(startIndex, endIndex);

  return (
    <section className="p-6">
      <ApplicationsHeader onAddApplication={() => setIsModalOpen(true)} />

      <ApplicationsToolbar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedStatus={selectedStatus}
        setSelectedStatus={setSelectedStatus}
        sortBy={sortBy}
        setSortBy={setSortBy}
        setCurrentPage={setCurrentPage}
      />

      <ApplicationsTable
        applications={currentApplications}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
        totalItems={filteredApplications.length}
        itemsPerPage={itemsPerPage}
      />
      {isModalOpen && (
        <AddApplicationModal
          onClose={() => setIsModalOpen(false)}
          formData={formData}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          editingApplication={editingApplication}
        />
      )}

      {deletingApplication && (
        <DeleteApplicationModal
          application={deletingApplication}
          onClose={() => setDeletingApplication(null)}
          onConfirm={confirmDelete}
        />
      )}
    </section>
  );
};

export default Applications;
