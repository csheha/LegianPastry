# Dockerfile for frontend

# Use the base image from Dockerhub
FROM node:22.17.0

# Set the working directory
WORKDIR /app

# Copy the package.json file
COPY package.json .

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Expose the port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
