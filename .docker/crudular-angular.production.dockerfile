FROM node
MAINTAINER Christian Dobert <idontreallyneedthese@gmail.com>

# prepare a user which runs everything locally! - required in child images!
RUN useradd --user-group --create-home --shell /bin/false app

ENV HOME=/home/app
WORKDIR $HOME

RUN npm cache clean && npm install -g @angular/cli

ENV APP_NAME=crudular

# before switching to user we need to set permission properly
# copy all files, except the ignored files from .dockerignore
COPY . $HOME/$APP_NAME/
RUN chown -R app:app $HOME/*

USER app
WORKDIR $HOME/$APP_NAME

RUN npm cache clean && npm install
