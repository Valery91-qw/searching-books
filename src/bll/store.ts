import {applyMiddleware, combineReducers, createStore} from "redux";
import searchReducer from "./search/search-reducer";
import booksReducer from "./books/books-reducer";
import createSagaMiddleware from 'redux-saga'
import {watcher} from "./saga";

export const rootReducer = combineReducers({
    search: searchReducer,
    books: booksReducer,
})

const saga = createSagaMiddleware()

export const store = createStore(rootReducer, applyMiddleware( saga ))

saga.run(watcher)


export type RootReducerType = ReturnType<typeof rootReducer>