import {SearchStateType} from "./search-model";
import {setCategory, setSort} from "./search-actions";
import searchReducer from "./search-reducer";

let startSearchState: SearchStateType

beforeEach(() => {
    startSearchState ={
        categories: ['one','two'],
        sorted: ['first', 'second'],
        currentCategory: 'one',
        currentSort: 'first',
        elementsCount: 10
    }
})

describe('search reducer', () => {
    describe('search reducer should return a new object', () => {
        test('setCategory action', () => {
            const endState = searchReducer(startSearchState, setCategory(startSearchState.categories[1]))
            expect(endState.sorted).not.toBe(startSearchState.sorted)
            expect(endState.categories).not.toBe(startSearchState.categories)
            expect(endState).not.toBe(startSearchState)
        })
        test('setSort action', () => {
            const endState = searchReducer(startSearchState, setSort(startSearchState.sorted[1]))
            expect(endState.categories).not.toBe(startSearchState.categories)
            expect(endState.sorted).not.toBe(startSearchState.sorted)
            expect(endState).not.toBe(startSearchState)
        })
    })
    test('the setCategory action should set a new value and not change any other scalar values', () => {
        const endState = searchReducer(startSearchState, setCategory(startSearchState.categories[1]))
        expect(endState.currentCategory).toBe(startSearchState.categories[1])
        expect(endState.currentSort).toBe(startSearchState.currentSort)
        expect(endState.elementsCount).toBe(startSearchState.elementsCount)
    })
    test('the setSort action should set a new value and not change any other scalar values', () => {
        const endState = searchReducer(startSearchState, setSort(startSearchState.sorted[1]))
        expect(endState.currentSort).toBe(startSearchState.sorted[1])
        expect(endState.currentCategory).toBe(startSearchState.currentCategory)
        expect(endState.elementsCount).toBe(startSearchState.elementsCount)
    })
})