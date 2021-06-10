FROM node:12.18.3


WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]
RUN ls
RUN npm install --production
COPY . .

EXPOSE 8866

CMD ["node", "server.js"]
