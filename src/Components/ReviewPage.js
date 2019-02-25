import React, {Component} from 'react';

export default class ReviewPage extends Component {
  constructor(props) {
    super(props);
    this.state={}
  }

  render() {
    return(
      <section className="landing__body">
        <article className="Mission">
          <h2 className="Quiz__question">Need to review any questions?</h2>
        </article>
        <nav className="landing__nav">
          <button className="Review__option--1 choice" >Review1</button>
          <button className="Review__option--2 choice" >Review2</button>
          <button className="Review__option--3 choice" >Review3</button>
          <button className="Review__option--4 choice" >Review4</button>
        </nav>
      </section>
    );
  }
}