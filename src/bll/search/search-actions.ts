import {search_constant} from "./search-constants";

export const setCategory = (category: string) => ({type: search_constant.SET_CATEGORY, category} as const)
export const setSort = (sort: string) => ({type: search_constant.SET_SORT, sort} as const)
export const setSearchValue = (searchValue: string) => ({type: search_constant.SET_SEARCH_VALUE, searchValue} as const)

type SetCategoryType = ReturnType<typeof setCategory>
type SetSortType = ReturnType<typeof setSort>
type SetSearchValueType = ReturnType<typeof setSearchValue>

export type SearchActionType = SetCategoryType | SetSortType | SetSearchValueType