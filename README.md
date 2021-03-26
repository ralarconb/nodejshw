# Nodejs Hello World
- Create git remote repo
- Clone git repo
- Config env
```sh
cd nodejshw
npm init
```
- Hit enter n times
```sh
description: Nodejs Hello World recipe
author: ralarconb
```
- Install extensions
```sh
npm install express nodemon
```
- Open package.json and edit scripts
  - Remove test
  - Add start
- Start the app
```sh
npm start
```
- http://localhost:3000
# Setup
- Clone the repository, build an image and run a container
```sh
git clone https://github.com/ralarconb/nodejshw.git
cd nodejshw
ls nodejshw
```
- Look up at the Dockerfile
```sh
docker build -t nodejshw:1.0 .
docker images
docker run -d -p3000:3000 nodejshw:1.0
```
- Look running containers
```sh
docker ps
```
- Test the app
```
curl http://localhost:3000
```
