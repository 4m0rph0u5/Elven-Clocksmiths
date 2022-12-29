import React from 'react';
import styles from './style modules/Showcase.module.css';

const Card = ({ img, text }) => {
  return (
    <div className={styles.div_item}>
      <img src={img} alt='' />
      <p>{text}</p>
      <a href='#'>Acquire Now</a>
    </div>
  );
};

export default Card;
