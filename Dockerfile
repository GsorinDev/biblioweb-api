# Use the Node.js image with version 18.10.0 as the base image
FROM node:18.14-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install --force

# Copy the rest of the application files to the container
COPY . .

# Build the NestJS application
RUN npm run build

# Expose the port that the NestJS application will listen on
EXPOSE 3000

# Define the command to start the NestJS application
CMD ["node", "dist/main"]