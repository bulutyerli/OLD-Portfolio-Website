import styles from "./footer.module.css";

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.copyright}>
        <div>© 2023 Bulut Yerli. </div>
        <div>All rights reserved.</div>
      </div>
    </div>
  );
}

export default Footer;
