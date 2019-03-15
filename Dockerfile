FROM node:10-alpine
RUN apk --no-cache add --virtual builds-deps build-base python
WORKDIR /home/node/app
EXPOSE 3000
ENTRYPOINT ["node"]
COPY ./package*.json ./
RUN npm install
RUN npm rebuild bcrypt --build-from-source

COPY ./ ./
#RUN npm run start:prod
