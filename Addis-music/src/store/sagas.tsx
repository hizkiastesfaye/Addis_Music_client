import { takeEvery,call,put,all } from "redux-saga/effects";
import axios from 'axios'
import { fetchPostPending,fetchPostFailure,fetchPostSuccess } from "./postSlice";
import { BASE_URL } from "../components/api";

function* fetchPostSagaa(): Generator<any, void, any>{
    try{
        const response = yield call(axios.get,`${BASE_URL}/get`);
        yield put(fetchPostSuccess(response.data.message))
    }
    catch (error){
        if (error instanceof Error) {
            yield put(fetchPostFailure(error.message));
        } else {
            yield put(fetchPostFailure('An unknown error occurred.'));
        }
    }
}
export function* watchFetchPosts(){
    yield takeEvery(fetchPostPending.type, fetchPostSagaa);
}

export default function* rootSaga(){
    yield all([watchFetchPosts()])
}