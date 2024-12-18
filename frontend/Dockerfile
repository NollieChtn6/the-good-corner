FROM node:lts-alpine

WORKDIR /app
COPY package.json ./
RUN npm install

COPY vite.config.ts ./
COPY tsconfig*.json ./
COPY index.html ./
COPY public/ public/
COPY src/ src/

CMD npm run dev