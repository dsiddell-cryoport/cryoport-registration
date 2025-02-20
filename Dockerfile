# Dockerfile

# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json .
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Switch to a non-root user after all installations and builds
USER 10001

# Expose the application port
EXPOSE 8080

# Command to start the application
CMD ["npx", "serve", "-s", "build"]