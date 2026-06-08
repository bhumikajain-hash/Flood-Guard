require('dotenv').config();
const app = require('./src/app');
const connectdB = require('./src/db/db');
const mqtt = require('mqtt');
const floodModel = require('./src/models/floodguard.models');

// Connect to the database
connectdB().then(() => {
    // Start MQTT Listener only after DB is ready
    const client = mqtt.connect('mqtt://broker.hivemq.com:1883');

    client.on('connect', () => {
        client.subscribe('floodguard/metrics');
        console.log('📡 Connected to MQTT Broker');
    });

    client.on('message', async (topic, message) => {
        try {
            const data = JSON.parse(message.toString());
            await floodModel.create(data);
            console.log("✅ Data ingested from Hardware");
        } catch (err) {
            console.error('Error saving data:', err);
        }
    });

    // app.listen(3000, () => {
    //     console.log('Server is running on port 3000');
    // });
    const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
}).catch((err) => {
    console.error("❌ Critical failure: Could not connect to MongoDB:", err);
    process.exit(1); // Shuts down the process if DB is dead
});