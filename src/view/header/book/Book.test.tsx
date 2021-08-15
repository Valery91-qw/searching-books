import {render, screen} from "@testing-library/react";
import {Book} from "./Book";
import {BookType} from "../../../bll/books/books-model";



const testData: BookType = {
        description: 'Test Book',
        imageLinks: {
            smallThumbnail: 'empty path',
            thumbnail: 'empty path'
        },
        authors: 'one Author,two Author',
        categories: 'first,second',
        pageCount: 20,
        title: 'empty book'

}

describe('Book component', () => {
    test('the book component must implement at least an image and one text field with correct title', () => {
        render(<Book {...testData} />)
        expect(screen.getByRole('img')).toBeInTheDocument()
        expect(screen.getByRole('heading')).toBeInTheDocument()
        expect(screen.getByRole('heading', {name: testData.title})).toBeInTheDocument()
    })
    test('All authors should be displayed', () => {
        render(<Book {...testData} />)
        expect(screen.getByText(testData.authors.split(',')[0])).toBeInTheDocument()
        expect(screen.getByText(testData.authors.split(',')[1])).toBeInTheDocument()
    })
    test('Only the first category should be displayed', () => {
        render(<Book {...testData} />)
        expect(screen.getByText(testData.categories.split(',')[0])).toBeInTheDocument()
        expect(screen.queryByText(testData.categories.split(',')[1])).not.toBeInTheDocument()
    })
})