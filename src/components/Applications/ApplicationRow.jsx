import { RiArrowRightLine, RiBuildingLine } from "react-icons/ri";

const statusStyles = {
  Applied: "bg-[#FEF3C7] text-[#B76E00]",
  Interview: "bg-[#DBEAFE] text-[#2563EB]",
  Offer: "bg-[#DCFCE7] text-[#15803D]",
  Rejected: "bg-[#FEE2E2] text-[#DC2626]",
};

const ApplicationRow = ({
  application,
  company,
  position,
  status,
  appliedDate,
  location,
  onEdit,
}) => {
  return (
    <tr className="border-b border-[#ECECF3] transition hover:bg-[#FAFBFD]">
      {/* Company */}
      <td className="px-6 py-5">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F5F6FA]">
            <RiBuildingLine size={20} className="text-[#3CBFA4]" />
          </div>

          <div>
            <h3 className="font-semibold text-[#211A52]">{company}</h3>

            <p className="text-sm text-[#8A86A3]">{position}</p>
          </div>
        </div>
      </td>

      {/* Status */}
      <td className="px-6 py-5">
        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${
            statusStyles[status]
          }`}
        >
          {status}
        </span>
      </td>

      {/* Applied Date */}
      <td className="px-6 py-5 text-sm text-[#5F5B80]">{appliedDate}</td>

      {/* Location */}
      <td className="px-6 py-5 text-sm text-[#5F5B80]">{location}</td>

      {/* Action */}
      <td className="px-6 py-5 text-right">
        <button
          onClick={() => onEdit(application)}
          className="rounded-lg p-2 transition hover:bg-[#F5F6FA]"
        >
          <RiArrowRightLine size={20} className="text-[#211A52]" />
        </button>
      </td>
    </tr>
  );
};

export default ApplicationRow;