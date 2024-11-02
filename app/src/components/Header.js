import React, { Component } from 'react';
import logo from '../img/logo.png';
import '../css/App.css';

class Header extends Component {
    render() {
        return (        
            <div className="App-header">
                <div className="Nav-container">
                    <nav>
                        <a href="#">Home</a>
                        <a href="#">Apps</a>
                        <a href="#">Tags</a>
                        <a href="#">Analytics</a>
                        <a href="#">Users</a>
                        <div className="animation start-home"></div>
                    </nav>
                </div>
                <div className="Banner-container">
                    <img src={logo} className="Banner-logo" alt="logo" />
                    <h2>Kloudnuk</h2>
                </div>
                <div className="Logout">
                    <a className="Button" href="#">Logout</a>
                </div>
            </div>
        );
    }
}
export default Header;