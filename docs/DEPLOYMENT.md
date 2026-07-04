# Deployment Checklist - Invincible Shop Template

Dokument opisuje docelowy plan wdrożenia template Medusa + Next.js na staging/production.

Na tym etapie to jest checklista operacyjna. Nie jest to jeszcze gotowy deployment produkcyjny.

---

## 1. Cel deploymentu

Celem jest przygotowanie sklepu do kontrolowanego wdrożenia na:

- staging,
- potem production,
- docelowo dla invinciblepolska.pl albo kolejnego sklepu klienta.

Nie wystawiać lokalnego `npm run dev` jako produkcji.

---

## 2. Docelowa infrastruktura

| Element | Rola |
|---|---|
| Hetzner VPS | serwer aplikacji |
| Cloudflare | DNS, proxy, TLS, podstawowa ochrona |
| Docker Compose | uruchamianie usług |
| Reverse proxy | kierowanie domen/subdomen do usług |
| PostgreSQL | baza Medusa |
| Medusa backend/admin | backend sklepu i panel admina |
| Next.js storefront | frontend klienta |
| Backupy | rollback i bezpieczeństwo |

---

## 3. Środowiska

Docelowo projekt powinien mieć rozdzielone środowiska:

| Środowisko | Cel |
|---|---|
| local | praca lokalna |
| staging | test produkcyjny bez klientów |
| production | realny sklep |

Zasada:

- local może mieć dane demo,
- staging może mieć dane testowe,
- production nie może być resetowane bez backupu i świadomej decyzji.

---

## 4. Proponowane domeny / ścieżki

Do ustalenia przed wdrożeniem.

Możliwe warianty:

| Wariant | Przykład |
|---|---|
| sklep jako subdomena | `shop.invinciblepolska.pl` |
| staging sklepu | `staging-shop.invinciblepolska.pl` |
| backend Medusa | `medusa.invinciblepolska.pl` |
| admin Medusa | `medusa.invinciblepolska.pl/app` |
| sklep jako ścieżka | `invinciblepolska.pl/sklep` |

Najbezpieczniej na start:

    staging-shop.invinciblepolska.pl

Potem dopiero production.

---

## 5. Przed deploymentem

Checklist przed wdrożeniem:

- [ ] README aktualne.
- [ ] `docs/QA.md` istnieje.
- [ ] `docs/SEED.md` istnieje.
- [ ] `docs/DEPLOYMENT.md` istnieje.
- [ ] Projekt ma aktualny backup `.tar.gz`.
- [ ] Baza ma aktualny backup `.sql`.
- [ ] `.env.local` nie jest w repo.
- [ ] Sekrety nie są w README ani docs.
- [ ] Storefront działa lokalnie.
- [ ] Admin działa lokalnie.
- [ ] Checkout działa lokalnie.
- [ ] Konto klienta działa lokalnie.
- [ ] Zamówienie testowe pojawia się w adminie.

---

## 6. Zmienne środowiskowe

Nie wklejać realnych sekretów do dokumentacji.

Przykłady zapisywać jako placeholdery:

    DATABASE_URL=postgres://USER:PASSWORD@HOST:PORT/DATABASE
    JWT_SECRET=change_me
    COOKIE_SECRET=change_me
    NEXT_PUBLIC_MEDUSA_BACKEND_URL=https://example.com
    NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY=pk_placeholder
    NEXT_PUBLIC_BASE_URL=https://shop.example.com
    NEXT_PUBLIC_SHOP_MODE=production

Pliki prywatne:

    apps/backend/.env
    apps/storefront/.env.local

Pliki bezpieczne do repo:

    apps/storefront/.env.example
    .env.example

---

## 7. Cloudflare

Cloudflare powinien obsługiwać:

- DNS,
- proxy,
- TLS/HTTPS,
- podstawową ochronę,
- ewentualnie Cloudflare Access dla staging/admina.

Nie cache’ować agresywnie:

- koszyka,
- checkoutu,
- konta klienta,
- API,
- admina.

Staging i admin mogą być zabezpieczone dodatkowo przez Cloudflare Access albo allowlistę IP.

---

## 8. Hetzner VPS

Na VPS trzeba przygotować:

- użytkownika deploy,
- aktualizacje systemu,
- firewall,
- Docker,
- Docker Compose,
- reverse proxy,
- katalog projektu,
- katalog backupów,
- procedurę rollback.

Baza produkcyjna nie powinna być publicznie wystawiona.

---

## 9. Reverse proxy

Reverse proxy powinien kierować ruch do odpowiednich usług.

Przykładowy podział:

| Host | Usługa |
|---|---|
| `staging-shop.invinciblepolska.pl` | Next.js storefront |
| `staging-medusa.invinciblepolska.pl` | Medusa backend/admin |
| `invinciblepolska.pl` | WordPress |
| `quiz.invinciblepolska.pl` | aplikacja Next.js |

Nie mieszać WordPressa i Medusy w jednej bazie.

---

## 10. Backup produkcyjny

Przed każdą większą zmianą na produkcji:

- [ ] snapshot VPS albo backup katalogu,
- [ ] backup bazy Medusa,
- [ ] backup env poza repo,
- [ ] zapis aktualnej wersji deploymentu,
- [ ] plan rollback.

Minimalna procedura:

    backup projektu
    backup bazy
    deploy
    smoke test
    QA
    decyzja: zostaje albo rollback

---

## 11. Smoke test po deployu

Po wdrożeniu sprawdzić:

- [ ] storefront ładuje się przez HTTPS,
- [ ] `/pl` działa,
- [ ] `/pl/store` działa,
- [ ] produkt działa,
- [ ] koszyk działa,
- [ ] checkout działa,
- [ ] konto klienta działa,
- [ ] admin Medusa działa,
- [ ] zamówienie testowe pojawia się w adminie,
- [ ] nie widać stack trace ani błędów developerskich.

---

## 12. Security minimum

Przed produkcją:

- [ ] HTTPS aktywny.
- [ ] Sekrety są silne.
- [ ] `.env.local` i `.env` nie są w repo.
- [ ] Baza nie jest publiczna.
- [ ] Admin nie jest otwarty bez zabezpieczeń.
- [ ] Backupy nie są dostępne publicznie.
- [ ] Logi nie pokazują sekretów.
- [ ] Cloudflare proxy działa tam, gdzie ma działać.
- [ ] Staging jest zabezpieczony.

---

## 13. Czego nie robić

Nie robić:

- deploymentu bez backupu,
- resetu produkcyjnej bazy,
- wystawiania `npm run dev`,
- wrzucania `.env.local` do repo,
- wklejania sekretów do README,
- mieszania bazy WordPressa i Medusy,
- agresywnego cache dla koszyka, checkoutu, konta i API,
- dużych zmian na VPS bez planu rollback.

---

## 14. Decyzja przed produkcją

Przed realną produkcją odpowiedzieć:

| Pytanie | Tak / Nie |
|---|---|
| Czy staging przeszedł QA? |  |
| Czy checkout działa? |  |
| Czy backup restore jest opisany? |  |
| Czy env produkcyjne są gotowe? |  |
| Czy domena i HTTPS działają? |  |
| Czy admin jest zabezpieczony? |  |
| Czy jest plan rollback? |  |

---

## 15. Status

Na teraz:

- deployment produkcyjny nie jest jeszcze wykonany,
- lokalny template działa,
- dokumentacja deploymentu jest szkicem operacyjnym,
- następny etap to dopracowanie helperów, QA i seeda,
- dopiero potem staging na subdomenie.

