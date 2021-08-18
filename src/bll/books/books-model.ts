
export const initialBooksState: BooksStateType = {
    books: [],
    totalCountBooks: undefined
}

export type BooksStateType = {
    books: Array<BookType>
    totalCountBooks: number | undefined
}

export type BookType = {
        authors: string
        categories: string
        description: string
        imageLinks: {
            smallThumbnail: string
            thumbnail: string
        }
        pageCount: number
        title: string
}