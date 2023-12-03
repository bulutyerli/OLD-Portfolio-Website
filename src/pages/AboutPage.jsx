import styles from "./about.module.css";
import profilePicture from "../assets/images/profilepicture.jpeg";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useDarkMode } from "../contexts/DarkModeContext";
import { useTranslation } from "react-i18next";
import { FaDownload } from "react-icons/fa6";

function AboutPage() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const { darkMode } = useDarkMode();
  const [t] = useTranslation("about");

  return (
    <div className={`${styles.container} ${darkMode && styles.darkMode}`}>
      <img
        ref={ref}
        style={{
          border: isInView ? "3px solid #fb8500" : "3px solid #b7bbbd",

          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
        }}
        className={styles.profilePicture}
        src={profilePicture}
        alt="profile"
      />
      <h1
        ref={ref}
        style={{
          transform: isInView ? "none" : "translateX(-100px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
        className={styles.title}
      >
        {t("title")}
      </h1>

      <div className={styles.content}>
        <p>{t("content.p1")}</p>
        <p>{t("content.p2")}</p>
        <p>{t("content.p3")}</p>
        <a
          href="https://drive.google.com/uc?id=16Is-yIml1-waEEPySGVeUEa1F1sjT5ec&export=download"
          download
        >
          {t("resume")}
          <FaDownload />
        </a>
      </div>
    </div>
  );
}

export default AboutPage;
