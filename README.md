# Grapple Hub

## Overview

Grapple Hub is a web application built using React. It is designed to manage different events for Brazilian Jiu-Jitsu and other sports. It allows users to create, edit, and view events. The creator of an event can keep track of all the participants and reject and accept their applications. Information about the events can be exchanged by the users in the forum section that every event has. The application leverages Tailwind CSS for styling and includes various components for different functionalities.

## Project Structure

The project has the following structure:

```
.eslintrc.cjs
.gitattributes
.gitignore
index.html
LICENSE
package.json
postcss.config.js
README.md
tailwind.config.js
vite.config.js
softuni-practice-server-master/
    .gitignore
    client.config.js
    COLLECTIONS.md
    index.js
    JSONSTORE.md
    LICENSE
    package.json
    README.md
    rollup.config.js
    settings.json
    client/
        index.html
        js/
    data/
        advanced.json
        blog.json
        bus.json
        ...
    src/
        ...
    tests/
        ...
src/
    index.css
    main.jsx
    api/
    assets/
    components/
    context/
    hooks/
    pages/
    routes/
```

### Key Directories and Files

- **src/**: Contains the main source code for the application.
  - **index.css**: Main CSS file, includes Tailwind CSS directives.
  - **main.jsx**: Entry point for the React application.
  - **api/**: Contains API utility functions.
  - **assets/**: Contains static assets like images.
  - **components/**: Contains React components used throughout the application.
  - **context/**: Contains context providers for state management.
  - **hooks/**: Contains custom React hooks.
  - **pages/**: Contains React components for different pages.
  - **routes/**: Contains client-side route definitions for the application.

- **softuni-practice-server-master/**: Contains the server-side code and configuration for the practice server.
  - **client/**: Contains client-side code for the admin panel.
  - **data/**: Contains JSON files used as data sources.
  - **src/**: Contains server-side source code.
  - **tests/**: Contains test files for the server.
  - **settings/**: Contains the initial seeded data. It is where event data is saved. 

### Main Components

- **NavBar**: Navigation bar component that displays links based on user authentication status.
- **AddEventForm**: Form component for creating new events.
- **EditEventForm**: Form component for editing existing events. Similar to the AddEventForm but should be populated with the event's existing data when accessed.
- **EventDetailsPage**: Page component for displaying event details.


### Context Providers

- **AuthContext**: Provides authentication state and functions to the application.

### Styling

- **Tailwind CSS**: Used for styling the application. Configuration is in `tailwind.config.js`.

### Server

- **softuni-practice-server-master**: A practice server that provides RESTful API endpoints for managing data. It includes services for JSON storage, authentication, and collections.

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/grapple-hub.git
   cd grapple-hub
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

### Running the Application

1. Start the SoftUni Praactise server: 
    cd softuni-practice-server-master

    npm run dev

2. Start the development server:
   ```sh
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:5173`.

### Building the Application

1. Build the application for production:
   ```sh
   npm run build
   ```

2. Serve the built application:
   ```sh
   npm run serve
   ```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
