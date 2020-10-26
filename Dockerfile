FROM node:12

WORKDIR /usr/monprojet

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]