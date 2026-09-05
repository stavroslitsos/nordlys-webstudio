# Prosjektstatus

Sist oppdatert: 2026-09-05

## Fullført

- Opprettet en Git-basert rådgiversti for `Nesbru Klinikken Rådgiver` i
  `nesbru-klinikken-radgiver/README.md`, koblet til kompetanseprofilen,
  `CV og Søknader` og den planlagte oppgaven for driftstilskuddssøk annenhver uke.
  Lagt rådgiveroppgaven inn i `.codex/project-tasks.json`, slik at den kan
  gjenopprettes uten duplikater på andre maskiner.
- Etablert `cv-og-soknader/kompetanseprofil/INDEX.md` som autoritativ Git-sti
  for kompetanseprofilen. Den inneholder foreløpig bare dokumentert
  grunninformasjon fra eksisterende Git-kontekst og skal utvides med
  kildeverifiserte opplysninger. Dropbox skal ikke brukes som aktiv kilde i
  denne arbeidsflyten.

- Opprettet en ulistet, søkemotorblokkert presentasjonsside for Mercedes-AMG
  C43 Coupé 2017 (DR18433), med 35 bilder, to videoer, ytelsestall, utstyr,
  oppgraderinger, nedlastbar QR-kode og metadata for thumbnail/forhåndsvisning
  når lenken deles i chat. Offentlig adresse:
  `https://bikerentaloslo.no/messel-c43/`.
  Den opprinnelige videoen ble senere erstattet med to nye videoer.
- Fast regel avklart for nye innbytteforespørsler om Mercedes C250 UR98251:
  bruk bilpresentasjonen `https://bikerentaloslo.no/bil/ur98251/` som
  bildevedlegg. Den erstatter Dropbox-lenken og kravet om tre lokale bilder i
  nye forespørsler.
- Opprettet et varig kilderegister og en første markedsoversikt for bilkupp i
  `annonser/bilkupp-overvaking.md`, med søk etter Mercedes-AMG C43 og S63,
  Porsche 911 fra 2014 og Porsche Panamera fra 2014. Kandidater over 150 000 km
  er ekskludert. Innbytteforespørsel er sendt til de fem høyest prioriterte
  kandidatene; bildelenke og kontaktstatus er dokumentert i oversikten.
- Opprettet en ulistet, søkemotorblokkert presentasjonsside for innbyttebilen
  Mercedes C250 Coupé 2017 (UR98251), med 50 bilder, video og oversikt over
  oppgraderinger. Offentlig adresse: `https://bikerentaloslo.no/bil/ur98251/`.
- Samlet prosjektoversikt, sykkelnettside, bilpresentasjonssider og
  annonseautomatisering i én fast Codex-oppgave:
  `Automatisering Annonser: +bikerental,BilSite`. De overlappende oppgavene
  `Work – Prosjektoversikt og status` og `Nettside – bikerentaloslo.no` er
  arkivert, og manifestet er redusert fra tre til to faste oppgaver.
- Slått sammen den varige konteksten fra de eldre Dropbox-baserte oppgavene
  `CV og Søknader` og `Driftstilskudd – Søk` i
  `cv-og-soknader/README.md`.
- Lagt `CV og Søknader` til som tredje fast oppgave i
  `.codex/project-tasks.json`.
- Definert en fast, Git-versjonert Codex-oppgaveinndeling i
  `.codex/project-tasks.json`: `Nettside – bikerentaloslo.no` og
  `Automatisering Annonser`.
- Lagt inn idempotente førstegangsregler i `AGENTS.md`, slik at Codex ved
  kloning på en ny maskin kan opprette manglende oppgaver uten duplikater.

- Kartlagt de tre oppgitte Dropbox-kildene.
- Bekreftet at `Claude Annonser` er en symbolsk lenke til `Work automation`.
- Bekreftet at nettsiden allerede har Git-historikk og et offentlig GitHub-
  repository: `stavroslitsos/sykkelutleie`.
- Opprettet en ny samlet arbeidskopi utenfor Dropbox i
  `/Users/stavros/Codex Projects/Work automation`.
- Kopiert nettsiden og annonse-/automatiseringsmaterialet uten å endre
  Dropbox-originalene.
- Utelatt lokale Claude-innstillinger og store, dupliserte råbildemapper fra
  den samlede kopien.
- Konsolidert toppnivådokumentasjonen.
- Opprettet det private GitHub-repositoryet `stavroslitsos/Work-automation`.
- Koblet den lokale arbeidskopien til `origin` og pushet første versjon til
  `main`.
- Flyttet den gamle Dropbox-mappen `Work automation` og lenken
  `Claude Annonser` til `Claude Code prosjekter/PENDING for DELETE`. Flyttingen
  er gjenopprettbar; ingenting er permanent slettet.
- Arkivert alle fem gamle `Work Automation`-oppgaver fra prosjektoversikten og
  den gamle `Claude Annonser`-oppgaven. Historikken er bevart.
- Lagt inn fast regel om at ferdige nettsideendringer alltid skal publiseres,
  mens økter uten nettsideendringer ikke skal publisere noe.
- Registrert `/Users/stavros/Codex Projects/Work automation` som et Git-basert
  prosjekt i Codex og opprettet en ny hovedoppgave kalt
  `Work – Prosjektoversikt og status`.

## Viktige funn

- Det offentlige nettsiderepositoryet kan ikke brukes ukritisk til den samlede
  mappen fordi `annonser/` inneholder privat prosjektkontekst og
  personopplysninger.
- GitHub CLI (`gh`) er ikke installert på denne Mac-en per 2026-08-28. Første
  repository ble derfor opprettet via den innloggede GitHub-nettsiden; vanlig
  `git push` fungerer med maskinens eksisterende Git-innlogging.
- Dropbox-versjonen av nettsiden hadde lokale, ikke-committede endringer. De
  relevante arbeidsfilene er bevart i den nye kopien; de store råbildemappene
  er fortsatt trygt bevart i Dropbox.

## Neste steg

1. Klone og teste prosjektet på Mac nummer 2.
2. Kontrollere innholdet i `PENDING for DELETE` før eventuell permanent sletting.

Ikke start migreringen av Fiken før dette prosjektet fungerer på begge
maskinene.
