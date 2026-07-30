import {
  HiOutlineClipboardList,
  HiOutlineCalendar,
  HiOutlineChartBar,
  HiOutlineSparkles,
} from "react-icons/hi";

import AboutCard from "./AboutCard";
import aboutCards from "./aboutData";

const highlights = [
  {
    id: 1,
    icon: HiOutlineClipboardList,
    text: "Organize every application in one place",
  },
  {
    id: 2,
    icon: HiOutlineCalendar,
    text: "Never miss interviews or follow-ups",
  },
  {
    id: 3,
    icon: HiOutlineChartBar,
    text: "Track your hiring progress with ease",
  },
  {
    id: 4,
    icon: HiOutlineSparkles,
    text: "Stay focused on landing your next opportunity",
  },
];

function AboutSection() {
  return (
    <section className="bg-[#F7F7FB] pt-10 pb-24">
      {/* Badge */}
      <div className="flex justify-center">
        <span className="inline-flex items-center rounded-full border border-[#BDEEE4] bg-white px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#3CBFA4]">
          About TrackHire
        </span>
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl flex-col items-center gap-16 px-6 lg:flex-row lg:gap-20">
        {/* Left Side */}
        <div className="flex-1">
          {/* Heading */}
          <h2 className="text-center text-4xl font-bold leading-tight text-[#211A52] lg:text-5xl">
            Simplify Your Job Search Journey
          </h2>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-xl text-center text-lg leading-8 text-[#5F5B80]">
            TrackHire helps students and job seekers organize every application,
            interview, resume, and recruiter note in one place, making it easier
            to stay focused and never miss an opportunity.
          </p>

          {/* Highlights */}
          <div className="mt-10 space-y-5">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.id} className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#ECFBF8] text-[#3CBFA4]">
                    <Icon size={22} />
                  </div>

                  <p className="text-base font-medium text-[#211A52]">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Side */}
        <div className="flex-1">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {aboutCards.map((card) => (
              <AboutCard
                key={card.id}
                icon={card.icon}
                title={card.title}
                value={card.value}
                description={card.description}
                progress={card.progress}
              />
            ))}
          </div>
          <div className="mt-10 flex justify-center">
    <button className="rounded-xl bg-[#3CBFA4] px-8 py-3 text-base font-semibold text-white transition-colors duration-300 hover:bg-[#31A88F]">
      Start Tracking Today
    </button>
  </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;