import {applyMiddleware, combineReducers, createStore} from "redux";
import searchReducer from "./search/search-reducer";
import createSagaMiddleware from 'redux-saga'
import {takeEvery } from 'redux-saga/effects'
import {getBooks} from "./search/search-operations";

export const rootReducer = combineReducers({
    search: searchReducer
})

const saga = createSagaMiddleware()

export const store = createStore(rootReducer, applyMiddleware(saga))

saga.run(watcher)

function* watcher() {
    yield takeEvery( 'getBooks', getBooks)
}

export type RootReducerType = ReturnType<typeof rootReducer>