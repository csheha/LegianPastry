FROM node:20-alpine 
# set working directory
WORKDIR /app
# copy package.json and package-lock.json
COPY package*.json ./
# install dependencies
RUN npm install
# copy the rest of the application code
COPY . .

EXPOSE 3000

# build the application
CMD ["npm", "start"]