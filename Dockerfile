FROM node:16.17.0-alpine3.16
WORKDIR .
COPY . ./
RUN npm install
EXPOSE 3000

CMD [ "node", "--max-old-space-size=8192", "index.js"]