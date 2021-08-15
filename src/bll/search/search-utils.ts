import {SearchStateType} from "./search-model";

export const immutableChangeState = (
    state: SearchStateType,
    actionPayload: any,
    fieldName: string
): SearchStateType => {
    return {
        ...state,
        sorted: [...state.sorted],
        categories: [...state.categories],
        [fieldName]: actionPayload
    }
}