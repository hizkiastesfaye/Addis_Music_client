/**@jsxImportSource @emotion/react */
import styled from '@emotion/styled'

interface AllProps{
    isAlbumBorder?:boolean,
    isArtistBorder?:boolean,
    isError?:boolean,
}

export const Main = styled.div`
    min-height:61vh;
    max-height:85vh;
    overflow:scroll;
`;
export const Count = styled.div<AllProps>`
    background-color:#F4F4F4;
    margin:10px 20px;
    display:${(prop)=>(prop.isError ? 'none': 'flex')};
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

    @media (max-width:650px){
        // background-color:red;
        display:block;
    }
`;

export const ArtistList= styled.div<AllProps>`
    // border:1px solid black;
    width:70%;
    padding:2px;
    // display:${(prop)=>(prop.isError ? 'none': 'flex')};

    .colName{
        display:${(prop)=>(prop.isError ? 'none': 'flex')};
        // display:flex;
        justify-content:left;
        margin:0 10px;
        background-color:red;
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
    
    @media (max-width:650px){
        width:100%;
        max-height:60vh;
        overflow-y:scroll;

        .colName{
            display:none;
        }

    }
`;
export const ArtList=styled.div<AllProps>`
    margin:10px;
    background-color:#F4F4F4;
    padding:1px;
    display:flex;
    justify-content:left;
    
    .artlist1{
        width:25%;
        // background-color:blue;
        padding-left:5px;
        p{
            margin:5px 0;
        }
        .artlistname{
            // padding-right:10px;
            // border-bottom:1px solid black;
            color:${(prop)=>(prop.isArtistBorder ? 'green' : 'black')};

            &:hover{
                // border-bottom:1px solid green;
                color:green;
                cursor:pointer;
            }
        }

        div{
            margin-bottom:2px;
            p{
                margin:0;
                font-size:12px;

            }
        }
    }
    .artlist2{
        // background-color:brown;
        width:75%;
        // padding-left:5px;
        display:flex;
        justify-content:left;
        margin-bottom:0;

        .alblength{
            width:50px;
            // background-color:blue;
        }
        
        .mainAlb{
            // background-color:green;
            width:100%;
            padding-bottom:0;
            margin-bottom:0;

        }
    }

    @media (max-width:650px){
        // background-color:yellow;
        display:block;
        width:98%;
        // padding-right:9px;

        .artlist1{
            // background-color:brown;
            width:100%;
            display: flex;
            justify-content:space-between;
            // padding-right:5px;
            
            .artlistname{

            }
            div{
                padding-right:9px;
                margin:7px 0;
                // background-color:white;
            }
        }
        .artlist2{
            // background-color:yellow;
            width:100%;

            .mainAlb{
                // background-color:brown;
                width:100%;

                div{
                    width:100%;
                }
            }
        }
    }
`;
export const AlbList=styled.div<AllProps>`
    padding-left:1px;
    padding-top:0;  
    // background-color:red;
    display:flex;
    justify-content:left;
    width:100%;
    margin-bottom:1px;
    border:${(prop)=>(prop.isAlbumBorder ?'1px solid black' : '1px solid #F4F4F4')};
    // background:${(prop)=>(prop.isAlbumBorder ? 'red' : 'yellow' )};
    // border:1px solid black;
    

    .alblist1{
        display:flex;
        justify-content:left;
        width:50%;

        .albNameNumb{
            display:flex;
            // background-color:blue;
            .albname{
                border-bottom:1px solid black;
                // background-color:red;
                height:20px;
                margin:5px 0;
                color: ${(prop)=>(prop.isAlbumBorder ? 'green' : 'black')};

                &:hover{
                    border-bottom:1px solid green;
                    cursor:pointer;
                    color:green;
                    height:20px;
                }
            }
            .alblist1Numb{
                margin:0;
                padding-top:8px;
                padding-left:10px;
                font-size:14px;
            }
        }

    }
    .alblist2{
        // background-color:blue;
        width:50%;
        p{
            margin:5px 0;
            font-size:14px;
        }
    }
    
    @media (max-width:650px){
        // background-color:green;
        .alblist1{
            // background-color:yellow;
            width:20px;
            .albNameNumb{
                // background-color:yellow;
                
                .alblist1Numb{
                    // background-color:red;
                    span{
                        display:none;
                    }
                }
            }
        }
        .alblist2{
            // background-color:pink;
            width:80%;
        }
    }
`;
export const GenreList= styled.div<AllProps>`
    // border:1px solid red;
    width:30%;
    padding:10px;
    
    h2{
        color:green;
        // background-color:yellow;
        display:${(prop)=>(prop.isError ? 'none': 'block')};
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
    @media (max-width:650px){
        width:80%;
        margin-left:2%;
        max-height:60vh;
        overflow-y:scroll;
    }
`;