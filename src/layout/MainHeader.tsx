import { Link } from "react-router";
import NavigationBar from "./NavigationBar.js";
import { Layout } from "antd";
const { Header } = Layout;

const MainHeader = () => {
  return (
    <Header className="h-16 bg-gray-100 flex justify-between items-center px-8 shadow-lg border-b border-gray-200">
      <div className="text-gray-900 text-2xl font-semibold">
        <Link to="/" className="hover:text-gray-500">
          TestPolítico
        </Link>
      </div>
      <NavigationBar />
    </Header>
  );
};

export default MainHeader;
