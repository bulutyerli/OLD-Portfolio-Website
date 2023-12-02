import { useState, useEffect, useRef } from "react";
import logo from "../assets/images/logo.svg";
import darkModeLogo from "../assets/images/logo-darkmode.svg";
import styles from "./navBar.module.css";
import { FiMenu } from "react-icons/fi";
import { RiCloseFill } from "react-icons/ri";
import { Link } from "react-scroll";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useDarkMode } from "../contexts/DarkModeContext";
import turkish from "../assets/images/turkish.png";
import english from "../assets/images/english.png";
import { useTranslation } from "react-i18next";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const { darkMode, toggleDarkMode } = useDarkMode();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navLinksClass = menuOpen
    ? `${styles.navlinks} ${styles.active}`
    : styles.navlinks;

  const { i18n, t } = useTranslation("header");
  const language = i18n.language;

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen && window.innerWidth <= 600) {
      document.body.style.overflow = "hidden";
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.body.style.overflow = "scroll";
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [menuOpen]);

  const handleLanguageChange = (newLanguage) => {
    i18n.changeLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
  };

  return (
    <nav className={`${styles.navbar} ${darkMode && styles.darkMode}`}>
      <Link to="/" activeClass="active" spy={true} smooth={true} offset={-100}>
        <img
          className={styles.logo}
          src={darkMode ? darkModeLogo : logo}
          alt="website logo"
        />
      </Link>

      <div ref={menuRef} className={navLinksClass}>
        <ul>
          <li>
            <Link
              to="/"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              onClick={toggleMenu}
            >
              {t("home")}
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              onClick={toggleMenu}
            >
              {t("about")}
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              onClick={toggleMenu}
            >
              {t("projects")}
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              onClick={toggleMenu}
            >
              {t("contact")}
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.menuContainer}>
        <div>
          <img
            src={language === "tr" ? turkish : english}
            alt={`${language} flag`}
            className={styles.flag}
            onClick={() => {
              const newLanguage = language === "tr" ? "en" : "tr";
              handleLanguageChange(newLanguage);
            }}
          />
        </div>
        <DarkModeSwitch
          checked={darkMode}
          onChange={toggleDarkMode}
          size={24}
          sunColor="#fb8500"
        />
        <button onClick={toggleMenu} className={styles.menu}>
          {menuOpen ? (
            <RiCloseFill
              size={24}
              style={{ color: darkMode ? "#fff" : "#000" }}
            />
          ) : (
            <FiMenu
              size={24}
              style={{ color: darkMode ? "#fff" : "#041b26" }}
            />
          )}
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
