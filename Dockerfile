# Build stage
FROM krmp-d2hub-idock.9rum.cc/goorm/node:16

ENV REACT_APP_API_URL = https://kb70bd6b8a3f6a.user-app.krampoline.com

WORKDIR /usr/src/app
COPY . .
RUN npm ci
RUN npm run build
RUN npm install -g serve
EXPOSE 3000
CMD ["serve", "-s", "build"]
