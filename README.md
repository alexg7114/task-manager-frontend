
# ✅ Task Manager – Angular Frontend

## 🇩🇪 Deutsch

Dieses Repository enthält das Frontend für ein einfaches Task-Management-System, entwickelt mit Angular.  
Die Anwendung kommuniziert mit einem separaten Django-Backend über eine REST-API.

### 🎯 Funktionen

- Aufgaben anzeigen, erstellen, bearbeiten und löschen
- Moderne und responsive Benutzeroberfläche
- Integration mit REST-API (Django Backend)
- Klare Struktur: Komponenten, Services, Modelle
- Fehlerbehandlung bei API-Aufrufen

### 🧰 Verwendete Technologien

- Angular 16+
- TypeScript
- Bootstrap / CSS
- Angular HTTP Client

### 📁 Projektstruktur (Auszug)

```
frontend/
├── src/
│   ├── app/
│   │   ├── components/
│   │   ├── services/
│   │   ├── models/
│   │   └── app.module.ts
├── angular.json
└── package.json
```

### 🚀 Lokale Installation

```bash
git clone https://github.com/alexg7114/task-manager-frontend.git
cd task-manager-frontend
npm install
ng serve
```

Standardmäßig erreichbar unter: `http://localhost:4200/`

### 🔌 API-Konfiguration

Das Frontend erwartet das Backend unter `http://localhost:8000/api/`  
Diese URL kann in `task.service.ts` angepasst werden.

### 📌 Projektinfo

Dieses Projekt wurde im Rahmen meiner Umschulung zum Fachinformatiker für Anwendungsentwicklung  erstellt.

---

## 🇬🇧 English

This repository contains the frontend for a simple task management system built with Angular.  
The application communicates with a separate Django backend via a REST API.

### 🎯 Features

- View, create, edit, and delete tasks
- Modern and responsive user interface
- REST API integration with the backend
- Clear structure: components, services, and models
- Error handling for API requests

### 🧰 Technologies Used

- Angular 16+
- TypeScript
- Bootstrap / CSS
- Angular HTTP Client

### 📁 Project Structure (excerpt)

```
frontend/
├── src/
│   ├── app/
│   │   ├── components/
│   │   ├── services/
│   │   ├── models/
│   │   └── app.module.ts
├── angular.json
└── package.json
```

### 🚀 Installation

```bash
git clone https://github.com/alexg7114/task-manager-frontend.git
cd task-manager-frontend
npm install
ng serve
```

The app will be available at: `http://localhost:4200/`

### 🔌 API Configuration

The frontend expects the backend at `http://localhost:8000/api/`  
You can change this in the `task.service.ts` file.

### 📌 About the Project

This project was created as part of my retraining as an "Fachinformatiker für Anwendungsentwicklung".





