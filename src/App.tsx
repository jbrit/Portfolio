import React from "react";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import PageContainer from "./components/PageContainer";
import ProjectPage from "./pages/ProjectPage";
import SkillsPage from "./pages/SkillsPage";
import ContactPage from "./pages/ContactPage";
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
