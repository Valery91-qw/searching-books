import {render, screen} from "@testing-library/react";
import {BooksContainer} from "./BooksContainer";
import {BookType} from "../../bll/books/books-model";

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

        render(<BooksContainer totalBooks={testData.length} books={testData} />)

        expect(screen.getAllByRole('img').length).toBe(2)
        expect(screen.getByText(/Found/)).toBeInTheDocument()
    })
})