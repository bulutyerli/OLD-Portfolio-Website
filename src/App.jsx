import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import ProjectsPage from "./pages/ProjectsPage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import styles from "./app.module.css";
import { Element } from "react-scroll";
import { DarkModeProvider } from "./contexts/DarkModeContext";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage && savedLanguage !== i18n.language) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  return (
    <DarkModeProvider>
      <div className={styles.container}>
        <div className={styles.navContainer}>
          <NavBar />
        </div>
        <Element name="/" className={styles.element}>
          <HomePage />
        </Element>
        <Element name="/about" className={styles.element}>
          <AboutPage />
        </Element>
        <Element name="/projects" className={styles.element}>
          <ProjectsPage />
        </Element>
        <Element name="/contact">
          <ContactPage />
        </Element>
        <Footer />
      </div>
    </DarkModeProvider>
  );
}

export default App;
