import { render, screen } from '@testing-library/react'

import Main from '../'

describe('<Main />', () => {
    it('should render Main component', () => {
        const { container } = render(
            <Main
                title="Boilerplate NextJS"
                description="with ReactJS, NextJS and Styled Components"
            />
        )

        expect(container.firstChild).toMatchSnapshot()

        expect(
            screen.getByRole('heading', { name: /Boilerplate NextJS/i })
        ).toBeInTheDocument()
    })

    it('should render the colors correctly', () => {
        const { container } = render(<Main />)

        expect(container.firstChild).toHaveStyle({
            'background-color': '#06092b'
        })
    })
})
