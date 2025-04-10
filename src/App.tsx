/**
 * Root component wrapping the app with global context and routing.
 */

import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { GlobalProvider } from "./contexts/GlobalContext";
import "./index.css";

const App: React.FC = () => {
  return (
    <GlobalProvider>
      <Router>
        <AppRoutes />
      </Router>
    </GlobalProvider>
  );
};

export default App;
