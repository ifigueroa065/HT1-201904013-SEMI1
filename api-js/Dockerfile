# Usar la imagen base de Node.js
FROM node:16

# Definir el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copiar el package.json y el package-lock.json al contenedor
COPY package*.json ./

# Instalar las dependencias de la API
RUN npm install

# Copiar el resto de los archivos del proyecto al contenedor
COPY . .

# Exponer el puerto en el que la API va a correr (por ejemplo, 3000)
EXPOSE 3000

# Comando para iniciar la API
CMD ["node", "app.js"]
