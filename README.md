# Sykkelutleie og annonser

Samlet prosjekt for Stavros sin sykkelutleie, nettsiden
[bikerentaloslo.no](https://bikerentaloslo.no), annonser, markedsføring og
relevant automatisering.

Prosjektet er bygget fra de tidligere Dropbox-mappene:

- `Nettside sykkel`
- `Work automation`
- `Claude Annonser` – denne var en lenke til `Work automation`, ikke en egen
  mappe med unikt innhold

Dropbox-originalene er foreløpig urørte sikkerhetskopier. Denne mappen er den
nye Git-baserte arbeidskopien utenfor Dropbox.

## Struktur

```text
sykkelutleie-prosjekt/
├── README.md
├── AGENTS.md
├── CLAUDE.md
├── PROJECT_STATUS.md
├── index.html
├── style.css
├── script.js
├── images/
└── annonser/
    ├── README.md
    ├── AGENTS.md
    ├── facebook-sykkelutleie-markedsforing.md
    └── arbeidsfiler og bilder
```

Nettsiden beholdes på toppnivå for å være kompatibel med eksisterende GitHub
Pages-oppsett. Når flere sykler kommer til, oppdateres nettsidedata, bilder,
annonser og status samlet i dette prosjektet.

## GitHub og publisering

Det eksisterende repositoryet `stavroslitsos/sykkelutleie` er offentlig og
publiserer nettsiden. Det samlede prosjektet inneholder også privat kontekst og
skal derfor ikke pushes dit ukritisk.

Det private hovedrepositoryet er:

`https://github.com/stavroslitsos/Work-automation`

Publiseringsløsningen skal:

1. bruke dette private repositoryet som hovedkilde for hele prosjektet, og
2. publisere bare nettsidefilene offentlig uten å eksponere `annonser/`.

## Viktige regler

- Ikke arbeid videre i både Dropbox-kopien og Git-kopien som to aktive
  hovedversjoner.
- Ikke slett Dropbox-originalene før migreringen og synkroniseringen er testet.
- Ikke legg hemmeligheter eller innloggingsdata i Git.
- Les `PROJECT_STATUS.md` ved starten av en ny arbeidsøkt.
