/**@jsxImportSource @emotion/react */
import styled from '@emotion/styled'

export const Main = styled.div`
    height:80vh;
    overflow:scroll;
`;
export const Count = styled.div`
    background-color:#F4F4F4;
    margin:10px 20px;
    display:flex;
    justify-content:right;
    gap:5%;
    padding:0 20px;

`;
export const Container= styled.div`
    display:flex;
    justify-content:left;
    border:2px solid black;
    margin: 30px 20px 10px 20px;
    padding: 10px;
    gap:1%;
`;

export const ArtistList= styled.div`
    border:1px solid black;
    width:70%;
    padding:5px;
`;
export const ArtList=styled.div`
    margin:10px;
    background-color:#F4F4F4;
    padding:5px 20px;
`;
export const AlbList=styled.div`

`;
export const GenreList= styled.div`
    border:1px solid red;
    width:30%;
`;