import { Link } from "react-router";
import NavigationBar from "./NavigationBar.js";
import { Layout } from "antd";
const { Header } = Layout;

const MainHeader = () => {
  return (
    <Header className="h-18 bg-white/95 backdrop-blur-md flex justify-between items-center px-8 shadow-lg border-b border-primary/10 relative">
      <div className="text-2xl md:text-3xl font-bold">
        <Link
          to="/"
          className="hover:scale-105 transition-all duration-300 bg-gradient-to-r from-neutral via-primary to-secondary bg-clip-text text-transparent block"
        >
          Test Político
        </Link>
      </div>
      <NavigationBar />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
    </Header>
  );
};

export default MainHeader;
