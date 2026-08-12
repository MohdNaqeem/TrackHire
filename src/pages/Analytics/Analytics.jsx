import AnalyticsStatCard from "../../components/Analytics/AnalyticsStatCard";
import ApplicationStatusChart from "../../components/Analytics/ApplicationStatusChart";
import ApplicationActivityChart from "../../components/Analytics/ApplicationActivityChart";
import TopCompanies from "../../components/Analytics/TopCompanies";

import { applicationsData } from "../../data/applicationsData";
import { applicationActivity } from "../../data/analyticsData";

const Analytics = () => {
  const totalApplications = applicationsData.length;

  const interviewCount = applicationsData.filter(
    (application) => application.status === "Interview",
  ).length;

  const offerCount = applicationsData.filter(
    (application) => application.status === "Offer",
  ).length;

  const rejectedCount = applicationsData.filter(
    (application) => application.status === "Rejected",
  ).length;

  return (
    <section className="min-w-0 p-4 sm:p-6">
      {/* Page Header */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-[#211A52]">
          Analytics
        </h1>

        <p className="mx-auto mt-2 max-w-md text-sm text-[#8A86A3]">
          Understand your job search performance at a glance.
        </p>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        <AnalyticsStatCard
          title="Total Applications"
          value={totalApplications}
          description="Applications tracked in TrackHire."
        />

        <AnalyticsStatCard
          title="Interviews"
          value={interviewCount}
          description="Applications that reached interview stage."
        />

        <AnalyticsStatCard
          title="Offers"
          value={offerCount}
          description="Applications that resulted in an offer."
        />

        <AnalyticsStatCard
          title="Rejections"
          value={rejectedCount}
          description="Applications that were rejected."
        />
      </div>

      {/* Status + Companies */}
      <div className="mt-6 grid min-w-0 grid-cols-1 gap-6 xl:grid-cols-[minmax(0,1fr)_380px]">
        <ApplicationStatusChart
          applications={applicationsData}
        />

        <TopCompanies
          applications={applicationsData}
        />
      </div>

      {/* Activity */}
      <div className="mt-6 min-w-0">
        <ApplicationActivityChart
          activity={applicationActivity}
        />
      </div>
    </section>
  );
};

export default Analytics;