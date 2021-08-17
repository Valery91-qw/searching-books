import {fetchBooks} from "./books-operations";
import {watcher} from "../saga";
import {takeEvery} from "redux-saga/effects";
import {books_constants} from "./books-constants";


describe('redux saga', () => {
   test('the getBook action must be called with the correct worker', () => {

      const generator = watcher()

      expect(generator.next().value).toEqual(takeEvery(books_constants.GET_BOOKS, fetchBooks));
      expect(generator.next().done).toBeTruthy()
   })

})
