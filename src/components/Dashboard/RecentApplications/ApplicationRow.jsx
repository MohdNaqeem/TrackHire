import { RiArrowRightLine, RiBuildingLine } from "react-icons/ri";


const ApplicationRow = ({
  company,
  position,
  location,
  status,
  appliedDate,
}) => {
  const getStatusStyles = () => {
    switch (status) {
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
    <tr className="border-b border-[#ECECF3] transition hover:bg-[#FAFAFC]">
      {/* Company */}
      <td className="whitespace-nowrap px-6 py-5 sm:px-6 sm:py-6">
        <div className="flex items-center gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F5F6FA] sm:h-12 sm:w-12">
            <RiBuildingLine
              size={20}
              className="text-[#3CBFA4]"
            />
          </div>

          <div>
            <h4 className="font-semibold text-[#211A52]">
              {company}
            </h4>

            <p className="text-sm text-[#8A86A3]">
              {position}
            </p>
          </div>
        </div>
      </td>


      {/* Status */}
      <td className="whitespace-nowrap px-6 py-5">
        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${getStatusStyles()}`}
        >
          {status}
        </span>
      </td>


      {/* Location */}
      <td className="whitespace-nowrap px-6 py-5 text-sm text-[#5F5B80]">
        {location}
      </td>


      {/* Date */}
      <td className="whitespace-nowrap px-6 py-5 text-sm text-[#5F5B80]">
        {appliedDate}
      </td>


      {/* Action */}
      <td className="whitespace-nowrap px-6 py-5 text-right">
        <button
          type="button"
          className="rounded-lg p-2 transition hover:bg-[#F5F6FA]"
        >
          <RiArrowRightLine
            size={20}
            className="text-[#211A52]"
          />
        </button>
      </td>
    </tr>
  );
};


export default ApplicationRow;