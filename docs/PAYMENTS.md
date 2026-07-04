# Płatności

Docelowy kierunek dla polskich sklepów:

- Przelewy24,
- BLIK,
- opcjonalnie PayU jako alternatywa.

## Zasada bezpieczeństwa

Sklep nie przechowuje danych kart płatniczych.

Dane płatnicze obsługuje zewnętrzny operator płatności.

Sklep przechowuje tylko:

- status płatności,
- identyfikator transakcji,
- powiązanie transakcji z zamówieniem,
- historię statusów zamówienia.

## Etapy wdrożenia płatności

1. Manual Payment do testów technicznych.
2. Sandbox Przelewy24 / BLIK.
3. Webhook statusu płatności.
4. Test zamówień.
5. Dopiero potem dane produkcyjne operatora.
