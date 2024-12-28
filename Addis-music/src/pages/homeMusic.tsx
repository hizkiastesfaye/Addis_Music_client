/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'
import deletee from '../icons/delete.png'
import { useState } from 'react';

const MainBody = styled.div`
    display:flex;
    justify-content:space-between;
    padding:20px 30px;

`;
const MusicLists = styled.div`
    width: 60%;
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
    padding-bottom:5px;
    margin-bottom:10px;
    border-bottom:1px solid rgba(0,0,0,0.1);
    height:140px;
    .arti_alb{
        display:flex;
        gap:5%;
        justify-content:left;
    }
    p{
    font-size:20px;
    color:#525252;
    
    }
    .genre{
        padding-left:5%;
    }
    .manage{
        // background-color:blue;
        display:flex;
        justify-content:right;
        padding-right:50px;
        gap:50px;
        .image{
            // background-color:red;
            width:10%;
            display:flex;
            align-items:center;
            img{
                width:20px;
                height:20px;
                right:2px;
                margin:0 auto;
                // background-color:yellow;
            }
            &:hover{
                img{
                    width:28px;
                    height:28px;
                }
            }
        }
        .edit{
            width:10%;
            height:35px;
            // background-color:red;
            border:1px solid green;
            border-radius:20px;
            display:flex;
            align-items:center;
            p{
                color:green;
                margin: 0 auto;
                padding-left:20px;
                padding-right:20px;
                // font-weight: bolder;
                font-size:20px;
                border-radius:20px;
            }
            &:hover{
                background-color:green;
                p{
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

`;
export default function HomeMusic(){
    const musiList = [{
        title:'alone again', 
        artist:'the weekend',
        album:'AfterHour',
        genre:'Elecro-pop, Dark R&B'
    },
    {
        title:'alone again', 
        artist:'the weekend',
        album:'AfterHour',
        genre:'Elecro-pop, Dark R&B'
    },
    {
        title:'alone again', 
        artist:'the weekend',
        album:'AfterHour',
        genre:'Elecro-pop, Dark R&B'
    },
    {
        title:'alone again', 
        artist:'the weekend',
        album:'AfterHour',
        genre:'Elecro-pop, Dark R&B'
    },
    {
        title:'alone again', 
        artist:'the weekend',
        album:'AfterHour',
        genre:'Elecro-pop, Dark R&B'
    }

]
const [indexValue,setIndexValue] = useState<number|null>(null)
    return (
        <div style={{minHeight:'60vh'}}>
            <MainBody>
                <MusicLists>
                    <h2>Music list</h2>
                    { musiList.map((musiListt, index)=>(
                    <MusicList key={index} 
                        onMouseEnter={()=>setIndexValue(index)}
                        onMouseLeave={()=>setIndexValue(null)}    
                    >   
                        <div className='arti_alb'>
                            <p></p>
                            <p>title: {musiListt.title}</p>
                            <p>artist: {musiListt.artist}</p>
                            <p>album: {musiListt.album}</p>
                        </div>
                        <p className='genre'>genre: {musiListt.genre}</p>
                        {indexValue === index &&
                        <div className='manage'>
                            <div className='edit'>
                                <p>Edit</p>
                            </div>
                            <div className='image'>
                                <img src={deletee} alt='delete icon' />
                            </div>
                        </div>
                        }
                    </MusicList>
                    ))}   
                </MusicLists>
                <MusicForm>
                    <p>This is good.</p>
                </MusicForm>
            </MainBody>
        </div>
    );
}


