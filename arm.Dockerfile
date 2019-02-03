FROM arm32v7/node:10-jessie-slim

LABEL maintainer="cgianelle@gmail.com"

ENV APP_DIR /usr/app
RUN mkdir -p ${APP_DIR}
WORKDIR ${APP_DIR}

COPY package.json .
RUN npm install --production

COPY config config
COPY lib lib
COPY index.js .

EXPOSE 3184
LABEL version="1.0"
CMD [ "node", "index.js" ]