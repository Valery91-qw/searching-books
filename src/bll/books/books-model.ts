
export const initialBooksState: BooksStateType = {
    books: []
}

export type BooksStateType = {
    books: Array<BookType>
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