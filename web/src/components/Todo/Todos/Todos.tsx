import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Todo/TodosCell'

import TodoCheckBox from '../TodoCheckBox/TodoCheckBox'

const DELETE_TODO_MUTATION = gql`
  mutation DeleteTodoMutation($id: Int!) {
    deleteTodo(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const TodosList = ({ todos }) => {
  const [deleteTodo] = useMutation(DELETE_TODO_MUTATION, {
    onCompleted: () => {
      toast.success('Todo deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete todo ' + id + '?')) {
      deleteTodo({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Done</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id}>
              <td>{truncate(todo.id)}</td>
              <td>{truncate(todo.name)}</td>
              <td>
                <TodoCheckBox todo={todo} />
              </td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.todo({ id: todo.id })}
                    title={'Show todo ' + todo.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editTodo({ id: todo.id })}
                    title={'Edit todo ' + todo.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete todo ' + todo.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(todo.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TodosList
