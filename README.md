# Flood-Guard: Real-Time Environmental Disaster Monitoring System

## 📖 Project Overview
**Flood-Guard** is an IoT-based disaster management system designed to monitor critical environmental variables including water level, rain intensity, and soil moisture in real-time. By leveraging edge computing and a robust MERN-stack dashboard, the system provides early warnings to mitigate flood-related risks, ensuring timely decision-making.

## 🚀 Key Features
* **Real-Time Data Streaming:** Seamless sensor data integration from ESP32 hardware.
* **Intelligent Dashboard:** A responsive, interactive UI built with React, Tailwind CSS, and Recharts.
* **Data Visualization:** Live charting to track environmental fluctuations and trends.
* **Fault Tolerance:** Robust error handling using `react-hot-toast` for real-time network connectivity alerts.
* **Mobile-First Design:** Optimized viewport handling (using `dvh` units) for seamless performance on both mobile and desktop.

## 🛠 Tech Stack
* **Frontend:** React, Redux Toolkit, Tailwind CSS, Recharts, Axios.
* **Backend:** Node.js, Express, JSON Server.
* **Hardware:** ESP32 Microcontroller, JSN-SR04T Ultrasonic Sensor, rain sensor, soil-moisture sensor, flow sensor.
* **Tools:** pnpm, Git, VS Code.

## 🏗 System Architecture
The data follows a streamlined pipeline:
1. **Sensors** collect physical environment data.
2. **ESP32** processes and transmits data via MQTT/HTTP.
3. **Node.js Backend** serves the data via REST API.
4. **React Frontend** consumes the API, manages state with Redux, and visualizes the insights.


## 💻 Installation & Setup

### 1. Prerequisites
Ensure you have the following installed:
* Node.js (v18 or higher)
* pnpm (or npm)

### 2. Setup Instructions
Clone the repository:
```bash
git clone [https://github.com/bhumikajain-hash/Flood-Guard.git](https://github.com/bhumikajain-hash/Flood-Guard.git)
cd flood-guard 

### 3. Running the Project
Once the dependencies are installed, you need to start both the development server and the JSON server to handle the data flow.

**Terminal 1 (Backend Server):**
```bash
# Assuming you are using a JSON server for your API
npx nodemon server.js


**Terminal 2 (Frontend App):
```bash
pnpm dev

## 💡 Challenges & Learnings
* **State Management:** Overcame complex asynchronous data flow challenges using Redux Toolkit.
* **Responsive Design:** Mastered modern CSS units like `dvh` to ensure a consistent experience across mobile and desktop devices.
* **Fault Tolerance:** Implemented robust network error handling using global toast notifications, improving user experience.