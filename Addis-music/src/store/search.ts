import {PayloadAction, createSlice} from "@reduxjs/toolkit"

interface MusicDataStatus{
    id:string,
    title:string,
    artist:string,
    album:string,
    genre:string
}
interface SearchState{
    filterType:string,
    searchText:string,
    searchDatas:MusicDataStatus[]
    searchError:string | null;
    countSearch:number | null;
}

const initialSearchState:SearchState= {
    filterType:'title',
    searchText:'',
    searchDatas:[],
    searchError:null,
    countSearch:null,
}

const searchSlice = createSlice({
    name:'searchSlice',
    initialState:initialSearchState,
    reducers:{
        setFilterBy(state,action:PayloadAction<string>){
            state.filterType = action.payload
        },
        setSearchText(state,action:PayloadAction<string>){
            state.searchText = action.payload;
        },
        fetchSeachDatas(state,action:PayloadAction<MusicDataStatus[]>){
            state.searchDatas=action.payload;
            state.searchError = null;
        },
        fetchSeachError(state,action:PayloadAction<string>){
            state.searchError=action.payload
            state.searchDatas = [];
        },
        fetchCountSearch(state,action:PayloadAction<number | null>){
            state.countSearch=action.payload;
        },
    }

})

export const {setFilterBy,setSearchText,fetchSeachDatas,fetchSeachError,fetchCountSearch} = searchSlice.actions
export default searchSlice.reducer