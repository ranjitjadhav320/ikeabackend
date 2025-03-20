# Use an official Node.js runtime as the base image
FROM node:22-alpine

# Set working directory
WORKDIR /usr/src/app

# Install dependencies for Prisma (openssl for Prisma)
RUN apk add --no-cache openssl musl-dev

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install Node.js dependencies
RUN npm install

# Copy Prisma schema and migration files
COPY prisma ./prisma

# Copy the entire app source code
COPY . .

COPY .env .env

RUN npx prisma generate

EXPOSE 4000

# Command to run your application and run migrations at runtime
CMD npx prisma migrate deploy && npm run seed && npm start
