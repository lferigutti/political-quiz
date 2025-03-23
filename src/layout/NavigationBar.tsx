import { NavLink } from "react-router";

const NavigationBar = () => {
  return (
    <nav className="gap-5 flex items-center text-md">
      <NavLink
        to="/"
        style={({ isActive }) => ({
          fontWeight: isActive ? "bold" : "normal",
          textDecoration: isActive ? "underline" : "none",
          textDecorationColor: isActive ? "#a9f27d" : "transparent",
          textDecorationThickness: "2px",
          textUnderlineOffset: "4px",
          color: "inherit", // Ensures text color stays the same on hover
        })}
        className="transition-opacity duration-200 hover:opacity-80"
      >
        Home
      </NavLink>
      <NavLink
        to="/test-politico"
        style={({ isActive }) => ({
          fontWeight: isActive ? "bold" : "normal",
          textDecoration: isActive ? "underline" : "none",
          textDecorationColor: isActive ? "#a9f27d" : "transparent",
          textDecorationThickness: "2px",
          textUnderlineOffset: "4px",
          color: "inherit", // Ensures text color stays the same on hover
        })}
        className="transition-opacity duration-200 hover:opacity-80"
      >
        Test Politico
      </NavLink>
    </nav>
  );
};

export default NavigationBar;
