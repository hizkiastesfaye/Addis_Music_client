/**@jsxImportSource @emotion/react */
import styled from "@emotion/styled"
import '@fontsource/jaini';

export const Footerr = styled.div`
    position:absolute;
    // bottom:100px;
    height:25vh;
    background-color:#F1F1F1;
    border-top: 2px solid green;
    width:100%;

    .copyright{
        color:green;
        margin-top:5px;
        bottom:0;
        padding-left:6%;
        font-size:14px;
        display:flex;
        justify-content:center;
        gap:3px;
        img{
            padding-top:15px;
            width:15px;
            height:15px;
        }
        p{
            color:black;
            font-size:14px;  
        }
    }
`;
export const FooterBody = styled.div`

    display:flex;

    justify-content:space-around;
    color:green;
    padding-left:2px;
    padding-right:2px;
    margin-bottom:15px;
    @media (max-width:600px){
        margin-bottom:2px;
    }
`;
export const FooterDiv1=styled.div`
    
    .name {
        background-color:green;
        width:60%;
        border-radius:20px;
        padding-left:40px;
        cursor:pointer;
        h2{
            font-family:Jaini;
            // font-size:18;
            color:#0B5213;
            color:white;
        }
        h4{
            display:none;
        }
    }
    p{
        margin-bottom:5px;
    }
    @media (max-width:600px){
        // border-right:1px solid gray;
        width:140px;
        .name{
            padding-left:7px;
            
            width:90px;
            h2{
                display:none;
            }
            h4{
                
                display:block;
                color:white;
                margin-bottom:0;
            }
        }
        p{
            font-size:12px;
        }
    }

`;
export const FooterLogos=styled.div`
    display:flex;
    gap:20px;

    img{
        width:30px;
        height:30px;
    }
    @media (max-width:600px){
        gap:5px;
        img{
            width:20px;
            height:20px;
        }
    }

`;
export const FooterDiv2=styled.div`
    // border-right:1px solid gray;
    h4{
        display:none;
    }
    ul{
        // background-color:red;
        padding:0;
        margin:0;
        li{
            list-style-type:none;
            font-size:16px;
            cursor:pointer;
            border-bottom:1px solid #F1F1F1;
            
            &:hover{
                border-bottom:1px solid green;
            }
            
        }
    }
    @media(max-width:600px){
        margin:0;
        // background-color:yellow;
        ul{
            // background-color:red;
            padding:0;
            margin:0;
            li{
                list-style-type:none;
                font-size:14px;
                
            }
        }
        h3{
            display:none;
        }
        h4 {
            display:block;
            margin-bottom:7px;
        }
    }
`;
export const FooterDiv3=styled.div`
    h4{
        display:none;
    }
    ul{
        // background-color:red;
        padding:0;
        margin:0;
        li{
            list-style-type:none;
            font-size:16px;
            cursor:pointer;
            border-bottom:1px solid #F1F1F1;
            
            &:hover{
                border-bottom:1px solid green;
            }
        }
    }
    @media(max-width:600px){
        margin:0;
        // background-color:yellow;
        ul{
            // background-color:red;
            padding:0;
            margin:0;
            li{
                list-style-type:none;
                font-size:14px;
            }
        }
        h3{
            display:none;
        }
        h4 {
            display:block;
            margin-bottom:7px;
        }
    }
`;