FROM node:14.16-alpine

# Default arguments
ARG SELECTED_BRANCH=master
ARG SELECTED_DIR=middleware

RUN apk add --update --no-cache autoconf bash libtool automake python alpine-sdk openssh-keygen rsync sshpass openssh yarn nano cmake

RUN yarn global add pm2

# Force cache invalidation if the master branch changed since last build
# If we don't do that, Docker may skip the git clone command
ADD https://api.github.com/repos/chemins-de-la-transition/semapps/git/refs/heads/$SELECTED_BRANCH ../git-version.json

RUN git clone https://github.com/chemins-de-la-transition/semapps.git /semapps_clone

WORKDIR /semapps_clone
RUN git checkout $SELECTED_BRANCH

# Move selected dir to root /app directory
RUN mv $SELECTED_DIR /app

# We can now remove the clone
WORKDIR /app
RUN rm -Rf /semapps_clone

RUN yarn install

COPY ./ecosystem.config.js /app
COPY ./app /app

EXPOSE 3000

CMD [ "pm2-runtime", "ecosystem.config.js" ]
