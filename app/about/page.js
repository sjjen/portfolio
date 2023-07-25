import styles from '../styles/about.module.css'
import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  
  const socialLinks = [
    { path: 'https://linkedin.com/in/jenleesj/', label: 'LinkedIn'}, 
    { path: 'https://github.com/sjjen', label: 'GitHub'}, 
  ]
    
  
  return (
    <main>
      <header>Hey there! I&apos;m Jen Lee.</header>
      <figure>
        <Image
          src="/aboutme.jpg"
          alt="pic of me"
          width={400}
          height={400}
          priority
        />
      </figure>
      <section>
        <p>
          I&apos;m a queer developer and designer born in Seoul, South Korea &
          currently based out of Portland, OR. <br />
          Coming from a creative background, I really enjoy building
          well-functioning <br />
          full-stack applications with beautiful, clean UI.
          <br />
          <br />
          During my free time, I enjoy working on little side projects, <br />
          such as this website, which I&apos;m utilizing as a virtual playground for
          myself.
          <br />
          Additionally, I love doing yoga, going on walks, hanging out at the
          beach or parks, attending live shows,
          <br />
          and spending time petting stray cats or strangers&apos; dogs. My interests in
          creative hobbies range
          <br />
          from painting to knitting to woodworking and beyond—the list is endless!
          <br />
          <br />
          This site is serving as a creative outlet for me to experiment while being able to showcase my work.<br />
          I am constantly evolving as a developer, so I&apos;m sure this project will continue to evolve alongside my growth.<br />
          The website was built using JavaScript, HTML, and CSS, with Next.js & hosted on Vercel.<br />
        </p>
        
        I hope you enjoy exploring my work as much as I enjoyed creating this website!<br />
        If you&apos;d like to learn a bit more about my professional experience, you can view my resume <Link href='/about/resume'>here</Link>.

        <br /><br />
        You can connect with me via:
        <br />
        
        <nav>
          <ul>
            {socialLinks.map((link) => (
              <li key={link.path}>
                <Link href={link.path}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        
        (Sorry, I&apos;m not much of an avid user of social media T ^ T)<br />
        Thanks for visiting!
        <br />
        <br />
        
      </section>
    </main>
  );
}