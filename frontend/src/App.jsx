import "./App.css";
import Dashboard from "./pages/Dashboard";
import Signin from "./pages/Signin";
import Signup from "./pages/signup";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/signin" element={<Signin/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
