import styles from "./contactPage.module.css";
import Contact from "../components/Contact";
import SocialMedia from "../components/SocialMedia";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useDarkMode } from "../contexts/DarkModeContext";
import { useTranslation } from "react-i18next";

function ContactPage() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const { darkMode } = useDarkMode();
  const [t] = useTranslation("contact");

  return (
    <section
      ref={ref}
      className={`${styles.container} ${darkMode && styles.darkMode}`}
    >
      <div className={styles.title}>
        <p>{t("title.p1")}</p>
        <p>{t("title.p2")}</p>
        <p>
          {t("title.p3")}{" "}
          <span
            style={{
              color: isInView ? "#fb8500" : "#2f3437",
              borderBottom: isInView ? "2px solid #fb8500" : "none",
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
            }}
          >
            {t("title.p4")}{" "}
          </span>
        </p>
      </div>
      <div className={styles.contact}>
        <Contact />
      </div>
      <SocialMedia />
    </section>
  );
}

export default ContactPage;
