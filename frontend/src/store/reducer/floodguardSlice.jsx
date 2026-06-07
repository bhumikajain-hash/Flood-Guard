import {createSlice} from '@reduxjs/toolkit'

const initialState = {
   // riskScore: 0,
    sensorHistory: []
};

const floodguardSlice = createSlice({
    name: "floodguard",
    initialState,
    reducers: {
        // loadRiskScore:(state, action) =>{
        //     state.riskScore = action.payload;
        // },
      loadSensorHistory: (state, action) => {
      state.sensorHistory = action.payload.slice(-15);
    },
  
    }
})

export default floodguardSlice.reducer; 
export const {  loadSensorHistory } = floodguardSlice.actions;