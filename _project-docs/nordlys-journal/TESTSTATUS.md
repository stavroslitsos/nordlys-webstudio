# Teststatus — Nordlys Journal
Oppdatert 14. oktober 2026. Gjeldende status erstatter tidligere notater om at Drive/HTTPS ikke var ferdig.

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
- Arbeidsromlinjen bruker vertikalt stablet Import/Eksport og nummererte
  arbeidsromknapper. De fulle navnene er fortsatt tilgjengelige via
  knappetittel og skjermleseretikett.
- Åtte direktevalg for promptplass 1–6, 8 og 9 er lagt over den ordinære
  promptvelgeren.
  Aktivt valg markeres både visuelt og med `aria-pressed`; den komplette listen
  er fortsatt tilgjengelig.
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



## 1. oktober 2026 — OpenAI fullført uten tekst
- Gjenskapt med syntetiske Responses-hendelser: gammel parser meldte fullført for response.failed, response.incomplete og error.
- 20 regresjonstester bestått: LF/CRLF/CR, UTF-8 delt på bytegrenser, siste hendelse uten blanklinje, strømmefeil, brutt forbindelse, avbrudd, tom tekst, fulltekst uten deltaer, ingen duplisering og non-streaming/HTTP-feil.
- Generatoren bevarer samtale, tillegg, prompt og valgt GPT-5.6 Sol i test; store:false beholdes. Ingen ekte API-kall eller pasientdata brukt.
- Test: node --test _project-docs/nordlys-journal/tests/note-streaming.test.mjs
- Gårsdagens endringer endret ikke noteGeneration_openai.js eller core/note-runner.js (sammenlignet 25.–30. september).
- Årsaken til det konkrete leverandørsvaret i brukerens to lokale faner er fortsatt ubekreftet. Skyøkten har ikke tilgang til disse fanene. Rettelsen er ikke en bekreftelse på vellykket klinisk notatgenerering i brukerens økt.


## 1. oktober 2026 — kredittknapper
JavaScript-syntaks og rendret HTML kontrollert: syv knapper fordelt på fem leverandører, alle med target=_blank og rel=noopener noreferrer. Soniox-/OpenAI-adressene samsvarer med brukerens lenker. AWS- og Mistral-målene er kontrollert mot offisiell dokumentasjon. Requesty åpner den dokumenterte kontosiden; egen direkte Billing-adresse er ikke bekreftet. Ingen betalinger eller kontoendringer utført.

## 1. oktober 2026 — primærleverandører øverst
JavaScript-syntaks og rendret oversikt kontrollert: OpenAI og Soniox er de to første leverandørgruppene. Alle syv eksisterende prisgrupper og kredittknapper er beholdt. Ingen AI-kall eller pasientdata brukt.


## 16. oktober 2026 — Priser og Regler
JavaScript-syntaks, HTML-ID-er, knapprekkefølge og diff kontrollert. Lokal forhåndsvisning kunne ikke åpnes fra sky-nettleseren (connection refused); visuell kontroll av ny versjon gjenstår før publisering. Ingen pasientdata eller betalte API-kall brukt.


## 16. oktober 2026 — Felles masterstandard for journalføring
26 syntetiske tester bestått, inkludert OpenAI streaming/non-streaming med regler i forespørselen, felles regler ved bytte av arbeidsrom, tomt promptvalg, stopp ved utilgjengelig regellagring, kryptert backup-rundtur, eldre backup, ugyldig regeltekst og Auto clear. JavaScript-syntaks og diff kontrollert. Ingen virkelige API-kall, mikrofonopptak eller pasientdata. Bedrock, Mistral og Requesty er kontrollert for bruk av felles inputfunksjon; reelle leverandørkall er ikke testet. Visuell kontroll av publisert panel utføres etter utrulling.

Første utrulling fullført (Pages success). Nettleserkontroll avdekket blanding av nye HTML-filer og gamle moduler i cache. Oppdatert versjonsparameter for berørte arbeidsrom-/oppsettsmoduler og primære notatleverandører.

Regler-panelet åpnet, lagret syntetisk tekst og gjenopprettet teksten etter omlasting i sky-Chrome. Testteksten fjernet igjen. Utforming kontrollert visuelt. Eksisterende iframe-adresser kunne fortsatt hente gammel HTML; arbeidsromrammene får derfor egen versjonsparameter ved oppstart.

Sluttkontroll 16. oktober: Pages-utrulling 7163ed1 fullført med success. Sky-Chrome viser Priser og Regler til venstre, Priser åpner fortsatt oversikten, Regler lagrer og gjenåpner tekst etter omlasting, og eksisterende arbeidsrom lastes med versjonert iframe og Auto clear på (checked=1). Syntetisk regeltekst fjernet etter test. Ingen reelle modellkall utført.


## 16. oktober 2026 — Helfo-grunnstandard
27 syntetiske Node-tester bestått. Kontrollert at innebygd standard og egne tillegg følger faktiske mockede OpenAI-forespørsler, at standarden gjelder uten prompt og med tomme/eldre regler, og at kryptert backup bevarer egne tillegg. Alle fire primærleverandører bruker samme resolver. Ingen klinisk modelltest eller reell API-forespørsel utført. Pages-utrulling 620d903 fullført med success (run 38873165113). Levende sky-Chrome kontrollert: Regler viser fem tematiske seksjoner, kilder/dato, egen tilleggseditor og aktiv grunnstandard med tomt tilleggsfelt. PRP-seksjonen kan åpnes med full tekst. Eksisterende arbeidsromramme laster workspaceVersion=20261016-helfo. Ingen brukerfaner med pasientinnhold er endret.
