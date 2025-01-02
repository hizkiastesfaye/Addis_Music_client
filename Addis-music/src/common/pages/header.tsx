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
import { setFilterBy,setSearchText,fetchSeachDatas, fetchSeachError, fetchCountSearch } from "../../store/search";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as S from "../../styles/header.style"
import { BASE_URL } from "../../components/api";


export default function Header(){
    interface MusicDataStatus{
        id:string,
        title:string,
        artist:string,
        album:string,
        genre:string
    }
    // const [filterName,setFilterName] = useState('title')
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {filterType,countSearch,searchDatas} = useSelector((state:RootState)=>state.searchMusic)
    const isDropMenu = useSelector((state:RootState)=>state.isDropFilter.isDropMenu)
    const {posts} = useSelector((state:RootState)=>state.posts)
    const [searchvalues,setSearchValues] = useState('')
    const [filteredMusic,setFilteredMusic] = useState<MusicDataStatus[]>([])
    const [isSearchDrop,setIsSearchDrop] =useState<boolean>(false)
    const [ccountSearch,setCountSearch]= useState<number | null>(null)
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
        console.log(filteredMusic)
        if(value !== ''){
            setIsSearchDrop(true)
            const regex = new RegExp(`^${value}`, "i"); // Matches the start of the string, case-insensitively
            const filtered = posts.filter((music) => regex.test(music[filterType]));
            setFilteredMusic(filtered);
            
        }
        else{
            setIsSearchDrop(false)
            setFilteredMusic([])
        }
    }
    const handlesearchSubmit =async()=>{
        dispatch(setSearchText(searchvalues))
        try{
            const response = await axios.get(`${BASE_URL}/get?${filterType}=${searchvalues}`)
            console.log('response: ',response.data.message.length)
            dispatch(fetchSeachDatas(response.data.message))
            setCountSearch(response.data.message.length)
            dispatch(fetchCountSearch(response.data.message.length))
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
                <h2 onClick={()=>navigate('/')}>Addis Music</h2>
                <S.DivSearch>
                    <S.DivSearch1>
                        <S.Image1 onClick={handlesearchSubmit}>
                            <img src={search} alt="search icons" />
                        </S.Image1>
                        <input type="text" placeholder="Search for Music" id='searchid' name='searchName' value={searchvalues} onChange={handleChangeSearch}/>
                        { isSearchDrop &&
                        <S.changeSearch>
                            {filteredMusic.length > 0 && (
                            filteredMusic.map((music:MusicDataStatus) => (
                                <ul key={music.id}>
                                    
                                    <li onClick={()=>{
                                        setSearchValues(music[filterType]); 
                                        setIsSearchDrop(false);
                                        }}>
                                        {filterType === 'artist' ? `${music.artist} : ${music.title}` : `${music[filterType]} : ${music.artist}`  }</li>
                                    {/* <p>Album: {music.album}</p>
                                    <p>Artist: {music.artist}</p>
                                    <p>Genre: {music.genre}</p> */}
                                </ul>
                            ))
                            )}
                        </S.changeSearch>
                        }

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


