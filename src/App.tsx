import React from "react";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import PageContainer from "./components/PageContainer";
import ProjectPage from "./components/ProjectPage";
import SkillsPage from "./components/SkillsPage";
import ContactPage from "./components/ContactPage";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCss3,
  faHtml5,
  faJs,
  faPython,
  faReact,
  faSass,
} from "@fortawesome/free-brands-svg-icons";
import Footer from "./components/Footer";

library.add(faCss3, faHtml5, faJs, faPython, faReact, faSass);
const App: React.FC = () => {
  return (
    <div>
      <PageContainer>
        <Header />
        <HomePage />
        <ProjectPage />
        <SkillsPage />
        <ContactPage />
        <Footer />
      </PageContainer>
    </div>
  );
};

export default App;
