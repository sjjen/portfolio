import styles from '../styles/about.module.css'
import Image from 'next/image';
import Menu from '../components/menu';

export default function About() {
  return (
    <main>
      <Menu />
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
        Thanks for visiting! Hope you enjoyed your stay.
        <br />
        You can connect with me via:
        <ul>
          <a href="https://www.linkedin.com/in/jenleesj/" target="_blank">
            <li>LinkedIn</li>
          </a>
          <a href="https://github.com/sjjen" target="_blank">
            <li>Github</li>
          </a>
        </ul>
        (sorry I'm not an avid user of social media).
        <br />
        <br />
        {" "}
      </section>
    </main>
  );
}