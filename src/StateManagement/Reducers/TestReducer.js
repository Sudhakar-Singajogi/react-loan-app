export const initialState = {
    todoList: []
  };

const actions = {
    ADD_TODO_ITEM: "ADD_TODO_ITEM",
    REMOVE_TODO_ITEM: "REMOVE_TODO_ITEM",
    TOGGLE_COMPLETED: "TOGGLE_COMPLETED"
  };
  
export function TestReducer(state, action) {
    switch (action.type) {
        case actions.ADD_TODO_ITEM:
            console.log('Label added')
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
        case actions.REMOVE_TODO_ITEM: {
          const filteredTodoItem = state.todoList.filter(
            (todoItem) => todoItem.id !== action.todoItemId
          );
          return { todoList: filteredTodoItem };
        }
        case actions.TOGGLE_COMPLETED: {
          const updatedTodoList = state.todoList.map((todoItem) =>
            todoItem.id === action.todoItemId
              ? { ...todoItem, completed: !todoItem.completed }
              : todoItem
          );
          return { todoList: updatedTodoList };
        }
        default:
          return state;
      }
}