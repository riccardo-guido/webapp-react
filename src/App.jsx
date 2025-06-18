import { BrowserRouter, Routes, Route } from "react-router";
import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage";
import AboutPage from "./pages/AboutPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/details/:id" element={<DetailsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
