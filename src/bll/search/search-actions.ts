import {search_constant} from "./search-constants";

export const setCategory = (category: string) => ({type: search_constant.SET_CATEGORY, category} as const)
export const setSort = (sort: string) => ({type: search_constant.SET_SORT, sort} as const)

type SetCategoryType = ReturnType<typeof setCategory>
type SetSortType = ReturnType<typeof setSort>

export type SearchActionType = SetCategoryType | SetSortType