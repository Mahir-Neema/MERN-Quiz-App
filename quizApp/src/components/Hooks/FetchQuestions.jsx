import { useEffect, useState } from "react"
import Data from "../data/Data";


export const useFetchQuestion = () => {
    const [getData,setgetData] = useState({isLoading: false, apiData: [], serverError: null});

    useEffect(()=>{
        setgetData(prev => ({...prev,isLoading:true}));

        (async ()=>{
            try{
                let question = await Data;
            } catch(e){
                console.log("error while fetching: " + e);
                setgetData(prev => ({...prev,isLoading:false,serverError:e}));
            }
        })
    })
}
