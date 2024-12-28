/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
// import { css } from "@emotion/react";
import '@fontsource/jaini';
import search from "../../icons/search.png";
import filter from "../../icons/filter.png";
import { useDispatch,useSelector } from "react-redux";
import { RootState } from "../../store/indexx";
import { dropMenuTrue,dropMenuFalse } from "../../store/dropDownFilter";

const Container = styled.div`
    box-shadow:0px 4px 6px rgba(0,0,0,0.1);
    padding-bottom:10px;
    h2{
        margin-left:7%;
        color:green;
        font-family:Jaini;
        margin-top:0px;
  
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
    
`;
const Image1 = styled.div`
    display:flex;
    background-color: #E7E7E7;
    align-items:center;
    width: 60px;
    border-top-left-radius:20px;
    border-bottom-left-radius:20px;


    &:hover{
        cursor:pointer;
        img{
            width:25px;
            height:25px;
        };
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


    div{
        display:flex;
        align-items:center;
        width:60px;

        img{
            margin:0 auto;
        }
        
        &:hover{
            cursor:pointer;
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
    const dispatch = useDispatch()
    const isDropMenu = useSelector((state:RootState)=>state.isDropFilter.isDropMenu)
    const handleDropFilter=()=>{
        if(isDropMenu){
            dispatch(dropMenuFalse())
            console.log(isDropMenu)
        }
        else{
            dispatch(dropMenuTrue())
        }
    }
    return (
        <>
            <Container>
                <h2>Addis Music</h2>
                <DivSearch>
                    <DivSearch1>
                        <Image1>
                            <img src={search} alt="search icons" />
                        </Image1>
                        <input type="text" placeholder="Search for Music" />
                    </DivSearch1>
                    <DivSearch2>
                        <button onClick={handleDropFilter}>
                            <img src={filter} alt="search icons" />
                        </button>
                        <p>artist</p>
                    </DivSearch2>
                </DivSearch>
            </Container>
            { isDropMenu &&
            <DropFilter>
                <ul>
                    <li>Title</li>
                    <li>Album</li>
                    <li>Artist</li>
                    <li>Genre</li>
                </ul>
            </DropFilter>
            }
        </>
    );
}


