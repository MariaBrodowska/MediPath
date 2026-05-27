# MediPath

MediPath is a system designed to support the work of a small healthcare facility by
streamlining appointment management and providing patient‑friendly tools such as reminders
and reviews. The project consists of a web application, a mobile application and a backend REST API with a shared database.

The work includes market research, system design, implementation and testing. The design
phase covers functional and non‑functional requirements, BPMN/use‑case/activity diagrams,
database design and UI mockups. The implementation delivers a full stack system with role‑based access and multiple modules supporting daily operations.

The solution targets two primary user groups: medical staff who manage institutions and
schedules and patients who browse specialists, book appointments, track health‑related
tasks. The mobile app provides quick access for daily workflows, while the web app offers
broader administration capabilities.

## Key Features

- Role‑based access (patient, doctor, staff, administrator)
- Appointment booking and visit management
- Institution and doctor management (admin/staff)
- Schedules and availability management
- Reminders and notifications (mobile)
- Reviews and ratings after visits
- Password reset workflow

## User Roles

- **Patient:** browse doctors/institutions, book visits, manage reminders, submit reviews
- **Doctor:** manage visits, view schedules, complete appointments
- **Staff:** manage schedules and operational data for institutions
- **Administrator:** full management of institutions, doctors, and system data

## Architecture

The system is composed of:

- **Web client** for administrators, staff, doctors, and patients
- **Mobile client** focused on patient/doctor workflows
- **Backend REST API** handling authentication, business logic and data access
- **MongoDB**

The backend exposes a REST API consumed by both the web and mobile clients. Authentication
and authorization are enforced on the server, while the clients implement role‑based routing
and guarded modules.

## Modules Overview

- **Authentication & Authorization:** login, session handling, role checks
- **Appointments & Visits:** booking, visit lifecycle, status updates
- **Scheduling:** time slot creation and availability management
- **Institutions & Doctors:** CRUD management for admin/staff roles
- **Medical History:** storing visit notes and patient history
- **Notifications:** reminder creation and delivery
- **Reviews:** post‑visit feedback for doctors and institutions

## Technology Stack

- **Frontend (Web):** Angular, TypeScript
- **Mobile:** Kotlin, Jetpack Compose, MVVM
- **Backend:** Java, Spring Boot
- **Database:** MongoDB (document‑oriented)
- **Communication:** REST API (mobile uses Retrofit)
- **Infrastructure:** Docker / Docker Compose

## Core Modules

- Authentication and authorization
- Password reset workflow
- Notifications and reminders
- Visit management and scheduling
- Reviews and ratings
- Medical history management
- Institution and doctor management

## Testing

- Manual test scenarios for web and mobile flows
- Automated tests including unit, integration and UI tests

The test suite validates typical user journeys such as registration, scheduling, reminder creation,  visit completion and verifies backend data consistency through integration tests.

## Web Application Highlights

- Admin/staff panels for managing institutions, doctors and schedules
- Patient‑facing browsing and appointment booking
- Role‑based access control across modules

## Mobile Application Highlights

- Patient and doctor focused flows
- Reminders and notification channel integration
- Visit details, completion and review workflows

## Repository Structure

- `backend/` — Spring Boot backend
- `frontend/` — Angular web client
- `mobile/` — Android mobile client

## Web App Screens (selected)

<p align="center">
  <img src="images/image97.png" width="240" />
  <img src="images/image102.png" width="240" />
  <img src="images/image103.png" width="240" />
  <img src="images/image104.png" width="240" />
  <img src="images/image106.png" width="240" />
  <img src="images/image108.png" width="240" />
  <img src="images/image110.png" width="240" />
  <img src="images/image111.png" width="240" />
  <img src="images/image112.png" width="240" />
  <img src="images/image114.png" width="240" />
  <img src="images/image117.png" width="240" />
  <img src="images/image118.png" width="240" />
  <img src="images/image119.png" width="240" />
  <img src="images/image120.png" width="240" />
  <img src="images/image122.png" width="240" />
  <img src="images/image124.png" width="240" />
  <img src="images/image128.png" width="240" />
  <img src="images/image130.png" width="240" />
</p>

## Mobile App Screens (selected)

<p align="center">
  <img src="images/image137.png" width="220" />
  <img src="images/image139.png" width="220" />
  <img src="images/image140.png" width="220" />
  <img src="images/image141.png" width="220" />
  <img src="images/image143.png" width="220" />
  <img src="images/image144.png" width="220" />
  <img src="images/image146.png" width="220" />
  <img src="images/image148.png" width="220" />
  <img src="images/image149.png" width="220" />
  <img src="images/image150.png" width="220" />
  <img src="images/image151.png" width="220" />
  <img src="images/image152.png" width="220" />
  <img src="images/image154.png" width="220" />
  <img src="images/image159.png" width="220" />
  <img src="images/image160.png" width="220" />
</p>

## Authors

- [Mateusz Brankiewicz](https://github.com/MateuszBrankiewicz)
- [Maria Brodowska](https://github.com/MariaBrodowska)
- [Adam Brzęk](https://github.com/ThePowerOf76)