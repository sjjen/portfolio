import styles from '../styles/about.module.css'
import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  
  const socialLinks = [
    { path: 'https://linkedin.com/in/jenleesj/', label: 'LinkedIn'}, 
    { path: 'https://github.com/sjjen', label: 'GitHub'}, 
  ]
    
  return (
    <main className={styles.container}>
      <section className={styles.header}>
        
        <figure></figure>
        <header>Hey there! I&apos;m Jen Lee.</header>
      </section>
      
      <section className={styles.section}>
        
          I&apos;m a queer developer and designer born in Seoul, South Korea &
          currently based out of Portland, OR. 
          Coming from a creative background, I really enjoy building
          well-functioning 
          full-stack applications with beautiful, clean UI.
          <br />
          <br />
          During my free time, I enjoy working on little side projects, 
          such as this website, which I&apos;m utilizing as a virtual playground for
          myself.
          Additionally, I love doing yoga, going on walks, hanging out at the
          beach or parks, attending live shows,
          and spending time petting stray cats or strangers&apos; dogs. My interests in
          creative hobbies range from painting to knitting to woodworking and beyond—the list is endless!
          <br />
          <br />
          This site is serving as a creative outlet for me to experiment while being able to showcase my work. (also currently a work in progress)
          I am constantly evolving as a developer, so I&apos;m sure this project will continue to evolve alongside my growth.
          The website was built using JavaScript, HTML, and CSS, with Next.js & hosted on Vercel.
          <br />
          <br />
          I hope you enjoy exploring my work as much as I enjoyed creating this website!
          If you&apos;d like to learn a bit more about my professional experience, you can view my resume <Link href='/about/resume'>here</Link>.

          <br /><br />
          
        
        
        <p>
          Connect with me @ 
          <Link href={socialLinks[0].path}> {socialLinks[0].label} </Link> 
          or
          <Link href={socialLinks[1].path}> {socialLinks[1].label} </Link> 
          <br />
          <br />
          Thanks for visiting!
          <br />
          <br />
        </p>
        
      </section>
    </main>
  );
}