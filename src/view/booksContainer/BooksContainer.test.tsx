import { screen } from "@testing-library/react";
import {BooksContainer} from "./BooksContainer";
import {BookType} from "../../bll/books/books-model";
import {renderWithRedux} from "../../utils/create-store-for-test";

describe('booksContainer component', () => {
    test('The component should render two test items, a field with their number', () => {

        const testData: Array<BookType> = [
            {
                imageLinks: {
                    smallThumbnail: 'first small',
                    thumbnail: 'first large',
                },
                authors: 'one,two',
                title: 'fake title',
                pageCount: 1,
                categories: 'some categories',
                description: 'fake description'
            },
            {
                imageLinks: {
                    smallThumbnail: 'second small',
                    thumbnail: 'second large',
                },
                authors: 'one,two',
                title: 'fake title',
                pageCount: 2,
                categories: 'some categories',
                description: 'fake description'
            }
        ];

        renderWithRedux(<BooksContainer totalBooks={testData.length} books={testData} />)

        expect(screen.getAllByRole('img').length).toBe(2)
        expect(screen.getByText(/Found/)).toBeInTheDocument()
        expect(screen.queryByRole('button')).not.toBeInTheDocument()
    })
    test('If the component receives more than thirty elements, then the button should be rendered', () => {
        const testData = ((book: BookType) => {
            let result: Array<BookType> = []
            for (let i = 0 ; i < 31; i++) {
                result.push({...book, pageCount: book.pageCount * i})
            }
            return result
        })({
            authors: 'one',
            categories: 'fake',
            title: 'some title',
            description: 'fake description',
            pageCount: 3,
            imageLinks: { smallThumbnail: 'small', thumbnail: 'large'} });

        renderWithRedux(<BooksContainer totalBooks={testData.length} books={testData} />)

        expect(screen.getByRole('button')).toBeInTheDocument()
        expect(screen.getAllByRole('img').length).toBe(testData.length)
    })
})