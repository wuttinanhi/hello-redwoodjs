// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Route, Router, Set } from '@redwoodjs/router'

import TodosLayout from 'src/layouts/TodosLayout'

import DefaultLayout from './layouts/DefaultLayout/DefaultLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={DefaultLayout}>
        <Set wrap={TodosLayout}>
          <Route path="/todos/new" page={TodoNewTodoPage} name="newTodo" />
          <Route path="/todos/{id:Int}/edit" page={TodoEditTodoPage} name="editTodo" />
          <Route path="/todos/{id:Int}" page={TodoTodoPage} name="todo" />
          <Route path="/todos" page={TodoTodosPage} name="todos" />
        </Set>

        <Route path="/about" page={AboutPage} name="about" />
        <Route path="/" page={IndexPage} name="index" />
        <Route notfound page={NotFoundPage} />
      </Set>
    </Router>
  )
}

export default Routes
