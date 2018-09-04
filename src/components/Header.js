import React, { Component } from 'react';
import './styles/header.css';

class Header extends Component {
    render(){
        return(
            <header className='container text-center'>
                <div className='row justify-content-center'>
                    <nav className='col-lg-12'>Someting will be here...</nav>
                </div>
                <div className='row justify-content-center titleHead'>
                    <h1 className='col-lg-6 text-center'>Learning the capitals of countries and the famous cities of all countries</h1>
                </div>
            </header>
        );
    }
}

export default Header;