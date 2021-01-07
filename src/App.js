// import logo from './logo.svg';
import './App.css';
import React ,{Component} from 'react';
import Todos from './components/Todos' ;
//this is where we import all the components in our app


class App extends Component {
  /* this si the main app component */
  /*render ife cycle is a method in which it outputs/render  our UI in the browser*/
    state = { 
      todos: [
        {
        id:1,
        title:"Take me out the trash",
        completed:false,
      },
      {
        id:2,
        title:"Dishing that non entity called TX",
        completed:true,
      },
      {
        id:3,
        title:"Finishing the cv-portfolio",
        completed:false,
      }
// 48.25 seconds for React JS crash course


      
    ]
    }
    //we need to know which one is marked complete in our state.,so solution pass id
    markComplete = (id) => {
      console.log(id)

      // this.setState ({ todos: this.state.todos.map(todo) => {
      //   if(todo.id === id) {
      //     todo.completed = !todo.completed
      //   }
      //   return todo;

      // }) });

      // // console.log("From App.js")

    }
    render() { 
      console.log(this.state.todos) 
      return (
      <div className="App">

        <Todos todos = {this.state.todos} markComplete = {this.markComplete} />
        {/*taking our toto state to  passing it in our app*/}
       
      </div>
    );
  }
}
export default App
  
// add the todos in the main component to our tods,
/*Hot reload ,it means it auto relaoad */
/* we have created another component,in src folder called components/Todo.js */