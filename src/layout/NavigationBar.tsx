import { NavLink } from "react-router";

const NavigationBar = () => {

  return (
    <nav className="gap-5 flex items-center">
      <NavLink
        to="/"
        style={({ isActive }) => ({
          fontWeight: isActive ? "bold" : "normal",
        })}
      >
        Home
      </NavLink>
      <NavLink
        to="/test-politico"
        style={({ isActive }) => ({
          fontWeight: isActive ? "bold" : "normal",
        })}
      >
        Test Politico
      </NavLink>
    </nav>
  );
};

export default NavigationBar;
