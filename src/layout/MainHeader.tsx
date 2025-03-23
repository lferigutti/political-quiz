import { Link } from "react-router";
import NavigationBar from "./NavigationBar.js";
import { Layout } from "antd";
const { Header } = Layout;

const MainHeader = () => {
  return (
    <Header className="h-16 bg-background flex justify-between items-center px-8 shadow-lg">
      <div className="text-2xl font-semibold">
        <Link to="/" className="hover:text-secondary">
          TestPolítico
        </Link>
      </div>
      <NavigationBar />
    </Header>
  );
};

export default MainHeader;
