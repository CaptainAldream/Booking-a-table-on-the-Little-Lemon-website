import React from 'react';
import { link } from 'react-router-dom';
import bannerImg from '../images/restauranfood.jpg'

const Header = () => {
  return (
    <header className='header'>
    <section>
    {/* texts */}
    <div className='banner'>
    <h2>Little Lemon</h2>
    <h3>Philippines</3>
    <p>We are a family owned Mediterraneane Restaurant, focused on traditional recipes served with mothern twist in asia</p>
  <link to="/booking"><button aria-label='On Click'>Reserve Tables</button></link>
    </div>
  {/* images */}
  <div className='banner-img'>
  <img src={bannerImg} alt=''/>
  </div>
  </section>
  </header>
);
};
export default Header;
