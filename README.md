# Technical Assessment

Backendová aplikace postavená v Node.js a Expressu, která přistupuje k PostgreSQL databázi a vrací stromovou strukturu postav, jejich nepřátel a tajných kódů. Součástí odpovědi jsou i základní statistiky.

Tato aplikace byla vytvořena jako technical assessment pro společnost **Koala42**.

---

## Spuštění aplikace

### Instalace závislostí
```bash
cd server
npm install
```
### Spuštění v development režimu
```bash
npm run dev
```
### .env soubor
```bash
PORT=<PORT>
DATABASE_URL=<DATABASE_URL>
```

### Poznámky
- V aplikaci jsem definoval základní endpointy pro listování všech entit zvlášť, abych naznačil, jak by bylo možné API dále rozšiřovat.
- Hlavní endpoint /character/stats vrací všechna data ve stromové struktuře včetně požadovaných statistik.
- Celkové řešení (analýza + implementace) mi zabralo přibližně 4 hodiny.
- Aplikace je snadno rozšiřitelná díky použití třívrstvé architektury (controller → ABL → DAO).

