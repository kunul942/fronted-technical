# Frontend Technical App

This project implements a web application using Next.js, focusing on two main sections: Newsletter and Carousel. The application is designed to be responsive, following mobile-first design principles. The Newsletter section allows users to subscribe to updates, while the Carousel section provides a dynamic display of content.

## Table of Contents

-   [Installation and Setup](#installation-and-setup)
-   [Docker](#docker)
-   [Design Decisions](#design-decisions)
-   [Additional Configurations (not required)](#additional-configurations)

## Installation and Setup

Follow these steps to install and set up the project:

1. **Clone the repository**:

    Using HTTPS:

    ```sh
    git clone https://github.com/kunul942/fronted-technical.git
    ```

    Using SSH:

    ```sh
    git clone git@github.com:kunul942/fronted-technical.git
    ```

    Then navigate to the project directory:

    ```sh
    cd fronted-technical
    ```

2. **Install the dependencies**:

    ```sh
    npm install
    ```

3. **Run the development server**:

    ```sh
    npm run dev
    ```

    The application will start on `http://localhost:3000`.

4. **Build the application for production**:

    ```sh
    npm run build
    ```

5. **Start the application in production mode**:

    ```sh
    npm start
    ```

    The application will start on `http://localhost:3000`.

## Docker

This application is Dockerized and can be run in three different ways:

1. Using `docker build` and `docker container run` commands.
2. Using a shell script (`./init-docker.sh`).
3. Using Docker Compose.

Ensure you have Docker and Docker Compose installed on your system. You can download Docker from [here](https://www.docker.com/get-started) and Docker Compose from [here](https://docs.docker.com/compose/install/).

### Running the App using Docker Build and Run Commands

1. **Build the Docker image**:

    ```sh
    docker build -t frontend-technical .
    ```

2. **Run the Docker container**:
    ```sh
    docker container run -p 3000:3000 frontend-technical
    ```

### Using Shell Script

1. **Make sure the script is executable**:

    ```sh
    chmod +x init-docker.sh
    ```

2. **Run the script**:
    ```sh
    ./init-docker.sh
    ```

### Using Docker Compose

1. **Run Docker Compose**:

    ```sh
    docker-compose up
    ```

2. **To run in detached mode (background)**:

    ```sh
    docker-compose up -d
    ```

3. **To stop the services**:
    ```sh
    docker-compose down
    ```

## Design Decisions

-   **CSS Frameworks**: Used Tailwind CSS for utility classes and Vanilla CSS for custom styles.
-   **Styling Methodology**: Followed the BEM (Block Element Modifier) naming convention for CSS classes.
-   **Styling Approach**: Utilized CSS Modules for scoped styling within components.

## Additional Configurations

### Husky

-   **Purpose**: Automate code quality checks during commit and push stages.
-   **Integration**: Hooks into Git lifecycle events.

### Commitlint

-   **Purpose**: Enforce consistent commit message format.
-   **Integration**: Runs during commit message phase.

### Prettier

-   **Purpose**: Maintain consistent coding style.
-   **Integration**: Formats code automatically.

### ESLint

-   **Purpose**: Identify and fix problems in JavaScript code.
-   **Integration**: Analyzes code statically to enforce standards.
