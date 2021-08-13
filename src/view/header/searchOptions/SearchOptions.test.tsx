import { screen} from "@testing-library/react";
import {renderWithRedux} from "../../../utils/create-store-for-test";
import {SearchOptions} from "./SearchOptions";

const setOne = ["one", "two", "three"]
const setTwo = ["one", "two", "three", "four", "five"]

describe('Select component', () => {
    describe('A searchOptions component with a different set of elements should display a different number of option elements', () => {
        test("Select with three elements", () => {
            renderWithRedux(<SearchOptions option={setOne} />)
            expect(screen.getAllByRole('option').length).toBe(setOne.length)
        })
        test('Select with five elements', () => {
            renderWithRedux(<SearchOptions option={setTwo} />)
            expect(screen.getAllByRole('option').length).toBe(setTwo.length)
        })
    })
    test('When transferring data to the Select component, option elements with corrected values should be displayed', () => {
        renderWithRedux(<SearchOptions option={setOne}/>)
        expect(screen.getAllByRole('option').length).toBe(setOne.length)
        expect(screen.getByDisplayValue(setOne[0])).toBeInTheDocument()
        expect(screen.queryByDisplayValue(setTwo[2])).not.toBeInTheDocument()
    })
})