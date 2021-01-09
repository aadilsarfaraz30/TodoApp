import React, { Component } from 'react';
import Input from '../components/Input/Input';
import Output from '../components/Output/Output';

class List extends Component {
   
   state={
        items:[],
        currentItem:{
         text:'',
         id: ''
         
         },
         isDone: false
   }
   
   inputHandler= (event) =>{
        this.setState({
            currentItem: {
                text: event.target.value,
                id: Date.now()
            }
             
        })
        // this.setState((prevState)=> ({
        //         currentItem : {
        //         text: event.target.value,
        //         id: prevState.id + 1
        //     }
        // }))
   }

   addItems= () =>{
    const item= this.state.currentItem;
    if(item.text !== ''){
        const listItems= [...this.state.items,item]
        this.setState({
            items: listItems,
            currentItem: {
                text: '',
                id: ''
            }
        })
    }

   }

   changeItem = (id,text) =>{
       const updatedItems= this.state.items;
        updatedItems.map(item => {
             if(item.id===id){
                item.text=text
             }   
            return this.setState({
                items: updatedItems,
                
            })
       })
   }

    
            
       
        
//         this.setState({ items: this.state.items.map(todo => {
//             if(todo.id === id) {
//               todo.isDone = !todo.isDone
//             }
//             return todo;
//           })})
// }

   deleteItems= (id) =>{
        // const oldItem= [...this.state.items];
        const updatedList= this.state.items.filter(item=>
                item.id !==id
            )
            this.setState({
                items: updatedList
                
            })
        
   } 
    render() 
    {
        return (
            <div>
                <Input 
                input={this.inputHandler} 
                add={this.addItems} 
                value={this.state.currentItem.text}/>
                
                <Output 
                output={this.state.items} 
                delete={this.deleteItems}
                // isDone={this.state.isDone}
                changedItem={this.changeItem}
                />
            </div>
        )
    }
}

export default List;
