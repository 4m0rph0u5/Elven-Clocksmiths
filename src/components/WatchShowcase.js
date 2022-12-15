import React from 'react';
import './style modules/Showcase.css';
import img1 from '../catalog/pocket/pocket-watch-model-1.png';
import img2 from '../catalog/pocket/pocket-watch-model-2.png';
import img3 from '../catalog/pocket/pocket-watch-model-3.png';
import img4 from '../catalog/pocket/pocket-watch-model-4.png';

const WatchShowcase = () => {
  return (
    <div className='showcase_container'>
      {/* <p className='showcase_intro_p'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni?
      </p>
      <div className='grid_container'></div> */}
      <div className='div1 div_item'>
        <img src={img1} alt='' />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          fugiat ut inventore consequatur voluptatibus.
        </p>

        <a href='#'>Acquire Now</a>
      </div>
      <div className='div2 div_item'>
        <img src={img2} alt='' />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, maxime
          consectetur fuga obcaecati laborum a.
        </p>

        <a href='#'>Acquire Now</a>
      </div>
      <div className='div3 div_item'>
        <img src={img3} alt='' />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
          doloribus reiciendis vitae at est sint.
        </p>
        <a href='#'>Acquire Now</a>
      </div>
      <div className='div4 div_item'>
        <img src={img4} alt='' />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
          explicabo neque nemo aliquid ex unde!
        </p>
        <a href='#'>Acquire Now</a>
      </div>

      {/* <Card />
      <Card />
      <Card />
      <Card /> */}
    </div>
  );
};

export default WatchShowcase;
