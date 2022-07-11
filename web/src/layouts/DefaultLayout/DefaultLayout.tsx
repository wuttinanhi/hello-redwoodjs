import { Link, routes } from '@redwoodjs/router'

type DefaultLayoutProps = {
  children?: React.ReactNode
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <>
      <nav>
        <Link to={routes.index()}>Home</Link>{' '}
        <Link to={routes.todos()}>Todo</Link>{' '}
        <Link to={routes.about()}>About</Link>
      </nav>
      <br />

      {children}
    </>
  )
}

export default DefaultLayout
