import React from "react";
import "./pieChartComponent.css";
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Major Depresive Disorder", value: 40 },
  { name: "Neuropathic Pain", value: 15 },
  { name: "Repeated Episodes of Anxiety", value: 13 },
  { name: "Other", value: 11 },
  {
    name: "Disorder characterized by Stiff, Tender & Painful Muscles",
    value: 9,
  },
  { name: "Chronic Muscle or Bone Pain", value: 9 },
  {
    name: "Diabetic Complication causing Injury to some Body Nerves",
    value: 1,
  },
  { name: "Anxiousness associated with Depression", value: 1 },
];
const COLORS = [
  "#38332D",
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#FD0871",
  "#FD7808",
  "#8D10E3",
];

const data1 = [
  { name: "No side effects", value: 34 },
  { name: "Mild side effects", value: 27 },
  { name: "Moderate side effect", value: 19 },
  { name: "Extreme severe side effects", value: 13 },
  { name: "Severe side effect", value: 7 },
];

const COLORS_1 = ["#38332D", "#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const PieChartComponent = () => {
  return (
    <>
      <div className="chart_main_container">
        <h1>
          Pie Chart of Percentage of different conditions of People for Cymbalta
          Drug
        </h1>
        <div className="pie_chart1" style={{ height: "50vh" }}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart width={400} height={400}>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={200}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="chart_description">
            Different conditions are shown in people for Cymbalta drug like
            major Depressive Order, Neuropathic pain, Chronic muscle or bone
            pain, Repeated Episodes of Anxiety, Disorder characterized by Stiff,
            Tender & Painful Muscles, Diabetic Complication causing Injury to
            some Body Nerves, Anxiousness associated with Depression.
            <br />
          </div>
        </div>
      </div>

      <div className="chart_main_container">
        <h1>Effect of Drug on Age group 45-54 (most commonly used by)</h1>
        <div className="pie_chart1" style={{ height: "50vh" }}>
          <div className="chart_description">
            People having Different side effects like Mild side effects,
            Moderate side effect, Extreme severe side effects, Severe side
            effect in age group 45-54 are shown in pie chart
            <br />
          </div>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart width={400} height={400}>
              <Pie
                data={data1}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={200}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS_1[index % COLORS_1.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
};

export default PieChartComponent;
