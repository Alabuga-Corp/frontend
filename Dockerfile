FROM node:20-slim

WORKDIR /app

COPY packages.json .

RUN npm install

COPY . .

CMD[ "npm", "run", "dev", "--", "--host", "0.0.0.0"]