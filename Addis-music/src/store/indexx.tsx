import { configureStore } from "@reduxjs/toolkit";
import SeachReducer from "./search";
import DropMenuReducer from './dropDownFilter'
import createSagaMiddleware from "redux-saga";
import postsReducer from "./postSlice";
import rootSaga from "./sagas"


const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer:{
        isDropFilter: DropMenuReducer,
        posts: postsReducer,
        searchMusic: SeachReducer,
    },
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware({thunk: false}).concat(sagaMiddleware)
});

sagaMiddleware.run(rootSaga)

export type RootState= ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store