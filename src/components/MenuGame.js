import React, { Component } from 'react';
import './styles/MenuGame.css';


class MenuGame extends Component {
    render(){
        return(
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-4'>
                        <button>Start</button>
                    </div>
                    <div className='col-lg-4'>
                        <button>Cancel</button>
                    </div>
                </div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <h3>Best Players</h3>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <ul>
                                <li>Name - 123456</li>
                                <li>Name - 123456</li>
                                <li>Name - 123456</li>
                                <li>Name - 123456</li>
                                <li>Name - 123456</li>
                            </ul>
                        </div>

                    </div>
                </div>

            </div>
        );
    }
}

export default MenuGame;