const mongoose = require('mongoose');

const sensorSchema = new mongoose.Schema({
    time: { type: String, required: true },
    waterLevel: { type: Number, required: true },
    rainIntensity: { type: Number, required: true },
    soilMoisture: { type: Number, required: true },
    status: { type: String, required: true },
}, { timestamps: true });

const floodModel = mongoose.model('FloodGuard', sensorSchema);

module.exports = floodModel;