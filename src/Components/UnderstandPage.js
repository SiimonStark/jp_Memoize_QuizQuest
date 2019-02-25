import React, {Component} from 'react';

export default class UnderstandPage extends Component {
  constructor(props) {
    super(props);
    this.state={}
  }

  render() {
    return(
      <section className="landing__body">
        <article className="Mission">
          <h2 className="Quiz__question">What does reduce Return?</h2>
        </article>
        <nav className="landing__nav">
          <button className="Quiz__choice--1 choice" >Thing1</button>
          <button className="Quiz__choice--2 choice" >Thing2</button>
          <button className="Quiz__choice--3 choice" >Thing3</button>
          <button className="Quiz__choice--4 choice" >Thing4</button>
        </nav>
      </section>
    );
  }
}