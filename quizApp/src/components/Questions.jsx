import React, { useEffect, useState } from 'react'
import Data from './data/Data'
import { useFetchQuestion } from './Hooks/FetchQuestions';

function Questions() {

    const [tick,settick] = useState(undefined);
    const [{isLoading, apiData, serverError}] = useFetchQuestion();

    const question = Data[0];

    useEffect(()=>{
        console.log(question); 
    })

    const ansselect = () => {
        settick(true);
        console.log('ans selected')
    }
    

  return (
    <div className='questions'>
        <h2>{question.question}</h2>
        <ul key={question.id}>
            {
                question.options.map((opts,index) => (
                    <li key={index}>
                        <input type="radio" name="options" id={`q${index}-option`} value={false} onChange={ansselect} />
                        <label className='optionstext' htmlFor={`q${index}-option`}>{opts}</label>
                        <div className="checkbox tick"></div>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default Questions