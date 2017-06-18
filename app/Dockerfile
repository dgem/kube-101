FROM node:alpine
RUN mkdir -p /usr/kube-app
WORKDIR /usr/kube-app
COPY package.json .
COPY index.js .
RUN npm install
ENV PORT 8080
EXPOSE $PORT
CMD [ "npm", "start" ]
