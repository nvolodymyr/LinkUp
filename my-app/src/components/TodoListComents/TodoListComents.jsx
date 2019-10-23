import React, {Component} from 'react';
class TodoListComents extends Component{
 render(){
  return (
   <ul>
     {this.props.items.map(item => (
       <li key={item.id}><div className='nameUser'><pre>{this.props.name}</pre></div><div><pre>{item.text}</pre></div></li>
     ))}
   </ul>
 );
 }
}
export default TodoListComents;