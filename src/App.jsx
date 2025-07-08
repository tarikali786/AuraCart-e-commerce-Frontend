import { Routes, Route } from "react-router-dom";
import "./App.css";
import { MainLayout } from "./layout/MainLayout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<div>Home Page</div>} />
          <Route path="/about" element={<div>About Page</div>} />
          <Route path="/contact" element={<div>Contact Page</div>} />
        </Route>
        <Route path="*" element={<div>Page Not Found</div>} />

        {/* Add more routes as needed */}
      </Routes>
    </>
  );
}

export default App;
