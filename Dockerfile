FROM node:18-slim

WORKDIR /app
COPY nextjs/package.json nextjs/yarn.lock ./
RUN yarn install
