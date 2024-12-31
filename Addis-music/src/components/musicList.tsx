/** @jsxImportSource @emotion/react */
import { RootState } from '../store/indexx';
import { useDispatch, useSelector } from 'react-redux';
import deletee from '../assets/icons/delete.png'
import close from '../assets/icons/close.png'
import { useEffect, useState } from 'react';
import axios from 'axios'
import { fetchPostPending } from '../store/postSlice';
import { css } from '@emotion/react';
import * as S from "../styles/homeMusic.style"
import Additional from '../components/additional';
import MusicForm from '../components/musicForm';


const HomeMusic: React.FC=()=>{

    interface MusicDataStatus{
        id:string | null,
        title:string,
        artist:string,
        album:string,
        genre:string
    }
    const initialMusicDatas:MusicDataStatus = {
        id:null,
        title:'',
        artist:'',
        album:'',
        genre:'',
    }
    const [indexValue,setIndexValue] = useState<number|null>(null)
    const [isEdit,setIsEdit] = useState<boolean>(false);
    const [isAdd,setIsAdd] = useState<boolean>(false)
    const dispatch = useDispatch()
    const {posts,loading,error} = useSelector((state:RootState)=>state.posts)
    const [musicDatas,setMusicDatas] = useState<MusicDataStatus>(initialMusicDatas)
    const [postError,setPostError]= useState('')



    useEffect(()=>{
        dispatch(fetchPostPending())
    },[dispatch])

    const handleChange =(e)=>{
        e.preventDefault()
        const name = e.target.name
        const value = e.target.value
        console.log(e)
        setMusicDatas((prevData)=>({
            ...prevData,
            [name]:value
        }))
    }
    const [selectedId,setSelectedId]=useState(null)
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
        setSelectedId(null)

    }
    const handleCancel = ()=>{
        setMusicDatas(initialMusicDatas)
        setIsAdd(false)
        setIsEdit(false)
        setSelectedId(null)
    }
    const song2 = {
        title: 'adea',
        artist:'abebaw',
        album:'manew',
        genre:'pop'
    }
    // const [isSuccess,setIsSuccess] = useState('')

    const handleSave=async(event: React.MouseEvent<HTMLButtonElement>)=>{
        event.preventDefault()
        // console.log(musicDatas.title)
        if(isAdd && !isEdit){
            try{
                const addmusic = await axios.post('http://localhost:3007/add',musicDatasn)
                console.log('addmusic: ',addmusic)
                dispatch(fetchPostPending())
                window.alert('successfully music added.')
                setMusicDatas(initialMusicDatas)
                setIsAdd(false)
                setIsEdit(false)
            }
            catch(err){
                    setPostError(err.response.data.error)
                    console.log('error: ',err.response.data.error)
            }
        }
        if(isEdit && !isAdd){
            try{
                console.log('first: ',musicDatas)
                const putMusic = await axios.put(`http://localhost:3007/update/${musicDatas.id}`,musicDatas)
                dispatch(fetchPostPending())
                console.log('after: ',putMusic)
                setMusicDatas(initialMusicDatas)
                setIsAdd(false)
                setIsEdit(false)
            }
            catch(err){
                setPostError(err.response.data.error)
                console.log('error: ',err.response.data.error)
            }
        }
    }
    const handleDelete=async(music:MusicDataStatus)=>{
        const userConfirm = window.confirm('Are you sure you want to delete this music?')
            if(userConfirm){
            try{
            const deleteMusic = await axios.delete(`http://localhost:3007/delete/${music.id}`)
            console.log(deleteMusic)
            dispatch(fetchPostPending())
            window.alert('successfully deleted.')
            }
            catch(err){
                setPostError(err.response.data.error)
                console.log('err: ',err)
                window.alert(`error: ,${err.response.data.error}`)
            }
        }
        else{
            window.alert('user cancelled the deletion.')
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
                    { posts.map((musiListt)=>(
                    <S.MusicList key={musiListt.id} isSelected={selectedId === musiListt.id}
                        onMouseEnter={()=>setIndexValue(musiListt.id)}
                        onMouseLeave={()=>setIndexValue(null)}>
                        <div className='list_attribute'>
                            <div className='arti_alb'>
                                <p>title: {musiListt.title}</p>
                                <p>artist: {musiListt.artist}</p>
                                <p>album:{musiListt.album}</p>
                            </div>
                            <div className='arti_alb_sm'>
                                <p>title: {musiListt.title}</p>
                                <div>
                                    <p>artist: {musiListt.artist}</p>
                                    <p>album:{musiListt.album}</p>
                                </div>
                            </div>
                            <p className='genre'>genre: {musiListt.genre}</p>
                        </div>
                        <div className='before_manage'>
                            {indexValue === musiListt.id &&
                            <div className='manage'>
                                <button id={musiListt.id} onClick={()=>handleEdit(musiListt)}>Edit</button>
                                <div className='image'>
                                    <img src={deletee} alt='delete icon' onClick={()=>handleDelete(musiListt)}/>
                                    <button onClick={()=>handleDelete(musiListt)}>Delete</button>
                                </div>
                                {/* <button className='delete_button' onClick={()=>handleDelete(musiListt)}>Delete</button> */}
                            </div>
                            }
                        </div>
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