import React from 'react';
import logo from '../images/logo .svg
  const Footer = () => {
  return (
    <footer>
      <section>
      <div className='company-info'>
        <img src={logo} alt=''/>
    <p> We are family-owned restaurant focus on filipino recipes</p>
    </div>
  <div>
    <h3>Important Links</h3>
  <ul>
    <li> <a href='/'>HOME</a></li>
     <li> <a href='/'>ABOUT US</a></li>
     <li> <a href='/'>MENU</a></li>
     <li> <a href='/'>RESERVATIONS</a></li>
    <li> <a href='/'>ORDER</a></li>
    <li> <a href='/'>LOGIN</a></li>
    </ul>
    </div>
    <div>
    <h3>Contact us</h3>
    <ul>
    <li>Address: <br/> 544, Kamuning, Philippines</li>
    <li>Phone: <br/> 09261226227</li>
    <li>Email: <br/> lemontreeverypretty@gmail.com</li>
    </div>
  <div>
    <h3>Social Media links</h3>
    <ul>
   <li> <a href='/'>Facebook</a></li>
     <li> <a href='/'>Instagram US</a></li>
     <li> <a href='/'>Tiktok</a></li>

    </div>
    </section>
    </footer>
  );
};
export default Footer;
