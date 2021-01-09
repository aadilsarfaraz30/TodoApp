import React from 'react'
import classes from './Output.module.css';

const output=(props) => {
   
  const items=props.output;
   const displayItem= items.map(item=>{
       return (
            <ul key={item.id}> 
                <p  className={classes.List} key={item.id}>
                 <input 
                 type='text' 
                 value={item.text}
                 onChange={(event)=>props.changedItem(item.id,event.target.value)}/> 
                </p>
               <button className={classes.DeleteButton}
                onClick={()=>props.delete(item.id)}>Delete</button>
            </ul>  
       ) 
           
               
   }) 
    return (
        <div className={classes.Output}>
            {displayItem}
        </div>
    )
}

export default output;
