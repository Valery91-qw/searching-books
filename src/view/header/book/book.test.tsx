import {render, screen} from "@testing-library/react";
import {Book} from "./book";
import {BookTypes} from "../../../dal/googleBookApi";


const testData: BookTypes = {
    volumeInfo: {
        description: 'Test Book',
        imageLinks: {
            smallThumbnail: 'empty path',
            thumbnail: 'empty path'
        },
        authors: ['one Author', 'two Author'],
        categories: ['first', 'second'],
        pageCount: 20,
        title: 'empty book'
    }
}


describe('Book component', () => {
    test('the book component must implement at least an image and one text field with correct title', () => {
        render(<Book book={testData} />)
        expect(screen.getByRole('img')).toBeInTheDocument()
        expect(screen.getByRole('heading')).toBeInTheDocument()
        expect(screen.getByRole('heading', {name: testData.volumeInfo.title})).toBeInTheDocument()
    })
    test('All authors should be displayed', () => {
        render(<Book book={testData} />)
        expect(screen.getByText(testData.volumeInfo.authors[0])).toBeInTheDocument()
        expect(screen.getByText(testData.volumeInfo.authors[1])).toBeInTheDocument()
    })
    test('Only the first category should be displayed', () => {
        render(<Book book={testData} />)
        expect(screen.getByText(testData.volumeInfo.categories[0])).toBeInTheDocument()
        expect(screen.queryByText(testData.volumeInfo.categories[1])).not.toBeInTheDocument()
    })
})