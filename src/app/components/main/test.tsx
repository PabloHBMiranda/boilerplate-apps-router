import { render, screen } from '@testing-library/react'
import Main from '.'

describe('<Main />', () => {
  it('should render the heading', () => {
    // renderiza o componente
    const { container } = render(<Main />)
    // busca o elemento
    expect(screen.getByRole('heading', { name: /main/i })).toBeInTheDocument()

    // snapshot
    expect(container.firstChild).toMatchSnapshot()
  })
})
