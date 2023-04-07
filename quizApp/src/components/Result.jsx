import React from 'react'
import { Link } from 'react-router-dom'

function Result() {

    const restart = () =>{
        console.log("restart");
    }

  return (
    <div>
        <h1 className='title'>Result</h1>
        <div className="result">
            <div className="flex">
                <span>Username:</span>
                <span>abc xyz</span>
            </div>
            <div className="flex">
                <span>Quiz points:</span>
                <span>500</span>
            </div>  
            <div className="flex">
                <span>Total questions:</span>
                <span>5</span>
            </div>
            <div className="flex">
                <span>Total attempt:</span>
                <span>03</span>
            </div>
            <div className="flex">
                <span>earn points:</span>
                <span>4</span>
            </div>
            <div className="flex">
                <span>result:</span>
                <span>pass</span>
            </div>  
        </div>

        <div className="start">
            <Link to='/' onClick={restart}>Restart</Link>
        </div>
    </div>
  )
}

export default Result