FROM node:22-alpine AS base

WORKDIR /app

CMD ["npm", "run", "dev"]
