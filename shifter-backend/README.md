# 🖥️ Shifter Backend

Este es el **backend** de la aplicación **TurnoMaster**, desarrollado en **Spring Boot (Java)**.  
Se encarga de la lógica de negocio, la gestión de usuarios, grupos, turnos y la comunicación con la base de datos **PostgreSQL**.

---

## 🚀 Tecnologías utilizadas
- Java 17
- Spring Boot
- PostgreSQL
- Docker
- Maven

---

## 📦 Instalación y despliegue

### 🔧 Requisitos previos
- [Java 17](https://adoptium.net/)
- [Maven](https://maven.apache.org/)
- [Docker](https://www.docker.com/)

### ▶️ Ejecutar en local

1. Clonar el repositorio:
 ```bash
 git clone https://github.com/albamdls/turno-master.git
 cd turno-master/shifter-backend
 ```

2. Instalar dependencias y compilar:
```
mvn clean install
```

3. Levantar PostgreSQL con Docker:
```
docker-compose up -d
```

4. Ejecutar el backend:
```
mvn spring-boot:run
```

👉 Por defecto la API se expone en:
```
http://localhost:8080
```
