import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Login from "./pages/auth/Login";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <body className="pages App-header">
          <Routes>
            <Route path="/" element={<Login />} />
          </Routes>
        </body>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
