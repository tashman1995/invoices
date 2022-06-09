import {useState} from 'react'
import useFetch from './useFetch'

/**
 * 
 * @param {*} id 
 * @param {*} errorState 
 * @returns 
 */
const usePatch = async (id, errorState) => {
    const [data, setData] = useState(undefined);

   const patch =  () => useFetch({
     method: "Patch",
     url: `/${id}`,
     data: { error_state: errorState },
   });

   setData(data)
  
   return data
}

export default usePatch