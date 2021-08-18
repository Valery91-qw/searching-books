import { call, put } from "redux-saga/effects";
import {googleBookApi, ResponseBookTypes} from "../../dal/googleBookApi";
import {BookType} from "./books-model";
import {GetBooksType, putBooks, setTotalCountBooks} from "./books-actions";

export function* fetchBooks (action: GetBooksType) {

    const {data, status} = yield call(googleBookApi.getBooks, action.searchValue)

    if(status === 200) {
        const booksStateModel = data.items.map((el: ResponseBookTypes): BookType => ({
            imageLinks: {...el.volumeInfo.imageLinks},
            description: el.volumeInfo.description,
            pageCount: el.volumeInfo.pageCount,
            title: el.volumeInfo.title,
            categories: el?.volumeInfo?.categories?.join(','),
            authors: el?.volumeInfo?.authors?.join(','),
        }))
        yield put(putBooks(booksStateModel))
        yield put(setTotalCountBooks(data.totalItems))
    }
}