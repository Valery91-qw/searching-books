import {combineReducers, createStore} from "redux";
import searchReducer from "./search/search-reducer";
import booksReducer from "./books/books-reducer";

export const rootReducer = combineReducers({
    search: searchReducer,
    books: booksReducer,
})


export const store = createStore(rootReducer)

export type RootReducerType = ReturnType<typeof rootReducer>