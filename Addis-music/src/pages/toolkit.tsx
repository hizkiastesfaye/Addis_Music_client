/** @jsxImportSource @emotion/react */

import { useDispatch,useSelector } from "react-redux";

import {RootState} from "../store/indexx"
import { incrementByAmount, increment, decrement } from "../store/slice";

export default function Toolkits(){
    const dispach = useDispatch()
    const count = useSelector((state:RootState)=>state.counter.value)
    return <div>
        <h1>Count: {count}</h1>
        <button onClick={()=> dispach(increment())}>Increament</button>
        <button onClick={()=> dispach(decrement())}>Decrement</button>
        <button onClick={()=>dispach(incrementByAmount(10))}>Increase by 10</button>
    </div>

}