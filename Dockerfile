FROM node:16
COPY . /frontend
WORKDIR /frontend

RUN npm install

RUN npm run build

RUN npm install -g serve

EXPOSE 3000