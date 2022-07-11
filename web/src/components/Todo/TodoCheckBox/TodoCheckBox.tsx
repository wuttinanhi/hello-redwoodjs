import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/dist/toast'

type TodoCheckBoxProps = {
  todo: { id: number; name: string; done: boolean }
}

export const QUERY = gql`
  query EditTodoById($id: Int!) {
    todo: todo(id: $id) {
      id
      name
      done
    }
  }
`
const UPDATE_TODO_MUTATION = gql`
  mutation UpdateTodoMutation($id: Int!, $input: UpdateTodoInput!) {
    updateTodo(id: $id, input: $input) {
      id
      name
      done
    }
  }
`

const TodoCheckBox = ({ todo }: TodoCheckBoxProps) => {
  const [updateTodo, { loading }] = useMutation(UPDATE_TODO_MUTATION, {
    onCompleted: () => {
      toast.success('Todo updated')
      navigate(routes.todos())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input) => {
    const variables = { id: todo.id, input }
    updateTodo({ variables })
  }

  return (
    <input
      type="checkbox"
      name="checkbox"
      checked={todo.done}
      disabled={loading}
      onChange={(e) => onSave({ done: e.target.checked })}
    />
  )
}

export default TodoCheckBox
