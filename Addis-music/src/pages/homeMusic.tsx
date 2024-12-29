/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'
import { RootState } from '../store/indexx';
import { UseDispatch, useSelector } from 'react-redux';
import { setFilterBy,setSearchText,fetchSeachDatas } from '../store/search';
import deletee from '../icons/delete.png'
import close from '../icons/close.png'
import { useState } from 'react';

const MainBody = styled.div`
    display:flex;
    justify-content:space-between;
    padding:20px 30px;

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
`;
const MusicList = styled.div`
    box-shadow:0px 4px 6px rgba(0,0,0,0.1);
    padding-bottom:2px;
    margin-bottom:2px;
    border-bottom:1px solid rgba(0,0,0,0.1);
    border-right:1px solid rgba(0,0,0,0.1);
    height:90px;
    display:flex;
    justify-content:space-between;

    .list_atribute{
        // background-color:yellow;
        width:98%;
        .arti_alb{
            display:flex;
            gap:5%;
            justify-content:left;
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
                img{
                    width:20px;
                    height:20px;
                    right:2px;
                    margin:0 auto;
                    &:hover{
                        width:28px;
                        height:28px;
                        box-shadow:0 2px 4px green;
                    }
                }

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
`;

const MusicForm = styled.div`
    width:40%;
    padding-left:3%;

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
        h3{
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
`;
const FormMusicData = styled.form`
    padding-left:20px;
    margin-bottom:20px;
    div{
        display:flex;
        justify-content:space-between;
        padding-left:5px;
        padding-right:20%;
        margin-bottom:15px;

        input, textarea{
            width:80%;
            height:20px;
            color:#333333;

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
    width:20%;
    // background-color:red;
    padding-top:8%;
    
    .additional_add{
        border: 1px solid white;
        width:100%;
        button{
            width:70%;
            color:green;
            border:1px solid green;
            border-radius: 20px;
            margin-left:10%;
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
    const [musiList,setMusicList] = useState([{
        id:0,
        title:'alone again', 
        artist:'the weekend',
        album:'AfterHour',
        genre:'Elecro-pop, Dark R&B'
        },
        {
        id:1,
        title:'alone again', 
        artist:'the weekend',
        album:'AfterHour',
        genre:'Elecro-pop, Dark R&B'
        },
        {
        id:2,
        title:'alone again', 
        artist:'the weekend',
        album:'AfterHour',
        genre:'Elecro-pop, Dark R&B'
        },
        {
        id:3,
        title:'alone again', 
        artist:'the weekend',
        album:'AfterHour',
        genre:'Elecro-pop, Dark R&B'
        },
        {
        id:4,
        title:'alone again', 
        artist:'the weekend',
        album:'AfterHour',
        genre:'Elecro-pop, Dark R&B'
        },
        {
        id:5,
        title:'alone again', 
        artist:'the weekend',
        album:'AfterHour',
        genre:'Elecro-pop, Dark R&B'
        },
        {
        id:6,
        title:'alone again', 
        artist:'the weekend',
        album:'AfterHour',
        genre:'Elecro-pop, Dark R&B'
        },
        {
        id:7,
        title:'alone again', 
        artist:'the weekend',
        album:'AfterHour',
        genre:'Elecro-pop, Dark R&B'
        },
        
    ])
    const [indexValue,setIndexValue] = useState<number|null>(null)
    const [isEdit,setIsEdit] = useState<boolean>(false);
    const [isAdd,setIsAdd] = useState<boolean>(false)

    interface MusicDataStatus{
        id:number | null,
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
    const [musicDatas,setMusicDatas] = useState<MusicDataStatus>(initialMusicDatas)

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
    const handleEdit = (music:MusicDataStatus)=>{
        setMusicDatas(initialMusicDatas)
        setIsEdit(true)
        setIsAdd(false)
        setMusicDatas(music)
        console.log(musicDatas)
    }
    const handleAdd = ()=>{
        setMusicDatas(initialMusicDatas)
        setIsEdit(false)
        setIsAdd(true)
    }
    const handleCancel = ()=>{
        setMusicDatas(initialMusicDatas)
        setIsAdd(false)
        setIsEdit(false)
    }

    const handleSave=()=>{
        console.log(musicDatas.title)
        setMusicList((prevList)=>
            prevList.map((item)=>
                item.id === musicDatas.id? {...item,title:musicDatas.title} : item
            )
        )
    }
    const handleDelete=(music:MusicDataStatus)=>{
        window.alert('are you sure?')
        setMusicList((prevList)=>
            prevList.filter((item)=>item.id !== music.id)
        )
    }
    return (
        <div style={{minHeight:'60vh'}}>
            <MainBody>
                <MusicLists>
                    <h2>Music list</h2>
                    { musiList.map((musiListt)=>(
                    <MusicList key={musiListt.id} 
                        onMouseEnter={()=>setIndexValue(musiListt.id)}
                        onMouseLeave={()=>setIndexValue(null)} >
                        <div className='list_atribute'>
                            <div className='arti_alb'>
                                <p>title: {musiListt.title}</p>
                                <p>artist: {musiListt.artist}</p>
                                <p>album: {musiListt.album}</p>
                            </div>
                            <p className='genre'>genre: {musiListt.genre}</p>
                        </div>
                        <div className='before_manage'>
                            {indexValue === musiListt.id &&
                            <div className='manage'>
                                <button onClick={()=>handleEdit(musiListt)}>Edit</button>
                                <div className='image'>
                                    <img src={deletee} alt='delete icon' onClick={()=>handleDelete(musiListt)}/>
                                </div>
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
                        <FormMusicData>
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
                                <input type='text' id='album' name='album' value={musicDatas.album} onChange={handleChange}/>
                            </div>
                            <div>
                                <label htmlFor='genre'>Genre:</label>
                                <textarea id='genre' name='genre' value={musicDatas.genre} onChange={handleChange}/>
                            </div>
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
                            <button onClick={handleAdd}>Add new music</button>
                        </div>
                    </Additional>
                }
            </MainBody>
        </div>
    );
}


