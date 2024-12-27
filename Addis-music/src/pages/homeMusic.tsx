/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'
import { useState } from 'react';
import { redirect } from 'react-router-dom';

const MusicForm = styled.div`
    width:40%;
    padding-left:3%;
    padding-top:40px;

    h2{
        // background:red;
        padding-left:50px;
        margin-bottom:30px;
    }
`;
const FormMusicData = styled.div`
    padding-left:20px;
    margin-bottom:20px;
    div{
        display:flex;
        justify-content:space-between;
        padding-left:5px;
        padding-right:20%;
        // background-color:red;
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
    // font-weight:bold;
    font-size:20px;
    border:1px solid green;
    border-radius:15px;
    margin-top:40px;
    width:200px;
    margin-left:18%;

    &:hover{
        color:white;
        background-color:green;
        font-weight:bold;
    }




`;
export default function HomeMusic(){
    const musicList = [
        {
            title:'alone again',
            artist:'the weekend',
            album:'AfterHoure',
            genre:'Electronic, pop'
        },
        {
            title:'alone again',
            artist:'the weekend',
            album:'AfterHoure',
            genre:'Electronic, pop'
        },
        {
            title:'alone again',
            artist:'the weekend',
            album:'AfterHoure',
            genre:'Electronic, pop'
        },        
        {
            title:'alone again',
            artist:'the weekend',
            album:'AfterHoure',
            genre:'Electronic, pop'
        }
    ]

    const [isEdit, setIsEdit] = useState<boolean>(false)
    return (
        <div style={{minHeight:'70vh', maxHeight:'100vh', display:'flex', justifyContent:'space-between', }}>
        <div style={{width:'60%' ,border:'1px solid gray', padding:'8%'}}>
        { musicList.map((musicc,index)=>(
                <div key={index} style={{height:'50px', backgroundColor:'gray',marginBottom:'10px'}}>
                    {musicc.title}
                    {musicc.artist}
                    {musicc.album}
                    {musicc.genre}
                    <button onClick={()=>setIsEdit(true)} style={{marginLeft:'70px'}}>Edit</button>
                </div>
                
            ))

            }
        </div>
        <MusicForm>
            <FormMusicData>
                <div>
                    <label htmlFor='title'>Title:</label>
                    <input type='text' id='title'/>
                </div>
                <div>
                    <label htmlFor='artist'>Artist:</label>
                    <input type='text' id='artist'/>
                </div>
                <div>
                    <label htmlFor='album'>Album:</label>
                    <input type='text' id='album'/>
                </div>
                <div>
                    <label htmlFor='genre'>Genre:</label>
                    <textarea id='genre' />
                </div>
            </FormMusicData>
            <Button>Save</Button>
        </MusicForm>
        </div>
    );
}


