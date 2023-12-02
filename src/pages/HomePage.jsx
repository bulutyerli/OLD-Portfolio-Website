import styles from "./home.module.css";
import Typewriter from "typewriter-effect";
import SkillsSlider from "../components/SkillsSlider";
import { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import javascriptImage from "../assets/images/javascript.svg";
import htmlImage from "../assets/images/html.svg";
import cssImage from "../assets/images/css.svg";
import sassImage from "../assets/images/sass.svg";
import reactImage from "../assets/images/ReactIcon.svg";
import reduxImage from "../assets/images/redux.svg";
import nodejsLogo from "../assets/images/node.svg";
import expressLogo from "../assets/images/express.svg";
import mysqlLogo from "../assets/images/mysql.svg";
import mongoLogo from "../assets/images/mongo.svg";
import nextjsLogo from "../assets/images/next-js.svg";
import postgresLogo from "../assets/images/postgres.svg";
import tailwindLogo from "../assets/images/tailwind.svg";
import figmaLogo from "../assets/images/figma.svg";
import { useDarkMode } from "../contexts/DarkModeContext";
import { useTranslation } from "react-i18next";

function Home() {
  const [showFrontEndSkills, setFrontEndSkills] = useState(false);
  const [showBackEndSkills, setBackEndSkills] = useState(false);
  const [showArrows, setShowArrows] = useState({
    arrow1: false,
    arrow2: false,
    arrow3: false,
  });
  const { darkMode } = useDarkMode();
  const [t, i18n] = useTranslation("home");

  const handleFrontEnd = () => {
    setFrontEndSkills(true);
  };

  const handleBackEnd = () => {
    setBackEndSkills(true);
  };

  const handleArrows = () => {
    setShowArrows((prev) => ({ ...prev, arrow1: true }));
    setTimeout(() => {
      setShowArrows((prev) => ({ ...prev, arrow2: true }));
    }, 500);
    setTimeout(() => {
      setShowArrows((prev) => ({ ...prev, arrow3: true }));
    }, 1000);
  };

  const frontEndIcons = [
    javascriptImage,
    htmlImage,
    cssImage,
    sassImage,
    tailwindLogo,
    figmaLogo,
    reactImage,
    reduxImage,
  ];

  const backEndIcons = [
    nodejsLogo,
    expressLogo,
    mysqlLogo,
    mongoLogo,
    postgresLogo,
    nextjsLogo,
  ];

  const language = i18n.language;

  return (
    <section className={`${styles.container} ${darkMode && styles.darkMode}`}>
      <h1 className={styles.greeting}>
        {t("p1")}
        <br />
        <Typewriter
          key={language}
          onInit={(typewriter) => {
            typewriter
              .typeString(
                `${t("p2")} <span class=${
                  styles.nameHighlight
                }>Bulut Yerli</span>`
              )
              .pauseFor(100)
              .callFunction(() => handleFrontEnd())
              .pauseFor(100)
              .typeString(`<br>${t("p3")}`)
              .pauseFor(250)
              .deleteChars(`${language === "tr" ? 8 : 9}`)
              .pauseFor(100)
              .callFunction(() => handleBackEnd())
              .typeString(`Full-Stack ${t("p4")}`)
              .callFunction(() => handleArrows())
              .start();
          }}
          options={{ html: true, deleteSpeed: 30, delay: 60 }}
        />
      </h1>
      <div className={styles.slider}>
        <SkillsSlider icons={frontEndIcons} show={showFrontEndSkills} />
        <SkillsSlider
          reverse={true}
          icons={backEndIcons}
          show={showBackEndSkills}
        />
      </div>
      <div className={styles.arrows}>
        {showArrows.arrow1 && <MdArrowDropDown />}
        {showArrows.arrow2 && <MdArrowDropDown />}
        {showArrows.arrow3 && <MdArrowDropDown />}
      </div>
    </section>
  );
}

export default Home;
