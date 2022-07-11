export const schema = gql`
  type Todo {
    id: Int!
    name: String!
    done: Boolean!
  }

  type Query {
    todos: [Todo!]! @requireAuth
    todo(id: Int!): Todo @requireAuth
  }

  input CreateTodoInput {
    name: String!
    done: Boolean!
  }

  input UpdateTodoInput {
    name: String
    done: Boolean
  }

  type Mutation {
    createTodo(input: CreateTodoInput!): Todo! @requireAuth
    updateTodo(id: Int!, input: UpdateTodoInput!): Todo! @requireAuth
    deleteTodo(id: Int!): Todo! @requireAuth
  }
`
