FROM node:latest as build

# Create app directory
WORKDIR /usr/src/app

ENV NODE_ENV production

# Install app dependencies
COPY ./package*.json ./

# (Development)
#RUN npm install
# (Production)
RUN npm ci --omit=dev

# Bundle app source
COPY . .

# (Development)
#EXPOSE 3000

# Start server (Development)
#CMD [ "npm", "run", "start" ]

# Build React app (Production)
RUN npm run build
FROM nginx:alpine
RUN rm /etc/nginx/conf.d/default.conf
COPY --from=build /usr/src/app/build /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/nginx.conf
EXPOSE 80