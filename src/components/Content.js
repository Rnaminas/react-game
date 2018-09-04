import React, { Component } from 'react';
import Task from './Task.js';
import MenuGame from './MenuGame.js';


class Content extends Component {

    render(){

        return (
            <div className='content'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-8'>
                            <Task/>
                        </div>
                        <div className='col-lg-4'>
                            <MenuGame/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Content;