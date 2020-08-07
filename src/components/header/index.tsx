import React from 'react';
import { CLIENT_RENEG_WINDOW } from 'tls';

const Header = () => {
  const [showOrHide, setShowOrHide] = React.useState('');

  const handleClick = () => {
    const className = showOrHide === '' ? 'show' : '';
    console.log(className);
    setShowOrHide(className);
  };

  return (
    <header onClick={handleClick}>
      <nav className="navigation">
        <p className="navigation__title">Eva Mission</p>
        <p className="navigation__menu-icon">=</p>
        <ul className={`navigation__menu ${showOrHide}`}>
          <li>Home</li>
          <li>About</li>
          <li>Our Inspiration</li>
          <li>Personal Stories</li>
          <li>Help Us</li>
          <li>Contact Us</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
