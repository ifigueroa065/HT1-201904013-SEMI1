# Usar una imagen base de Python 3.10 o superior
FROM python:3.10-slim

# Definir el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copiar el archivo de requerimientos de Python al contenedor
COPY requirements.txt ./

# Actualizar pip antes de instalar las dependencias
RUN pip install --upgrade pip

# Instalar las dependencias de Python
RUN pip install --no-cache-dir -r requirements.txt

# Copiar el resto de los archivos del proyecto al contenedor
COPY . .

# Exponer el puerto en el que la API va a correr (por ejemplo, 5000)
EXPOSE 5000

# Comando para iniciar la API
CMD ["python", "app.py"]
