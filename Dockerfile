FROM node:10

WORKDIR /app/docker-image

COPY package*.json ./

RUN npm install

# Bundle app source
COPY . /app/docker-image

CMD node .

EXPOSE 8080

