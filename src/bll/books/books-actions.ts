import {books_constants} from "./books-constants";
import {BookType} from "./books-model";

export const getBooks = () => ({type: books_constants.GET_BOOKS} as const)
export const putBooks = (books: Array<BookType>) => ({type: books_constants.PUT_BOOKS, books} as const)

type PutBooksType = ReturnType<typeof putBooks>

export type BooksActionsType = PutBooksType