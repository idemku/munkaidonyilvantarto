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
- Munkavállalóként szeretnék profiladatokat szerkeszteni
- Munkavállalóként szeretnék munkalapot felvenni (feladat neve, rövid leírása, ideje)
- Munkavállalóként szeretnék tervezett munkalapot (jövőbeni feladatokhoz)
- Munkavállalóként szeretnék szabadságot megjelölni
- Munkavállalóként szeretnék módosítani, törölni munkalapokat
- Munkavállalóként szeretnék hibát jelezni az oldalon (fejlesztők felé)
<br><br>
- Munkáltatóként szeretném elérni az összes *Munkavállalói* lehetőséget
- Munkáltatóként szeretnék új feladatokat kiosztani a *Munkavállalóknak*
- Munkáltatóként szeretnék *Munkavállalók* munkalapját is módosítani, törölni
<br><br>
- Adminisztrátorként szeretném elérni az összes *Munkáltatói* lehetőséget
- Adminisztrátorként szeretnék új felhasználót hozzáadni a rendszerhez
- Adminisztrátorként szeretnék felhasználót törölni a rendszerből
- Adminisztrátorként szeretnék módosítani felhasználók adatain

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
- Profiladatok
  -Profiladatok szerkesztése
- Munkalapok megtekintése
- Feladatok megtekintése
- Új munkalap felvétele
- Munkalap módosítása
- Munkalap törlése
- Hibabejelentés

### Munkáltató
- Kilépés
- Profiladatok
  -Profiladatok szerkesztése
- Munkalapok megtekintése
- Feladatok megtekintése
- Új munkalap felvétele
- Munkalap módosítása
- Munkalap törlése
- Hibabejelentés
- Új feladat felvétele
- Munkavállalók munkalapjainak megtekintése
- Feladat hozzárendelése felhasználóhoz

### Adminisztrátor
- Kilépés
- Profiladatok
  -Profiladatok szerkesztése
- Munkalapok megtekintése
- Feladatok megtekintése
- Új munkalap felvétele
- Munkalap módosítása
- Munkalap törlése
- Hibabejelentés
- Új feladat felvétele
- Munkavállalók munkalapjainak megtekintése
- Feladat hozzárendelése felhasználóhoz
- Új felhasználó felvétele
- Felhasználó módosítása/törlése


//aaAA11