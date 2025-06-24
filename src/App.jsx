import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [edetingId, setIdetingId] = useState(null);
  const [editInput, setEditInput] = useState("");

  const addTodo = () => {
    if (!input.trim()) return;
    setTodos([...todos, { id: crypto.randomUUID(), text: input, completes: false}]);
    setInput("");
  };

  const toggleComplete = (id) => {
    setTodos(
    todos.map((todo) => {
      todo.id === id ? {...todo, comleted: !todo.completed } : todo
      
    }
  )
    )
  }
 const deleteTodo = (id) => {
  setTodos(todos.filter((todo) => todo.id !== id));
};

  const startEdit = (id, text) => {
    setIdetingId(id);
    setEditInput(text);
  };

const saveEdit = (id) => {
  setTodos(
    todos.map((todo) => 
      todo.id === id ? {...todo, text: editInput } : todo
  )
);
setIdetingId(null); 
setEditInput("");
    

  
};

const completedCount = todos.filter((todo) => todo.comleted).length;
const uncompletedCount = todos.length - completedCount;
 return(
  <div>
    <h2> alisher</h2>
    <div>

      <input type="text" value={input}  
      onChange={(e) => setInput(e.target.value)} 
      placeholder="add task"
      />
      <button onClick={addTodo}>add</button>

    </div>
    <h2>Task list</h2>
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
      <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleComplete(todo.id)}
            />
          {edetingId === todo.id ? (
            <><input 
            type="text" 
            onChange={(e) => setEditInput(e.target.value)}
            />
            <button onClick={() => saveEdit(todo.id)}>save</button>
            </>
          ) : (
            <span>
              {todo.text}
            </span>
          )} 
          <button onClick={() => deleteTodo(todo.id)}>delete</button>
          {edetingId !== toolbar.id && (
            <button onClick={() => startEdit(todo.id, todo.text)}>edit</button>
          )}
        </li>

      ))}
    </ul>
    <div>
      completed: {completedCount} | uncompleted: {uncompletedCount}
    </div>
  </div>
 )
}

export default App