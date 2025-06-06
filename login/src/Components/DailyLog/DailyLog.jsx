import { useState } from "react";
import "./DailyLog.css";
import yourImage from "../Assets/ketogenic-low-carbs-diet-concept-ingredients-healthy-foods-selection-set-up-white-concrete-background_35641-4032.avif";

export default function DailyLog({ onCaloriesUpdate }) {
  const [foodItem, setFoodItem] = useState("");
  const [log, setLog] = useState([]);
  const [totalCalories, setTotalCalories] = useState(0);

  const handleAddFood = async () => {
    if (!foodItem) return;

    // Dummy API response simulation (replace with real backend/API call)
    const mockResponse = {
      name: foodItem,
      calories: Math.floor(Math.random() * 150) + 50, // e.g., 50–200 kcal
    };

    const newLog = [...log, mockResponse];
    setLog(newLog);
    setFoodItem("");

    const updatedCalories = newLog.reduce((sum, item) => sum + item.calories, 0);
    setTotalCalories(updatedCalories);

    if (onCaloriesUpdate) {
      onCaloriesUpdate(updatedCalories); // send to home page if needed
    }
  };

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
      <div className="daily-log-container" style={{ marginTop: '16px' }}>
        <h2>📓 Daily Food Log </h2>

        <div className="food-input-section"style={{ marginTop: '16px' }}>
          <input
            type="text"
            value={foodItem}
            onChange={(e) => setFoodItem(e.target.value)}
            placeholder="Enter food (e.g., Rice, Egg...)"
          />
          <button onClick={handleAddFood}>➕ Add</button>
        </div>

        <div className="log-list">
          <h3>🧾 Logged Items:</h3>
          {log.length === 0 ? (
            <p>No items added yet.</p>
          ) : (
            <ul>
              {log.map((item, index) => (
                <li key={index}>
                  {item.name} — {item.calories} kcal
                </li>
              ))}
            </ul>
          )}
          <p className="total">🔥 Total Calories: {totalCalories} kcal</p>
        </div>
      </div>
    </div>
  );
}
