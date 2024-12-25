import { PayloadAction,createSlice } from "@reduxjs/toolkit";

interface post {
    id: string,
    title:string,
    artist:string,
    album:string,
    genre:string
}

interface postState {
    posts: post[],
    loading: boolean,
    error:string | null
}

const initialState: postState = {
    posts: [],
    loading: false,
    error:null,
}

const postsSlice = createSlice({
    name:'posts',
    initialState,
    reducers:{
        fetchPostPending(state){
            state.loading = true;
            state.error=null
        },
        fetchPostSuccess(state, action:PayloadAction<post[]>){
            state.loading = false;
            state.posts = action.payload
        },
        fetchPostFailure(state,action: PayloadAction<string>){
            state.loading = false;
            state.error= action.payload
        }
    }
})

export const {fetchPostPending, fetchPostSuccess, fetchPostFailure} = postsSlice.actions;

export default postsSlice.reducer;