FROM node:20

# Create app directory
WORKDIR /usr/src/app

ENV NODE_ENV development

# Install app dependencies
COPY ./app/package*.json ./

RUN npm install

# Bundle app source
COPY . .

# Expose port
EXPOSE 8080

WORKDIR ./app

# Start server
CMD [ "npm", "run", "dev" ]