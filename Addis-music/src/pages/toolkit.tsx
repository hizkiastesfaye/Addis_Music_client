/** @jsxImportSource @emotion/react */

import { useDispatch,useSelector } from "react-redux";
import axios from 'axios'
import {RootState} from "../store/indexx"
import { incrementByAmount, increment, decrement } from "../store/slice";
import { useEffect, useState } from "react";

export default function Toolkits(){
    const dispach = useDispatch()
    const count = useSelector((state:RootState)=>state.counter.value)
    interface musicli {
        id:string,
        title:string,
        artist:string,
        album:string,
        genre:string
    }
    const [musics,setMusics] = useState<musicli[]>([])
    useEffect(()=>{
        const fetchData = async ()=>{
            try{
                const response = await axios.get('http://localhost:3007/get');
                setMusics(response.data.message)
                console.log(response.data.message)
            }
            catch(err){
                console.log('Error fetching data: ',err)
            }
        };
        fetchData();
    },[])


    return <div>
        <h1>Count: {count}</h1>
        <button onClick={()=> dispach(increment())}>Increament</button>
        <button onClick={()=> dispach(decrement())}>Decrement</button>
        <button onClick={()=>dispach(incrementByAmount(10))}>Increase by 10</button>
        {musics && 
        <ul>
            {musics.map((music,index)=>(
                <li key={index}>{music.title}, {music.artist}</li>
            ))}
        </ul>
        }

    
    </div>

}