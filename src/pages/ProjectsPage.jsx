import Projects from "../components/Projects";
import tailwishHome from "../assets/projects/tailwish/tailwish-home.webp";
import nuvolaCoffee from "../assets/projects/nuvola-coffee-screenshots/nuvola-coffee-home.webp";
import styles from "./projectsPage.module.css";
import { useDarkMode } from "../contexts/DarkModeContext";
import { useTranslation } from "react-i18next";
import denizweber from "../assets/projects/denizweber/denizweber.webp";

export default function ProjectsPage() {
  const { darkMode } = useDarkMode();
  const [t] = useTranslation("projects");

  const tailwishTechStack = [
    "JavaScript",
    "HTML",
    "SCSS",
    "React",
    "Next.js",
    "MongoDB",
    "NextAuth",
    "Amazon S3",
  ];

  const nuvolaCoffeeTechStack = [
    "JavaScript",
    "HTML",
    "React",
    "Next.js",
    "PostgreSQL",
    "Supabase",
    "Tailwind CSS",
    "Redux",
  ];

  const denizWeberTechStack = [
    "JavaScript",
    "HTML",
    "React",
    "Next.js",
    "Sanity CMS",
    "Tailwind CSS",
  ];

  return (
    <section className={styles.projects}>
      <h1 className={`${styles.title} ${darkMode && styles.darkMode}`}>
        {t("title")}
      </h1>
      <Projects
        title="Patilerce.com"
        descSummary={t("projects.tailwish.summary")}
        description={t("projects.tailwish.desc")}
        imageSrc={tailwishHome}
        languages={tailwishTechStack}
        siteLink="https://www.patilerce.com"
        githubLink="https://github.com/bulutyerli/patilerce"
      />
      <Projects
        title="Deniz Weber Photography"
        descSummary={t("projects.denizweber.summary")}
        description={t("projects.denizweber.desc")}
        imageSrc={denizweber}
        languages={denizWeberTechStack}
        siteLink="https://denizweber.vercel.app"
      />
      <Projects
        title="Nuvola Coffee Shop"
        descSummary={t("projects.nuvolacoffee.summary")}
        description={t("projects.nuvolacoffee.desc")}
        imageSrc={nuvolaCoffee}
        languages={nuvolaCoffeeTechStack}
        siteLink="https://nuvolacoffeeshop.netlify.app"
        githubLink="https://github.com/bulutyerli/nuvola-coffee-shop"
      />
    </section>
  );
}
