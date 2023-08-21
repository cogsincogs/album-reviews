FROM node:20

# Create app directory
WORKDIR /usr/src/app

ENV NODE_ENV development

# Install app dependencies
COPY ./package*.json ./

RUN npm install
# For production replace above with below
# RUN npm ci --omit=dev

# Bundle app source
COPY . .

EXPOSE 3000

# Start server
CMD [ "npm", "run", "start" ]