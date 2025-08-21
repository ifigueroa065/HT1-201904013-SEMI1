# LoadBalancer en AWS

Implementación de LoadBalancer en aws usando una api en nodejs y otra en python.

Configuración de EC2 en la sección de User-Data:

```bash
#!/bin/bash
set -euxo pipefail
exec > /var/log/user-data.log 2>&1

# Actualizar la instancia y instalar dependencias necesarias
dnf update -y
dnf install -y docker git

# Iniciar y habilitar el servicio Docker
systemctl enable docker
systemctl start docker

# Agregar el usuario ec2-user al grupo Docker
usermod -aG docker ec2-user

# Cambiar al directorio /home/ec2-user y clonar el repositorio de GitHub
cd /home/ec2-user
sudo -u ec2-user git clone https://github.com/ifigueroa065/HT1-201904013-SEMI1.git

# Acceder al directorio de la API de Node.js
cd HT1-201904013-SEMI1/api-js

# Construir la imagen Docker para la API de Node.js
docker build -t api-nodejs:latest .

# Ejecutar el contenedor Docker en segundo plano, exponiendo el puerto 3000
docker run -d -p 3000:3000 api-nodejs:latest


```

APY-PYTHON:

```bash
#!/bin/bash
set -euxo pipefail
exec > /var/log/user-data.log 2>&1

# Actualizar la instancia y instalar dependencias necesarias
dnf update -y
dnf install -y docker git

# Iniciar y habilitar el servicio Docker
systemctl enable docker
systemctl start docker

# Agregar el usuario ec2-user al grupo Docker
usermod -aG docker ec2-user

# Cambiar al directorio /home/ec2-user y clonar el repositorio de GitHub
cd /home/ec2-user
sudo -u ec2-user git clone https://github.com/ifigueroa065/HT1-201904013-SEMI1.git

# Acceder al directorio de la API de Python
cd HT1-201904013-SEMI1/api-python

# Construir la imagen Docker para la API de Python
docker build -t api-python:latest .

# Ejecutar el contenedor Docker en segundo plano, exponiendo el puerto 5000
docker run -d -p 5000:5000 api-python:latest


```
