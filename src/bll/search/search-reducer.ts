import {initialSearch, SearchStateType} from "./search-model";
import {search_constant} from "./search-constants";
import {SearchActionType} from "./search-actions";
import {immutableChangeState} from "./search-utils";

export default function searchReducer(state = initialSearch, action: SearchActionType): SearchStateType {
    switch (action.type) {
        case search_constant.SET_CATEGORY:
            return immutableChangeState(state, action.category, 'currentCategory')
        case search_constant.SET_SORT:
            return immutableChangeState(state, action.sort, 'currentSort')
        case search_constant.SET_SEARCH_VALUE:
            return immutableChangeState(state, action.searchValue, 'searchValue')
        default: return state
    }
}
