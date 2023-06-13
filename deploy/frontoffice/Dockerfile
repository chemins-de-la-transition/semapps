FROM node:14.17-alpine

# Default arguments
ARG SELECTED_BRANCH=master
ARG SELECTED_DIR=frontoffice

RUN apk add --update --no-cache autoconf bash libtool automake python alpine-sdk openssh-keygen yarn nano

RUN yarn global add serve

# Force cache invalidation if the selected branch changed since last build
# If we don't do that, Docker may skip the git clone command
ADD https://api.github.com/repos/chemins-de-la-transition/semapps/git/refs/heads/$SELECTED_BRANCH git-version.json

RUN git clone https://github.com/chemins-de-la-transition/semapps.git /semapps_clone

WORKDIR /semapps_clone
RUN git checkout $SELECTED_BRANCH

# Move selected dir to root /app directory
RUN mv $SELECTED_DIR /app

# We can now remove the clone
WORKDIR /app
RUN rm -Rf /semapps_clone

RUN yarn install

COPY ./app /app

RUN yarn run build

EXPOSE 4000

CMD serve -s build -l 4000
