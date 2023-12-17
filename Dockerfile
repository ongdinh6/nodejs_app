# Stage 1: Create Backend Image
FROM node:20-alpine
RUN mkdir nodejs_app
WORKDIR /nodejs_app
COPY package*.json .
COPY index.js .
RUN mkdir backend
COPY backend backend
RUN npm install
CMD ["npm", "run", "start"]
