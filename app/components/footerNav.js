import Link from "next/link";
import styles from '../styles/footer.module.css'

export default function Footer() {

  const socialLinks = [
    { path: 'https://linkedin.com/in/jenleesj/', label: 'LinkedIn'}, 
    { path: 'https://github.com/sjjen', label: 'GitHub'}, 
  ]

  return (
    <footer className={styles.footerContainer}>
      
      <nav>
          <ul>
            {socialLinks.map((link) => (
              <li key={link.path}>
                <Link href={link.path}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      
      <section>
        <h6>© 2023 Jen Lee. All Rights Reserved.</h6>
      </section>

    </footer>
  );
}
