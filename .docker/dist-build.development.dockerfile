FROM node:6.6

# prepare a user which runs everything locally! - required in child images!
RUN useradd --user-group --create-home --shell /bin/false app

ENV HOME=/home/app
WORKDIR $HOME

RUN npm install -g angular-cli@1.0.0-beta.18 && npm cache clean

ENV APP_NAME=crudular

# before switching to user we need to set permission properly
# copy all files, except the ignored files from .dockerignore
COPY . $HOME/$APP_NAME/
RUN chown -R app:app $HOME/*

USER app
WORKDIR $HOME/$APP_NAME

RUN npm install &&\
  npm cache clean

CMD ["ng", "serve", "--host", "0.0.0.0", "--port", "4200"]
