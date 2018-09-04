import React, { Component } from 'react';
import './styles/task.css';
import data from '../package.json';

class Task extends Component {
    render(){
        return(
            <div>
                <div className='taskName col-lg-12'>
                    <p>Round #</p>
                    <h3>Task</h3>
                </div>
                <div className='col-lg-12 text-center justify-content-center'>
                    <label><input type="checkbox" value=""/>Answer 1</label>
                    <label><input type="checkbox" value=""/>Answer 2</label>
                    <label><input type="checkbox" value=""/>Answer 3</label>
                    <label><input type="checkbox" value=""/>Answer 4</label>
                </div>
                <button className='col-lg-6 btn-continue'>next</button>
            </div>
        );
    }
}

export default Task;