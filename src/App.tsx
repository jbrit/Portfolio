import React from "react";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import PageContainer from "./components/PageContainer";
import ProjectPage from "./components/ProjectPage";

const App: React.FC = () => {
  return (
    <div>
      <PageContainer>
        <Header />
        <HomePage />
        <ProjectPage />
      </PageContainer>
    </div>
  );
};

export default App;
