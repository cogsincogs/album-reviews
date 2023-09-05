FROM node:latest as build

# Create app directory
WORKDIR /usr/src/app

ENV NODE_ENV development

# Install app dependencies
COPY ./package*.json ./

# (Development)
RUN npm install

# Bundle app source
COPY . .

# (Development)
EXPOSE 3000

# Start server (Development)
CMD [ "npm", "run", "start" ]