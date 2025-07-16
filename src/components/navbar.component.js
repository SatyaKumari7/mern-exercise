import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false
    };
  }

  toggleMenu = () => {
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  };

  closeMenu = () => {
    this.setState({ isMenuOpen: false });
  };

  render() {
    return (
      <nav className="navbar">
        <Link to="/" className="navbar-brand" onClick={this.closeMenu}>
          TrackU
        </Link>

        <div className="hamburger" onClick={this.toggleMenu}>
          ☰
        </div>

        <ul className={`navbar-nav ${this.state.isMenuOpen ? 'open' : ''}`}>
          <li className="navbar-item">
            <Link to="/exercises" className="nav-link" onClick={this.closeMenu}>Exercises</Link>
          </li>
          <li className="navbar-item">
            <Link to="/create" className="nav-link" onClick={this.closeMenu}>Create Exercise Log</Link>
          </li>
          <li className="navbar-item">
            <Link to="/user" className="nav-link" onClick={this.closeMenu}>Create User</Link>
          </li>
        </ul>
      </nav>
    );
  }
}
