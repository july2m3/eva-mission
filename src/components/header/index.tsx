import React from 'react';

const Header = () => {
  return (
    <header>
      <nav className="navigation">
        <p className="navigation__title">Eva Mission</p>
        <p className="navigation__menu-icon">=</p>
        <ul className="navigation__menu">
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
