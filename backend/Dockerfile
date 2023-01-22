FROM node:16 AS Production 
ENV NODE_ENV=production
WORKDIR /backend/src
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .
EXPOSE 4001
CMD [ "npm", "start" ]