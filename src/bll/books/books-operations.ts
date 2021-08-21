import { call, put, select } from "redux-saga/effects";
import {googleBookApi} from "../../dal/googleBookApi";
import {GetBooksType, putBooks, putNewSetBooks, setTotalCountBooks} from "./books-actions";
import {getAllSearchState} from "../search/search-selectors";
import {SearchStateType} from "../search/search-model";
import {toBooksModelState} from "./books-utils";

export function* fetchBooks (action: GetBooksType) {

    const {currentCategory, currentSort, elementsCount, searchValue }:SearchStateType = yield select(getAllSearchState)

    try {
        const {data} = yield call(
            googleBookApi.getBooks,
            searchValue,
            elementsCount ,
            currentSort,
            currentCategory,
            action.lastIndex )

        const booksStateModel = toBooksModelState(data.items)

        if(action.lastIndex === 0) {
            yield put(putNewSetBooks(booksStateModel))
        } else {
            yield put(putBooks(booksStateModel))
        }

        yield put(setTotalCountBooks(data.totalItems))

    } catch (e) {

    }

}