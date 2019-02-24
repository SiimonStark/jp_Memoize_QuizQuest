import React from 'react';

export default function IntroBody (props) {

  return(
    <section className="landing__body">
      <article className="Mission">
        <h2 className="mission__title">Array Proto Training</h2>
        <p className="mission__content p--main">
          As a blooming developer, it is critical to learn, understand, and retain the fundamentals of array prototypes.
          Arrays and objects are the more complex data types that are available to us in JavaScript.
        </p>
        <p className="mission__content p--define">
          Prototype methods are functions that allow you to manipulate the value of a particular data type or class. JavaScript comes with several built-in data types that each have their own prototype methods, that allow you to interact with them in certain ways. 
        </p>
      </article>
      <nav className="landing__nav">
        <button className="landing__btn learn" onClick={props.navClick}>Learn
              <i className="fas fa-brain learn"></i></button>
        <button className="landing__btn quiz" onClick={props.navClick}>Quiz
              <i className="fas fa-pen-square quiz"></i></button>
        <button className="landing__btn review" onClick={props.navClick}>Review
              <i className="fas fa-clipboard-list review"></i></button>
      </nav>
    </section>
  );
}