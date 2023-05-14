import { useState, useContext } from "react";
import MyContext from "../StateManagement/MyContext";

function ToDoList(props) {
  
    const [inputValue, setInputValue] = useState("");
  const { addTodoItem, todoList, removeTodoItem } =
  useContext(MyContext);

  return (
  <>

      <div>
        <input
          type="text"
          value={inputValue}
          placeholder={"Type and add todo item"}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          onClick={() => {
            addTodoItem(inputValue);
            setInputValue("");
          }}
        >
          Add
        </button>
      </div>
      <div>
        <ul>
          {todoList.map((todoItem) => (
            <li
              className={`todoItem ${todoItem.completed ? "completed" : ""}`}
              key={todoItem.id}
            >
              {todoItem.label}
              <button
                className="delete"
                onClick={() => removeTodoItem(todoItem.id)}
              >
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ToDoList;
