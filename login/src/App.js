/*
import { LoginRegister } from "./Components/LoginRegister/LoginRegister";

function App() {
  return (
    <div>
      <LoginRegister />
    </div>
  );
}

export default App;
*/
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar/Sidebar";
import HomeContent from "./Components/HomeContent/HomeContent";
import FoodInput from "./Components/FoodInput/FoodInput";
import DailyLog from "./Components/DailyLog/DailyLog";
import Summary from "./Components/Summary/Summary"; // Make sure this exists
import Tips from "./Components/Tips/Tips";

function App() {
  const dummyDailyData = { calories: 2000 };
  const dummyWeeklyData = { calories: 14000 };
  const dummyMonthlyData = { calories: 60000 };

  return (
    <Router>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ marginLeft: "220px", padding: "20px", flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<HomeContent />} />
            <Route path="/food-input" element={<FoodInput />} />
            <Route path="/daily-log" element={<DailyLog />} />
            <Route
              path="/summary"
              element={
                <Summary
                  dailyData={dummyDailyData}
                  weeklyData={dummyWeeklyData}
                  monthlyData={dummyMonthlyData}
                />
              }
            />
            <Route path="/tips" element={<Tips />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

