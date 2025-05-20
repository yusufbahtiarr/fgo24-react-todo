import { TodoProvider } from "./component/TodoContext";
import Input from "./component/Input";
import TodoList from "./component/TodoList";

function App() {
  return (
    <div className="max-w-lg bg-slate-200 min-h-140 rounded-2xl mx-auto sm:mx-10 mt-10">
      <TodoProvider>
        <Input />
        <TodoList />
      </TodoProvider>
    </div>
  );
}

export default App;
