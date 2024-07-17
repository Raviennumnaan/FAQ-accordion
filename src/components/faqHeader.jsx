import Star from "../assets/images/icon-star.svg";
import styles from "./faqHeader.module.css";

function FAQHeader() {
  return (
    <header className={styles.header}>
      <span>
        <img className={styles.star} src={Star} alt="Star" />
      </span>
      <span>FAQs</span>
    </header>
  );
}

export default FAQHeader;
