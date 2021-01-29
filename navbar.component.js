import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="navbar-item">
          <Link to="/add" className="nav-link">Add Contacts</Link>
          </li>
          <li className="navbar-item">
          <Link to="/view" className="nav-link">View All Contacts</Link>
          </li>
          <li className="navbar-item">
          <Link to="/search" className="nav-link">Search Contact</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}