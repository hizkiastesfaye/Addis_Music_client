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
    // border:2px solid black;
    margin: 30px 20px 10px 10px;
    padding: 10px 1px;
    gap:1px;
`;

export const ArtistList= styled.div`
    // border:1px solid black;
    width:70%;
    padding:2px;

    .colName{
        display:flex;
        justify-content:left;
        margin:0 10px;
        // background-color:red;
        gap:2px;

        .colArtist{
            width:28%;
            padding-left:5px;
            // background-color:blue;
        }
        .colAlbum{
            width:35%;
            padding-left: 20px;
            // background-color:blue;
            // margin-left:10px;

        }
        .colSong{
            width:30%;
            // background-color:green;
        }

    }
`;
export const ArtList=styled.div`
    margin:10px;
    background-color:#F4F4F4;
    padding:1px;
    display:flex;
    justify-content:left;
    
    .artlist1{
        width:25%;
        // background-color:blue;
        padding-left:5px;
    }
    .artlist2{
        // background-color:red;
        width:75%;
        padding-left:5px;
        display:flex;
        justify-content:left;
        margin-bottom:0;
        
        .alblength{
            width:50px;
            // margin:0px;
            // background-color:blue;
            // padding:0;
            // height:20px;

        }

        .mainAlb{
            // width:50%;
            // background-color:green;
            width:90%;
            padding-bottom:0;
            margin-bottom:0;
        }
    }
    // &:hover{
    //     box-shadow: 2px 4px 6px green;
    //     cursor:pointer;
    // }
`;
export const AlbList=styled.div`
    padding-left:1px;
    padding-top:0;
    // background-color:yellow;
    display:flex;
    justify-content:left;
    // width:100%;
    margin-bottom:1px;
    border:1px solid #F4F4F4;
    

    .alblist1{
        display:flex;
        justify-content:left;
        width:50%;

        .albname{
            border-bottom:1px solid black;
            // background-color:red;
            height:20px;

            &:hover{
                border-bottom:1px solid green;
                cursor:pointer;
                color:green;
            }
        }

    }
        .alblist2{
            // background-color:blue;
            width:50%;
        }
`;
export const GenreList= styled.div`
    // border:1px solid red;
    width:30%;
    padding:10px;
    
    h2{
        color:green;
    }
    div{
        padding-left:10px;
        display:flex;
        justify-content:left;
        background-color:#F4F4F4;
        margin:5px 0;

        p{
            color:green;
        }
        .gensong{
            width:60%;
            // background-color:red;
        }
        .gencount{
            width:80px;
            // background-color:brown;
        }
    }
`;