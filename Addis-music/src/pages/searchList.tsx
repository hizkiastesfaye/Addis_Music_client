/** @jsxImportSource @emotion/react */
import { RootState } from '../store/indexx';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import axios from 'axios'
import { fetchPostPending } from '../store/postSlice';
import * as S from "../styles/homeMusic.style"
import MusicForm from '../components/musicForm';
import MusicList from '../components/musicList';
import { css } from '@emotion/react';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../components/api';

const SearchList: React.FC=()=>{

    interface MusicDataStatus{
        id:string,
        title:string,
        artist:string,
        album:string,
        genre:string
    }
    const initialMusicDatas:MusicDataStatus = {
        id:'',
        title:'',
        artist:'',
        album:'',
        genre:'',
    }
    const [isEdit,setIsEdit] = useState<boolean>(false);
    const [isAdd,setIsAdd] = useState<boolean>(false)
    const dispatch = useDispatch()
    const [musicDatas,setMusicDatas] = useState<MusicDataStatus>(initialMusicDatas)
    const {searchDatas,searchError} = useSelector((state:RootState)=>state.searchMusic)
    const navigate = useNavigate()
    // const [searchSaveError,setSearchSaveError] = useState('')

    useEffect(()=>{
        dispatch(fetchPostPending())
    },[dispatch])

    const handleChange =(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        e.preventDefault()
        const name = e.target.name
        const value = e.target.value
        console.log(e)
        setMusicDatas((prevData)=>({
            ...prevData,
            [name]:value
        }))
    }
    const [selectedId,setSelectedId]=useState('')
    const handleEdit = (music:MusicDataStatus)=>{
        setMusicDatas(initialMusicDatas)
        setIsEdit(true)
        setIsAdd(false)
        setMusicDatas(music)
        setSelectedId(music.id)
        console.log('first: ',musicDatas.id)
    }
    const handleAdd = ()=>{
        setMusicDatas(initialMusicDatas)
        setIsEdit(false)
        setIsAdd(true)
        setSelectedId('')
    }
    const handleCancel = ()=>{
        setMusicDatas(initialMusicDatas)
        setIsAdd(false)
        setIsEdit(false)
        setSelectedId('')
    }

    const handleSave=async(event: React.MouseEvent<HTMLButtonElement>)=>{
        event.preventDefault()

            try{
                console.log('first**: ',musicDatas.id)
                const putMusic = await axios.put(`${BASE_URL}/update/${musicDatas.id}`,musicDatas)
                dispatch(fetchPostPending())
                console.log('after: ',putMusic)
                setMusicDatas(initialMusicDatas)
                setIsAdd(false)
                setIsEdit(false)
                navigate('/')
            }
            catch(err){
                // setSearchSaveError(err.response.data.error)
                if (axios.isAxiosError(err)) {
                    window.alert(`Error: ${err.response?.data?.error || "Something went wrong"}`);
                }
                else{
                    console.log("unknown error: ",err)
                    window.alert("An unexpected error occurred.");
                }
            }
    }
    
    return (
        <div style={{minHeight:'60vh'}}>
            <S.MainBody>
                <S.MusicLists isForm={isEdit || isAdd}>
                    <div className='add_button'>
                        <button onClick={handleAdd}>Add music</button>
                    </div>
                    <h2>Search music list</h2>
                    <h3>Search music list</h3>
                    {searchError && <p css={css`color:red; font-size:12px; padding-left:30%;`}>** Error: {searchError}</p>}
                    {searchDatas && searchDatas.map((musiListt:MusicDataStatus)=>(        
                        <S.MusicList key={musiListt.id} isSelected={selectedId === musiListt.id}>
                            <MusicList itemKey={musiListt.id} musiListt={musiListt} handleEdit={handleEdit}/>
                            </S.MusicList>
                    ))}   
                </S.MusicLists>
                {(isEdit || isAdd) &&
                    <MusicForm handleAdd={handleAdd} 
                        handleChange={handleChange} 
                        handleCancel={handleCancel} 
                        handleSave={handleSave} 
                        isAdd={isAdd} 
                        isEdit={isEdit} 
                        musicDatas={musicDatas}
                        postError='' 
                    />
                }
            </S.MainBody>
        </div>
    );
}


export default SearchList;