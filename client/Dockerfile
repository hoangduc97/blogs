FROM node:14-alpine

WORKDIR /app/client

COPY . .

RUN yarn install

CMD [ "yarn", "run", "start" ]