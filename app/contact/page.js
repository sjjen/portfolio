import styles from '../styles/contact.module.css'

export default function Contact() {
  return (
    <main className={styles.contactContainer}>
      <header>Send me a message!</header>
      <form className={styles.form}>
        <label for='name'>Name:</label><br />
        <input type='text' name='name' value='First Last'/><br />
        
        <label for='email'>Email:</label><br />
        <input type='text' name='email' value='email@mail.com'/><br />

        <label for='phone'>Phone:</label><br />
        <input type='text' name='phone' value='123.456.7890'/><br />

        <label for='message'>Message:</label><br />
        {/* use rows & cols or I can change styling */}
        <textarea name='message' rows='8' cols='20'></textarea><br />
        <input type='submit' value='submit'/>
      </form>
    </main>
  );
}