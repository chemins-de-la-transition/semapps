FROM node:12.16-alpine

WORKDIR /app

RUN node -v
RUN npm -v

RUN apk add --update --no-cache autoconf bash libtool automake python alpine-sdk openssh-keygen yarn nano

RUN yarn global add serve

COPY . /app/

RUN yarn install

RUN yarn run build

EXPOSE 4000

CMD serve -s build -l 4000
