import {books_constants} from "./books-constants";
import {BookType} from "./books-model";

export const getBooks = (searchValue: string) => ({type: books_constants.GET_BOOKS, searchValue} as const)
export const putBooks = (books: Array<BookType>) => ({type: books_constants.PUT_BOOKS, books} as const)

type PutBooksType = ReturnType<typeof putBooks>
export type GetBooksType = ReturnType<typeof getBooks>

export type BooksActionsType = PutBooksType