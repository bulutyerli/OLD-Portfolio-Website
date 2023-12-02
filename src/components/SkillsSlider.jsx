/* eslint-disable react/prop-types */
import styles from "./skillsSlider.module.css";

function SkillsSlider({ show, icons, reverse }) {
  return (
    <div
      className={`${reverse ? styles.hideSliderReverse : styles.hideSlider} ${
        show && styles.slider
      }`}
    >
      <div className={`${styles.icons} ${reverse ? styles.reverseSlide : ""}`}>
        {icons.map((image, index) => (
          <img key={index} src={image} alt={`Icon ${index + 1}`} />
        ))}
        {icons.map((image, index) => (
          <img key={index} src={image} alt={`Icon ${index + 1}`} />
        ))}
      </div>
    </div>
  );
}

export default SkillsSlider;
