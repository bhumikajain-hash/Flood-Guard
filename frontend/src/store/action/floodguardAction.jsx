// @ts-ignore
import axios from '../../api/axiosConfig';
import {  loadSensorHistory } from "../reducer/floodguardSlice";
import toast from 'react-hot-toast'

// export const setRiskScore = (score) => (dispatch) => {
//     // This simply delivers the score to the slice
//     dispatch(loadRiskScore(score));
// };
// export const setSensorHistory = (score) => (dispatch) => {
//     // This simply delivers the score to the slice
//     dispatch(loadSensorHistory(score));
// };

export const fetchSensorData = () => async (dispatch) => {
    try {
        const response = await axios.get('/floodget'); // Hits: http://localhost:5000/floodguard/data
       
        dispatch(loadSensorHistory(response.data.data));
    } catch (error) {
        console.error("Error fetching sensor history:", error);
        toast.error("Failed to fetch sensor data");
    }
};

