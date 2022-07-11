import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const IndexPage = () => {
  return (
    <>
      <MetaTags title="Index" description="Index page" />

      <h1>IndexPage</h1>
      <p>
        Find me in <code>./web/src/pages/IndexPage/IndexPage.tsx</code>
      </p>
      <p>
        My default route is named <code>index</code>, link to me with `
        <Link to={routes.index()}>Index</Link>`
      </p>
    </>
  )
}

export default IndexPage
