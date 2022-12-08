# Fooder Server

This server is only meant to provide simple HTTP responses.


## Requirements

* PostgreSQL
* Node v16.17.0
* Yarn
* Docker

## How to run?

### Development

Copy the **env.example** content to a **.env** file and run:

	yarn install && yarn start
        
### Production
 
This project is meant to be run on Kubernetes or with Docker Compose.

For Kubernetes, add all variables from the **env.example** file to a secrets manifest or 
add them directly to the deployment manifest

For Docker Compose, add all the variables from **env.example** directly to the service's 
env section of your **docker-compose.yml**.

In either case, you need to expose **port 3000** for it to receive requests.

## Tests

This app uses Mocha with Chai and Supertest, just run:

	yarn test