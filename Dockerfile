FROM node:12.16-alpine

RUN node -v
RUN npm -v

RUN npm install pm2 -g

RUN apk add --update --no-cache autoconf bash libtool automake python alpine-sdk openssh-keygen rsync sshpass openssh yarn nano

WORKDIR /app

RUN mkdir ~/.ssh && touch ~/.ssh/known_hosts && ssh-keyscan gateways.storage.gra.cloud.ovh.net >> ~/.ssh/known_hosts

COPY ./middleware /app
COPY ./ecosystem.config.js /app

RUN ./initialize.sh

RUN yarn install

EXPOSE 3000

CMD [ "pm2-runtime", "ecosystem.config.js" ]
