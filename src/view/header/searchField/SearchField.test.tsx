import { screen} from "@testing-library/react";
import {SearchField} from "./SearchField";
import userEvent from "@testing-library/user-event";
import {renderWithRedux} from "../../../utils/create-store-for-test";

describe('searchField component', () => {
    test('The search field must implement one input field and an icon and button', () => {
        renderWithRedux(<SearchField /> )
        expect(screen.getByRole('textbox')).toBeInTheDocument()
        expect(screen.getByRole('img')).toBeInTheDocument()
        expect(screen.getByRole('button')).toBeInTheDocument()
    })
    test('The input element must be selected by placeholder, must display the imprinted text', () => {
        renderWithRedux(<SearchField />)
        const input = screen.getByPlaceholderText('Search')
        userEvent.type(input, 'World')
        expect(screen.getByDisplayValue('World')).toBeInTheDocument()
    })
})