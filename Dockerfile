FROM node:21

WORKDIR /app


COPY package*.json ./


USER root

RUN npm install
COPY . .

EXPOSE 5173


CMD npm run dev