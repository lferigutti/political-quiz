import { ConfigProvider, Layout } from "antd";
import { Outlet } from "react-router";
import colors from "tailwindcss/colors.js";
import MainHeader from "./MainHeader.jsx";
const { Content, Footer } = Layout;

const MainLayout = () => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Menu: {
            darkItemSelectedBg: colors.blue[800], //
          },
        },
      }}
    >
      <Layout className="min-h-screen flex flex-col flex-1">
        <MainHeader />
        <Content className="flex flex-col bg-gray-100 items-center">
          <Outlet />
        </Content>
        <Footer className="h-16 bg-gray-100 text-gray-500 flex items-center justify-end gap-5">
          <span>Contenido: Elisa Fernandez</span>
          <span>Desarrollo Web: Leoanrdo Feriguti</span>
        </Footer>
      </Layout>
    </ConfigProvider>
  );
};

export default MainLayout;
