# Munkaidő nyilvántartó

## Telepítés
```
git clone
npm install
```
### Bejelentkezési adatok
- Express-admin:
  - Felhasználónév: a
  - Jelszó: aaAA11
- Munkaidő nyilvántartó
  1. Adminisztrátor: admin@admin.hu: admin
  2. Vezető: vezeto@vezeto.hu: vezeto
  3. Munkás1: munkas1@munkas1.hu: munkas1
  4. Munkás2: munkas2@munkas2.hu: munkas2

## Funkcionális követelmények
- Munkavállalóként szeretnék bejelentkezni az oldalra
- Munkavállalóként szeretnék munkalapot felvenni (feladat rövid leírása, ideje)
- Munkavállalóként szeretném a munkalapjaimat megtekinteni
<br><br>
- Munkáltatóként szeretném elérni az összes *Munkavállalói* lehetőséget
- Munkáltatóként szeretnék új feladatokat kiosztani a *Munkavállalóknak*
- Munkáltatóként szeretnék új projektet létrehozni
<br><br>
- Adminisztrátorként szeretném elérni az összes *Munkáltatói* lehetőséget
- Adminisztrátorként szeretnék új felhasználót hozzáadni a rendszerhez
- Adminisztrátorként szeretnék felhasználót törölni a rendszerből

## Nem funkcionális követelmények
- Felhasználóbarát, kényelmes használat, átlátható és letisztult kinézet.
- Gyors, megbízható működés.
- Biztonságos működés: jelszavak tárolása, funkciókhoz való hozzáférés.

## Oldaltérkép

### Publikus oldal
- Főoldal
- Bejelentkezés

### Munkavállaló
- Kilépés
- Projektek böngészése
  - Feladatok böngészése
    - Munkaidő feljegyzése
  - Jegyzetek böngészése (Logok)
- Projektjeim

### Munkáltató
- Kilépés
- Projektek böngészése
  - Feladatok böngészése
    - Munkaidő feljegyzése
  - Jegyzetek böngészése (Logok)
- Saját projektek
  - Projekt törlése
  - Feladat megtekintése
  - Résztvevők szerkesztése
  - Feladat módosítás
  - Résztvevők szerkesztése
  - Hozzárendelés
  - Eltávolítás
- Új projekt

### Adminisztrátor
- Kilépés
- Projektek böngészése
  - Feladatok böngészése
    - Munkaidő feljegyzése
  - Jegyzetek böngészése (Logok)
- Saját projektek
  - Projekt törlése
  - Feladat megtekintése
  - Résztvevők szerkesztése
  - Feladat módosítás
  - Résztvevők szerkesztése
  - Hozzárendelés
  - Eltávolítás
- Új projekt
- Felhasználó hozzáadása

## Végpontok
- GET /: Főoldal
- GET /login: Bejelentkezési oldal
- POST /login: Bejelentkezési adatok küldése
- GET /logout: kijelentkezés
- GET /addUser: Felhasználó hozzáadása, űrlap megjelítése
- POST /addUser: Felhasználó hozzáadása,adatok felküldése
- GET /projects/create: Projekt létrehozása
- POST /projects/create: Projekt adatok felküldése
- GET /ownprojects: Saját projektek megjelnítése(vezetőként)
- GET /ownuserprojects: Felhasználőként a hozzám rendelt projektek megtekintése
- POST /projects/:id/create: Feladat adatok felküldése
- GET /projects/:id/create: Feladat létrehozása
- GET /projects/:id/edit: Projekt szerkesztése
- POST /projects/:id/edit: Projekt adatok felküldése
- GET /projects/:id/delete: Projekt törlése
- GET /projects/:id/users: Projekthez rendelt felhasználók
- GET /projects/:id/users/add: Projekthez felhasználó hozzáadása
- GET /projects/:id/users/add/:id2: Hozzárendelt felhasználó adatok felküldése
- GET /projects/:id/users/:id2/delete: Hozzárendelt felhasználó eltávolítása a projektről
- GET /projects/:id/:id2/users: Feladathoz rendelt felhasználók
- GET /projects/:id/:id3/users/add: Feladathoz felhasználó hozzáadása
- GET /projects/:id/:id3/users/add/:id2: Hozzárendelt felhasználó adatok felküldése
- GET /projects/:id/:id3/users/:id2/delete: Hozzárendelt felhasználó eltávolítása a feladatról
- GET /projects/:id/log: idő logolása projekthez
- POST /projects/:id/log: log felküldése
- GET /projects/:id/:id2/log: idő logolása projekthez
- POST /projects/:id/:id2/log: log felküldése
- GET /projects/:id/:id2/edit: Feladat szerkesztése
- POST /projects/:id/:id2/edit: Feladat adatok felküldése
- GET /projects/:id/:id2/delete: Feladat törlése
- GET /projects/:id: Projekt megjelenítése
- GET /projects/:id/:id2: Feladat megjelenítése

## Adatmodell

```
[User|
  id
  username
  firstname
  lastname
  email
  password
  isLeader
  isAdmin
]

[Task|
  id
  name
  description
  project_id
]

[Project|
  id
  name
  description
  user_id
]

[Log|
  id
  name
  description
  user_id
  project_id
  task_id
]

[project_user|
  id
  user_id
  project_id
]

[task_user|
  id
  user_id
  project_id
]


[User] 1 - 0..* [task_user]
[User] 1 - 0..* [project_user]
[Task] 1 - 0..* [task_user]
[Project] 1 - 0..* [project_user]
[Project] 1 - 1 [User]
[User] 1 - 0..* [Log]
[Task] 1 - 0..* [Log]
[Project] 1 - 0..* [Log]
```