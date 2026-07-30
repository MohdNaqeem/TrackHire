import StatCard from "../../components/Dashboard/Stats/StatCard";
import { dashboardStats } from "../../components/Dashboard/Stats/dashboardStatsData";

const Dashboard = () => {
  return (
    <section>
      {/* Statistics Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
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
    </section>
  );
};

export default Dashboard;