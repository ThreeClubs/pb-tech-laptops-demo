FROM node:16 AS Production 
ENV NODE_ENV=production
WORKDIR /frontend/src
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .
EXPOSE 5173
CMD [ "npm", "run dev" ]