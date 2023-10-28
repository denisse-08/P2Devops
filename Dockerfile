FROM node:18.17.0-alpine3.17 as build-stage
WORKDIR ./app
COPY ./package*.json /app/
RUN npm ci
COPY ./ /app/

RUN npm run build -- --output-path=./dist/out --output-hashing=all

FROM nginx:stable-alpine
COPY --from=build-stage /app/dist/out/ /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
