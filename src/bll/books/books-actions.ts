import {books_constants} from "./books-constants";
import {BookType} from "./books-model";

export const getBooks = () => ({type: books_constants.GET_BOOKS,} as const)
export const putBooks = (books: Array<BookType>) => ({type: books_constants.PUT_BOOKS, books} as const)
export const setTotalCountBooks = (totalBooks: number) => ({type: books_constants.SET_TOTAL_COUNT_BOOKS, totalBooks} as const)

type PutBooksType = ReturnType<typeof putBooks>
type SetTotalCountBooksType = ReturnType<typeof setTotalCountBooks>
export type GetBooksType = ReturnType<typeof getBooks>

export type BooksActionsType = PutBooksType | SetTotalCountBooksType