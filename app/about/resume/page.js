import styles from "../../styles/resume.module.css";

export default function Resume() {
  return (
    <div className={styles.container}>
      <main className={styles.resumeContainer}>
        <iframe
          className={styles.resume}
          src="https://docs.google.com/document/d/e/2PACX-1vR-QTOh1GDEobd0w24t5QdZcnELFfq55LkCQhV28Xza2FO2mltH2wyEzYj2LXSWAwnsUexZhPfLkNt2/pub?embedded=true"
        ></iframe>
      </main>
    </div>
  );
}
