# base image
FROM node:20-alpine

# set working directory
WORKDIR /app-lp-backend

# copy package.json and package-lock.json
COPY package*.json ./

# install dependencies
RUN npm install 

# copy other files
COPY . .

# expose the port the app runs 
EXPOSE 5000

# start the application
CMD ["npm", "start"]