import React from 'react';

const Header = () => {
  return (
    <header>
      <input type="checkbox" id="show-menu" />

      <div id="fix-bar">
        <div className="logo">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Our Inspiration</li>
            <li>Personal Stories</li>
            <li>Help Us</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="push">
          <label className="hamburguer" htmlFor="show-menu">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
      </div>

      <div id="nav">
        <ul className="site-menu">
          <li>
            <a href="#/work">Work</a>
          </li>
          <li className="has-sub">
            <a href="#/about">About</a>
          </li>
          <li>
            <a href="#/careers">Careers</a>
          </li>
          <li>
            <a href="#/ideas">Ideas</a>
          </li>
          <li>
            <a href="#/news">News</a>
          </li>
          <li>
            <a href="#/events">Events</a>
          </li>
          <li>
            <a href="#/contact">Contact</a>
          </li>
          <li className="copy">© 2016 Logo. All Rights Reserved.</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
