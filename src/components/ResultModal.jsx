import React, { forwardRef, useImperativeHandle, useRef } from 'react'
import { createPortal } from 'react-dom';


const ResultModal = forwardRef(({ targetTime, remainingTime, onReset},ref) => {
    const dialog = useRef();
    const userLost = remainingTime <=0;
    const formattedRemainingTime = (remainingTime/1000).toFixed(2);
    const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

    useImperativeHandle(ref,()=>{
        return{
            open(){
                dialog.current.showModal();
            }
        }
    })

  return createPortal(
    <dialog ref={dialog} className='result-modal' onClose={onReset}>
        {userLost && <h2>You lost!</h2>}
        {!userLost && <h2 className='accuracy'>Your Accuracy: <strong>{score}%</strong></h2>}
        <p>The target time was <strong>{targetTime}</strong> second{targetTime>1?'s':''}.</p>
        <p>You stopped the timer with <strong>{formattedRemainingTime}</strong> second{formattedRemainingTime>1?'s':''} left.</p>
        <form method='dialog' onSubmit={onReset} >
            <button>Close</button>
        </form>
    </dialog>, document.getElementById('modal')
  )
})

export default ResultModal