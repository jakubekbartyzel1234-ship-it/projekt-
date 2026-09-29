# Strona sprzedażowa: Poradnik Tradera – MSMR Alchemist

Statyczna strona (bez budowania): otwórz `index.html` lub wrzuć folder na GitHub Pages / Netlify / Cloudflare Pages.

## Uruchomienie sprzedaży
1. W `config.js` ustaw cenę, e-mail i dane sprzedawcy.
2. Załóż link do płatności w wybranym systemie (np. Stripe Payment Link, Przelewy24, Payhip, Gumroad), skonfiguruj tam automatyczne wysyłanie pliku PDF po zakupie i wklej link w `checkoutUrl`.
3. Uzupełnij `regulamin.html` i `prywatnosc.html` (najlepiej z prawnikiem). Bez tego sprzedaż nie jest gotowa.
4. Wyeksportuj poradnik z dokumentu do PDF i wgraj go do systemu płatności.

Bez `checkoutUrl` przycisk „Kupuję” pokazuje komunikat „sprzedaż wkrótce”.
