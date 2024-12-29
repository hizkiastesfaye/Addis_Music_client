import {PayloadAction, createSlice} from '@reduxjs/toolkit'

interface MusicDataStatus{
    id:number | null,
    title:string,
    artist:string,
    album:string,
    genre:string
}
interface SearchState{
    filterType:string,
    searchText:string,
    searchDatas:MusicDataStatus[]
}

const initialSearchState:SearchState= {
    filterType:'title',
    searchText:'',
    searchDatas:[],
}

const searchSlice = createSlice({
    name:'searchSlice',
    initialState:initialSearchState,
    reducers:{
        setFilterBy(state,action:PayloadAction<string>){
            state.filterType = action.payload
        },
        setSearchText(state,action:PayloadAction<string>){
            state.searchText = action.payload
        },
        fetchSeachDatas(state,action:PayloadAction<MusicDataStatus[]>){
            state.searchDatas=action.payload
        }
    }

})

export const {setFilterBy,setSearchText,fetchSeachDatas} = searchSlice.actions
export default searchSlice.reducer