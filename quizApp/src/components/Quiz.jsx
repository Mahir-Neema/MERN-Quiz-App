import React from 'react'
import Questions from './Questions'
import {useSelector} from 'react-redux'

function Quiz() {

    const state = useSelector(state=>state);

    const Prev = () =>{
        
    }

    const Next = () =>{

    }

    

  return (
    <div className='container'>
        <h1 className='title'>Quiz App</h1>

        {/* questions  */}
        <Questions/>
         <div className="grid">
            <button onClick={Prev}>Prev</button>
            <button onClick={Next}>Next</button>
         </div>
    </div>
  )
}

export default Quiz