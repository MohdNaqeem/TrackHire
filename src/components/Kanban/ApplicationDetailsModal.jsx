import {
  RiCloseLine,
  RiMapPinLine,
  RiCalendarLine,
  RiEditLine,
  RiDeleteBinLine,
} from "react-icons/ri";

const ApplicationDetailsModal = ({
  application,
  onClose,
  onEdit,
  onDelete,
}) => {
  if (!application) {
    return null;
  }

  const getStatusStyles = () => {
    switch (application.status) {
      case "Applied":
        return "bg-yellow-100 text-yellow-700";

      case "Interview":
        return "bg-blue-100 text-blue-700";

      case "Offer":
        return "bg-green-100 text-green-700";

      case "Rejected":
        return "bg-red-100 text-red-700";

      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
      <div className="w-full max-w-lg rounded-3xl bg-white p-6 shadow-xl">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-medium text-[#8A86A3]">
              Application Details
            </p>

            <h2 className="mt-1 text-2xl font-bold text-[#211A52]">
              {application.company}
            </h2>

            <p className="mt-1 text-sm text-[#8A86A3]">
              {application.position}
            </p>
          </div>

          <button
            onClick={onClose}
            className="rounded-xl p-2 text-[#8A86A3] transition hover:bg-[#F5F6FA] hover:text-[#211A52]"
          >
            <RiCloseLine size={22} />
          </button>
        </div>

        {/* Details */}
        <div className="mt-6 space-y-4">
          {/* Location */}
          <div className="flex items-center gap-3 rounded-2xl bg-[#F8F9FC] p-4">
            <RiMapPinLine
              size={20}
              className="text-[#3CBFA4]"
            />

            <div>
              <p className="text-xs text-[#8A86A3]">
                Location
              </p>

              <p className="mt-1 font-medium text-[#211A52]">
                {application.location}
              </p>
            </div>
          </div>

          {/* Applied Date */}
          <div className="flex items-center gap-3 rounded-2xl bg-[#F8F9FC] p-4">
            <RiCalendarLine
              size={20}
              className="text-[#3CBFA4]"
            />

            <div>
              <p className="text-xs text-[#8A86A3]">
                Applied Date
              </p>

              <p className="mt-1 font-medium text-[#211A52]">
                {application.appliedDate}
              </p>
            </div>
          </div>

          {/* Status */}
          <div className="flex items-center justify-between rounded-2xl bg-[#F8F9FC] p-4">
            <p className="text-sm font-medium text-[#5F5B80]">
              Current Status
            </p>

            <span
              className={`rounded-full px-3 py-1 text-xs font-semibold ${getStatusStyles()}`}
            >
              {application.status}
            </span>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 flex items-center justify-between">
          {/* Delete */}
          <button
            onClick={() => onDelete(application)}
            className="flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-red-500 transition hover:bg-red-50"
          >
            <RiDeleteBinLine size={17} />
            Delete
          </button>

          {/* Right Actions */}
          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="rounded-xl border border-[#E7E7EF] px-5 py-2.5 text-sm font-semibold text-[#211A52] transition hover:bg-[#F5F6FA]"
            >
              Close
            </button>

            <button
              onClick={() => onEdit(application)}
              className="flex items-center gap-2 rounded-xl bg-[#211A52] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#30286A]"
            >
              <RiEditLine size={17} />
              Edit Application
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationDetailsModal;