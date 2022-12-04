import { API } from "../../Shared/Services/api";

export const getParkings = () => async(dispatch) =>{
    dispatch({type: 'gettingParkings'})
    try {
        const result = await API.get("/parkings");
        dispatch({type:'getParkings', payload: result.data})
    } catch (error) {
        dispatch({type: 'error', payload: error.message});
    }
}
export const filterParkings = (event, parkings) => async(dispatch) =>{
    dispatch({type: 'gettingParkings'})
    try {
        console.log(event.target.value)
        const inputValue =  event.target.value.toLowerCase()
        const filterGarajes = parkings.filter((parking) => {
        const matchName = parking.adress.toLowerCase().includes(inputValue)
            
            return matchName
        }
            

        )
        dispatch({type:'getParkings', payload: filterGarajes})
    } catch (error) {
        dispatch({type: 'error', payload: error.message});
    }
}