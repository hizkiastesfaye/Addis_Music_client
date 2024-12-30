/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'
import { RootState } from '../store/indexx';
import { useDispatch, useSelector } from 'react-redux';
import deletee from '../icons/delete.png'
import close from '../icons/close.png'
import { useEffect, useState } from 'react';
import axios from 'axios'
import { fetchPostPending } from '../store/postSlice';
import { css } from '@emotion/react';

const MainBody = styled.div`
    
    height:100%;
    margin:0;
    display:flex;
    justify-content:space-between;
    padding:5px 10px;
    @media (max-width:600px){
        // background-color:gray;
        display:block;
    }

`;
const MusicLists = styled.div`
    width: 100%;
    min-height: 70vh;
    max-height:100vh;
    overflow-y:scroll;
    margin-bottom:10px;
    h2{
        color:green;
        padding-left:40%;
    }
        h3{
            display:none;
        }

    .add_button{
        @media (min-width:600px){
            display:none;
        }
        // background-color:blue;
        border: 1px solid white;
        width:100%;
        display:flex;
        justify-content:right;
        button{
            width:45%;
            color:green;
            border:1px solid green;
            border-radius: 20px;
            padding:5px 1px;
            font-size:14px;
            font-weight:bold;
            

            &:hover{
                border:1px solid green;
                border-radius: 20px;
                color:white;
                background-color:green;
                cursor:pointer;
            }
        }
    }


    @media (max-width: 600px){
        display:${(prop)=>(prop.isForm ? 'none' : 'block')};
        // background-color:red;
        h2{display:none};
        h3{
            display:block;
            color:green;
            padding-left:40%; 
        };


    }
`;
const MusicList = styled.div`

    box-shadow:0px 4px 6px rgba(0,0,0,0.1);
    padding-bottom:2px;
    margin-bottom:10px;
    border-bottom:1px solid rgba(0,0,0,0.1);
    border-right:1px solid rgba(0,0,0,0.1);
    height:90px;
    display:flex;
    justify-content:space-between;
    background-color:${(prop)=>(prop.isSelected ? '#D7F4DB': 'white')};

    .list_attribute{
        // background-color:yellow;
        width:98%;
        .arti_alb{
            display:flex;
            gap:5%;
            justify-content:left;
        
        }
        .arti_alb_sm{
            display:none;
        }
        p{
            width:100%;
            // background-color:red;
            font-size:16px;
            color:#525252;
            padding-left:5px
        }
    };

    .before_manage{
        // background-color:brown;
        width:10%;
        padding-top:5px;

        .manage{
            // background-color:blue;
            gap:50px;
            .image{
                margin-top:5px;
                width:100%;
                display:flex;
                align-items:center;
                height:40px;
                button{
                    display:none;
                }
                img{
                    width:20px;
                    height:20px;
                    right:2px;
                    margin:0 auto;
                    &:hover{
                        width:28px;
                        height:28px;
                        // background-color:blue;
                        box-shadow:0 2px 4px green;
                    }
                }
            }
            .delete_button{
                display:none;
            }
            button{
                margin-bottom:5px;
                width:100px;
                height:35px;
                border:1px solid green;
                border-radius:20px;
                background-color:white;

                color:green;
                padding-left:20px;
                padding-right:20px;
                font-size:20px;
                &:hover{
                    cursor:pointer;
                    background-color:green;
                    color:white;
                    font-size:24px;
                }
            }
        }
    }
    
    &:hover{
        // border-bottom:1px solid green;
        cursor:pointer;
        box-shadow:0px 2px 3px green;


        p{
            color:green;
        }
    }
    @media (max-width:600px){
        // display:block;
        // background-color:gray;
        // height:75px;
        height:fit-content;
        margin-top:10px;
        // padding-bottom:5px;

        .list_attribute{
            // background-color:brown;
            // width:100%;
            .arti_alb{
                display:none;
            }
            .arti_alb_sm{
                display:block;
                // background-color:yellow;
                div{
                    display:flex;
                    justify-content:left;
                }

            };
            p{
                // background-color:red;
                width:100%;
                font-size:14px;
                font-weight:100;
                margin-top:3px;
            }
        };

        .before_manage{
            // background-color:brown;
            width:20%;
            padding-top:0px;
            height:70px;

            .manage{
                // background-color:blue;
                width:100%;
                
                .image{
                    height:30px;
                    // background-color:green;
                }
                button{
                    margin-left:2px;
                    width:80%;
                    padding-left:10px;
                    height:20px;
                    font-size:12px;
                    &:hover{
                        font-size:14px;
                    }
                }
            }
        }
        
        &:hover{
            // border-bottom:1px solid green;
            cursor:pointer;
            box-shadow:0px 2px 3px green;
            p{
                color:green;
            }
        }
    }
`;

const MusicForm = styled.div`
    width:60%;

    .image_div{
        width:100%;
        display:flex;
        justify-content:right;
        padding-right:10px;
        height:45px;
        align-items:center;
        button{
            background-color:white;
            border:1px solid green;
            height:45px;
            width:45px;
            img{
                height:25px;
                width:25px;
            }
            &:hover{
            border:2px solid green;
                img{
                    height:35px;
                    width:35px;
                }
            }
        }
    }

    h1{
        padding-left:30%;
        margin-bottom:30px;
        color:green;
    }
    .add_new_music{
        display:flex;
        justify-content:space-between;
        h3{                cursor:pointer;
            padding:5px;
            color:green;
            border:1px solid white;
            border-bottom: 1px solid green;
            border-radius:10px;
            &:hover{
                border:1px solid green;
                border-radius: 20px;
                cursor:pointer;
            }
        }
    }
    
    @media (max-width:600px){
        width:90%;
    }
`;
const FormMusicData = styled.form`
    padding-left:2px;
    // width:100%;
    margin-bottom:20px;
    // background-color:red;
    div{
        display:flex;
        justify-content:space-between;
        padding-left:5px;
        padding-right:3%;
        margin-bottom:15px;

        label{
            width:65px;
        }
        input, textarea{
            width:100%;
            height:20px;
            color:#333333;
            // margin-left:70px;

            &:focus{
                outline: 1px solid gray;
            }
            
        }
        textarea{
            height:50px;
        }
        &:focus{
            background-color:red;
            color:red;
        }
        
    }
`;
const Button = styled.button`
    color:green;
    font-size:24px;
    border:1px solid green;
    border-radius:15px;
    width:200px;
    margin:10vh 18%;
    padding-left:5%;

    &:hover{
        color:white;
        background-color:green;
        font-weight:bold;
        cursor:pointer;
    }
`;
const Additional = styled.div`
    @media (max-width:600px){
        display:none;
    }
    width:20%;
    // background-color:red;
    padding-top:8%;
    
    .additional_add{
        border: 1px solid white;
        width:100%;
        button{
            width:100%;
            color:green;
            border:1px solid green;
            border-radius: 20px;
            margin-left:2%;
            padding:5px 10%;
            font-size:16px;
            font-weight:bold;
            

        &:hover{
            border:1px solid green;
            border-radius: 20px;
            color:white;
            background-color:green;
            cursor:pointer;
        }
    }
    .description{
        // background-color:red;
        padding: 5px 10px;

        p{
            font-size:14px;
            margin-bottom:20px;
            color:green;
            font-weight:100;
        }
    }
`;
export default function HomeMusic(){

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
                const addmusic = await axios.post('http://localhost:3007/add',musicDatas)
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
            // setMusicList((prevList)=>
            //     prevList.map((item)=>
            //         item.id === musicDatas.id? {...item,title:musicDatas.title} : item
            //     )
            // )
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
        // setMusicList((prevList)=>
        //     prevList.filter((item)=>item.id !== music.id)
        // )
    }
    
    return (
        <div style={{minHeight:'60vh'}}>
            <MainBody>
                <MusicLists isForm={isEdit || isAdd}>
                    <div className='add_button'>
                        <button onClick={handleAdd}>Add music</button>
                    </div>
                    <h2>Music list</h2>
                    <h3>Music list</h3>
                    { posts.map((musiListt)=>(
                    <MusicList key={musiListt.id} isSelected={selectedId === musiListt.id}
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
                    </MusicList>
                    ))}   
                </MusicLists>
                {(isEdit || isAdd) &&
                    <MusicForm>
                        {isEdit && <div className='add_new_music' onClick={handleAdd}>
                            <h3>Add new music</h3>
                        </div>
                        }
                        <div className='image_div'>
                            <button onClick={handleCancel}>
                                <img src={close} alt='close image' />
                            </button>
                        </div>
                        {isEdit && <h1>Edit</h1>}
                        {isAdd && <h1>Add Music</h1>}
                        <FormMusicData isForm={isEdit || isAdd}>
                            <div>
                                <label htmlFor='title'>Title:</label>
                                <input type='text' id='title' name='title' value={musicDatas.title || ''} onChange={handleChange}/>
                            </div>
                            <div>
                                <label htmlFor='artist'>Artist:</label>
                                <input type='text' id='artist' name='artist' value={musicDatas.artist || ''} onChange={handleChange}/>
                            </div>
                            <div>
                                <label htmlFor='album'>Album:</label>
                                <input albumInput type='text' id='album' name='album' value={musicDatas.album} onChange={handleChange}/>
                            </div>
                            <div>
                                <label htmlFor='genre'>Genre:</label>
                                <textarea id='genre' name='genre' value={musicDatas.genre} onChange={handleChange}/>
                            </div>
                            {postError && <p css={css`color:red; font-size:12px; margin-left:20%; margin-top:5px;`}>** {postError}</p>}
                            <Button onClick={handleSave}>Save</Button>  
                        </FormMusicData>

                    </MusicForm>
                }
                {
                    !(isAdd || isEdit) &&
                    <Additional>
                        <div className='additional_add'>
                            <div className='description'>
                            <p>This page is dedicated to music list.</p>
                            <p>want to edit? click on edit button in the selected music list.</p>
                            <p>want to add new music to music list?  click below</p>
                            </div>
                            <button onClick={handleAdd}>Add music</button>
                        </div>
                    </Additional>
                }
            </MainBody>
        </div>
    );
}


