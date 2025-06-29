import { BrowserRouter, Route, Routes } from "react-router";
import TestPolitico from "./pages/TestPolitico.tsx";
import Home from "./pages/Home.tsx";
import MainLayout from "./layout/MainLayout.tsx";
import Results from "./pages/Results.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


const App = () => {
  const queryClient = new QueryClient()


  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/test-politico" element={<TestPolitico />} />
            <Route path="/resultado" element={<Results />} />
          </Route>
        </Routes>
      </BrowserRouter>   
    </QueryClientProvider>
  )
};

export default App;