import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import { weeklyActivity } from "./weeklyActivityData";

const ActivityChart = () => {
  return (
    <ResponsiveContainer width="100%" height={450}>
      <BarChart
        data={weeklyActivity}
        margin={{
          top: 10,
          right: 10,
          left: -20,
          bottom: 0,
        }}
      >
        <CartesianGrid
          vertical={false}
          stroke="#ECECF3"
          strokeDasharray="4 4"
        />

        <XAxis
          dataKey="day"
          tickLine={false}
          axisLine={false}
          tick={{ fill: "#8A86A3", fontSize: 14 }}
        />

        <YAxis
          tickLine={false}
          axisLine={false}
          tick={{ fill: "#8A86A3", fontSize: 13 }}
        />

        <Tooltip
          cursor={{ fill: "#F5F6FA" }}
          contentStyle={{
            borderRadius: "16px",
            border: "none",
            boxShadow: "0 12px 30px rgba(0,0,0,.08)",
          }}
        />

        <Bar
          dataKey="applications"
          fill="#3CBFA4"
          radius={[10, 10, 0, 0]}
          barSize={34}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ActivityChart;