import { Layout } from "antd";
import { Outlet } from "react-router";

import MainHeader from "./MainHeader.jsx";
const { Content, Footer } = Layout;

const MainLayout = () => {
  return (
    <Layout className="flex flex-col min-h-screen text-colorText">
      <MainHeader />
      <Content className="flex flex-col flex-grow items-center bg-gradient-to-br from-backgroundSecondary via-white/50 to-tertiary/30">
        <Outlet />
      </Content>
      <Footer className="bg-gradient-to-r from-white/95 via-backgroundSecondary to-white/95 backdrop-blur-md border-t border-primary/10 p-6">
        <div className="flex items-center justify-end gap-6 max-w-6xl mx-auto">
          <span className="text-neutral/80 hover:text-neutral transition-colors duration-300">
            Contenido:{" "}
            <a
              href="https://www.profesoraelisafernandez.com/"
              target="_blank"
              className="text-secondary hover:text-primary transition-colors duration-300 font-medium underline decoration-secondary/30 hover:decoration-primary/50 underline-offset-4"
            >
              Elisa Fernandez
            </a>
          </span>
          <span className="text-neutral/80 hover:text-neutral transition-colors duration-300">
            Desarrollo Web:{" "}
            <a
              href="https://github.com/lferigutti"
              target="_blank"
              className="text-secondary hover:text-primary transition-colors duration-300 font-medium underline decoration-secondary/30 hover:decoration-primary/50 underline-offset-4"
            >
              Leonardo Ferigutti
            </a>
          </span>
        </div>
      </Footer>
    </Layout>
  );
};

export default MainLayout;
