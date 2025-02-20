// Dockerfile
# Switch to the created non-root user
USER 10001

FROM node:18-alpine
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build
CMD ["npx", "serve", "-s", "build"]
EXPOSE 8080