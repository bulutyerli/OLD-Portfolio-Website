import styles from "./socialMedia.module.css";
import github from "../assets/images/github.png";
import gmail from "../assets/images/gmail.png";
import linkedin from "../assets/images/linkedin.png";
import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function SocialMedia() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [iconStates, setIconStates] = useState({
    icon1: false,
    icon2: false,
    icon3: false,
  });

  useEffect(() => {
    if (isInView) {
      setIconStates((prev) => ({ ...prev, icon1: true }));
      setTimeout(() => {
        setIconStates((prev) => ({ ...prev, icon2: true }));
      }, 500);
      setTimeout(() => {
        setIconStates((prev) => ({ ...prev, icon3: true }));
      }, 1000);
      setTimeout(() => {
        setIconStates({
          icon1: false,
          icon2: false,
          icon3: false,
        });
      }, 2000);
    } else {
      setIconStates({
        icon1: false,
        icon2: false,
        icon3: false,
      });
    }
  }, [isInView]);

  return (
    <aside ref={ref} className={styles.container}>
      <a
        href="https://github.com/bulutyerli"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.socialLink}
      >
        <img
          style={{
            width: iconStates.icon1 ? "3rem" : "2.5rem",
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
          src={github}
          alt="github"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/bulut-yerli-957270125/"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.socialLinkRight}
      >
        <img
          style={{
            width: iconStates.icon3 ? "3rem" : "2.5rem",
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
          src={linkedin}
          alt="linkedin"
        />
      </a>

      <a
        href="mailto:bulutyerli@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.socialLinkRight}
      >
        <img
          style={{
            width: iconStates.icon2 ? "3rem" : "2.5rem",
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
          src={gmail}
          alt="gmail"
        />
      </a>
    </aside>
  );
}

export default SocialMedia;
