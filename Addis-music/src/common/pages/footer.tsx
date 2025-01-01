/**@jsxImportSource @emotion/react */
import facebook from "../../assets/icons/logo/facebook.png";
import instagram from "../../assets/icons/logo/instagram.png";
import twitter from "../../assets/icons/logo/twitter.png";
import tiktok from "../../assets/icons/logo/tik-tok.png";
import youtube from "../../assets/icons/logo/youtube.png";
import copyright from "../../assets/icons/copyright.png"
import { useNavigate } from "react-router-dom";
import { css } from "@emotion/react";
import * as S from "../../styles/footer.style"


export default function Footer(){
    const navigate = useNavigate()
    return <>
        <S.Footerr>
        <S.FooterBody>
            <S.FooterDiv1>
                <div className="name" onClick={()=>navigate('/music')}>
                    <h2>Addis Music</h2>
                    <h4>Addis Music</h4>
                </div>
                <p>Follow us in social media</p>
                <S.FooterLogos>
                <a href="https://www.facebook.com" target="_blank"><img src={facebook} alt="facebook" /></a>
                    <a href="https://www.tiktok.com" target="_blank"><img src={tiktok} alt="tiktok"/></a>
                    <a href="https://www.instagram.com" target="_blank"><img src={instagram} alt="instagram"/></a>
                    <a href="https://www.twitter.com" target="_blank"><img src={twitter} alt="twitter"/></a>
                    <a href="https://www.youtube.com" target="_blank"><img src={youtube} alt="youtube"/></a>
                </S.FooterLogos>
            </S.FooterDiv1>
            <S.FooterDiv2>
                <h3>To Know us</h3>
                <h4>To Know us</h4>
                <ul>
                    <li onClick={()=>navigate('/aboutUs')}>About us</li>
                    <li><a href="https://github.com/hizkiastesfaye/Addis_Music_client/blob/main/README.md" target="_blank" css={css`color:green; text-decoration:none;`}>Blogs</a></li>
                </ul>
            </S.FooterDiv2>
            <S.FooterDiv3>
                <h3>Support</h3>
                <h4>Support</h4>
                <ul>
                    <li><a href="https://github.com/hizkiastesfaye/Addis_Music_client/blob/main/README.md" target="_blank" css={css`color:green; text-decoration:none;`}> Help Center</a></li>
                    <li><a href="mailto:tesfayehizkiyas3@gmail.com" css={css`text-decoration:none; color:green;`}> contact us </a></li>
                    <li><a href="mailto:tesfayehizkiyas3@gmail.com?subject=To Reporting%20Abuse" css={css`text-decoration:none; color:green;`}>  Report Abuse </a></li>
                </ul>
            </S.FooterDiv3>
        </S.FooterBody>
        <div className="copyright">
        <img src={copyright} alt="copyright" />
        <p >2024, Addis Music</p>
        </div>
        </S.Footerr>
    </>
}

