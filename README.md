# 🗂️ TurnoMaster

## 📌 ¿Qué es TurnoMaster?

**TurnoMaster** es una aplicación web para la **gestión de turnos en pequeños y medianos comercios**.  
El sistema permite administrar horarios, gestionar empleados y generar cuadrantes de trabajo de forma eficiente, optimizando la organización y la comunicación interna entre la empresa y los empleados.  

Este proyecto fue desarrollado como parte de la **Formación en Centros de Trabajo (FCT)** en el **CFGS de Desarrollo de Aplicaciones Web**.

---

## 🚀 Tecnologías utilizadas  

- **Backend:** Spring Boot (Java)  
- **Frontend:** Angular (JavaScript)  
- **Base de datos:** PostgreSQL  
- **Herramientas:** Docker, DBeaver, Bruno API  

---

## 🔐 Autenticación  
- Inicio de sesión y registro de usuarios con roles diferenciados (**Administrador** / **Empleado**).  

![Login](./screenshots/login.png) ![Registro](./screenshots/registro_usuarios.png)  

---

## 📊 Panel de Administrador  

Panel principal para la gestión y creación de usuarios, grupos y turnos.  

![AdminDashboard](./screenshots/panel_administrador.png)  

---

## 👨‍💼 Panel del Empleado  

El trabajador puede acceder a su panel personal, donde consulta de manera sencilla los **turnos asignados**.  

![UserDashboard](./screenshots/panel_usuario.png)  

---

## ⚙️ Funcionalidades principales  

### 👥 Gestión de grupos

Panel donde se puede ver y borrar fácilmente los grupos existentes.
![GroupManagement](./screenshots/panel_gestion_grupos.png)  

También podrá crear tantos grupos como quiera para organizar a sus trabajadores.
![AddNewGroup](./screenshots/panel_crear_grupo.png)  

### 👤 Gestión de usuarios  

Panel donde se pueden visualizar y borrar fácilmente los usuarios existentes.
![UserManagement](./screenshots/panel_gestion_usuarios.png)  

También podrá añadir nuevos usuarios.
![AddNewUser](./screenshots/panel_crear_usuario.png)  

### 🔄 Gestión de turnos

Panel donde se pueden visualizar y borrar los turnos.
![TurnManagement](./screenshots/panel_gestion_turnos.png) 

Podrá crear turnos sin necesidad de crear un cuadrante.
![AddNewTurn](./screenshots/panel_crear_turno.png)  

### 🗓️ Creación de cuadrantes  

Panel para la generación de cuadrantes de trabajo en formato, los cuáles se podrán exportar en formato **PDF**.  
![QuadrantManagement](./screenshots/panel_gestion_cuadrantes.png)

El usuario podrá seleccionar el rango de fechas del cuadrante que va a crear.
![SelectDatesPanel](./screenshots/panel_seleccion_fechas.png)  

A continuación, tendrá un calendario donde podrá visualizar todos los turnos existentes, borrarlos y moverlos de un día para otro de manera sencilla.
![CreateQuadrant](./screenshots/panel_crear_cuadrante.png)  

Haciendo click en un día, le permitirá añadir un turno seleccionando el usuario o grupo al que le va a asignar ese turno.
![AddTurnPanel](./screenshots/panel_anadir_turno.png)  

### 📑 Ejemplos de cuadrantes exportados  
Una vez se exporten los cuadrantes a **PDF** se verán de la siguiente manera:

![Ejemplo1](./screenshots/ejemplo_cuadrante_1.png)  
![Ejemplo2](./screenshots/ejemplo_cuadrante_2.png)  

---

## 👥 Autores  

- [@JuanPa0991](https://github.com/JuanPa0991)  
- [@alexpoedev](https://github.com/alexpoedev)  
- [@albamdls](https://github.com/albamdls)

Con la ayuda y colaboración de [@alvarorodriguezestruch](https://github.com/alvarorodriguezestruch) ✨
