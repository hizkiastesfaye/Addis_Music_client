/**@jsxImportSource @emotion/react */
import styled from "@emotion/styled"
import '@fontsource/jaini';
import facebook from "../../icons/logo/facebook.png";
import instagram from "../../icons/logo/instagram.png";
import twitter from "../../icons/logo/twitter.png";
import tiktok from "../../icons/logo/tik-tok.png";
import youtube from "../../icons/logo/youtube.png";
import copyright from "../../icons/copyright.png"
import { useNavigate } from "react-router-dom";
import { css } from "@emotion/react";

const Footerr = styled.div`
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
const FooterBody = styled.div`

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
const FooterDiv1=styled.div`
    
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
const FooterLogos=styled.div`
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
const FooterDiv2=styled.div`
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
const FooterDiv3=styled.div`
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
export default function Footer(){
    const navigate = useNavigate()
    return <>
        <Footerr>
        <FooterBody>
            <FooterDiv1>
                <div className="name" onClick={()=>navigate('/music')}>
                    <h2>Addis Music</h2>
                    <h4>Addis Music</h4>
                </div>
                <p>Follow us in social media</p>
                <FooterLogos>
                <a href="https://www.facebook.com" target="_blank"><img src={facebook} alt="facebook" /></a>
                    <a href="https://www.tiktok.com" target="_blank"><img src={tiktok} alt="tiktok"/></a>
                    <a href="https://www.instagram.com" target="_blank"><img src={instagram} alt="instagram"/></a>
                    <a href="https://www.twitter.com" target="_blank"><img src={twitter} alt="twitter"/></a>
                    <a href="https://www.youtube.com" target="_blank"><img src={youtube} alt="youtube"/></a>
                </FooterLogos>
            </FooterDiv1>
            <FooterDiv2>
                <h3>To Know us</h3>
                <h4>To Know us</h4>
                <ul>
                    <li onClick={()=>navigate('/aboutUs')}>About us</li>
                    <li><a href="https://github.com/hizkiastesfaye/Addis_Music_client/blob/main/README.md" target="_blank" css={css`color:green; text-decoration:none;`}>Blogs</a></li>
                </ul>
            </FooterDiv2>
            <FooterDiv3>
                <h3>Support</h3>
                <h4>Support</h4>
                <ul>
                    <li><a href="https://github.com/hizkiastesfaye/Addis_Music_client/blob/main/README.md" target="_blank" css={css`color:green; text-decoration:none;`}> Help Center</a></li>
                    <li><a href="mailto:tesfayehizkiyas3@gmail.com" css={css`text-decoration:none; color:green;`}> contact us </a></li>
                    <li><a href="mailto:tesfayehizkiyas3@gmail.com?subject=To Reporting%20Abuse" css={css`text-decoration:none; color:green;`}>  Report Abuse </a></li>
                </ul>
            </FooterDiv3>
        </FooterBody>
        <div className="copyright">
        <img src={copyright} alt="copyright" />
        <p >2024, Addis Music</p>
        </div>
        </Footerr>
    </>
}

