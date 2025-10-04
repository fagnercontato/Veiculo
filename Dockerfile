ARG NODE_VERSION=22.5.1

FROM node:${NODE_VERSION} AS build

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

RUN yarn generate

RUN yarn build

FROM node:${NODE_VERSION}-alpine3.20

WORKDIR /home/app

COPY package.json yarn.lock ./

RUN yarn install --only=production

# RUN yarn generate

CMD ["sh", "-c", "npx prisma migrate deploy && npx prisma db seed && yarn start"]
