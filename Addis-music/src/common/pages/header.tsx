/** @jsxImportSource @emotion/react */
// import styled from "@emotion/styled";
// import { css } from "@emotion/react";
// import "@fontsource/jaini";
import search from "../../assets/icons/search.png";
import filter from "../../assets/icons/filter.png";
import { useDispatch,useSelector } from 'react-redux';
import { RootState } from "../../store/indexx";
import { dropMenuTrue,dropMenuFalse } from "../../store/dropDownFilter";
import { useState } from "react";
import { setFilterBy,setSearchText,fetchSeachDatas, fetchSeachError } from "../../store/search";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as S from "../../styles/header.style"

export default function Header(){
    // const [filterName,setFilterName] = useState('title')
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {filterType} = useSelector((state:RootState)=>state.searchMusic)
    const isDropMenu = useSelector((state:RootState)=>state.isDropFilter.isDropMenu)
    const [searchvalues,setSearchValues] = useState('')
    const handleDropFilter=()=>{
        if(isDropMenu){
            dispatch(dropMenuFalse())
            console.log(isDropMenu)
        }
        else{
            dispatch(dropMenuTrue())
        }
    }
    const handleFilter=(name:string)=>{
        console.log(name)
        dispatch(setFilterBy(name))
    }
    const handleChangeSearch=(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        e.preventDefault()
        const {value} = e.target
        setSearchValues(value)
    }
    const handlesearchSubmit =async()=>{
        dispatch(setSearchText(searchvalues))
        try{
            const response = await axios.get(`http://localhost:3007/get?${filterType}=${searchvalues}`)
            console.log('response: ',response.data.message)
            dispatch(fetchSeachDatas(response.data.message))
            navigate('/search')
            setSearchValues('')
        }
        catch(err){
                if (axios.isAxiosError(err)){
                console.log('error**: ',err.response?.data?.error)
                dispatch(fetchSeachError(err.response?.data?.error))
            }
            else{
                dispatch(fetchSeachError("unknown Error: *"))
            }
            navigate('/search')
        }
        
    } 
    return (
        <>
            <S.Container>
                <h2 onClick={()=>navigate('/music')}>Addis Music</h2>
                <S.DivSearch>
                    <S.DivSearch1>
                        <S.Image1 onClick={handlesearchSubmit}>
                            <img src={search} alt="search icons" />
                        </S.Image1>
                        <input type="text" placeholder="Search for Music" id='searchid' name='searchName' value={searchvalues} onChange={handleChangeSearch}/>
                    </S.DivSearch1>
                    <S.DivSearch2>
                        <button onClick={handleDropFilter}>
                            <img src={filter} alt="search icons" />
                        </button>
                        <p>{filterType}</p>
                    </S.DivSearch2>
                </S.DivSearch>
            </S.Container>
            { isDropMenu &&
            <S.DropFilter>
                <ul>
                    <li onClick={()=>handleFilter('title')}>Title</li>
                    <li onClick={()=>handleFilter('album')}>Album</li>
                    <li onClick={()=>handleFilter('artist')}>Artist</li>
                    <li onClick={()=>handleFilter('genre')}>Genre</li>
                </ul>
            </S.DropFilter>
            }
        </>
    );
}


