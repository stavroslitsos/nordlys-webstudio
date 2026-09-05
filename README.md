# Work-automation

Privat hovedprosjekt for Stavros sine tverrgående Codex-arbeidsflyter: sykkelutleie,
nettsiden [bikerentaloslo.no](https://bikerentaloslo.no), annonser,
markedsføring, CV og kompetanseprofil, jobbsøk og driftstilskudd samt strategisk
rådgivning for Nesbru Klinikken.

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
├── .codex/
│   └── project-tasks.json
├── README.md
├── AGENTS.md
├── CLAUDE.md
├── PROJECT_STATUS.md
├── index.html
├── style.css
├── script.js
├── images/
├── bil/
│   └── ur98251/
├── messel-c43/
├── annonser/
    ├── README.md
    ├── AGENTS.md
    ├── facebook-sykkelutleie-markedsforing.md
    └── arbeidsfiler og bilder
├── cv-og-soknader/
│   ├── README.md
│   └── kompetanseprofil/
│       └── INDEX.md
└── nesbru-klinikken-radgiver/
    └── README.md
```

## Fast oppgaveinndeling i Codex

Prosjektet skal ha tre faste Codex-oppgaver:

1. `Automatisering Annonser: +bikerental,BilSite` – samler prosjektoversikt,
   bikerentaloslo.no, bilpresentasjonssider, sykkelutleie, annonser og
   markedsføring samt automatisering for Finn, Facebook og Hygglo
2. `CV og Søknader` – samler kompetanseprofil, jobbsøk, driftstilskudd og
   målrettede søknader
3. `Nesbru Klinikken Rådgiver` – bruker kompetanseprofilen og relevante
   driftstilskuddstreff som del av strategisk, administrativ og juridisk
   orientert rådgivning om Nesbru Klinikken

Den maskinlesbare definisjonen ligger i `.codex/project-tasks.json`. Ved
førstegangsoppsett på en ny maskin leser Codex manifestet og oppretter bare
oppgaver som mangler. Git synkroniserer manifestet og prosjektkonteksten, men
ikke selve samtalehistorikken.

Nettsiden beholdes på toppnivå for å være kompatibel med eksisterende GitHub
Pages-oppsett. Når flere sykler kommer til, oppdateres nettsidedata, bilder,
annonser og status samlet i dette prosjektet.

Ulistede bilpresentasjoner kan ligge under `bil/<registreringsnummer>/` eller
en avtalt kortadresse som `messel-c43/`. De er offentlig tilgjengelige for
mottakere som har adressen, men er merket `noindex` og lenkes ikke fra
nettstedets ordinære sider.

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
