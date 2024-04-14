import { useState } from "react";
import "./App.css";
import LoginPage from "./screens/LoginPage/LoginPage";
import Navbar from "./components/Navbar/Navbar";
import HomeScreen from "./screens/HomeScreen/HomeScreen.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const user = null;

  return (
    <>
      <Router>
        {!user ? (
          <LoginPage />
        ) : (
          <Routes>
            <Route exact path="/" element={<HomeScreen />} />
          </Routes>
        )}
      </Router>
    </>
  );
}

export default App;
