import { takeEvery } from 'redux-saga/effects'
import {fetchBooks} from "./books/books-operations";
import {books_constants} from "./books/books-constants";

export function* watcher() {
    yield takeEvery(books_constants.GET_BOOKS, fetchBooks)
}