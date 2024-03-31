import React, { forwardRef } from 'react'
import {useState,useRef} from 'react'

const Player = forwardRef(({player,onChangeName},ref) =>{
  const [isEdit, setIsEdit] = useState(false);
  function handleEdit(){
    setIsEdit(!isEdit);
  }
  function handleButtonClick() {
    handleEdit();
    onChangeName();
  }
  return (
    <section id="player">
      <div className="player-name">
        <h2>Welcome {player ?? 'User'}!</h2>
        {!isEdit ? <span onClick={handleEdit} class="material-symbols-outlined">
          edit_square
        </span> :
        <span onClick={handleEdit} class="material-symbols-outlined">
        ink_eraser
        </span>}
      </div>
      {isEdit && <p>
        <input ref={ref} type="text" />
        <button onClick={handleButtonClick}>Set Name</button>
      </p>}
    </section>
  );
})

export default Player