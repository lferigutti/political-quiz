import { Layout } from "antd";
import { Outlet } from "react-router";

import MainHeader from "./MainHeader.jsx";
const { Content, Footer } = Layout;

const MainLayout = () => {
  return (
    <Layout className="flex flex-col min-h-screen text-colorText">
      <MainHeader />
      <Content className="flex flex-col flex-grow bg-backgroundSecondary items-center">
        <Outlet />
      </Content>
      <Footer className="flex items-center justify-end gap-5 bg-backgroundSecondary p-4">
        <span>
          Contenido:{" "}
          <a href="https://www.profesoraelisafernandez.com/" target="_blank">
            Elisa Fernandez
          </a>
        </span>
        <span>
          Desarrollo Web: {" "}
          <a href="https://github.com/lferigutti" target="_blank">
            Leonardo Ferigutti
          </a>
        </span>
      </Footer>
    </Layout>
  );
};

export default MainLayout;
