import {BooksStateType, initialBooksState} from "./books-model";
import {BooksActionsType} from "./books-actions";
import {books_constants} from "./books-constants";

export default function booksReducer(state = initialBooksState, action: BooksActionsType): BooksStateType {
    switch (action.type) {
        case books_constants.PUT_BOOKS:
            return {
                ...state,
                books: [
                    ...state.books.map(el => ({...el, imageLinks: {...el.imageLinks}})),
                    ...action.books
                ]
            }
        case books_constants.SET_TOTAL_COUNT_BOOKS:
            return {
                ...state,
                books: [...state.books.map(el => ({...el, imageLinks: {...el.imageLinks}}))],
                totalCountBooks: action.totalBooks
            }
        case books_constants.PUT_NEW_SET_BOOKS:
            return {
                ...state,
                books: [...action.books]
            }
        default:
            return state
    }
}