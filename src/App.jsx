import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import NavigatorBar from "./components/NavigatorBar.jsx";

export default function App() {
  return (
    <>
      <NavigatorBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}
