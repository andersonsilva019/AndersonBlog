import { render, screen } from '@testing-library/react'

import { Button } from '.'

describe('<Button/>', () => {
  it('test', () => {
    render(<Button />)

    expect(screen.getByText(/hello/i)).toBeInTheDocument()
  })
})
