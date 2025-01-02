/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
// import '@fontsource/jaini';

export const Container = styled.div`
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
export const changeSearch = styled.div`
    border:1px solid black;
    border-radius:10px;
    position:absolute;
    top:50px;
    width:40%;
    background-color:white;
    center:10px;
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
        }
    }
`;
export const DivSearch = styled.div`
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
export const DivSearch1=styled.div`
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
export const Image1 = styled.button`
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
export const DivSearch2= styled.div`
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
export const DropFilter=styled.div`
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