import React from 'react';

const Home = () => {
  return (
    <main className="home">
      <div className="home-container">
        <h2 className="home__sub-title">
          <span className="quote">"</span>
          Love in action
          <span className="quote">"</span>
        </h2>
        <main className="info">
          <ul>
            <li className="question">What is Eva Mission?</li>
            <li className="answer">
              Eva Mission is a non-profit organization run by a group of
              volunteers.
            </li>
            <li className="question">How do we help others?</li>
            <li className="answer">
              With proceeds from our donated garage sale items, we are able to
              provide immediate help to needy community members and families.
            </li>
            <li className="question">Why do we aim to help others?</li>
            <li className="answer">
              By helping others in need, we also aim to plant the seeds of
              faith, love and hope.
            </li>
          </ul>
        </main>
      </div>
    </main>
  );
};

export default Home;
