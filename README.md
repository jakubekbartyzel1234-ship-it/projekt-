# Strona sprzedażowa: Poradnik Tradera – MSMR Alchemist

Statyczna strona (bez budowania): otwórz `index.html` lub wrzuć folder na GitHub Pages / Netlify / Cloudflare Pages.

## Zanim ruszysz ze sprzedażą (lista kontrolna)
1. **Firma**: sprzedaż na stałe wymaga działalności gospodarczej (np. JDG) i rozliczeń podatkowych/VAT. Ustal to z księgowym.
2. **`config.js`**: ustaw cenę, e-mail i dane sprzedawcy.
3. **Płatność**: link do płatności (Stripe, Przelewy24, Payhip, Gumroad…) z automatyczną wysyłką PDF → `checkoutUrl`.
4. **Dokumenty**: uzupełnij pola `[w nawiasach]` w `regulamin.html`, `prywatnosc.html`, `odstapienie.html` i daj do sprawdzenia prawnikowi.
5. **Zgoda na treść cyfrową**: po zakupie wyślij klientowi e-mail z potwierdzeniem zgód (art. 38 pkt 13 ustawy o prawach konsumenta). Większość systemów płatności pozwala to skonfigurować.
6. **Cookies**: strona nie używa śledzenia. Jeśli dodasz Analytics/Pixel, dodaj baner zgody i zaktualizuj politykę.

## Przecena a prawo (dyrektywa Omnibus)
Przy obniżce ceny trzeba podać **najniższą cenę z 30 dni przed obniżką** (`lowestPrice30d` w `config.js`; strona wyświetla ją automatycznie). Cena „przed” musi być prawdziwą ceną, po której faktycznie oferowałeś produkt. Wpisanie zawyżonej ceny referencyjnej, której nigdy nie stosowałeś, to praktyka wprowadzająca w błąd (ryzyko kary UOKiK). Domyślne 799 zł to tylko przykład – ustaw właściwe wartości albo wyczyść `oldPrice`.

Nie dodawaj też fałszywych liczników czasu ani „zostały 2 sztuki” przy produkcie cyfrowym.

## Reklama produktu
Nie obiecuj zysków (np. „zarabiaj X miesięcznie”). Strona zawiera ostrzeżenia o ryzyku i informację, że to materiał edukacyjny.
