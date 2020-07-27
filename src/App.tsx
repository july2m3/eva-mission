import React from 'react';

import Header from './components/header';
import Footer from './components/footer';

import './style.scss';

const App = () => {
  return (
    <>
      <Header />
      <main className="home" id="homie">
        <h1 className="title">Eva Mission</h1>
        <h3 className="sub-title">Love in Action</h3>
      </main>
      <section className="info">
        <ul>
          <li className="question">What is Eva Mission?</li>
          <li>
            Eva Mission is a non-profit organization run by a group of
            volunteers. Our aim is to give back to the community from the
            proceeds of our sponsors and sales of used goods.
          </li>
          <li className="question">How do we give back to the community?</li>
          <li>
            With proceeds from our donated garage sale items, we are able to
            provide immediate help to needy community members and families.
          </li>
          <li className="question">Why do we do this?</li>
          <li>
            By helping others in need, we also aim to plant the seeds of faith,
            love and hope.
          </li>
        </ul>
      </section>
      <Footer />
    </>
  );
};

export default App;
