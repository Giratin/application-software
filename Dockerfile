FROM node:12

WORKDIR /usr/serveur

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]