import Layout from "./components/layout/Layout";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import ProgressBar from "@badrap/bar-of-progress";
import { useEffect } from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import Home from "./pages/home/Home";
import PropertyDetails from "./pages/details/PropertyDetails";
import Search from "./pages/search/Search";
import NotFound from "./pages/404/NotFound";
import About from './pages/about/About';


const progress = new ProgressBar({
  size: 4,
  color: "#FE595E",
  className: "z-50",
  delay: 100,
});

const queryClient = new QueryClient();

function App() {
  const location = useLocation();

  useEffect(() => {
    progress.start();

    setTimeout(() => {
      progress.finish();
    }, 1000);
  }, [location]);

  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/property/:id" element={<PropertyDetails />} />
          <Route path="/search" element={<Search />} />
          <Route path="/about" element={<About />} />
          <Route path="/page-not-found" element={<NotFound />} />
          <Route
            path="/*"
            element={<Navigate to={"/page-not-found"} replace />}
          />
        </Route>
      </Routes>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
