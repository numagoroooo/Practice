import { useState } from 'react'

type TodoRegisterProps = {
  onAdd: (title: string) => void
}

export const TodoRegister = ({ onAdd }: TodoRegisterProps) => {
  const [title, setTitle] = useState<string>('')

  const handleInput = (value: string) => {
    setTitle(value)
  }

  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => handleInput(e.target.value)}
      />
      <button onClick={() => onAdd(title)}>追加</button>
    </div>
  )
}
