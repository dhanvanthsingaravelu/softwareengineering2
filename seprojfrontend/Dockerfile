FROM node:14-slim


WORKDIR /usr/src/app

COPY ./package.json ./

RUN yarn install
COPY . .

EXPOSE 2500

CMD ["yarn", "start"]
