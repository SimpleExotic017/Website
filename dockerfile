FROM node:20
WORKDIR /Portfolio
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --if-present
EXPOSE 3000
CMD ["npm", "start"]