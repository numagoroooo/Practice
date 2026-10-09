// API の TodoItem に対応する、フロントエンドで扱う Todo の形
export type Todo = {
  id: number
  title: string | null
  isCompleted: boolean
  createdAt: string
}
