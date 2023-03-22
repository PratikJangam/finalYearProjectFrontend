import React from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "3-6",

    male: 28,
    female: 90,
  },
  {
    name: "45-54",

    male: 391,
    female: 900,
  },
  {
    name: "35-44",

    male: 274,
    female: 600,
  },
  {
    name: "55-64",

    male: 208,
    female: 800,
  },
  {
    name: "75 or above",

    male: 22,
    female: 80,
  },
  {
    name: "65-74",

    male: 100,
    female: 300,
  },
  {
    name: "19-24",

    male: 50,
    female: 175,
  },
  {
    name: "13-18",

    male: 14,
    female: 20,
  },
  {
    name: "25-34",

    male: 194,
    female: 400,
  },
];

const BarGraph = () => {
  return (
    <>
      <div
        className="bargraph_main"
        style={{ height: "50vh", margin: "8rem 3rem" }}
      >
        <h3
          style={{ fontWeight: "400", fontSize: "2rem", textAlign: "center" }}
        >
          Plot of various Age groups taken for this and their sex is displayed
          below.
        </h3>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />

            {/* <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" /> */}
            <YAxis yAxisId="left" orientation="left" stroke="#AFAED6" />
            <Tooltip />
            <Legend />

            <Bar yAxisId="left" dataKey="male" fill="#82ca9d" />
            <Bar yAxisId="left" dataKey="female" fill="#AFAED6" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default BarGraph;
