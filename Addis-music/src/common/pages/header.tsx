/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import '@fontsource/jaini'; // Defaults to 400 weight
import search from "../../icons/search.png";
import filter from "../../icons/filter.png";
const Container = styled.div`
    box-shadow:0px 4px 6px rgba(0,0,0,0.1);
    h2{
        margin-left:7%;
        color:green;
        font-family:Jaini;
        background-color:red;
        margin-top:0px;
  
    }
    `;
const DivSearch = styled.div`
    display:flex;
    justify-content:space-between;
    height:30px;
    width:70%;
    margin-left:20%;
    border: 2px solid gray;
    border-radius: 50px;

    p{
        color:#A0A0A0;

    }
    img{
        margin:1%;
        height: 20px;
        width: 20px;
        
    }
    `;
const DivSearch1=styled.div`
    width:80%;
    // background-color:blue;
    border-right: 2px solid gray;
    display:flex;
    justify-content: space-around;
    gap-
    `;
export default function Header(){
    return (
        <>
            <Container>
                <h2>Addis Music</h2>
                <DivSearch>
                    <DivSearch1>
                        <img src={search} alt="search icons" />
                        <p>Search</p>
                    </DivSearch1>
                    <div>
                        <img src={filter} alt="search icons" />
                        <p>by genre</p>
                    </div>
                    
                </DivSearch>
            </Container>

        </>
    );
}


