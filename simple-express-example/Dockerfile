FROM node:22-alpine3.19

EXPOSE 3000

WORKDIR /var/app
COPY package.json /var/app/
COPY package-lock.json /var/app/
RUN npm install  

CMD npm run start