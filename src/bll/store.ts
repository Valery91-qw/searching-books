import {combineReducers, createStore} from "redux";
import searchReducer from "./search/search-reducer";


export const rootReducer = combineReducers({
    search: searchReducer
})

export const store = createStore(rootReducer)

export type RootReducerType = ReturnType<typeof rootReducer>