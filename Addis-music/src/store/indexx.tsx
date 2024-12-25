import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slice";
import createSagaMiddleware from "redux-saga";
import postsReducer from "./postSlice";
import rootSaga from "./sagas"


const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer:{
        counter: counterReducer,
        posts: postsReducer,
    },
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware({thunk:false}).concat(sagaMiddleware)
});

sagaMiddleware.run(rootSaga)

export type RootState= ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store