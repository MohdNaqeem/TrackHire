import { useMemo, useState } from "react";

import ApplicationsHeader from "../../components/Applications/ApplicationsHeader";
import ApplicationsToolbar from "../../components/Applications/ApplicationsToolbar";
import ApplicationsTable from "../../components/Applications/ApplicationsTable";

import { applicationsData } from "../../data/applicationsData";
import Pagination from "../../components/Applications/Pagination";
import AddApplicationModal from "../../components/Applications/AddApplicationModal";

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

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Search + Filter + Sort
  const filteredApplications = useMemo(() => {
    let filtered = [...applicationsData];

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
  }, [searchTerm, selectedStatus, sortBy]);

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
      />

      <ApplicationsTable applications={currentApplications} />

      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
        totalItems={filteredApplications.length}
        itemsPerPage={itemsPerPage}
      />
      {isModalOpen && (
        <AddApplicationModal onClose={() => setIsModalOpen(false)} />
      )}
    </section>
  );
};

export default Applications;
