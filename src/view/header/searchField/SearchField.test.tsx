import { screen} from "@testing-library/react";
import {SearchField} from "./SearchField";
import {renderWithRedux} from "../../../utils/create-store-for-test";

describe('searchField component', () => {
    test('The search field must implement one input field and an icon and button', () => {
        renderWithRedux(<SearchField searchValue={''} handlePressButton={jest.fn} /> )
        expect(screen.getByRole('textbox')).toBeInTheDocument()
        expect(screen.getByRole('img')).toBeInTheDocument()
        expect(screen.getByRole('button')).toBeInTheDocument()
    })
    test('Input element should render with correct value', () => {
        renderWithRedux(<SearchField searchValue={'World'} handlePressButton={jest.fn}/>)
        expect(screen.getByDisplayValue('World')).toBeInTheDocument()
    })
})