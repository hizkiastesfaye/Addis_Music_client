/** @jsxImportSource @emotion/react */
import { useDispatch, useSelector } from 'react-redux';
import deletee from '../assets/icons/delete.png'
import axios from 'axios'
import { fetchPostPending } from '../store/postSlice';
import { useState } from 'react';

type MusicDataPropStatus={
    id: string | null;
    title:string;
    artist:string;
    album:string;
    genre:string;
}

type MusicListProps={
    handleEdit: (music: MusicDataPropStatus)=>void;
    musiListt:MusicDataPropStatus;
    key:string;
    
}
const MusicList: React.FC<MusicListProps>=({handleEdit,musiListt, key})=>{

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
    const dispatch = useDispatch()
    const [postError,setPostError]= useState('')
    // const [selectedId,setSelectedId]=useState(null)

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
    
    return <div key={key} className='musicListinside'                         
        onMouseEnter={()=>setIndexValue(musiListt.id)}
        onMouseLeave={()=>setIndexValue(null)}>
            <div className='list_attribute'>
                <div className='arti_alb'>
                    <p>title: {musiListt.title}</p>
                    <p>artist: {musiListt.artist}</p>
                    <p>album:{musiListt.album}</p>
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
                </div>
                }
            </div>
        </div>
}

export default MusicList;