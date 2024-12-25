import { takeEvery,call,put,all } from "redux-saga/effects";
import axios from 'axios'
import { fetchPostPending,fetchPostFailure,fetchPostSuccess } from "./postSlice";

function* fetchPostSagaa(){
    try{
        const response = yield call(axios.get,'http://localhost:3007/get');
        yield put(fetchPostSuccess(response.data.message))
    }
    catch (error: any){
        yield put(fetchPostFailure(error.message))
    }
}
export function* watchFetchPosts(){
    yield takeEvery(fetchPostPending.type, fetchPostSagaa);
}

export default function* rootSaga(){
    yield all([watchFetchPosts()])
}