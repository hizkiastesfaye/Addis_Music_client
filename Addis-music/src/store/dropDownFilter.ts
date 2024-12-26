import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface isDropMenuStatus {
    isDropMenu: boolean;
}

const initialState: isDropMenuStatus ={
    isDropMenu: false
}

const dropDownSlice = createSlice({
    name:'dropDownMenu',
    initialState,
    reducers:{
        dropMenuTrue(state){
            state.isDropMenu = true;
        },
        dropMenuFalse(state){
            state.isDropMenu = false;
        }
    }
});

export const {dropMenuTrue, dropMenuFalse} = dropDownSlice.actions
export default dropDownSlice.reducer