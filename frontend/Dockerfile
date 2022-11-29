FROM node:14-alpine as build

WORKDIR /app
COPY package.json /app/package.json
RUN npm install
COPY . /app

ARG HOST
ENV SERVER_ORIGIN=\'$HOST\'
RUN echo $SERVER_ORIGIN
#ENV SERVER_ORIGIN=http://localhost:3001

RUN npm run build
FROM nginx:1.16.0-alpine
COPY --from=build /app/dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]