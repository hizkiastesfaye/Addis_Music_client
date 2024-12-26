/**@jsxImportSource @emotion/react */
import styled from "@emotion/styled"
import '@fontsource/jaini';
import facebook from "../../icons/logo/facebook.png";
import instagram from "../../icons/logo/instagram.png";
import twitter from "../../icons/logo/twitter.png";
import tiktok from "../../icons/logo/tik-tok.png";
import youtube from "../../icons/logo/youtube.png";

const Footerr = styled.div`
    postion:fixed;
    bottom:0;
    height:35vh;
    background-color:#0B5213;
    .copyright{
        color:white;
        margin-top:2px;
        padding-left:50%;
    }
`;
const FooterBody = styled.div`

    display:flex;
    justify-content:space-around;
    color:white;
    padding-left:2%;
    padding-right:2%;
    margin-bottom:15px;
`;
const FooterDiv1=styled.div`
    
    .name {
        background-color:white;
        width:200px;
        border-radius:20px;
        padding-left:40px;
        h2{
            font-family:Jaini;
            font-size:18;
            color:#0B5213;
        }
    }
    p{
        margin-bottom:20px;
    }

`;
const FooterLogos=styled.div`
    display:flex;
    gap:20px;

    img{
        width:30px;
    }
`;
const FooterDiv2=styled.div`

`;
const FooterDiv3=styled.div`

`;
const ExtraFooter=styled.div`
    border-top:1px solid white;
    display:flex;
    justify-content:space-around;
    color:white;
`;
export default function Footer(){
    return <>
        <Footerr>
        <FooterBody>
            <FooterDiv1>
                <div className="name">
                    <h2>Addis Music</h2>
                </div>
                <p>Follow us in social media</p>
                <FooterLogos>
                    <img src={facebook} alt="facebook" />
                    <img src={tiktok} alt="tiktok"/>
                    <img src={instagram} alt="instagram"/>
                    <img src={twitter} alt="twitter"/>
                    <img src={youtube} alt="youtube"/>
                </FooterLogos>
            </FooterDiv1>
            <FooterDiv2>
                <h3>Get to Know us</h3>
                <ul>
                    <li>About us</li>
                    <li>Blogs</li>
                </ul>
            </FooterDiv2>
            <FooterDiv3>
                <h3>Support</h3>
                <ul>
                    <li>Help Center</li>
                    <li>contact us</li>
                    <li>Report Abuse</li>
                </ul>
            </FooterDiv3>
        </FooterBody>
        <ExtraFooter>
            <p>Conditions of use</p>
            <p>Privacy</p>
            <p>Your Ads Privacy Choices</p>
        </ExtraFooter>
        <p className="copyright">2024, Addis Music</p>
        </Footerr>
    </>
}

