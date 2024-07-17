import styles from "./qna.module.css";
import IconMinus from "../assets/images/icon-minus.svg";
import IconPlus from "../assets/images/icon-plus.svg";

function QnA({ qna, showAnswer, hideAnswer, activeQuestion }) {
  function handleQuestion() {
    if (activeQuestion === qna.id) hideAnswer();
    else showAnswer(qna.id);
  }

  return (
    <div className={styles.container} onClick={handleQuestion}>
      <div className={styles.questionContainer}>
        <p className={styles.question}>{qna.question}</p>
        <span>
          {activeQuestion === qna.id ? (
            <img className={styles.star} src={IconMinus} alt="Star" />
          ) : (
            <img className={styles.star} src={IconPlus} alt="Star" />
          )}
        </span>
      </div>
      {activeQuestion === qna.id && (
        <p className={styles.answer}>{qna.answer}</p>
      )}
    </div>
  );
}

export default QnA;
