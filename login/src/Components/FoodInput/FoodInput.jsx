import { useState } from "react";
import "./FoodInput.css";
import yourImage from "../Assets/ketogenic-low-carbs-diet-concept-ingredients-healthy-foods-selection-set-up-white-concrete-background_35641-4032.avif";

export default function FoodInput() {
  const [query, setQuery] = useState("");
  const [image, setImage] = useState(null);
  const [result, setResult] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      // TODO: Upload file to backend for processing
    }
  };

  const handleSearch = () => {
    // TODO: Call backend API with `query`
    console.log("Searching for:", query);
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
      <div className="food-input-container">
        <h2>🍽️ Add Food</h2>

        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search food (e.g., Apple, Paneer...)"
        />

        <button onClick={handleSearch}>🔍 Search</button>

        <p style={{ margin: "10px 0" }}>or</p>

        <input type="file" accept="image/*" onChange={handleImageUpload} />

        {image && <img src={image} alt="Uploaded food" className="preview" />}

        <div className="result-display">
          {result ? (
            <div>
              <h3>🍎 {result.name}</h3>
              <p>Calories: {result.calories} kcal per 100g</p>
              <p>Carbs: {result.carbs} g</p>
              <p>Protein: {result.protein} g</p>
              <p>Fat: {result.fat} g</p>
              <p>Fiber: {result.fiber} g</p>
              <p>Vitamins: {result.vitamins}</p>
            </div>
          ) : (
            <p>No food identified yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}
