import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import './App.css'

import Home from "./components/Home";
import Login from "./components/auth/Login";
import Header from "./components/layout/Header";

function App() {
  return (
    <Router>
      <div className="App">
        <Toaster position="top-right" />
        <Header />
        <div className="pages">
          <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/login" element={<Login />} />

          </Routes>
        </div>

      </div>
    </Router>
  );
}

export default App;
