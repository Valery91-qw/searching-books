import {fetchBooks} from "./books-operations";
import {watcher} from "../saga";
import {call, put, takeEvery} from "redux-saga/effects";
import {books_constants} from "./books-constants";
import {getBooks, putBooks, setTotalCountBooks} from "./books-actions";
import {googleBookApi, ResponseType} from "../../dal/googleBookApi";
import {AxiosResponse} from "axios";
import {BookType} from "./books-model";

jest.mock("../../dal/googleBookApi")

const googleBookApiMock = googleBookApi as jest.Mocked<typeof googleBookApi>

describe('redux saga', () => {
   test('the getBook action must be called with the correct worker', () => {

      const generator = watcher()

      expect(generator.next().value).toEqual(takeEvery(books_constants.GET_BOOKS, fetchBooks));
      expect(generator.next().done).toBeTruthy()
   })

   test('The fetchBooks saga should pass the test correctly with the current test data', () => {

      const resolve: AxiosResponse<ResponseType> = {
         status: 200,
         statusText: 'OK',
         data: {
            items: [
               {volumeInfo : {
                  authors: ['one', 'two'],
                     title: 'some title',
                     pageCount: 1,
                     description: 'fake',
                     categories: ['one', 'two'],
                     imageLinks: {
                     smallThumbnail: 'fake small',
                        thumbnail: 'fake large',
                     }
                  }},
            ],
            totalItems: 1,
            kind: 'none'
         },
         config: {

         },
         headers: '',
         request: ''
      }

      const convertedType: Array<BookType> = [
         {authors: 'one,two', categories: 'one,two', description: 'fake', imageLinks: {
            smallThumbnail: 'fake small',
               thumbnail: 'fake large',
            }, title : 'some title', pageCount: 1}
      ]

      const generator = fetchBooks(getBooks('hello', 1))

      expect(generator.next().value).toEqual(call(googleBookApiMock.getBooks, 'hello' , 1))

      expect(generator.next(resolve).value).toEqual(put(putBooks(convertedType)))

      expect(generator.next().value).toEqual(put(setTotalCountBooks(resolve.data.totalItems)))

      expect(generator.next().done).toBeTruthy()
   })
})
