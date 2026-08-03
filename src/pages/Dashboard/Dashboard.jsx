import StatCard from "../../components/Dashboard/Stats/StatCard";
import { dashboardStats } from "../../components/Dashboard/Stats/dashboardStatsData";
import RecentApplications from "../../components/Dashboard/RecentApplications/RecentApplications";
import WeeklyActivity from "../../components/Dashboard/WeeklyActivity/WeeklyActivity";
import UpcomingInterviews from "../../components/Dashboard/UpcomingInterviews/UpcomingInterviews";

const Dashboard = () => {
  return (
    <section className="space-y-8">
      {/* Statistics Cards */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2 items-start">
        {dashboardStats.map((stat) => (
          <StatCard
            key={stat.id}
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
            iconBg={stat.iconBg}
            iconColor={stat.iconColor}
          />
        ))}
      </div>

      {/* Recent Applications */}
      <RecentApplications />

      {/* Dashboard Insights */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <WeeklyActivity />
        <UpcomingInterviews/>

        {/* UpcomingInterviews will go here */}
      </div>
    </section>
  );
};
export default Dashboard;
