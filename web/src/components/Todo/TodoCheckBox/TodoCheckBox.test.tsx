import { render } from '@redwoodjs/testing/web'

import TodoCheckBox from './TodoCheckBox'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('TodoCheckBox', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TodoCheckBox todo={{ id: 1, name: 'test', done: false }} />)
    }).not.toThrow()
  })
})
