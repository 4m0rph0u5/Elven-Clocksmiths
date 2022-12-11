import React from 'react';
import styles from './style modules/Showcase.module.css';

const WatchShowcase = () => {
  return (
    <div className={styles.showcase_container}>
      <div className={styles.watch_info_container}>
        {/* <WatchInfo /> */}
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga dolor
          rerum expedita eos hic? Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Temporibus et quod ipsum excepturi rerum corrupti
          dolorum possimus nihil aliquid ad.
        </p>
        <button>
          <a>Acquire now</a>
        </button>
      </div>
      <section className={styles.showcase_catalog}>
        <div className={styles.image_container}>
          {/* <img src="" alt="" /> */}
        </div>
      </section>
      {/* <SliderBtn />
      <SliderBtn /> */}
    </div>
  );
};

export default WatchShowcase;
