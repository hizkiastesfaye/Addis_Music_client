/** @jsxImportSource @emotion/react */
import * as S from "../styles/homeMusic.style"

type AdditionalProps = {
    handleAdd: () => void;
  };

const Additional:React.FC<AdditionalProps> = ({handleAdd})=>{
    return<S.Additional>
        <div className='additional_add'>
            <div className='description'>
            <p>This page is dedicated to music list.</p>
            <p>want to edit? click on edit button in the selected music list.</p>
            <p>want to add new music to music list?  click below</p>
            </div>
            <button onClick={handleAdd}>Add music</button>
        </div>
    </S.Additional>
}

export default Additional;