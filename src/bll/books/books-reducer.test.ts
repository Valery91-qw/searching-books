import {BooksStateType, BookType} from "./books-model";
import booksReducer from "./books-reducer";
import {putBooks} from "./books-actions";

let startBooksState: BooksStateType

beforeEach(() => {
    startBooksState = {
        books: []
    }
})

describe('Books reducer', () => {
    test('Initial state is empty, after calling putBooks AC the test dataset must be present in the state', () => {
        const testData: Array<BookType> = [{
                categories: "one, two",
                title: 'test title',
                authors: 'nik, mike',
                description: 'tested descriptions',
                pageCount: 430,
                imageLinks: {
                    thumbnail: 'fake link 1',
                    smallThumbnail: 'fake link 2'
                }},
            {
                    categories: 'three ,four',
                    title: 'test title 1',
                    authors: 'nik 1, mike 1',
                    description: 'tested descriptions',
                    pageCount: 222,
                    imageLinks: {
                        thumbnail: 'fake link 3',
                        smallThumbnail: 'fake link 4'
                    }},
            ]
        const endState = booksReducer(startBooksState, putBooks(testData))

        expect(endState.books.length).toBe(2)
        expect(endState.books[0].title).toBe(testData[0].title)
        expect(startBooksState.books.length).toBe(0)
    })
    test('If there was already data in the state, then a new dataset will be added from the end', () => {
        const testData: Array<BookType> = [
            {
            categories: "one, two",
            title: 'test title',
            authors: 'nik, mike',
            description: 'tested descriptions',
            pageCount: 430,
            imageLinks: {
                thumbnail: 'fake link 1',
                smallThumbnail: 'fake link 2'
            }},
            {
                categories: 'three ,four',
                title: 'test title 1',
                authors: 'nik 1, mike 1',
                description: 'tested descriptions',
                pageCount: 222,
                imageLinks: {
                    thumbnail: 'fake link 3',
                    smallThumbnail: 'fake link 4'
                }},
        ]
        const intermediateState = booksReducer(startBooksState, putBooks(testData))

        expect(intermediateState.books.length).toBe(2)

        const endState = booksReducer(intermediateState, putBooks(testData))

        expect(endState.books[0]).not.toBe(intermediateState.books[0])
        expect(endState.books[0].imageLinks).not.toBe(intermediateState.books[0].imageLinks)
        expect(endState.books.length).toBe(4)
    })
})