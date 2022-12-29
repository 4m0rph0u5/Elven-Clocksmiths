import React from 'react';
import styles from './style modules/Showcase.module.css';
import img1 from '../catalog/pocket/pocket-watch-model-1.png';
import img2 from '../catalog/pocket/pocket-watch-model-2.png';
import img3 from '../catalog/pocket/pocket-watch-model-3.png';
import img4 from '../catalog/pocket/pocket-watch-model-6.png';
import Card from './Card';

const WatchShowcase = () => {
  return (
    <>
      <div className={styles.showcase_container}>
        <p className={styles.showcase_intro_p}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni?
        </p>

        <div className={styles.grid_container}>
          <Card
            img={img1}
            text='Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate fugiat ut inventore consequatur voluptatibus.'
          />
          <Card
            img={img2}
            text='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos,
              maxime consectetur fuga obcaecati laborum a.'
          />
          <Card
            img={img3}
            text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              doloribus reiciendis vitae at est sint.'
          />
          <Card
            img={img4}
            text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              explicabo neque nemo aliquid ex unde!'
          />
        </div>
      </div>
    </>
  );
};

export default WatchShowcase;
