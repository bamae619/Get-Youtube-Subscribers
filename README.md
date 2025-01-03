# Get YouTube Subscribers

This project provides a platform to track and get real-time data related to YouTube subscribers. The application allows users to easily monitor subscriber growth on their YouTube channels. The backend is developed using **Node.js** and **Express** and is connected to a **MongoDB** database.

## Summary

The **Get YouTube Subscribers** project is a web-based application that allows users to fetch and view subscriber count data from YouTube. The backend service is built using **Node.js** and **Express**, and it is deployed on **Render**.

### Key Features:
- Fetch real-time YouTube subscriber data.
- Monitor the growth of YouTube channels over time.
- Deployable on platforms like **Render** for production environments.

### Technologies Used:
- **Node.js**: For the backend server.
- **Express**: Web framework for building APIs.
- **MongoDB**: Database for storing data related to users and subscriber counts.
- **Render**: Platform for deployment and hosting.

### Setup Instructions

1. **Clone the Repository**
   To get started, clone this repository to your local machine:
   ```bash
   git clone https://github.com/bamae619/Get-Youtube-Subscribers
   ```

2. **Install Dependencies**
   Navigate to the project folder and install the required dependencies:
   ```bash
   cd youtube-subscriber-project
   npm install
   ```

3. **Set Up Environment Variables**
   Make sure you have the necessary environment variables set up. For local development, create a `.env` file and define your variables (e.g., database URL).

4. **Run the Server Locally**
   To run the server locally on port 3000:
   ```bash
   npm start
   ```

5. **Deploy to Render**
   For deployment on Render, follow their documentation for deploying Node.js apps and linking the GitHub repository to Render.

## API Endpoints

### `/api/subscribers`
- **Method**: `GET`
- **Description**: Retrieves the list of all subscribers and their associated data.
- **Response Example**: 
  ```json
  [
    {
      "name": "John Doe",
      "subscribedChannel": "Channel 1",
      "subscriberCount": 1500
    },
    {
      "name": "Jane Smith",
      "subscribedChannel": "Channel 2",
      "subscriberCount": 3500
    }
  ]
  ```

### `/api/subscribers/names`
- **Method**: `GET`
- **Description**: Retrieves only the name of the subscribers and the YouTube channel they are subscribed to.
- **Response Example**: 
  ```json
  [
    {
      "name": "John Doe",
      "subscribedChannel": "Channel 1"
    },
    {
      "name": "Jane Smith",
      "subscribedChannel": "Channel 2"
    }
  ]
  ```

### `/api/subscribers/:id`
- **Method**: `GET`
- **Description**: Retrieves the subscriber's data by their unique ID.
- **Path Params**: 
  - `id`: The unique identifier for the subscriber.
- **Response Example**: 
  ```json
  {
    "name": "John Doe",
    "subscribedChannel": "Channel 1",
    "subscriberCount": 1500
  }
  ```

## Contributing

Contributions are welcome! If you would like to contribute, feel free to fork the repository, create a branch, and submit a pull request with your changes. Make sure to follow the coding style of the project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For questions or further information, feel free to contact me at [atikkhan61985@gmail.com]

