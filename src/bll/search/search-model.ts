
export const initialSearch: SearchStateType = {
    categories: ['all', 'art', 'biography', 'computers', 'history', 'medical', 'poetry'],
    sorted: ['relevance', 'newest'],
    elementsCount: 30,
    currentCategory: 'all',
    currentSort: 'relevance',
}
export type SearchStateType = {
    categories: Array<string>
    sorted: Array<string>
    elementsCount: number
    currentCategory: string
    currentSort: string
}