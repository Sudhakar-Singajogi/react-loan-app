// import React, { useReducer } from 'react';
// import TestContext from '../MyContext';
// // import { initialState } from '../Reducers/TestReducer';
// import { TestReducer, initialState } from "../Reducers/TestReducer"

// const actions = {
//     ADD_TODO_ITEM: "ADD_TODO_ITEM",
//     REMOVE_TODO_ITEM: "REMOVE_TODO_ITEM",
//     TOGGLE_COMPLETED: "TOGGLE_COMPLETED"
//   };
  
// const TestProvider = ({children}) => {
//     const [state, dispatch] = useReducer(TestReducer, initialState)

//     const value = {
//         todoList: state.todoList,
//         addTodoItem: (todoItemLabel) => {
//             console.log('add label')
//           dispatch({ type: actions.ADD_TODO_ITEM, todoItemLabel });
//         },
//         removeTodoItem: (todoItemId) => {
//           dispatch({ type: actions.REMOVE_TODO_ITEM, todoItemId });
//         },
//         markAsCompleted: (todoItemId) => {
//           dispatch({ type: actions.TOGGLE_COMPLETED, todoItemId });
//         }
//       };
    
//       return (
//         <TestContext.Provider value={value}>
//           {children}
//         </TestContext.Provider>
//       );
    
// }

// export default TestProvider;

import MyContext from "../MyContext";
import { useReducer } from "react";

const initialState = {
    todoList:[]
}

function reducer(state, action) {
    const {type, payload} = action;
    switch(type) {
        case "ADD_TODO_ITEM":
            return {
                todoList: [
                  ...state.todoList,
                  {
                    id: new Date().valueOf(),
                    label: action.todoItemLabel,
                    completed: false
                  }
                ]
              };
        case "REMOVE_TODO_ITEM":
            const filteredItems = state.todoList.filter((todoItem) =>  todoItem.id !== action.id )
            return {
                todoList:filteredItems
            }
        case "TOGGLE_COMPLETED": 
        const updatedTodoList = state.todoList.map((todoItem) =>
            todoItem.id === action.todoItemId
              ? { ...todoItem, completed: !todoItem.completed }
              : todoItem
          );
          return { todoList: updatedTodoList };
        default:
        return {
            ...state
        }            
    }
}

const TestProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const addTodoItem = (todoItemLabel) => {
        dispatch({ type: 'ADD_TODO_ITEM', todoItemLabel });
    }

    const removeTodoItem = (labelId) => {
        dispatch({type:"REMOVE_TODO_ITEM", id:labelId})
    }

    const markAsCompleted = (todoItemId) => {
        dispatch({ type: 'TOGGLE_COMPLETED', todoItemId });
    }
    const value = {
        todoList:state.todoList,
        addTodoItem,
        removeTodoItem,
        markAsCompleted
    }
    return (<MyContext.Provider value={value} >{children}</MyContext.Provider>)
}

export default TestProvider
