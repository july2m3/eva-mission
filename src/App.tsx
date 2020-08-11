import React from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';

// import Header from './components/header';
import Footer from './components/footer';
import Home from './components/home';
import Contact from './components/contact';
import Help from './components/help';
import Inspiration from './components/inspiration';
import Stories from './components/stories';

import './main.scss';

const App = () => {
  const handleClick = () => {
    const className = showOrHide === '' ? 'show' : '';
    console.log(className);
    setShowOrHide(className);
  };
  const [showOrHide, setShowOrHide] = React.useState('');

  return (
    <BrowserRouter>
      <>
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
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="inspiration">Our Inspiration</Link>
              </li>
              <li>
                <Link to="personalstories">Personal Stories</Link>
              </li>
              <li>
                <Link to="help">Help Us</Link>
              </li>
              <li>
                <Link to="contact">Get in Touch</Link>
              </li>
            </ul>
          </nav>
        </header>

        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/help">
            <Help />
          </Route>
          <Route path="/inspiration">
            <Inspiration />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/personalstories">
            <Stories />
          </Route>
        </Switch>
        <Footer />
      </>
    </BrowserRouter>
  );
};

export default App;
