# Teststatus — Nordlys Journal
Oppdatert 24. september 2026. Gjeldende status erstatter tidligere notater om at Drive/HTTPS ikke var ferdig.

## Bekreftet
- 56 JavaScript-filer parses; relative moduler og lokale ressursreferanser finnes.
- Kontroll av fjernet analyse, Google-konfigurasjon og avvist OneDrive-grense bestått.
- Prompt-eksport isolert fra nøkler og transkripsjon i test.
- Nøkkelkryptering: korrekt gjenoppretting, feil passord, manipulert innhold og ukjent format kontrollert.
- Brukerens promptfil importert/eksportert tapsfritt i isolert minne: 20 plasser, 12 utfylte. Privat tekst er ikke lagret i Git.
- Soniox EU: syntetisk norsk tale lastet opp, transkribert og hentet. Testfil og testjobb ble slettet.
- OpenAI: syntetisk tekst, GPT-5.6 Sol, Low og store:false ga fullført svar. Streaming gjennom appens parser ble også kontrollert.
- Publisert nettleserflyt for notatgenerering fullførte med syntetisk tekst og opprettet historikkoppføring.
- Nordlys-domenet svarer med gyldig HTTPS. Ved domeneflytting samsvarte alle 95 publiserte ressurser med lokal app; senere endrede filer er kontrollert separat.
- Reell API-nøkkelbackup til Google Drive fullført. Appen lastet ned, dekrypterte og sammenlignet kopien før suksess.
- Reell promptbackup til Google Drive fullført. Etterfølgende import/gjenoppretting bekreftet i nettleseren.
- Mock Drive-test bekreftet opprettelse, oppdatering av eksisterende kopi, nedlasting og avvisning av ukryptert nøkkelobjekt.
- OpenAI-standard og aktivt leverandørbytte til GPT-5.6 Sol bekreftet.
- Kompakt layout visuelt kontrollert i Chrome: sideordnede felt, toppinnstillinger, opptaksknapper i samtalekort, notat-/promptknapper ved overskrifter.
- Sekundær generator og redactor åpnet/lukket ved tidligere layoutkontroll.

## Gjenstår / ikke dokumentert
- Full ekte mikrofonflyt, pause, fortsett, stopp, avbrudd og nettverksfeil.
- Samtidig opptak/notatgenerering i flere arbeidsrom.
- Full funksjonstest av OCR, mini-panel, kliniske kalkulatorer og WebMCP.
- Systematisk mobil-, tastatur- og tilgjengelighetstest.
- Samtidige Drive-eksporter fra flere faner, utløpte tilganger og kontoendringer.
- Egen ende-til-ende Drive-test av arbeidsoppsett og generelle begreper.
- OAuth-appens overgang fra testmodus til eventuell bredere bruk.
- Lisens-/rettighetsavklaring for videreført frontend.
- Klinisk kvalitet, personvernvilkår og egnethet for ordinær klinisk drift er ikke godkjent av disse tekniske testene.

Ingen reelle pasientsamtaler ble brukt som testdata. Siste layoutendringer utløste ikke nye betalte AI-kall.

## 25. september 2026 — tydelig Drive-import ved ny økt
Nøklene lagres fortsatt bare i faneøkten; ny økt krever gjenoppretting fra Drive. Oppsettsiden prioriterer nå Importer/Eksporter nøkler via Google Drive over manuelle felt. Lokal filimport er merket som alternativ under en sammenleggbar seksjon. Arbeidsrom uten Soniox-/OpenAI-nøkkel viser direkte lenke til Drive-import. Ingen automatisk opplasting eller varig lagring av dekrypterte nøkler er innført.

### Kompakt innstillingsmeny og notatrad · 25. september 2026
Arbeidsrom-/opptaks-/modellraden foldes nå under «Innstillinger», lukket som standard. Originale kontroller beholdes i riktig arbeidsrom. Notatraden samler overskrift, tid, kopier, panel, auto-generering og generer/abort. Korte etiketter: Notat, Tid, Panel, Generer, Abort og Samtale. På smale skjermer kan raden brytes.

## Passordbehandler – 2026-09-25
- JavaScript-, ressurs- og krypteringstester bestått.
- Syntetiske tester av avvalg, tomt passord, usikker kontekst, korrekt oppføringsnavn og avvist/utilgjengelig passordbehandler bestått.
- Nøkkelimportdialog kontrollert i Chrome.
- Brukerens faktiske passord er ikke lest. Ende-til-ende lagring/autofyll i brukerens passordbehandler avventer brukerens inntasting og nettleserbekreftelse.
