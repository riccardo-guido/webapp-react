import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}
