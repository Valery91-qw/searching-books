import {render, screen} from "@testing-library/react";
import App from "./App";


describe('App component', () => {
    test('On initial rendering, the component must have a header, body, and footer', () => {
        render(<App />)
        expect(screen.getByRole('banner')).toBeInTheDocument()
    })
})