import React from 'react';

export default function LearnPage(props) {

  return (
    <section className="landing__body">
      <article className="Mission">
        <h2 className="mission__title">Coming Soon</h2>
        <p className="mission__content p--main">
          Visual Learners Rejoice!
        </p>
        <p className="mission__content p--define">
          In future iterations, this card will allow you to take notes while watching related YT videos.
        </p>
      </article>
      <nav className="landing__nav">
        <iframe width="300" height="200" src="https://www.youtube.com/embed/rPleicjySdI?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </nav>
    </section>
  );
}