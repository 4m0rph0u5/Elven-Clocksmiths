import React from 'react';
import styles from '../components/style modules/Hero.module.css';

const Hero = () => {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.logo_symbol}></div>
        <p className={styles.sublogo_paragraph}>Lorem ipsum dolor sit Lorem.</p>
      </section>
      <section className={styles.intro_paragraph}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero nostrum
          ad ratione rerum, voluptate quidem, ullam inventore porro optio
          architecto nulla odio. Lorem ipsum dolor sit amet. Lorem ipsum dolor
          sit. Lorem, ipsum.
        </p>
      </section>
    </>
  );
};

export default Hero;
