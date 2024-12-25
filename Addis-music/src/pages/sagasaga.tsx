/** @jsxImportSource @emotion/react */

import { useDispatch,useSelector } from "react-redux";
import {RootState} from "../store/indexx"
import { incrementByAmount, increment, decrement } from "../store/slice";
import { useEffect } from "react";
import {fetchPostPending} from '../store/postSlice'

export default function SagaSaga(){
    const dispatch = useDispatch()
    const {posts, loading, error} = useSelector((state:RootState)=>state.posts)
    const count = useSelector((state:RootState)=>state.counter.value)

    useEffect(()=>{
        dispatch(fetchPostPending())
    },[dispatch])
    return <div>
        <h1>Count: {count}</h1>
        <button onClick={()=> dispatch(increment())}>Increament</button>
        <button onClick={()=> dispatch(decrement())}>Decrement</button>
        <button onClick={()=>dispatch(incrementByAmount(10))}>Increase by 10</button>
        {loading && <p>loading ...</p>}
        {error && <p>Error: {error}</p>}
        
        <ul>
            {posts.map((music)=>(
                <li key={music.id}>{music.title}, {music.artist}, {music.album}, {music.genre}</li>
            ))}
        </ul>

    
    </div>

}