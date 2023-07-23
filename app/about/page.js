'use client'
import styles from '../styles/about.module.css'
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function About() {
  const router = useRouter();
  return (
    <main>
      <header>Hey there! I'm Jen Lee.</header>
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
        {" "}
        I'm a queer developer and designer born in Seoul, South Korea &
        currently based out of Portland, OR. <br />
        Coming from a creative background, I really enjoy building
        well-functioning <br />
        full-stack applications with beautiful, clean UI.
        <br />
        <br />
        During my free time, I enjoy working on little side projects, <br />
        such as this website, which I'm utilizing as a virtual playground for
        myself.
        <br />
        Additionally, I love doing yoga, going on walks, hanging out at the
        beach or parks, attending live shows,
        <br />
        and spending time petting stray cats or strangers' dogs. My interests in
        creative hobbies range
        <br />
        from painting to knitting to woodworking and beyond—the list is endless!
        <br />
        <br />

        If you'd like to learn a bit more about my professional experience, you can view my resume <a onClick={() => router.push('/about/resume')}>here</a>.
        <br /><br />
        You can connect with me via:
        <br />
        
          <a href="https://www.linkedin.com/in/jenleesj/" target="_blank">LinkedIn</a><br />
          <a href="https://github.com/sjjen" target="_blank">Github</a><br /><br />
        
        (Sorry, I'm not really an avid user of social media T ^ T)<br />
        Thanks for visiting! Hope you enjoyed your stay.
        <br />
        <br />
        {" "}
      </section>
    </main>
  );
}