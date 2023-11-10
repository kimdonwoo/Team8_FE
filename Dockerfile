# Build stage
FROM krmp-d2hub-idock.9rum.cc/goorm/node:16

ENV REACT_APP_API_URL https://kb70bd6b8a3f6a.user-app.krampoline.com
ENV REACT_APP_BUCKET_NAME wekikibucket
ENV REACT_APP_REGION ap-northeast-2
ENV REACT_APP_ACCESS_KEY_ID AKIAUNPHDJTL5EOWDC4W
ENV REACT_APP_SECRET_ACCESS_KEY 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
ENV REACT_APP_KAKAO_REDIRECT_URL https://kb70bd6b8a3f6a.user-app.krampoline.com/auth/kakao/signin
ENV REACT_APP_KAKAO_REST_API_KEY 08e6c709229f3b44a8cff2fc7168e1a2

WORKDIR /usr/src/app
COPY . .
RUN npm ci
RUN npm run build
RUN npm install -g serve
EXPOSE 3000
CMD ["serve", "-s", "build"]
