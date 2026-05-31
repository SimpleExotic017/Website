FROM node:20
WORKDIR /app

# 1. Kopieer de package-bestanden specifiek UIT de portfolio map
COPY Portfolio/package*.json ./

# 2. Voer de installatie uit in de /app map van de container
RUN npm install --production
RUN npm initialise
# 3. Kopieer de rest van de portfolio bestanden naar de container
COPY Portfolio/ .

EXPOSE 3000
CMD ["npx", "ts-node" , "index.ts"]