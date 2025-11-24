# PokemonComparison
A fullstack web application that allows users to compare and contrast their favorite Pokemon

## Get Started Developing

This project use devcontainers to simplify the developer startup and onboarding process. In order to get started, the following prerequisites will need to be met:

### Prerequisites
- Docker Installed
  - Docker Engine Running (Open Docker Desktop)
- VS Code Installed
  - VS Code Dev Container Extension Installed
  - VS Code Remote Explorer Extension Installed
- Clone the source code

### Project Setup
Developers will work in two separate devcontainers running simultaneously. One container to run the golang backend api, and another to run the react web applciation. VSCode provides some [helpful documentation](https://code.visualstudio.com/remote/advancedcontainers/connect-multiple-containers#_connect-to-multiple-containers-in-multiple-vs-code-windows) about how to run mulitple devcontainers.

### Run the React Web application
1. Open a new VSCode window
2. Hit `CTRL+Shift P`, then seach for and select the `Dev Containers: Open Folder in Container` action
3. Select the `React App devcontainer` option
4. Wait for the devcontainer to build. Eventually you should see the file explorer in VSCode open the /web directory
5. Run `npm ci` to install all the javascript and typescript packages needed to run the react project
6. Run `npm run dev` to start the development server. This command will serve the react project files on localhost and provide hot module replacement so any code changes made should immediately be reflected in the browser.
7. Open `http://localhost:1112` in the browser to view the react application

### Run the golang api
1. Open a new VSCode window
2. Hit `CTRL+Shift P`, then seach for and select the `Dev Containers: Open Folder in Container` action
3. Select the `Golang API devcontainer` option
4. Wait for the devcontainer to build. Eventually you should see the file explorer in VSCode open the /api directory
5. Run `go run main.go` to run the api server.
6. Open `http://localhost:1111/api/hello` to ensure the api server is successfully running

## Run the project
To just run the project without needed to develop or edit any files. Run `docker compose build` and then `docker compose up` and then visit `http://localhost` in the browser