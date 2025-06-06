import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./HomeContent.css";
import bg from "../Assets/ketogenic-low-carbs-diet-concept-ingredients-healthy-foods-selection-set-up-white-concrete-background_35641-4032.avif";

export default function HomeContent() {
  const navigate = useNavigate();
  const [greeting, setGreeting] = useState("");
  const [weight, setWeight] = useState(55); // in kg
  const [height, setHeight] = useState(160); // in cm
  const [age, setAge] = useState(22); // in years

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting("Good Morning");
    else if (hour < 18) setGreeting("Good Afternoon");
    else setGreeting("Good Evening");
  }, []);

  // Ensure inputs are numeric and valid
  const safeWeight = Number(weight) > 0 ? Number(weight) : 55;
  const safeHeight = Number(height) > 0 ? Number(height) : 160;
  const safeAge = Number(age) > 0 ? Number(age) : 22;

  // Calculate BMR (Mifflin-St Jeor Equation) and TDEE (with light activity)
  const bmr = 10 * safeWeight + 6.25 * safeHeight - 5 * safeAge + 5;
  const tdee = Math.round(bmr * 1.375);

  // Macronutrients approx (protein, carbs, fats)
  const protein = Math.round(safeWeight * 1.2);
  const carbs = Math.round((tdee * 0.55) / 4);
  const fats = Math.round((tdee * 0.25) / 9);
  const water = Math.round(safeWeight * 35); // in mL

  // For demonstration, calories consumed so far can be hardcoded or derived from elsewhere
  // Here, I'll calculate percentage of TDEE to show dynamic progress
  const caloriesConsumed = 1250; // you can replace this with actual state/data
  const caloriesPercent = Math.min(100, Math.round((caloriesConsumed / tdee) * 100));

  return (
    <div className="home-container" style={{ backgroundImage: `url(${bg})` }}>
      <h1>{greeting},friend!</h1>
      <p>Welcome back to NutriScan. Here’s your current progress:</p>

      {/* Input Section */}
      <section className="input-section" aria-label="User biometric inputs">
        <label>
          Weight (kg):
          <input
            type="number"
            min="1"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            aria-describedby="weight-desc"
          />
          <small id="weight-desc"></small>
        </label>
        <label>
          Height (cm):
          <input
            type="number"
            min="1"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            aria-describedby="height-desc"
          />
          <small id="height-desc"></small>
        </label>
        <label>
          Age (years):
          <input
            type="number"
            min="1"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            aria-describedby="age-desc"
          />
          <small id="age-desc"></small>
        </label>
      </section>

      {/* Status Cards */}
      <section className="status-cards" aria-label="Daily calorie and meal summary">
        <div
          className="status-card"
          onClick={() => navigate("/summary")}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && navigate("/summary")}
          aria-label="View calories consumed today"
        >
          <h2>🍔 Calories Today</h2>
          <p className="status-number">{caloriesConsumed} kcal</p>
          <progress value={caloriesConsumed} max={tdee} aria-valuemin={0} aria-valuemax={tdee} aria-valuenow={caloriesConsumed} />
          <small>{caloriesPercent}% of daily goal</small>
        </div>
        <div
          className="status-card"
          onClick={() => navigate("/daily-log")}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && navigate("/daily-log")}
          aria-label="View meals logged today"
        >
          <h2>📋 Meals Logged</h2>
          <p className="status-number">3 meals</p>
        </div>
      </section>

      {/* Recommendation Section */}
      <section className="recommendation" aria-label="Recommended daily nutrient intake">
        <h3>🔍 Recommended Daily Intake</h3>
        <ul>
          <li>
            <strong>Total Calories:</strong> {tdee} kcal
          </li>
          <li>
            <strong>Protein:</strong> {protein} g
          </li>
          <li>
            <strong>Carbohydrates:</strong> {carbs} g
          </li>
          <li>
            <strong>Fats:</strong> {fats} g
          </li>
          <li>
            <strong>Water:</strong> {water} mL (~{Math.round(water / 1000)} L)
          </li>
          <li>
            <strong>Vitamins & Minerals:</strong> Include a variety of fruits & vegetables 🍎🥦
          </li>
        </ul>
      </section>

      {/* Quick Action Buttons */}
      <nav className="quick-links" aria-label="Quick action buttons">
        <h3>Quick Actions</h3>
        <div className="link-buttons">
          <button
            onClick={() => navigate("/food-input")}
            aria-label="Add new food item"
            className="quick-btn"
          >
            + Add Food
          </button>
          <button
            onClick={() => navigate("/summary")}
            aria-label="View food intake summary"
            className="quick-btn"
          >
            View Summary
          </button>
          <button
            onClick={() => navigate("/tips")}
            aria-label="View health tips"
            className="quick-btn"
          >
            Health Tips
          </button>
        </div>
      </nav>
    </div>
  );
}
