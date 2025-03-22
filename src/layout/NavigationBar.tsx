import { NavLink } from "react-router";

const NavigationBar = () => {
  const styleActive = "font-semibold";

  return (
    <nav className="gap-5 flex items-center">
      <NavLink to="/" className={({ isActive }) => isActive && styleActive} end>
        Home
      </NavLink>
      {/*<Button color="default" variant="outlined">*/}
      <NavLink
        to="/test-politico"
        className={({ isActive }) => isActive && styleActive}
        end
      >
        Test Politico
      </NavLink>
      {/*</Button>*/}
    </nav>
  );
};

export default NavigationBar;
