import {ResponseBookTypes} from "../../dal/googleBookApi";
import {BookType} from "./books-model";

export const toBooksModelState = (booksApiModel: Array<ResponseBookTypes>): Array<BookType> => {

    return booksApiModel.map((el: ResponseBookTypes): BookType => ({
        imageLinks: {...el.volumeInfo.imageLinks},
        description: el.volumeInfo.description,
        pageCount: el.volumeInfo.pageCount,
        title: el.volumeInfo.title,
        categories: el?.volumeInfo?.categories?.join(','),
        authors: el?.volumeInfo?.authors?.join(','),
    }))

}