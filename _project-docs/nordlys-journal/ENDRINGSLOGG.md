# Endringslogg — Nordlys Journal
## 24. september 2026
1. Kartla offentlig frontend, veiledning, oppsett og arbeidsrom i kollegaens løsning. Offentlig kildearkiv ble beholdt lokalt.
2. Bygde norsk Nordlys-oppsett med egne nøkler, Soniox EU og OpenAI, fjernet analyse og tredjeparts OAuth-klienter.
3. La til import av eksisterende nøkkel- og promptformater samt lokal kryptert nøkkelbackup.
4. Publiserte første prototype under bikerentaloslo.no/journal/ uten å erstatte eksisterende nettsted.
5. Gjennomførte syntetiske Soniox/OpenAI-tester og nettlesertest av notatgenerering.
6. Flyttet hovedinstallasjonen til nordlyswebstudio.no/journal/ i stavroslitsos/nordlys-webstudio. Beholdt rotforsiden.
7. Rettet GitHub Pages HTTPS-oppsett ved å registrere samme domene på nytt.
8. Opprettet eget Google Cloud-prosjekt, aktiverte Drive API og konfigurerte OAuth-klient med produksjons- og lokale origins.
9. Rettet 403 ved å lagre og kontrollere testbrukertilgang. Forklarte at originalappens Drive-område er separat.
10. La til kryptert API-nøkkelbackup/henting i Drive. Flyttet promptbekreftelse inn i modal for å unngå tap av brukerklikk før Google-popup.
11. Bekreftet faktisk lagring og gjenoppretting av både nøkler og prompter på hoveddomenet.
12. Endret standard notatleverandør fra AWS Bedrock til OpenAI.
13. Gjorde arbeidsrommet mer kompakt: 75 % desktoptetthet, to kildefelt ved siden av hverandre og mindre knapper.
14. Flyttet opptaks-/modellinnstillinger ved siden av Workspace-valgene.
15. Flyttet opptaksknapper inn i samtalekortet og samlet notat-/promptknapper ved overskriftene.
16. Opprettet dette varige prosjektmanifestet i samme Git-repo som hoveddomenet.

Detaljert filhistorikk, endringsdatoer og commit-ID-er finnes i Git. Dokumentasjonen inneholder ikke private prompttekster, API-nøkler, passord eller pasientdata.

## 25. september 2026 — tydelig Drive-import ved ny økt
Nøklene lagres fortsatt bare i faneøkten; ny økt krever gjenoppretting fra Drive. Oppsettsiden prioriterer nå Importer/Eksporter nøkler via Google Drive over manuelle felt. Lokal filimport er merket som alternativ under en sammenleggbar seksjon. Arbeidsrom uten Soniox-/OpenAI-nøkkel viser direkte lenke til Drive-import. Ingen automatisk opplasting eller varig lagring av dekrypterte nøkler er innført.

### Kompakt innstillingsmeny og notatrad · 25. september 2026
Arbeidsrom-/opptaks-/modellraden foldes nå under «Innstillinger», lukket som standard. Originale kontroller beholdes i riktig arbeidsrom. Notatraden samler overskrift, tid, kopier, panel, auto-generering og generer/abort. Korte etiketter: Notat, Tid, Panel, Generer, Abort og Samtale. På smale skjermer kan raden brytes.
