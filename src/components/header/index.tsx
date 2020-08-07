import React from 'react';

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
          <li>Home</li>
          <li>Our Inspiration</li>
          <li>Personal Stories</li>
          <li>Help Us</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
