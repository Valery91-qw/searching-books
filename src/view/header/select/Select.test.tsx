import {render, screen} from "@testing-library/react";
import {Select} from "./Select";

const setOne = ["one", "two", "three"]
const setTwo = ["one", "two", "three", "four", "five"]

describe('Select component', () => {
    describe('A select component with a different set of elements should display a different number of option elements', () => {
        test("Select with three elements", () => {
            render(<Select option={setOne} />)
            expect(screen.getAllByRole('option').length).toBe(setOne.length)
        })
        test('Select with five elements', () => {
            render(<Select option={setTwo} />)
            expect(screen.getAllByRole('option').length).toBe(setTwo.length)
        })
    })
    test('When transferring data to the Select component, option elements with corrected values should be displayed', () => {
        render(<Select option={setOne}/>)
        expect(screen.getAllByRole('option').length).toBe(setOne.length)
        expect(screen.getByDisplayValue(setOne[0])).toBeInTheDocument()
        expect(screen.queryByDisplayValue(setTwo[2])).not.toBeInTheDocument()
    })
})