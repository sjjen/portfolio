'use client'
import styles from './styles/index.module.css'
import Image from 'next/image';
import { useRouter } from 'next/navigation'

export default function Homepage() {

  // const router = useRouter(); 

  // Change the state to begin the interactivity once the button is clicked & remove the button
  const handleClick = () => {
    return alert(
      `OOPS! Sorry, this isn't available yet. \n Please utilize the menu! \n\n If you'd like to take a peek at the code, \n you can check out my github @sjjen!`
    );

    /*----------- !!!! UNCOMMENT !!!! LATER WHEN THE INTERACTIVITY IS DONE
    //Navigate to the desired page when the button is clicked
    router.push('/explore');  */
  };

  return (
    <main className={styles.main}>
      <section className={styles.gifContainer}>
        <Image
          src="/homeright.gif"
          alt="mini me gif"
          width={400}
          height={400}
          priority
        />
        <p class="blurb">
          Hey there, I'm Jen. <br />
          Welcome to my portfolio! <br />
          <br />
          Click the button below to get started
          <br />
          <br />
          Enjoy your visit!
        </p>
      </section>
      
      <div className={styles.buttonContainer}>
        <button onClick={handleClick}>Let's Go!</button>
      </div>
    </main>
  );
}
