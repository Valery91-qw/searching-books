import {initialSearch, SearchStateType} from "./search-model";
import {search_constant} from "./search-constants";
import {SearchActionType} from "./search-actions";

export default function searchReducer(state = initialSearch, action: SearchActionType): SearchStateType {
    switch (action.type) {
        case search_constant.SET_CATEGORY:
            return {
                ...state,
                categories: [...state.categories],
                sorted: [...state.sorted],
                currentCategory: action.category,
            }
        case search_constant.SET_SORT:
            return {
                ...state,
                categories: [...state.categories],
                sorted: [...state.sorted],
                currentSort: action.sort,
            }
        default: return state
    }
}