import {render, screen} from "@testing-library/react";
import {Header} from "./Header";


describe('Header component', () => {
    test('The Header component should display an element such as a text box, two select boxes, and a title', () => {
        render(<Header />)
        expect(screen.getByRole('heading')).toBeInTheDocument()
        expect(screen.getByRole('textbox')).toBeInTheDocument()
        expect(screen.getAllByRole('combobox').length).toBe(2)
    })
})