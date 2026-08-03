import { RiArrowRightLine } from "react-icons/ri";
import InterviewCard from "./InterviewCard";
import { interviewData } from "./interviewData";

const UpcomingInterviews = () => {
  return (
    <section className="flex h-full flex-col rounded-3xl border border-[#E7E7EF] bg-white p-7 shadow-sm">
      {/* Header */}

      <div className="mb-6 flex items-start justify-between">
        <div>
          <h2 className="text-2xl font-bold text-[#211A52]">
            Upcoming Interviews
          </h2>

          <p className="mt-1 text-sm text-[#8A86A3]">
            Your next scheduled interviews.
          </p>
        </div>
      </div>

      {/* Only 2 Cards */}

      <div className="space-y-4">
        {interviewData.slice(0, 2).map((interview) => (
          <InterviewCard
            key={interview.id}
            company={interview.company}
            role={interview.role}
            date={interview.date}
            time={interview.time}
            mode={interview.mode}
          />
        ))}
      </div>

      {/* Footer */}

      <div className="mt-auto pt-6">
        <button className="flex w-full items-center justify-center gap-2 rounded-2xl border border-[#E7E7EF] py-3 font-semibold text-[#211A52] transition-all duration-300 hover:bg-[#3CBFA4] hover:text-white">
          View All Interviews

          <RiArrowRightLine size={18} />
        </button>
      </div>
    </section>
  );
};

export default UpcomingInterviews;