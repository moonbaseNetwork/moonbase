FROM node:18-alpine

WORKDIR /app

# Clear Yarn cache
RUN yarn cache clean

COPY . .

RUN yarn install --production

CMD ["node", "src/pages/index.js"]

EXPOSE 3000
