FROM node:18-alpine
WORKDIR /app

# 1. Kopieer de package-bestanden specifiek UIT de portfolio map
COPY portfolio/package*.json ./

# 2. Voer de installatie uit in de /app map van de container
RUN npm install --production

# 3. Kopieer de rest van de portfolio bestanden naar de container
COPY portfolio/ .

EXPOSE 3000
CMD ["npm", "start"]