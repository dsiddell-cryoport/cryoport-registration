# Dockerfile
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json first for better caching
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the entire project
COPY . .

# Build the application
RUN npm run build

# Switch to a non-root user after build
USER 10001

# Set the default command to provide the built files for deployment
CMD ["echo", "Build complete. Ready for deployment to Choreo."]