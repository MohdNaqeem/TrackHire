import { RiAddLine } from "react-icons/ri";

const ApplicationsHeader = () => {
  return (
    <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
      {/* Left Side */}
      <div>
        <h1 className="text-3xl font-bold text-[#211A52]">
          Applications
        </h1>

        <p className="mt-2 text-sm text-[#8A86A3]">
          Manage and organize all your job applications in one place.
        </p>
      </div>

      {/* Right Side */}
      <button className="flex items-center justify-center gap-2 rounded-2xl bg-[#3CBFA4] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#31A88F] hover:shadow-lg">
        <RiAddLine size={18} />
        Add Application
      </button>
    </div>
  );
};

export default ApplicationsHeader;