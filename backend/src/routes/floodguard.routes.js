const express = require('express');
const floodModel = require('../models/floodguard.models');
const router = express.Router();

router.post('/floodpost', async(req, res)=>{
 try {
    const { time, waterLevel, rainIntensity, soilMoisture, status } = req.body;

    if (!time || !waterLevel || !rainIntensity || !soilMoisture || !status) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const newdata = await floodModel.create({ time, waterLevel, rainIntensity, soilMoisture, status});

    res.status(201).json({
      message: 'Data added successfully',
      data: newdata
    });
  } catch (error) {
    console.error("Error saving data:", error);
    res.status(500).json({ message: 'Server error, please try again later' });
  }

})

router.get('/floodget',async(req, res)=>{
    try{
        const data = await floodModel.find().sort({ createdAt: -1 }).limit(15);
        res.status(200).json({
            message:"Data retrieved successfully",
            data
        })
    } catch (error) {
        console.error("Error retrieving data:", error);
        res.status(500).json({ message: 'Server error, please try again later' });
    }
})

module.exports = router;