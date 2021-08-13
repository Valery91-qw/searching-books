import {screen} from "@testing-library/react";
import {Header} from "./Header";
import {renderWithRedux} from "../../utils/create-store-for-test";


describe('Header component', () => {
    test('The Header component should display an element such as a text box, two searchOptions boxes, and a title', () => {
        renderWithRedux(<Header />)
        expect(screen.getByRole('heading')).toBeInTheDocument()
        expect(screen.getByRole('textbox')).toBeInTheDocument()
        expect(screen.getAllByRole('combobox').length).toBe(2)
    })
})