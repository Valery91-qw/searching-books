import {render, screen} from "@testing-library/react";
import {SearchField} from "./SearchField";

describe('searchField component', () => {
    test('The search field must implement one input field and an icon', () => {
        render(<SearchField /> )
        expect(screen.getByRole('textbox')).toBeInTheDocument()
        expect(screen.getByRole('img')).toBeInTheDocument()
    })
})