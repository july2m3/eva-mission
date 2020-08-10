import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

const Header = () => {
  const [showOrHide, setShowOrHide] = React.useState('');

  const handleClick = () => {
    const className = showOrHide === '' ? 'show' : '';
    console.log(className);
    setShowOrHide(className);
  };

  return (
    <BrowserRouter>
      <header onClick={handleClick}>
        <nav className="navigation">
          <p className="navigation__title">
            Eva Mission
            <span className="heart">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-heart"
                width="56"
                height="56"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#F44336"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M12 20l-7 -7a4 4 0 0 1 6.5 -6a.9 .9 0 0 0 1 0a4 4 0 0 1 6.5 6l-7 7" />
              </svg>
            </span>
          </p>
          <p className="navigation__menu-icon">=</p>
          <ul className={`navigation__menu ${showOrHide}`}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="inspiration">Our Inspiration</Link>
            </li>
            <li>
              <Link to="personalstories">Personal Stories</Link>
            </li>
            <li>
              <Link to="helpus">Help Us</Link>
            </li>
            <li>
              <Link to="contact">Get in Touch</Link>
            </li>
          </ul>
        </nav>
      </header>
    </BrowserRouter>
  );
};

export default Header;
