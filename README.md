
# Weatherif!

<img src="public/weatherif!Comp.png" alt="Weatherif Desktop Version"/>

**Weatherif** is a sleek and highly responsive weather forecasting web application that offers accurate, real-time weather information. This modern weather application has been designed to provide users with a comprehensive overview of current weather conditions, upcoming forecasts, and crucial environmental factors such as air quality, UV index, and more. Weatherif’s clean and interactive interface enhances user experience while delivering essential data for daily planning and safety.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

Weatherif offers a wide range of features that make it a go-to tool for users who need reliable and accurate weather forecasts. Here’s a breakdown of the core features:

- **Current Weather Information**:
  - Displays the real-time temperature, both maximum and minimum for the day.
  - Provides updates on wind status including speed and direction.
  - Shows weather conditions like rain, cloudiness, clear sky, or thunderstorms.
  - UV index data is also displayed, ensuring users are informed about exposure risk.

- **Sunrise and Sunset Times**:
  - Shows the exact time of sunrise and sunset for the searched location, allowing users to plan activities accordingly.
  
- **Wind Status**:
  - Detailed wind speed (in km/h or mph) and wind direction data.
  - Ensures users, especially those involved in outdoor activities, are prepared for the wind conditions.

- **Humidity and Visibility**:
  - Displays the current humidity level as a percentage, indicating the moisture in the air.
  - Provides visibility data (in km or miles), informing users about how far they can see under current weather conditions.

- **Air Quality Index (AQI)**:
  - Offers air quality metrics that detail pollution levels, including key pollutants like PM2.5 and PM10.
  - Helps users assess whether outdoor air is safe for sensitive groups such as children and people with respiratory issues.

- **UV Index**:
  - Provides the current UV index for the location, warning users of high levels of UV radiation that could be harmful.

- **3-Day Weather Forecast**:
  - Forecasts the temperature and weather conditions for the next three days.
  - Includes data on precipitation chances, weather patterns, and more to help users plan ahead.

- **Location Search**:
  - Allows users to search weather data for cities and locations across the globe.

- **Responsive Design**:
  - Optimized for various screen sizes, ensuring a seamless experience whether on a mobile, tablet, or desktop device.

- **Interactive Animations**:
  - Smooth and engaging animations built with GSAP enhance the overall user experience by making transitions and data updates more visually appealing.

- **Error Handling**:
  - Provides intuitive error messages when users input invalid locations or when weather data is unavailable.

## Technologies Used

The development of Weatherif leverages modern web technologies to ensure performance, responsiveness, and scalability. Below is a summary of the key technologies used:

- **React.js**:
  - A popular JavaScript library for building user interfaces. React’s component-based architecture ensures scalability and efficiency in rendering dynamic weather data updates without reloading the page.

- **Tailwind CSS**:
  - A utility-first CSS framework that makes styling effortless and highly customizable. Tailwind allows for the creation of a responsive and visually appealing user interface that adapts to various devices.

- **JavaScript (ES6+)**:
  - The primary programming language used to handle business logic, API requests, and data manipulation.

- **WeatherAPI**:
  - Weatherif fetches real-time and accurate weather data from the WeatherAPI service. This robust API provides all the necessary weather-related data, including temperature, air quality, UV index, and forecast information for cities globally.

- **GSAP (GreenSock Animation Platform)**:
  - GSAP is a fast, high-performance animation library that enables smooth and interactive animations across the application, creating a dynamic user interface.

- **Axios**:
  - A promise-based HTTP client used for making API requests to WeatherAPI. It simplifies fetching data from external services and handling responses efficiently.

- **Node.js & npm**:
  - Node.js powers the development environment, while npm (Node Package Manager) is used for managing project dependencies.

- **Git**:
  - Used for version control, allowing developers to track changes and collaborate effectively.

## Setup and Installation

### Prerequisites

Before you can run the Weatherif application, make sure the following tools are installed on your system:

- [Node.js](https://nodejs.org/en/) (version 12+ recommended)
- [npm](https://www.npmjs.com/) (Node Package Manager)
- [Git](https://git-scm.com/)

### Steps

1. **Clone the Repository**:

   First, clone the project repository to your local machine using Git.

   ```bash
   git clone https://github.com/krish203na/wetherify.git
   cd wetherify
   ```

2. **Install Dependencies**:

   Run the following command to install all the necessary dependencies for the project.

   ```bash
   npm install
   ```

3. **Create Your WeatherAPI Key**:

   - Sign up on [WeatherAPI](https://www.weatherapi.com/) to get your free API key.
   - After obtaining your key, create a `.env` file in the root directory of the project and add your API key:

     ```bash
     REACT_APP_WEATHER_API_KEY=your_api_key_here
     ```

4. **Run the Application**:

   Start the application using the following command:

   ```bash
   npm start
   ```

5. **Access the Application**:

   Once the server is running, you can access the application in your browser at:

   ```bash
   http://localhost:3000
   ```

## Usage

Weatherif provides a clean and intuitive interface for exploring weather data:

1. **Search for Weather Information**:
   - Enter the city or country in the search bar to receive weather updates for the specified location.

2. **View Current Weather**:
   - The homepage displays real-time weather data including temperature, wind speed, humidity, and more.

3. **Check the 3-Day Forecast**:
   - Scroll down or navigate to view the forecast for the next three days. This includes expected temperature, weather conditions, and UV index.

4. **Explore Environmental Factors**:
   - Access additional details like air quality index (AQI), visibility, sunrise and sunset times, and the UV index.

5. **Responsive Layout**:
   - Access the app from your phone, tablet, or desktop. The UI adapts perfectly to any screen size, providing a consistent experience across devices.

## Screenshots

### Mobile Version

<img src="public/weatherif!Mobile.png" alt="Weatherif Mobile Version"/>

### Tablet Version

<img src="public/wetherif!Tab.png" alt="Weatherif Tablet Version"/>

### Desktop Version

<img src="public/weatherif!Comp.png" alt="Weatherif Desktop Version"/>

## Contributing

Contributions are highly encouraged! If you would like to contribute to the project:

1. Fork the repository.
2. Create a new feature branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Push your changes (`git push origin feature-branch`).
5. Open a pull request and provide a detailed description of your changes.

Please ensure all code follows the project’s coding standards and includes proper documentation where necessary.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions, suggestions, or feedback, feel free to reach out:

- **Email**: [krishla203@gmail.com](mailto:krishla203@gmail.com)
- **LinkedIn**: [Krishna](https://www.linkedin.com/in/krishna-panchal-5426aa271)
