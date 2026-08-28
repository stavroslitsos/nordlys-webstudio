# Prosjektstatus

Sist oppdatert: 2026-08-28

## Fullført

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

1. Bestemme sikker publiseringsmåte for bare nettsiden til det eksisterende
   offentlige repositoryet.
2. Klone og teste prosjektet på Mac nummer 2.
3. Først deretter markere Dropbox-versjonene som arkiv/backup.

Ikke start migreringen av Fiken før dette prosjektet fungerer på begge
maskinene.
