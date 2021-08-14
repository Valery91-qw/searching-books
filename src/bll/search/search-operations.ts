import {googleBookApi} from "../../dal/googleBookApi";
import { call } from 'redux-saga/effects';

export function* getBooks() {
    const data:ResponseType = yield call(googleBookApi.getBooks, 'hello')
}