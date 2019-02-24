import React, {Component} from 'react';
// import '../Styles/Navigation.scss';

export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return(
      <header>
        <nav className="header__nav">
          <h1 className="nav__title">Quiz Quest</h1>
          <ul className="nav__ul">
            <li>
              <button className="nav__btn nav__btn--home home" onClick={this.props.navClick}><i className="fas fa-home home"></i>
              </button>
            </li>
            <li>
              <button className="nav__btn nav__btn--learn learn brain" onClick={this.props.navClick}><i className="fas fa-brain learn"></i>
              </button>
            </li>
            <li>
              <button className="nav__btn nav__btn--quiz quiz" onClick={this.props.navClick}><i className="fas fa-pen-square quiz"></i>
              </button>
            </li>
            <li>
              <button className="nav__btn nav__btn--review review" onClick={this.props.navClick}><i className="fas fa-clipboard-list review"></i>
              </button>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}