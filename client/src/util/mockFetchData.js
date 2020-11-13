
import { axiosWithAuth } from './axiosWithAuth'

export const mockFetchData = () => {
       
    return axiosWithAuth()
        .post('/api/colors')
            .then((res)=>{
                return res
            })
            .catch((error)=> {
            return err
            })
    
}