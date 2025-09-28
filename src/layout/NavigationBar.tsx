import { NavLink } from "react-router";

const NavigationBar = () => {
  return (
    <nav className="flex items-center gap-2">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `relative px-4 py-2 rounded-xl font-semibold text-sm transition-all duration-300 transform hover:scale-105 ${
            isActive
              ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg"
              : "text-neutral/80 hover:text-neutral hover:bg-white/20 backdrop-blur-sm"
          }`
        }
      >
        {({ isActive }) => (
          <>
            <span>Home</span>
            {isActive && (
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full shadow-lg"></div>
            )}
          </>
        )}
      </NavLink>

      <NavLink
        to="/test-politico"
        className={({ isActive }) =>
          `relative px-4 py-2 rounded-xl font-semibold text-sm transition-all duration-300 transform hover:scale-105 ${
            isActive
              ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg"
              : "text-neutral/80 hover:text-neutral hover:bg-white/20 backdrop-blur-sm"
          }`
        }
      >
        {({ isActive }) => (
          <>
            <span>Test Político</span>
            {isActive && (
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full shadow-lg"></div>
            )}
          </>
        )}
      </NavLink>
    </nav>
  );
};

export default NavigationBar;
