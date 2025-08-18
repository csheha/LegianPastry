# Dockerfile for the backend

# Use the base image from Dockerhub
FROM node:22.17.0

# Install nodemon globally for development
RUN npm install -g nodemon

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Copy all files from the current directory
COPY . .

# Install all backend dependencies
RUN npm install

# Expose port 5000
EXPOSE 5000

# Start the backend
CMD ["npm", "run", "dev"]