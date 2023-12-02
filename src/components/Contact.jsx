import styles from "./contact.module.css";
import { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const [t] = useTranslation("form");

  const isValidEmail = (email) => {
    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!isValidEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    const serviceId = import.meta.env.VITE_SERVICE_ID;
    const templateId = import.meta.env.VITE_TEMPLATE_ID;
    const userId = import.meta.env.VITE_USER_ID;
    const templateParams = {
      name,
      email,
      message,
    };

    try {
      setError(false);
      setSuccess(false);
      const res = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        userId
      );
      if (res.status === 200) {
        setSuccess(true);
      }
    } catch (error) {
      setError(true);
    }

    setName("");
    setEmail("");
    setMessage("");
  };

  useEffect(() => {
    if (name.length > 1 && isValidEmail(email) && message.length > 1) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [name, email, message]);

  return (
    <form className={styles.contactForm}>
      <input
        type="text"
        placeholder={t("name")}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder={t("email")}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <textarea
        placeholder={t("message")}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>

      <button
        className={buttonDisabled ? styles.disableButton : ""}
        onClick={(e) => {
          submitHandler(e);
        }}
      >
        {t("button")}
      </button>
      {success && (
        <span className={styles.successMessage}>
          Thank you for your message, we will be in touch in no time!
        </span>
      )}
      {error && (
        <span className={styles.errorMessage}>
          Something went wrong, please try again.
        </span>
      )}
    </form>
  );
};

export default Contact;
