import { RiErrorWarningLine } from "react-icons/ri";

const AnalyticsStatCard = ({
  title,
  value,
  description,
  variant = "default",
}) => {
  const isNegative = variant === "negative";

  return (
    <div className="min-w-0 rounded-2xl border border-[#E7E7EF] bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-sm font-medium text-[#8A86A3]">
            {title}
          </p>

          <h2 className="mt-2 text-3xl font-bold text-[#211A52]">
            {value}
          </h2>
        </div>

        {isNegative && (
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#FFF1F1]">
            <RiErrorWarningLine
              size={18}
              className="text-[#E57373]"
            />
          </div>
        )}
      </div>

      <p className="mt-3 break-words text-xs text-[#8A86A3]">
        {description}
      </p>
    </div>
  );
};

export default AnalyticsStatCard;