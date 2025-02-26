# Portfolio Operatora Filmowego - Grzegorz "Grzeźwy" Golędzinowski

Strona portfolio dla operatora filmowego z bogatym doświadczeniem w filmie i telewizji oraz okazjonalną karierą aktorską. Strona prezentuje zdjęcia, filmy i grafiki, umożliwia kontakt przez formularz oraz posiada panel administracyjny z logowaniem do zarządzania treścią.

## Struktura projektu

```
/
├── index.html                  # Strona główna
├── css/                        # Style CSS
│   ├── style.css               # Główny plik stylów
│   └── gallery.css             # Style dla galerii
├── js/                         # Skrypty JavaScript
│   ├── main.js                 # Główny plik skryptów
│   └── gallery.js              # Skrypty dla galerii
├── admin/                      # Panel administracyjny
│   ├── index.html              # Strona logowania i panelu
│   ├── admin.css               # Style panelu
│   └── admin.js                # Skrypty panelu
├── zdjecia_moje/               # Zdjęcia osobiste
├── filmy/                      # Pliki wideo
├── moje_produkcie/             # Filmy i produkcje
├── moje_role/                  # Galeria z rolami aktorskimi
└── pliki_grafik/               # Pliki graficzne (tło, logotypy)
```

## Funkcjonalności

### Strona główna
- Responsywny design dostosowany do różnych urządzeń
- Sekcje: O mnie, Produkcje, Role aktorskie, Galeria, Kontakt
- Interaktywna galeria z podziałem na kategorie
- Formularz kontaktowy z walidacją

### Panel administracyjny
- Logowanie (użytkownik: admin, hasło: admin123)
- Zarządzanie mediami (dodawanie/usuwanie/edycja)
- Edycja treści strony
- Przeglądanie wiadomości od użytkowników

## Technologie

- HTML5
- CSS3 (z wykorzystaniem zmiennych CSS, Flexbox i Grid)
- JavaScript (Vanilla JS)
- Responsywny design
- Lightbox dla galerii
- Walidacja formularzy po stronie klienta

## Instrukcja uruchomienia

1. Sklonuj repozytorium:
   ```
   git clone https://github.com/bimberus/bambaryla.git
   ```

2. Otwórz plik `index.html` w przeglądarce internetowej.

3. Aby zalogować się do panelu administracyjnego:
   - Przejdź do `/admin/index.html`
   - Użyj loginu: `admin`
   - Użyj hasła: `admin123`

## Struktura katalogów mediów

- `zdjecia_moje/` - Zdjęcia osobiste operatora
- `filmy/` - Pliki wideo do galerii filmów
- `moje_produkcie/` - Zdjęcia i materiały z produkcji filmowych
- `moje_role/` - Zdjęcia z ról aktorskich
- `pliki_grafik/` - Pliki graficzne używane na stronie
  - `tlo.jpg` - Tło strony (podmiana tego pliku zmienia tło całej strony)

## Rozszerzenie projektu

Projekt można rozszerzyć o:
- Backend (np. Node.js, PHP) do obsługi formularza kontaktowego
- Bazę danych do przechowywania treści i mediów
- System CMS do łatwiejszego zarządzania treścią
- Integrację z mediami społecznościowymi
- Galerię wideo z odtwarzaczem

## Autor

Grzegorz "Grzeźwy" Golędzinowski - fikcyjny operator filmowy z przymrużeniem oka.

## Licencja

Ten projekt jest dostępny na licencji MIT.
