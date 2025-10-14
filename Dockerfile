ARG NODE_VERSION=22.5.1

FROM node:${NODE_VERSION}-alpine3.20

WORKDIR /api

COPY . .

RUN rm -rf node_modules

RUN npm install

COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]

EXPOSE 3000