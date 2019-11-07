import React from 'react';
import './Footer.scss';
import Logo from '../Logo';

export default function Footer() {
  return (
    <div className="footer container">
      <div className="content">
        <div>
          <Logo white={true} />
          <p>Swift and Affordable Delivery of Elegant Applications</p>
          <h1><span>SKYBLAZAR</span></h1>
        </div>

        <a href="/#contact">Hire Us</a>
      </div>

      <div className="copyright">
        <p>© Copyright SkyBlazar 2019</p>
      </div>
    </div>
  )
}
