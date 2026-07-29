import FeatureCard from "./FeatureCard";
import features from "./featuresData";

function FeaturesSection() {
  return (
    <section className="bg-[#F7F7FB] py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-[#BDEEE4] bg-white px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#3CBFA4]">
            Features
          </span>

          <h2 className="mt-8 text-4xl font-bold leading-tight text-[#211A52] md:text-5xl">
            Everything You Need to Organize Your Job Search
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#5F5B80]">
            TrackHire gives you all the tools you need to manage job
            applications, prepare for interviews, and stay organized throughout
            your job search.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
