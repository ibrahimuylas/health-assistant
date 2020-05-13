# Health Assistant
This project gets health condition list from api and renders them on ui. Please look readme files under project folders to more details and dependencies.

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

## Prerequisites
**Install [Node 8.0.0 or greater](https://nodejs.org)**

## Running on Docker Desktop
You can follow below steps to run api and ui on docker if you have docker on your machine. Otherwise you can host applications by **Running on Your Local Environment** steps.
- Open terminal/command console
- Go to project root folder which is same level with **docker-compose.yml** file
- Run below command
    ```
    docker-compose up -d --build
    ```
Note: Initial startup takes around 5 minutes. Because base images will downloaded, new images of the applications will be built at the first time and containers will be run and services will be started. Please be patient and wait till see done for all services.

e.g success message
```
..
Successfully built 2a6adff7317d
Successfully tagged health-assistant_ui:latest
Creating health-assistant_api_1 ... done
Creating health-assistant_ui_1  ... done
```

You can reach applications by using below urls when applications are started.
- API -> http://localhost:3001/conditions
- UI -> http://localhost:3000


#### If you want to stop applications, run below command
```
docker-compose down
```

## Running on Your Local Environment
You have to run API project first and then you can run UI project.

Steps to run API:
- Open terminal/command console at api folder
- Run below commands
    ```
    npm install && npm run start
    ```
Then you can access conditions api by using http://localhost:3001/conditions

Steps to run UI:
- Open terminal/command console at ui folder
- Run below commands
    ```
    npm install && npm run start
    ```
Then you can access user interface by using http://localhost:3000