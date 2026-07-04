# Seed / Reset danych - Invincible Shop Template

Dokument opisuje docelowy seed danych dla template Medusa + Next.js.

Na tym etapie to jest plan i checklista. Nie wykonywać resetu bazy bez backupu.

---

## 1. Cel seeda

Seed ma pozwolić odtworzyć sklep demo bez ręcznego klikania wszystkiego w panelu admina.

Docelowo po uruchomieniu seeda projekt powinien mieć:

- region sprzedaży,
- walutę,
- kraje sprzedaży,
- metody dostawy,
- metodę płatności testowej,
- kategorie,
- produkty demo,
- warianty produktów,
- ceny,
- stock,
- podstawowe dane sklepu.

---

## 2. Aktualna baza lokalna

Docker container:

    invincible-shop-postgres

Poprawna baza danych:

    medusa-invincible-shop

Projekt lokalny:

    ~/invincible-next/invincible-shop

---

## 3. Zasada bezpieczeństwa

Przed każdym seed/reset:

    npm run backup:all -- before-seed-reset

Nie resetować bazy bez aktualnego backupu.

Nie wykonywać destrukcyjnych komend bez świadomego potwierdzenia.

---

## 4. Minimalne dane regionu

| Element | Wartość docelowa |
|---|---|
| Region | Polska |
| Waluta | PLN |
| Kraj | Poland / PL |
| Tax / VAT | do ustalenia produkcyjnie |
| Payment | System DEFAULT albo testowa metoda lokalna |
| Shipping | testowa metoda dostawy |

---

## 5. Kategorie demo

Przykładowe kategorie dla template:

| Kategoria | Cel |
|---|---|
| Odzież | produkty z rozmiarami |
| Akcesoria | proste produkty |
| Kolekcje | produkty tematyczne |
| Promocje | test ceny/promocji |

Kategorie demo powinny być neutralne, żeby template dało się łatwo przerobić na inny sklep.

---

## 6. Produkty demo

Minimalny zestaw produktów:

| Produkt | Warianty | Cel testu |
|---|---|---|
| Koszulka demo | rozmiar / kolor | warianty, zdjęcia, cena |
| Bluza demo | rozmiar / kolor | warianty i stock |
| Kubek demo | jeden wariant | prosty produkt |
| Plakat demo | rozmiar | produkt z opcją wyboru |
| Pakiet demo | jeden wariant | test większej ceny |

---

## 7. Co seed powinien testować

Seed powinien umożliwić sprawdzenie:

- listy produktów,
- strony produktu,
- wariantów,
- zdjęć,
- ceny w PLN,
- stocku,
- dodania do koszyka,
- checkoutu,
- zamówienia,
- historii zamówień,
- szczegółów zamówienia w koncie klienta,
- widoczności zamówienia w adminie.

---

## 8. Czego seed nie powinien robić automatycznie bez zgody

Seed/reset nie powinien bez potwierdzenia:

- usuwać realnych zamówień,
- usuwać klientów,
- usuwać konfiguracji produkcyjnej,
- nadpisywać sekretów,
- zmieniać plików .env.local,
- resetować bazy produkcyjnej,
- mieszać danych WordPressa i Medusy.

---

## 9. Plan przyszłego skryptu

Docelowy skrypt może mieć jedną z form:

    npm run seed:pl
    npm run seed:demo
    npm run reset:demo

Reset powinien wymagać potwierdzenia tekstowego, np.

    RESET_DEMO

Seed bez resetu powinien być bezpieczniejszy i tylko dodawać brakujące dane.

---

## 10. Acceptance criteria

Seed można uznać za gotowy, gdy:

- nowa lokalna baza może zostać przygotowana bez ręcznego klikania w adminie,
- region Polska i PLN są ustawione,
- są produkty demo,
- można przejść pełną ścieżkę zakupu,
- zamówienie testowe pojawia się w adminie,
- klient widzi zamówienie na koncie,
- dokumentacja opisuje, co seed robi i czego nie robi.

---

## 11. Status

Na teraz:

- seed/reset nie jest jeszcze gotowy,
- dane demo istnieją lokalnie ręcznie,
- dokument opisuje docelowy zakres,
- przed implementacją trzeba sprawdzić aktualne skrypty Medusy i strukturę seeda w projekcie.

