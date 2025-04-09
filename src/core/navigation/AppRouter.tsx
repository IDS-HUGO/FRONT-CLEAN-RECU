import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "../../pages/HomePage.tsx";  // Add .tsx extension

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
};