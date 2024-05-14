
import AddTodo from './AddTodo'
import Request from './Request/Request'
import TodoList from './TodoList'

function App() {

  return (
    <div>
      <h1>Todo App</h1>
      <TodoList/>

      <AddTodo/>

      <Request/>
    </div>
  )
}

export default App
