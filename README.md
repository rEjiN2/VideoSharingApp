# Video Sharing App

This is the README file for my video sharing app project hosted on GitHub. The app is built using Create React App for the frontend and Node.js for the backend. It provides users with a platform to upload, manage, and share videos. Below are the key features and technical aspects of the application:

## Features

### User Authentication

- Implemented JWT token-based authentication for secure user access.
- Stored authentication tokens in cookies for seamless user experience.
- Integrated Google authentication using Firebase for easy sign-in.

### Video Management

- Utilized Firebase Cloud Storage for storing user-uploaded videos.
- Employed Cloudinary to store and manage associated images efficiently.

### User Engagement

- Implemented a comprehensive set of features including liking, disliking, commenting, and reporting videos.
- Designed a subscriber system to allow users to follow their favorite content creators.
- Implemented a notification system to keep users informed about new activities related to their subscribed channels.

### Recommendation Engine

- Developed a recommendation system that suggests videos based on tags assigned to each video during the upload process.
- Integrated this system to provide users with personalized video recommendations.

### Live Streaming

- Incorporated Zego Cloud for seamless integration of live streaming functionality within the app.
- Enabled users to broadcast live videos and engage with their audience in real-time.

### User History and Preferences

- Implemented a user history feature to store the videos users have watched.
- Enabled users to upload and edit their own videos, providing a personalized experience.
- Implemented like/dislike functionality to allow users to express their preferences.

### Admin Features

#### Admin Dashboard

- Designed an administrative interface to manage user-related tasks efficiently.
- Provided detailed user information, including online status, for effective user management.
- Enabled the blocking/unblocking of users when necessary.

#### Video Verification and Moderation

- Implemented a video verification process to ensure that only verified content is displayed to users.
- Developed a system to handle reported videos, allowing the admin to take appropriate actions such as blocking reported content.

## Technical Aspects

### Route Protection

- Implemented protective measures to secure all routes within the application, ensuring authorized access only.

### State Management

- Utilized Redux for efficient global state management, allowing seamless data flow throughout the application.
- Implemented user persistence using local storage to enhance the user experience across sessions.

## Getting Started

To run the project locally, follow these steps:

1. Clone the repository: `git clone <repository-url>`
2. Install dependencies for the frontend and backend:
   - Frontend: `cd frontend && npm install`
   - Backend: `cd backend && npm install`
3. Configure the necessary environment variables:
   - Create a `.env` file in the `backend` directory and set the required variables such as database connection details, API keys, and secret keys.
4. Start the development servers:
   - Frontend: `cd frontend && npm start`
   - Backend: `cd backend && npm start`
5. Access the app in your browser at `http://localhost:3000`.

## Contribution

Contributions to the project are welcome! If you encounter any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

## License

This project is not under any License
