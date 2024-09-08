import React from "react";
import Header from "./Header";
import MainContent from "./MainContent";

const App: React.FC = () => (
  <div className="flex overflow-hidden flex-col p-6 bg-red-50 max-md:px-5">
    <Header name="JULIA" lastName="HUANG" />
    <MainContent />
  </div>
);

export default App;
