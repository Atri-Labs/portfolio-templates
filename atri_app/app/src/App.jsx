import { Routes, Route } from "react-router-dom";
import "./styles.css";
import Home from "./pages/Home.jsx";
import Dc from "./pages/Dc.jsx";
import ViewProject from "./pages/View_project.jsx";
import ViewPage from "./pages/View_page.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
<Route path="/dc" element={<Dc />} />
<Route path="/view_project" element={<ViewProject />} />
<Route path="/view_page" element={<ViewPage />} />
    </Routes>
  );
}
