import React from 'react';

const Card = ({ img, text }) => {
  return (
    <div className={styles.div_item}>
      <img src={img} alt='' />
      <p>
        {text}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
        explicabo neque nemo aliquid ex unde!
      </p>
      <a href='#'>Acquire Now</a>
    </div>
  );
};

export default Card;
