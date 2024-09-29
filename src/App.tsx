import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';

import Header from "./components/layout/Header";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="pages">
          <Routes>
            <Route path="/" element={<h1>Home</h1>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
