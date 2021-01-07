import React, { Component } from 'react'
import PropTypes from 'prop-types';


export class TodoItem extends Component {
    //putting our style with state,in our UI components
    getStyle = () => {
        return {

        background: '#f4f4f4',
        padding:'10px',
        borderBottom:'1px #ccc dotted',
        textDecoration: this.props.todo.completed ? 
        'line-through' : 'none'
        }
      
        
        //this style checks the todoItme if completed or not and apply line through if completed,putting dynamic style=style,from our state ={id:1,title,completed:true/false}
        // if (this.props.todo.completed) {
        //     return {
        //         textDecoration: 'line-through'
        //     }
        // }
        // else {
        //     return {
        //         textDecoration: 'none'

    //     //     }
    //     // }

    // }

    // /* Another way of wrting the above long code using a turnary operator
    // getStyle = ()  => {
        // return {}
    // }
//     */
//    markComplete = (e) => {
//        console.log(this.props) 
//     // TypeError: overcome by using an arrow function or put (this.bind) Cannot read property 'props' of undefined

   }
   //we have to component drilling since no Redux,climb the tree, WE HAVE STATE INSIDE OUR App.js,climb the ladder,from todoitme--->Todo-->App.js
    render() {
        const { id,title } = this.props.todo;

        return (
            <div style={this.getStyle()}>
                <p>
                    {/*when we check the box,run onchange markCOmplete*/}
                    <input type='checkbox' onChange={this.props.markComplete.bind
                    (this,id)} /> {''}
                    {title}
                    {/*bind(this,this.props.todo.id) instead of using this,i used destructuring  our id,will move from Todo to app.js*/}
                </p>
                {/*WE styling UI based on state of our react,set style={method} app*/}
                <p>{this.props.todo.title}</p>
                {/*we are using the todo  object's properties from the Todo Components,because we have imported it */}
                {/*The list should have a key,something to avoid the browser error*/}
            </div>
        )
    }
}


//PropTypes
TodoItem.propTypes = {
    todos:PropTypes.array.isRequired
  }

//   const itemStyle = {
//       backgroundColor:'#f4f4f4'
//   }
//I want the style to change depending on the  state
export default TodoItem;
