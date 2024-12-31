/**@jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "../styles/homeMusic.style"
import close from "../assets/icons/close.png"

type MusicFormProps={
    handleAdd: ()=>void;
    handleChange:()=>void;
    handleCancel:()=>void;
    handleSave:()=>void;
    postError:string;
    isAdd:boolean;
    isEdit:boolean;
    musicDatas:{
        id: number | null;
        title:string;
        artist:string;
        album:string;
        genre:string;
    }
}
const MusicForm:React.FC<MusicFormProps>=({handleAdd,isEdit,isAdd,musicDatas,handleChange,handleCancel,handleSave,postError})=>{
    
    return <S.MusicForm>
        {isEdit && <div className='add_new_music' onClick={handleAdd}>
            <h3>Add new music</h3>
        </div>
        }
        <div className='image_div'>
            <button onClick={handleCancel}>
                <img src={close} alt='close image' />
            </button>
        </div>
        {isEdit && <h1>Edit</h1>}
        {isAdd && <h1>Add Music</h1>}
        <S.FormMusicData isForm={isEdit || isAdd}>
            <div>
                <label htmlFor='title'>Title:</label>
                <input type='text' id='title' name='title' value={musicDatas.title || ''} onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor='artist'>Artist:</label>
                <input type='text' id='artist' name='artist' value={musicDatas.artist || ''} onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor='album'>Album:</label>
                <input type='text' id='album' name='album' value={musicDatas.album} onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor='genre'>Genre:</label>
                <textarea id='genre' name='genre' value={musicDatas.genre} onChange={handleChange}/>
            </div>
            {postError && <p css={css`color:red; font-size:12px; margin-left:20%; margin-top:5px;`}>** {postError}</p>}
            <S.Button onClick={handleSave}>Save</S.Button>  
        </S.FormMusicData>

    </S.MusicForm>
}

export default MusicForm