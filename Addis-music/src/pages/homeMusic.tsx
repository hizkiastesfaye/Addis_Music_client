/** @jsxImportSource @emotion/react */
import { RootState } from '../store/indexx';
import { useDispatch, useSelector } from 'react-redux';
// import deletee from '../assets/icons/delete.png'
// import close from '../assets/icons/close.png'
import { useEffect, useState } from 'react';
import axios from 'axios'
import { fetchPostPending } from '../store/postSlice';
import { css } from '@emotion/react';
import * as S from "../styles/homeMusic.style"
import Additional from '../components/additional';
import MusicForm from '../components/musicForm';
import MusicList from '../components/musicList';
import {BASE_URL} from "../components/api"

const HomeMusic: React.FC=()=>{

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
    // const [indexValue,setIndexValue] = useState<number|null>(null)
    const [isEdit,setIsEdit] = useState<boolean>(false);
    const [isAdd,setIsAdd] = useState<boolean>(false)
    const dispatch = useDispatch()
    const {posts,loading,error} = useSelector((state:RootState)=>state.posts)
    const [musicDatas,setMusicDatas] = useState<MusicDataStatus>(initialMusicDatas)
    const [postError,setPostError]= useState('')



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
    }
    const handleAdd = ()=>{
        setMusicDatas(initialMusicDatas)
        setIsEdit(false)
        setIsAdd(true)
        setSelectedId('')
        console.log("base url: ",BASE_URL)
    }
    const handleCancel = ()=>{
        setMusicDatas(initialMusicDatas)
        setIsAdd(false)
        setIsEdit(false)
        setSelectedId('')
    }

    const handleSave=async(event: React.MouseEvent<HTMLButtonElement>)=>{
        event.preventDefault()

        if(isAdd && !isEdit){
            try{
                
                // const addmusic = await axios.post('http://localhost:3007/add',musicDatas)
                const addmusic = await axios.post(`${BASE_URL}/add`,musicDatas)
                console.log('addmusic: ',addmusic)
                dispatch(fetchPostPending())
                window.alert('successfully music added.')
                setMusicDatas(initialMusicDatas)
                setIsAdd(false)
                setIsEdit(false)
            }
            catch(err){
                if (axios.isAxiosError(err)) {
                    setPostError(err.response?.data?.error)
                    window.alert(`Error: ${err.response?.data?.error || "Something went wrong"}`);
                }
                else{
                    console.log("unknown error: ",err)
                    window.alert("An unexpected error occurred.");
                }
            }
        }
        if(isEdit && !isAdd){
            try{
                console.log('first: ',musicDatas)
                const putMusic = await axios.put(`${BASE_URL}/update/${musicDatas.id}`,musicDatas)
                dispatch(fetchPostPending())
                console.log('after: ',putMusic)
                setMusicDatas(initialMusicDatas)
                setIsAdd(false)
                setIsEdit(false)
            }
            catch(err){
                if (axios.isAxiosError(err)) {
                    setPostError(err.response?.data?.error)
                    // console.log('error: ',err.response.data.error)
                    window.alert(`Error: ${err.response?.data?.error || "Something went wrong"}`);

                }
                else{
                    console.log("unknown error: ",err)
                    setPostError("unknown error: ")

                }
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
                    <h2>Music list</h2>
                    <h3>Music list</h3>
                    {loading && <p css={css`font-size:12px; padding-left:30%;`}>loading ....</p>}
                    {error && <p css={css`color:red; font-size:12px; padding-left:30%;`}>** Error: {error}</p>}
                    {
                        posts && posts.map((musiListt:MusicDataStatus)=>(
                            
                        <S.MusicList key={musiListt.id} isSelected={selectedId === musiListt.id}>
                            <MusicList itemKey={musiListt.id} musiListt={musiListt} handleEdit={handleEdit}/>
                        </S.MusicList>
                        ))
                    }   
                </S.MusicLists>
                {(isEdit || isAdd) &&
                    <MusicForm handleAdd={handleAdd} 
                        handleChange={handleChange} 
                        handleCancel={handleCancel} 
                        handleSave={handleSave} 
                        isAdd={isAdd} 
                        isEdit={isEdit} 
                        musicDatas={musicDatas}
                        postError={postError} 
                    />
                }
                {
                    !(isAdd || isEdit) &&
                    <Additional handleAdd={handleAdd}/>
                }
            </S.MainBody>
        </div>
    );
}


export default HomeMusic;