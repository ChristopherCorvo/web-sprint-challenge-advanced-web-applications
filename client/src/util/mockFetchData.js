
import React, { useEffect } from 'react' 
import axios from 'axios'

export const mockFetchData = () => {
    return     
        axios
        .get('http://localhost:5000/api/colors')
            .then((res)=>{
            return res
            })
            .catch((error)=> {
            return err
            })
    
}