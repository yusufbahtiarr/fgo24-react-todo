import React, { useContext } from "react";
import { TodoContext } from "./TodoContext";
import { Trash } from "lucide-react";
function TodoList() {
  const { todos, removeTodo, toggleTodo } = useContext(TodoContext);

  return (
    <div className="max-w-200 min-h-fit pb-4">
      <ul className="">
        {todos.length === 0 ? (
          <li className="text-gray-500 text-center p-5">Belum ada todo</li>
        ) : (
          todos.map((todo) => (
            <li
              key={todo.id}
              className="flex justify-between items-center hover:bg-slate-300 cursor-pointer border-b-2 border-gray-300"
            >
              <label
                htmlFor={todo.id}
                className="flex flex-1 items-center justify-start gap-4 p-6 w-full cursor-pointer"
              >
                <input
                  id={todo.id}
                  type="checkbox"
                  value={todo.text}
                  checked={todo.completed ?? false}
                  onChange={() => toggleTodo(todo.id)}
                  className="h-5 w-5 "
                />{" "}
                <span
                  className={
                    todo.completed
                      ? "capitalize line-through text-gray-700"
                      : "capitalize text-gray-700"
                  }
                >
                  {todo.text}
                </span>
              </label>
              <button
                onClick={() => removeTodo(todo.id)}
                // className="bg-amber-600 rounded px-3 py-2 w-20 mr-6 font-medium cursor-pointer text-white hover:text-gray-100 hover:bg-amber-500"
                className="cursor-pointer pr-6"
              >
                <Trash className="size-6" />
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default TodoList;
