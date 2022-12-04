import React from 'react';
import styles from '../components/style modules/Hero.module.css';

const Hero = () => {
  return (
    <>
      <section className={styles.hero}>
        <div className='logo'>Logo</div>
        <p>sub logo paragraph</p>
      </section>
      <section className={styles.intro_paragraph}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero nostrum
          ad ratione rerum, voluptate quidem, ullam inventore porro optio
          architecto nulla odio. Amet quaerat asperiores deleniti distinctio
          fugit odio illo, tempora repellendus esse, ratione, reiciendis
          suscipit atque ad cupiditate ex officiis.
        </p>
      </section>
    </>
  );
};

export default Hero;
