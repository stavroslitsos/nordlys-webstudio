# Prosjektstatus

Sist oppdatert: 2026-08-28

## Fullført

- Kartlagt de tre oppgitte Dropbox-kildene.
- Bekreftet at `Claude Annonser` er en symbolsk lenke til `Work automation`.
- Bekreftet at nettsiden allerede har Git-historikk og et offentlig GitHub-
  repository: `stavroslitsos/sykkelutleie`.
- Opprettet en ny samlet arbeidskopi utenfor Dropbox i
  `/Users/stavros/Codex Projects/sykkelutleie-prosjekt`.
- Kopiert nettsiden og annonse-/automatiseringsmaterialet uten å endre
  Dropbox-originalene.
- Utelatt lokale Claude-innstillinger og store, dupliserte råbildemapper fra
  den samlede kopien.
- Konsolidert toppnivådokumentasjonen.

## Viktige funn

- Det offentlige nettsiderepositoryet kan ikke brukes ukritisk til den samlede
  mappen fordi `annonser/` inneholder privat prosjektkontekst og
  personopplysninger.
- GitHub CLI (`gh`) er ikke installert på denne Mac-en per 2026-08-28.
- Dropbox-versjonen av nettsiden hadde lokale, ikke-committede endringer. De
  relevante arbeidsfilene er bevart i den nye kopien; de store råbildemappene
  er fortsatt trygt bevart i Dropbox.

## Neste steg

1. Opprette eller velge et privat GitHub-repository for hele prosjektet.
2. Bestemme sikker publiseringsmåte for bare nettsiden til det eksisterende
   offentlige repositoryet.
3. Koble denne lokale arbeidskopien til det private repositoryet.
4. Push første kontrollerte versjon.
5. Klone og teste prosjektet på Mac nummer 2.
6. Først deretter markere Dropbox-versjonene som arkiv/backup.

Ikke start migreringen av Fiken før dette prosjektet fungerer på begge
maskinene.
