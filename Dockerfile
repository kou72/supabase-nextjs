FROM node:18-slim

WORKDIR /app
COPY package.json yarn.lock ./

RUN yarn install --prod --frozen-lockfile
COPY . .

EXPOSE 3000
CMD ["yarn", "dev"]