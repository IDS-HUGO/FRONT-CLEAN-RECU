import React from "react";
import { AppRouter } from "./core/navigation/AppRouter.tsx";
import './App.css';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <AppRouter />
    </div>
  );
};

export default App;
