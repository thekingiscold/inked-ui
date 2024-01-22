# Use an official Node.js runtime as a parent image
FROM node:14 as build

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy app source
COPY . .

# Build the React app
RUN npm run build

# Use a lighter-weight base image for the final image
FROM nginx:alpine

# Copy the build output to serve with Nginx
COPY --from=build /usr/src/app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]