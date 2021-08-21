import {render, screen} from "@testing-library/react";
import {ProgressBar} from "./ProgressBar";


describe('Progress bar component', () => {
    test('the progress bar should be displayed with props isProgress equal to true', () => {
        render(<ProgressBar isProgress={true} />)
        expect(screen.getByRole('progressbar')).toBeInTheDocument()
    })
})