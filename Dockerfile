FROM node:12

WORKDIR /777art

COPY . ./

RUN yarn install

EXPOSE 3000

RUN yarn build

CMD [ "yarn", "start" ]