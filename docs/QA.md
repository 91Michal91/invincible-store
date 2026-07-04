# Manual QA Checklist - Invincible Shop Template

Checklist ręcznego testowania sklepu Medusa + Next.js.

Cel: przed większym backupem, wdrożeniem albo przekazaniem template sprawdzić, czy najważniejsze ścieżki klienta działają bez błędów.

---

## 1. Dane testu

| Pole | Wartość |
|---|---|
| Data testu |  |
| Osoba testująca |  |
| Nazwa etapu |  |
| Tryb sklepu | demo / production |
| Branch / commit |  |
| Backup przed testem | tak / nie |
| Backup po teście | tak / nie |

---

## 2. Adresy lokalne

| Obszar | URL | Status |
|---|---|---|
| Home | http://localhost:8000/pl | OK / NOK |
| Store | http://localhost:8000/pl/store | OK / NOK |
| Cart | http://localhost:8000/pl/cart | OK / NOK |
| Checkout | http://localhost:8000/pl/checkout | OK / NOK |
| Account | http://localhost:8000/pl/account | OK / NOK |
| Admin | http://localhost:9000/app | OK / NOK |

---

## 3. Smoke test po uruchomieniu

| Test | Oczekiwany wynik | Status |
|---|---|---|
| `docker start invincible-shop-postgres` | Kontener działa | OK / NOK |
| `npm run dev` | Backend i storefront startują | OK / NOK |
| Home ładuje się bez błędu | Strona widoczna | OK / NOK |
| Admin ładuje się bez błędu | Panel Medusa widoczny | OK / NOK |
| Brak czerwonego błędu Next.js | Użytkownik nie widzi stack trace | OK / NOK |

---

## 4. Home

| Test | Oczekiwany wynik | Status |
|---|---|---|
| Wejście na `/pl` | Strona ładuje się poprawnie | OK / NOK |
| Hero pokazuje nazwę sklepu z konfiguracji | Dane pochodzą z `shopConfig` / env | OK / NOK |
| Link do sklepu działa | Przejście do `/pl/store` | OK / NOK |
| Stopka jest widoczna | Dane kontaktowe i linki są poprawne | OK / NOK |
| Wersja mobile | Układ nie jest rozwalony | OK / NOK |

---

## 5. Store

| Test | Oczekiwany wynik | Status |
|---|---|---|
| Wejście na `/pl/store` | Lista produktów działa | OK / NOK |
| Produkty mają ceny w PLN | Cena widoczna poprawnie | OK / NOK |
| Kliknięcie produktu | Przejście do strony produktu | OK / NOK |
| Brak produktów | UI nie pokazuje błędu developerskiego | OK / NOK |
| Mobile store | Produkty są czytelne | OK / NOK |

---

## 6. Product page

| Test | Oczekiwany wynik | Status |
|---|---|---|
| Strona produktu ładuje się | Zdjęcia, tytuł, cena widoczne | OK / NOK |
| Warianty produktu działają | Można wybrać wariant | OK / NOK |
| Zmiana wariantu nie psuje UI | Cena/stock/obraz nie powodują błędu | OK / NOK |
| Dodanie do koszyka | Produkt trafia do koszyka | OK / NOK |
| Brak stocku | Klient widzi zrozumiały komunikat | OK / NOK |

---

## 7. Cart

| Test | Oczekiwany wynik | Status |
|---|---|---|
| Wejście na `/pl/cart` | Koszyk ładuje się poprawnie | OK / NOK |
| Produkt w koszyku | Nazwa, cena i ilość są poprawne | OK / NOK |
| Zmiana ilości | Suma aktualizuje się poprawnie | OK / NOK |
| Usunięcie produktu | Produkt znika z koszyka | OK / NOK |
| Pusty koszyk | Klient widzi normalny komunikat | OK / NOK |
| Banner błędu koszyka | Komunikat jest po polsku i zrozumiały | OK / NOK |

---

## 8. Checkout

| Test | Oczekiwany wynik | Status |
|---|---|---|
| Przejście do `/pl/checkout` | Checkout ładuje się poprawnie | OK / NOK |
| Dane kontaktowe | Formularz działa | OK / NOK |
| Adres dostawy | Formularz działa | OK / NOK |
| Metoda dostawy | Można wybrać dostawę | OK / NOK |
| Metoda płatności | Metoda demo/systemowa działa lokalnie | OK / NOK |
| Podsumowanie | Kwoty są poprawne | OK / NOK |
| Złożenie zamówienia testowego | Zamówienie powstaje | OK / NOK |
| Przekierowanie po zakupie | Klient widzi potwierdzenie | OK / NOK |

---

## 9. Account

| Test | Oczekiwany wynik | Status |
|---|---|---|
| Wejście na `/pl/account` bez logowania | Widoczny login albo przekierowanie | OK / NOK |
| Logowanie klienta | Klient może się zalogować | OK / NOK |
| Konto klienta | Dane konta widoczne | OK / NOK |
| Wylogowanie | Sesja znika poprawnie | OK / NOK |
| Brak czerwonego błędu | Brak stack trace / Unauthorized | OK / NOK |

---

## 10. Addresses

| Test | Oczekiwany wynik | Status |
|---|---|---|
| Wejście na adresy | Lista adresów działa | OK / NOK |
| Dodanie adresu | Adres zapisuje się poprawnie | OK / NOK |
| Edycja adresu | Zmiany zapisują się poprawnie | OK / NOK |
| Usunięcie adresu | Adres znika z listy | OK / NOK |
| Walidacja formularza | Komunikaty są po polsku lub zrozumiałe | OK / NOK |

---

## 11. Orders

| Test | Oczekiwany wynik | Status |
|---|---|---|
| Lista zamówień | Zamówienia klienta są widoczne | OK / NOK |
| Szczegóły zamówienia | Produkty, ceny i adresy są widoczne | OK / NOK |
| Status płatności | Widoczny status jest zrozumiały | OK / NOK |
| Status realizacji | Widoczny status jest zrozumiały | OK / NOK |
| Brak zamówień | Klient widzi normalny komunikat | OK / NOK |

---

## 12. Sesja klienta

| Test | Oczekiwany wynik | Status |
|---|---|---|
| Wygasła sesja | Komunikat „Sesja wygasła” | OK / NOK |
| Uszkodzony `_medusa_jwt` | Brak czerwonego błędu Next.js | OK / NOK |
| Konto po wylogowaniu | Brak dostępu do danych klienta | OK / NOK |
| Koszyk po problemie sesji | Komunikat po polsku, bez stack trace | OK / NOK |

---

## 13. Tryb demo / production

| Test | Oczekiwany wynik | Status |
|---|---|---|
| `NEXT_PUBLIC_SHOP_MODE="demo"` | Komunikaty demo są widoczne | OK / NOK |
| `NEXT_PUBLIC_SHOP_MODE="production"` | Komunikaty demo znikają | OK / NOK |
| Restart po zmianie env | Storefront pokazuje aktualny tryb | OK / NOK |
| Stopka w production | Brak tekstów demonstracyjnych | OK / NOK |

---

## 14. Mobile

| Test | Oczekiwany wynik | Status |
|---|---|---|
| Home mobile | Układ poprawny | OK / NOK |
| Store mobile | Produkty czytelne | OK / NOK |
| Product mobile | Warianty i przycisk koszyka działają | OK / NOK |
| Cart mobile | Koszyk czytelny | OK / NOK |
| Checkout mobile | Formularze używalne | OK / NOK |
| Account mobile | Menu i podstrony działają | OK / NOK |

---

## 15. Admin Medusa

| Test | Oczekiwany wynik | Status |
|---|---|---|
| Logowanie do admina | Panel działa | OK / NOK |
| Lista produktów | Produkty widoczne | OK / NOK |
| Region Polska | PLN i kraj PL ustawione | OK / NOK |
| Metody dostawy | Dostawa testowa działa | OK / NOK |
| Zamówienie testowe | Widoczne w adminie | OK / NOK |
| Szczegóły zamówienia | Dane zamówienia poprawne | OK / NOK |

---

## 16. Wynik końcowy

| Obszar | Status | Uwagi |
|---|---|---|
| Home | OK / NOK |  |
| Store | OK / NOK |  |
| Product | OK / NOK |  |
| Cart | OK / NOK |  |
| Checkout | OK / NOK |  |
| Account | OK / NOK |  |
| Orders | OK / NOK |  |
| Admin | OK / NOK |  |
| Mobile | OK / NOK |  |
| Demo/production | OK / NOK |  |

---

## 17. Decyzja

| Decyzja | Tak / Nie |
|---|---|
| Można zrobić backup etapu |  |
| Można przejść do kolejnego zadania |  |
| Można przygotowywać staging |  |

---

## 18. Notatki

Miejsce na błędy, obserwacje i rzeczy do poprawy:

- 
- 
- 

