FROM node:20-alpine as build
# set working directory
WORKDIR /app-lp-frontend
# copy package.json and package-lock.json
COPY package*.json ./
# install dependencies
RUN npm install
# copy the rest of the application code
COPY . .
# build the application
RUN npm run build

# serve with nginx
FROM nginx:alpine
# copy the build output to nginx html directory
COPY --from=build /app-lp-frontend/build /usr/share/nginx/html
# copy nginx configuration from the frontend directory
COPY nginx.conf /etc/nginx/conf.d/default.conf
# expose the port the app runs on
EXPOSE 80
# start nginx
CMD ["nginx", "-g", "daemon off;"]