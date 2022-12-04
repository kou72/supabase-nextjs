FROM node:18-slim

WORKDIR /app
# COPY package.json yarn.lock ./
COPY nextjs/package.json nextjs/yarn.lock ./
RUN yarn install
# COPY . .

# EXPOSE 3000
# CMD ["yarn", "dev"]