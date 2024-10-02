import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import PrivateRoute from "./components/auth/PrivateRoute";
import Login from "./pages/auth/Login";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <body className="pages App-header">
          <Routes>
            
            <Route path="/" element={
              <PrivateRoute>
                <Login />
              </PrivateRoute>}
            />
            
            <Route path="/login" element={<Login />} />

            <Route path="/home" element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>}
            />
          </Routes>
        </body>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
