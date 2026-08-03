import ApplicationsHeader from "../../components/Applications/ApplicationsHeader";
import ApplicationsToolbar from "../../components/Applications/ApplicationsToolbar";
import ApplicationsTable from "../../components/Applications/ApplicationsTable";

const Applications = () => {
  return (
    <section className="p-6">
      <ApplicationsHeader />

      {/* Search & Filters */}
      <ApplicationsToolbar/>
      

      {/* Applications Table */}
      <ApplicationsTable/>


      {/* Pagination */}
    </section>
  );
};

export default Applications;