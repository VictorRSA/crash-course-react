//  no need to import css class
import React ,{Component} from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';
//
class Todos extends Component {


  // markComplete = function () {
  //   console.log("Hello");
  //  becuase the real STATE In in our APP.js}
          //  console.log(this.props)
  /* this si the main app component */
  /*render ife cycle is a method in which it outputs/render  our UI in the browser*/
  render() {  
    // console.log(this.props.todos)
    //it displays them in the browsers
    // we want to loop through our todos and output text to
    //map is a high order array maethod,return array from an array

    return  this.props.todos.map((todo) => (

      // when we map,it creates a list,and it must have a unique key else error on the browser console for each todo we map,return somethothing,todo is passed in todo as  property,
      <TodoItem  key = {todo.id} todo={todo} markComplete= {this.markComplete}/>
      // we can see TodoItme is a props,==property hello three times,we want to display the current todo
    ));
  }
  
}

//PropTypes
TodoItem.propTypes = {
  todos:PropTypes.array.isRequired
}
export default Todos;
  
/*Hot reload ,it means it auto relaoad */
/* we have created another component,in src folder called components/Todo.js */
// /*prop type,is the property component should have */
