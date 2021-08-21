import {screen} from "@testing-library/react";
import App from "./App";
import {renderWithRedux} from "../utils/create-store-for-test";


describe('App component', () => {
    test('On initial rendering, the component must have a header, body, and footer', () => {
        renderWithRedux(<App/>)
        expect(screen.getByRole('banner')).toBeInTheDocument()
    })
})