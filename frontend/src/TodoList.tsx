import { useState } from 'react'
import { TodoRegister } from './TodoRegister'
import type { Todo } from './types'

export const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([])

  const handleAddTodo = (title: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      title: title,
      isCompleted: false,
      createdAt: new Date().toString(),
    }

    setTodos((prev) => [...prev, newTodo])
  }

  return (
    <div>
      <TodoRegister onAdd={handleAddTodo} />
      {todos.map((todo) => (
        <div>{todo.title}</div>
      ))}
    </div>
  )
}
