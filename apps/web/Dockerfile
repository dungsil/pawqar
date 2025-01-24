FROM node:lts-alpine

# 환경 구성
EXPOSE 3000

# 파일복사
WORKDIR /pawquar/web
COPY .output/ ./.output/
COPY package.json ./

CMD ["node", "./.output/server/index.mjs"]
