import styled from "@emotion/styled";

export const MainBody = styled.div`
    
    height:100%;
    margin:0;
    display:flex;
    justify-content:space-between;
    padding:5px 10px;
    @media (max-width:600px){
        // background-color:gray;
        display:block;
    }

`;
export const MusicLists = styled.div`
    width: 100%;
    min-height: 70vh;
    max-height:100vh;
    overflow-y:scroll;
    margin-bottom:10px;
    h2{
        color:green;
        padding-left:40%;
    }
        h3{
            display:none;
        }

    .add_button{
        @media (min-width:600px){
            display:none;
        }
        // background-color:blue;
        border: 1px solid white;
        width:100%;
        display:flex;
        justify-content:right;
        button{
            width:45%;
            color:green;
            border:1px solid green;
            border-radius: 20px;
            padding:5px 1px;
            font-size:14px;
            font-weight:bold;
            

            &:hover{
                border:1px solid green;
                border-radius: 20px;
                color:white;
                background-color:green;
                cursor:pointer;
            }
        }
    }


    @media (max-width: 600px){
        display:${(prop)=>(prop.isForm ? 'none' : 'block')};
        // background-color:red;
        h2{display:none};
        h3{
            display:block;
            color:green;
            padding-left:40%; 
        };


    }
`;
export const MusicList = styled.div`

    box-shadow:0px 4px 6px rgba(0,0,0,0.1);
    
    margin-bottom:10px;

    min-height:fit;
    // display:flex;
    // justify-content:space-between;
    // background-color:${(prop)=>(prop.isSelected ? '#D7F4DB': 'white')};
    
    .musicListinside{
        padding-bottom:2px;
        border-bottom:1px solid rgba(0,0,0,0.1);
        border-right:1px solid rgba(0,0,0,0.1);
        display:flex;
        justify-content:space-between;
        min-height:100px;
        background-color:${(prop)=>(prop.isSelected ? '#D7F4DB': 'white')};

        .list_attribute{
            // background-color:yellow;
            width:90%;
            .arti_alb{
                display:flex;
                gap:1%;
                justify-content:left;
            
            }
            .arti_alb_sm{
                display:none;
            }
            p{
                width:100%;
                // background-color:red;
                font-size:16px;
                color:#525252;
                padding-left:5px
            }
        };

        .before_manage{
            // background-color:brown;
            width:130px;
            padding-top:5px;

            .manage{
                // background-color:blue;
                gap:50px;
                .image{
                    margin-top:5px;
                    width:100%;
                    display:flex;
                    align-items:center;
                    height:40px;
                    button{
                        display:none;
                    }
                    img{
                        width:20px;
                        height:20px;
                        right:2px;
                        margin:0 auto;
                        &:hover{
                            width:28px;
                            height:28px;
                            // background-color:blue;
                            box-shadow:0 2px 4px green;
                        }
                    }
                }
                .delete_button{
                    display:none;
                }
                button{
                    margin-bottom:5px;
                    width:100px;
                    height:35px;
                    border:1px solid green;
                    border-radius:20px;
                    background-color:white;

                    color:green;
                    padding-left:20px;
                    padding-right:20px;
                    font-size:20px;
                    &:hover{
                        cursor:pointer;
                        background-color:green;
                        color:white;
                        font-size:24px;
                    }
                }
            }
        }
        
        &:hover{
            // border-bottom:1px solid green;
            cursor:pointer;
            box-shadow:0px 2px 3px green;


            p{
                color:green;
            }
        }
        @media (max-width:750px){
            height:fit-content;
            margin-top:10px;
            // padding-bottom:5px;

            .list_attribute{
                .arti_alb{
                    display:none;
                }
                .arti_alb_sm{
                    display:block;
                    // background-color:yellow;
                    div{
                        display:flex;
                        justify-content:left;
                    }

                };
                p{
                    // background-color:red;
                    width:100%;
                    font-size:14px;
                    font-weight:100;
                    margin-top:3px;
                }
            };

            .before_manage{
                // background-color:brown;
                width:20%;
                padding-top:0px;
                height:70px;

                .manage{
                    // background-color:blue;
                    width:100%;
                    
                    .image{
                        height:30px;
                        // background-color:green;
                    }
                    button{
                        margin-left:2px;
                        width:80%;
                        padding-left:10px;
                        height:20px;
                        font-size:12px;
                        &:hover{
                            font-size:14px;
                        }
                    }
                }
            }
            
            &:hover{
                // border-bottom:1px solid green;
                cursor:pointer;
                box-shadow:0px 2px 3px green;
                p{
                    color:green;
                }
            }
        }
    }
`;

export const MusicForm = styled.div`
    width:60%;

    .image_div{
        width:100%;
        display:flex;
        justify-content:right;
        padding-right:10px;
        height:45px;
        align-items:center;
        button{
            background-color:white;
            border:1px solid green;
            height:45px;
            width:45px;
            img{
                height:25px;
                width:25px;
            }
            &:hover{
            border:2px solid green;
                img{
                    height:35px;
                    width:35px;
                }
            }
        }
    }

    h1{
        padding-left:30%;
        margin-bottom:30px;
        color:green;
    }
    .add_new_music{
        display:flex;
        justify-content:space-between;
        h3{                cursor:pointer;
            padding:5px;
            color:green;
            border:1px solid white;
            border-bottom: 1px solid green;
            border-radius:10px;
            &:hover{
                border:1px solid green;
                border-radius: 20px;
                cursor:pointer;
            }
        }
    }
    
    @media (max-width:600px){
        width:90%;
    }
`;
export const FormMusicData = styled.form`
    padding-left:2px;
    // width:100%;
    margin-bottom:20px;
    // background-color:red;
    div{
        display:flex;
        justify-content:space-between;
        padding-left:5px;
        padding-right:3%;
        margin-bottom:15px;

        label{
            width:65px;
        }
        input, textarea{
            width:100%;
            height:20px;
            color:#333333;
            // margin-left:70px;

            &:focus{
                outline: 1px solid gray;
            }
            
        }
        textarea{
            height:50px;
        }
        &:focus{
            background-color:red;
            color:red;
        }
        
    }
`;
export const Button = styled.button`
    color:green;
    font-size:24px;
    border:1px solid green;
    border-radius:15px;
    width:200px;
    margin:10vh 18%;
    padding-left:5%;

    &:hover{
        color:white;
        background-color:green;
        font-weight:bold;
        cursor:pointer;
    }
`;

export const Additional = styled.div`
    @media (max-width:600px){
        display:none;
    }
    width:20%;
    // background-color:red;
    padding-top:8%;
    
    .additional_add{
        border: 1px solid white;
        width:100%;
        button{
            width:100%;
            color:green;
            border:1px solid green;
            border-radius: 20px;
            margin-left:2%;
            padding:5px 10%;
            font-size:16px;
            font-weight:bold;
            

        &:hover{
            border:1px solid green;
            border-radius: 20px;
            color:white;
            background-color:green;
            cursor:pointer;
        }
    }
    .description{
        // background-color:red;
        padding: 5px 10px;

        p{
            font-size:14px;
            margin-bottom:20px;
            color:green;
            font-weight:100;
        }
    }
`;