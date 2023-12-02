/* eslint-disable react/prop-types */
import styles from "./projects.module.css";
import { motion, useInView } from "framer-motion";
import { useState, useRef } from "react";
import {
  FiChevronDown,
  FiExternalLink,
  FiGithub,
  FiChevronUp,
} from "react-icons/fi";
import { useDarkMode } from "../contexts/DarkModeContext";
import { useTranslation } from "react-i18next";

export default function Projects({
  title,
  description,
  imageSrc,
  languages,
  siteLink,
  githubLink,
  descSummary,
}) {
  const usedLanguages = (
    <>
      {languages.map((language, index) => (
        <div key={index} className={styles.language}>
          {language}
        </div>
      ))}
    </>
  );

  const [detailsActive, setDetailsActive] = useState("");
  const { darkMode } = useDarkMode();
  const [t] = useTranslation("projects");

  const handleDetailsBtn = () => {
    setDetailsActive(!detailsActive);
  };
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <article className={`${styles.card} ${darkMode && styles.darkMode}`}>
      <h2
        ref={ref}
        style={{
          transform: isInView ? "none" : "translateX(-100px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
        className={styles.title}
      >
        {title}
      </h2>{" "}
      <p className={styles.descSummary}>{descSummary}</p>
      <img
        className={styles.siteImage}
        src={imageSrc}
        alt="project screenshot"
      />
      <div className={styles.links}>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          GitHub <FiGithub />
        </a>
        <a href={siteLink} target="_blank" rel="noopener noreferrer">
          {t("visitLink")}
          <FiExternalLink />
        </a>
        <a onClick={handleDetailsBtn} className={styles.details}>
          {t("detailButton")}
          {detailsActive ? <FiChevronUp /> : <FiChevronDown />}
        </a>
      </div>
      <motion.span
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: detailsActive ? 0 : -20 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.2 }}
        className={`${
          detailsActive ? styles.expandableDescActive : styles.expandableDesc
        }`}
      >
        {description}
        <div className={styles.languagesExpand}>{usedLanguages}</div>
      </motion.span>
      <div className={styles.languages}>{usedLanguages}</div>
      <p className={styles.description}>{description}</p>
    </article>
  );
}
