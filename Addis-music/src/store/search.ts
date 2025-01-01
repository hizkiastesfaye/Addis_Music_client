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
}

const initialSearchState:SearchState= {
    filterType:'title',
    searchText:'',
    searchDatas:[],
    searchError:null,
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
        }
    }

})

export const {setFilterBy,setSearchText,fetchSeachDatas,fetchSeachError} = searchSlice.actions
export default searchSlice.reducer