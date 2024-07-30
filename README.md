# Weather Forecast Website

This web application provides real-time weather forecasts for the current day and the next five days. Users can input their location to get weather information or use automatic location detection for convenience.

## Features

- **Real-time Weather Data:** Fetches and displays current weather and forecasts for the next 5 days.
- **Location Input:** Allows users to manually input their location for weather updates.
- **Automatic Location Detection:** Automatically detects the user's location to provide localized weather information.

## Technologies Used

- **Frontend:** ReactJS
- **Backend:** Node.js
- **API:** OpenWeatherMap API for weather data
- **Styling:** CSS

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone [https://github.com/dharunkumar-t/InternshipTask_Weather-Forecast-Website.git]
    cd weather-forecast-website
    ```

2. **Install dependencies:**

    For the frontend:

    ```bash
    cd client
    npm install
    ```

    For the backend:

    ```bash
    cd ../server
    npm install
    ```

3. **Set up API keys:**

    Create a `.env` file in the `server` directory and add your OpenWeatherMap API key:

    ```plaintext
    OPENWEATHERMAP_API_KEY=your_api_key_here
    ```

4. **Start the development servers:**

    For the frontend:

    ```bash
    cd client
    npm start
    ```

    For the backend:

    ```bash
    cd ../server
    npm start
    ```

    The frontend will be available at `http://localhost:3000`, and the backend will be running on `http://localhost:5000`.

## Usage

1. **Navigate to the website:** Open `http://localhost:3000` in your browser.
2. **Enter your location:** Type your city or coordinates into the input field to get the weather forecast.
3. **Automatic Location Detection:** The app will automatically detect your location if you allow location access.


