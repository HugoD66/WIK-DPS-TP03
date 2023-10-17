# Docker Compose Setup


## Clone the Project:

```bash
git clone git@github.com:HugoD66/WIK-DPS-TP03.git
```
## Install dependencies:

```bash
npm install
```
## Project description:

This project involves the creation of two images, one for the "my-app" image and another for an Nginx proxy server, with only one service. The number of replicas is set to 4.

To run the Docker container, you need to have Docker installed. You can install [Docker](https://www.docker.com/) here.

Run the following command to start the Docker containers for the 'my-app' image and the Nginx proxy server image:
```bash
docker-compose up --build
```

Visit http://localhost:8080/ping to see the request header.
The hostname will be displayed in the logs for each request made to this URL.



