import { NavLink } from "react-router-dom";
import "../Sidebar/Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <NavLink to="/" end>🏠 Home</NavLink>
      <NavLink to="/food-input">🍽️ Food Input</NavLink>
      <NavLink to="/daily-log">📓 Daily Log</NavLink>
      <NavLink to="/summary">📊 Summary</NavLink>
      <NavLink to="/tips">💡 Tips</NavLink>
    </div>
  );
}
