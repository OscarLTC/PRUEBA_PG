# Documentación de la Prueba Técnica - Play Group LATAM

## 1. Introducción

### 1.1 Descripción General

Este proyecto es una **prueba técnica** para la empresa **Play Group LATAM**. Se han desarrollado dos aplicaciones que interactúan entre sí:

- **Frontend**: Desarrollada con **Next.js** 14 y **TailwindCSS**. La aplicación consume una API para gestionar productos.
- **Backend**: Desarrollada con **Django** y **Django REST Framework** para gestionar productos a través de un API RESTful.

### 1.2 Objetivos

- Desarrollar una interfaz de usuario moderna y funcional para gestionar productos.
- Crear una API robusta para realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) de productos.

---

## 2. Isntalación de repositorio

### 2.1 Clonar el repositorio

Para clonar el repositorio, ejecuta el siguiente comando:

```bash
    git clone https://github.com/OscarLTC/PRUEBA_PG.git

```

## 3. Frontend (Next.js)

### 3.1 Requisitos

- **Node.js**: Se recomienda tener instalada la versión **18.x** o superior.

### 3.2 Instalación

Para ejecutar la aplicación frontend, sigue estos pasos:

1. Navega a la carpeta `frontend`:

   ```bash
   cd frontend
   ```
2. Instala las dependencias:

   ```bash
    npm install
    ```
3. Inicia la aplicación:
   ```bash
    npm run dev
    ```
4. Abre tu navegador y navega a `http://localhost:3000`


## 4. Backend (Django)

### 4.1 Requisitos

- **Python**: Se recomienda tener instalada la versión **3.10.x** o superior.

### 4.2 Instalación

Para ejecutar la aplicación backend, sigue estos pasos:

1. Navega a la carpeta `backend`:

   ```bash
   cd backend
   ```

2. Crea un entorno virtual:
    
   ```bash
    py -m venv venv
    ```

3. Activa el entorno virtual:

   ```bash
    .\venv\Scripts\activate
    ```
4. Instala las dependencias:

   ```bash
    pip install -r .\requirements.py
    ```

5. Realiza las migraciones de la base de datos:
    
   ```bash
    python manage.py migrate
    ```

6. Inicia el servidor:
   
   ```bash
    python manage.py runserver
    ```

7. Abre tu navegador y navega a `http://localhost:8000`

---



