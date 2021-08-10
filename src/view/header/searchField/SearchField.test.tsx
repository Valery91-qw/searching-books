import {render, screen} from "@testing-library/react";
import {SearchField} from "./SearchField";
import userEvent from "@testing-library/user-event";

describe('searchField component', () => {
    test('The search field must implement one input field and an icon', () => {
        render(<SearchField /> )
        expect(screen.getByRole('textbox')).toBeInTheDocument()
        expect(screen.getByRole('img')).toBeInTheDocument()
    })
    test('The input element must be selected by placeholder, must display the imprinted text', () => {
        render(<SearchField />)
        const input = screen.getByPlaceholderText('hello')
        userEvent.type(input, 'World')
        expect(screen.getByDisplayValue('World')).toBeInTheDocument()
    })
})