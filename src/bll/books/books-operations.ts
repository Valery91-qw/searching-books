import { call, put, select } from "redux-saga/effects";
import {googleBookApi, ResponseBookTypes} from "../../dal/googleBookApi";
import {BookType} from "./books-model";
import {GetBooksType, putBooks, putNewSetBooks, setTotalCountBooks} from "./books-actions";
import {allSearchState} from "../search/search-selectors";
import {SearchStateType} from "../search/search-model";

export function* fetchBooks (action: GetBooksType) {

    const {currentCategory, currentSort, elementsCount, searchValue }:SearchStateType = yield select(allSearchState)

    try {
        const {data} = yield call(
            googleBookApi.getBooks,
            searchValue,
            elementsCount ,
            currentSort,
            currentCategory,
            action.lastIndex
        )

        const booksStateModel = data.items.map((el: ResponseBookTypes): BookType => ({
            imageLinks: {...el.volumeInfo.imageLinks},
            description: el.volumeInfo.description,
            pageCount: el.volumeInfo.pageCount,
            title: el.volumeInfo.title,
            categories: el?.volumeInfo?.categories?.join(','),
            authors: el?.volumeInfo?.authors?.join(','),
        }))
        if(action.lastIndex === 0) {
            yield put(putNewSetBooks(booksStateModel))
        } else {
            yield put(putBooks(booksStateModel))
        }

        yield put(setTotalCountBooks(data.totalItems))

    } catch (e) {

    }

}