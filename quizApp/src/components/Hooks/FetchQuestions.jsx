import { useEffect, useState } from "react"
import Data from "../data/Data";
import { useDispatch } from "react-redux";


// redux actions
import * as Action from '../redux/question_reducer'


export const useFetchQuestion = () => {
    const dispatch = useDispatch();
    const [getData,setgetData] = useState({isLoading: false, apiData: [], serverError: null});

    useEffect(()=>{
        setgetData(prev => ({...prev,isLoading:true}));

        (async ()=>{
            try{
                // let question = await Data;
                let question =  Data;
                if(question.length>0){
                    setgetData(prev => ({...prev,isLoading:false}));
                    setgetData(prev => ({...prev,apiData:question}));  

                    dispatch(Action.startQuizAction());
                }
                else{
                    throw new Error("No questions fetched/available");
                }
            } catch(e){
                console.log("error while fetching: " + e);
                setgetData(prev => ({...prev,isLoading:false,serverError:e}));
            }
        })
    },[dispatch]);

    return [getData,setgetData];
}
