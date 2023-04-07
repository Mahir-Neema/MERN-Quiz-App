import React, { useRef } from 'react'
import { Link } from 'react-router-dom';

function Main() {

    const inputRef = useRef(null);

  return (
    <div className='container'>
        <h1 className='title'>Quiz App</h1>
        <ol>
            <li>You will be asked several multi choice questions</li>
            <li>You will be asked several multi choice questions</li>
            <li>You will be asked several multi choice questions</li>
            <li>You will be asked several multi choice questions</li>
            <li>You will be asked several multi choice questions</li>
        </ol>

        <form action="" id="form">
            <input ref={inputRef} type="text" placeholder='Username'/>
        </form>

        <div className="start">
            <Link className='btn' to={'quiz'}>Lets Go</Link>
        </div>
    </div>
  )
}

export default Main