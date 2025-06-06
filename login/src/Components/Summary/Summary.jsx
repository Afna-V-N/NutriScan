import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import "./Summary.css";
import yourImage from "../Assets/ketogenic-low-carbs-diet-concept-ingredients-healthy-foods-selection-set-up-white-concrete-background_35641-4032.avif";

const Summary = ({ dailyData, weeklyData, monthlyData }) => {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: `url(${yourImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: "40px 20px",
      }}
    >
      <div className="summary-container">
        <h2>📊 Calorie Summary</h2>

        {/* Daily Log Summary */}
        <div className="chart-section monitor-style">
          <h3>📅 Daily Calorie Intake</h3>
          <div className="chart-box">
            <LineChart width={600} height={300} data={dailyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="calories" stroke="#8884d8" />
            </LineChart>
          </div>
        </div>

        {/* Weekly Summary */}
        <div className="chart-section monitor-style">
          <h3>🗓 Weekly Average</h3>
          <div className="chart-box">
            <LineChart width={600} height={300} data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="week" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="calories" stroke="#82ca9d" />
            </LineChart>
          </div>
        </div>

        {/* Monthly Summary */}
        <div className="chart-section monitor-style">
          <h3>📆 Monthly Average</h3>
          <div className="chart-box">
            <LineChart width={600} height={300} data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="calories" stroke="#ffc658" />
            </LineChart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
