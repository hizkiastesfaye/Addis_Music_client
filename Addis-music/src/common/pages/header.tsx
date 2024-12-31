/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
// import { css } from "@emotion/react";
import '@fontsource/jaini';
import search from "../../assets/icons/search.png";
import filter from "../../assets/icons/filter.png";
import { useDispatch,useSelector } from "react-redux";
import { RootState } from "../../store/indexx";
import { dropMenuTrue,dropMenuFalse } from "../../store/dropDownFilter";
import { useState } from "react";
import { setFilterBy,setSearchText,fetchSeachDatas, fetchSeachError } from "../../store/search";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Container = styled.div`
    // background-color:red;
    width:100%;
    box-shadow:0px 4px 6px rgba(0,0,0,0.1);
    padding-bottom:10px;
    
    h2{
        margin-left:7%;
        color:green;
        font-family:Jaini;
        margin-top:0px;
        // background-color:yellow;
        cursor:pointer;
  
    }
`;
const DivSearch = styled.div`
    display:flex;
    // background-color:green;
    justify-content:space-between;
    height:40px;
    width:70%;
    margin-left:20%;
    border: 2px solid gray;
    border-radius: 50px;

    p{
        color:#A0A0A0;

    }
    img{
        height: 20px;
        width: 20px;
        
    }
    @media (max-width:600px){
        // background-color:yellow;
        margin-left:2%;
        width:96%;
        height:25px;

        img{
            height:15px;
            width:15px;
        }
    }
`;
const DivSearch1=styled.div`
    // background-color:blue;
    width:80%;
    border-right: 2px solid gray;
    display:flex;
    input{
        padding-left:2%;
        font-size:18px;
        outline:0px;
        border-top:0px;
        border-right:0px;
        border-bottom:0px;
        width:100%;
    };
    @media (max-width:600px){
        input{
            font-size:12px;
        }
    }
    
`;
const Image1 = styled.button`
    border:none;
    display:flex;
    background-color: #E7E7E7;
    align-items:center;
    width: 60px;
    border-top-left-radius:20px;
    border-bottom-left-radius:20px;


    &:hover{
        cursor:pointer;
        background-color:#D7F4DB;
        img{
            width:25px;
            height:25px;
        };
        @media (max-width:600px){
        background-color:#D7F4DB;
            img{
                width:17px;
                height:17px;
            }
        }
        }
    img{
        margin:0 auto;
    }
`;
const DivSearch2= styled.div`
    width:20%;
    display:flex;
    align-items:center;
    gap:5px;
    padding-left:10px;
    padding-right:13px;
    // background-color:red;

    button{
        height:35px;
        display:flex;
        align-items:center;
        width:60px;
        border:0;
        background-color:white;
        img{:30px;
                    backgr
            margin:0 auto;
        };
        
        &:hover{
            cursor:pointer;
            border:1px solid green;
            background-color:#D7F4DB;
            img{
                width:25px;
                height:25px;
            }
        }
    }
    
    p{
        font-size:18px;
        height:30px;
        width:40%;
        padding-left:10%;
        color:gray;
    }
    @media (max-width:600px){
        width:100px;
        border-top-right-radius:13px;
        border-bottom-right-radius:13px;
        padding-left:1px;
        // background-color:blue;
        font-weight:100;
        p{
            font-size:16px;
            // background-color:blue;
            height:20px;
            margin-top:1px;
            padding-top:5px;
        }

        button{
            height:25px;
            width:35px;

            &:hover{
                border:1px solid green;
                background-color:#D7F4DB;
                img{
                    width:17px;
                    height:17px;
                }
            }
        }
    }
`;
const DropFilter=styled.div`
    border:1px solid black;
    border-radius:10px;
    position:absolute;
    top:50px;
    width:150px;
    background-color:white;
    right:13%;
    top:90px;

    ul{
        padding-left:0;

    }
    li{
        list-style-type: none;
        background-color:#F0F0F0;
        margin-bottom:7px;
        width:full;
        height:32px;

        &:hover{
            color:green;
            cursor:pointer;
            border-bottom:1px solid green;
        }
    }
`;


export default function Header(){
    // const [filterName,setFilterName] = useState('title')
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {filterType,searchText,searchDatas} = useSelector((state:RootState)=>state.searchMusic)
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
    const handleChangeSearch=(e)=>{
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
        }
        catch(err){
            console.log('error**: ',err.response.data.error)
            dispatch(fetchSeachError(err.response.data.error))
        }
    } 
    return (
        <>
            <Container>
                <h2 onClick={()=>navigate('/music')}>Addis Music</h2>
                <DivSearch>
                    <DivSearch1>
                        <Image1 onClick={handlesearchSubmit}>
                            <img src={search} alt="search icons" />
                        </Image1>
                        <input type="text" placeholder="Search for Music" id='searchid' name='searchName' value={searchvalues} onChange={handleChangeSearch}/>
                    </DivSearch1>
                    <DivSearch2>
                        <button onClick={handleDropFilter}>
                            <img src={filter} alt="search icons" />
                        </button>
                        <p>{filterType}</p>
                    </DivSearch2>
                </DivSearch>
            </Container>
            { isDropMenu &&
            <DropFilter>
                <ul>
                    <li onClick={()=>handleFilter('title')}>Title</li>
                    <li onClick={()=>handleFilter('album')}>Album</li>
                    <li onClick={()=>handleFilter('artist')}>Artist</li>
                    <li onClick={()=>handleFilter('genre')}>Genre</li>
                </ul>
            </DropFilter>
            }
        </>
    );
}


