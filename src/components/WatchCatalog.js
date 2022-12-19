import React from 'react';
import styles from './style modules/Catalog.module.css';
import img1 from '../catalog/pocket/pocket-watch-model-1.png';
import img2 from '../catalog/pocket/pocket-watch-model-2.png';
import img3 from '../catalog/pocket/pocket-watch-model-3.png';
import img4 from '../catalog/pocket/pocket-watch-model-4.png';

const WatchCatalog = () => {
  return (
    <>
      <section className={styles.intro_paragraph}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero nostrum
          ad ratione rerum, voluptate quidem, ullam inventore porro optio
          architecto nulla odio.
        </p>
      </section>
      <div className={styles.showcase_container}>
        <p className={styles.showcase_intro_p}>
          Lorem ipsum dolor, sit amet consectetur adipisicing. Lorem ipsum dolor
          sit amet consectetur.
        </p>

        <div className={styles.grid_container}>
          <div className={styles.div_item}>
            <img src={img1} alt='' />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate fugiat ut inventore consequatur voluptatibus.
            </p>
            <a href='#'>Acquire Now</a>
          </div>
          <div className={styles.div_item}>
            <img src={img2} alt='' />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos,
              maxime consectetur fuga obcaecati laborum a.
            </p>

            <a href='#'>Acquire Now</a>
          </div>
          <div className={styles.div_item}>
            <img src={img3} alt='' />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              doloribus reiciendis vitae at est sint.
            </p>
            <a href='#'>Acquire Now</a>
          </div>
          <div className={styles.div_item}>
            <img src={img4} alt='' />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              explicabo neque nemo aliquid ex unde!
            </p>
            <a href='#'>Acquire Now</a>
          </div>
          {/* <div className={styles.div_item}>
            <img src={img4} alt='' />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              explicabo neque nemo aliquid ex unde!
            </p>
            <a href='#'>Acquire Now</a>
          </div>
          <div className={styles.div_item}>
            <img src={img2} alt='' />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos,
              maxime consectetur fuga obcaecati laborum a.
            </p>

            <a href='#'>Acquire Now</a>
          </div>
          <div className={styles.div_item}>
            <img src={img3} alt='' />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              doloribus reiciendis vitae at est sint.
            </p>
            <a href='#'>Acquire Now</a>
          </div>
          <div className={styles.div_item}>
            <img src={img4} alt='' />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              explicabo neque nemo aliquid ex unde!
            </p>
            <a href='#'>Acquire Now</a>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default WatchCatalog;
