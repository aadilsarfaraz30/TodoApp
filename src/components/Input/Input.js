import React from 'react'
import classes from './Input.module.css'

const input =(props) => {
    return (
        <div className={classes.Input}>
            <input 
            type='text' 
            placeholder='Enter your text'
            value={props.value}
            onChange={props.input}
             />
            <button type='submit' onClick={props.add}>Add</button> 
        </div>
    )
}

export default input;
