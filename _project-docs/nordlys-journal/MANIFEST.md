# Nordlys Journal
Prosjektmanifest · oppdatert 24. september 2026

Dette er det varige overleveringsdokumentet for Nordlys Journal. Det beskriver gjeldende løsning, beslutninger, driftsoppsett og videre arbeid. Det er en faglig oppsummering av prosjektarbeidet, ikke en kopi av chatten eller private brukerdata.

## Prosjekt og adresser
- Formål: eget tilpassbart arbeidsrom for samtaleopptak, transkripsjon og journalutkast, med brukerens egne AI-nøkler og promptmaler.
- Hovedadresse: https://nordlyswebstudio.no/journal/
- Arbeidsrom: https://nordlyswebstudio.no/journal/transcribe.html
- Repo: https://github.com/stavroslitsos/nordlys-webstudio · gren main.
- Appens kjørbare kildekode ligger i journal/ i dette repoet.
- Dokumentasjonen ligger i _project-docs/nordlys-journal/. Underscore-prefikset skiller den fra vanlige GitHub Pages-sider.
- Eldre prototype: https://bikerentaloslo.no/journal/ i stavroslitsos/sykkelutleie. Den er ikke hovedinstallasjonen.
- Utviklingsversjon 0.1. Testene er ikke en klinisk godkjenning.

## Brukerens vedtatte oppsett
- Soniox, region EU, er standard for tale til tekst.
- OpenAI er standard for notater, med GPT-5.6 Sol og streaming. Brukerens aktive arbeidsrom ble satt til reasoning Low; kodefallback er Medium.
- Andre tilgjengelige leverandører beholdes som valg, men AWS Bedrock skal ikke være standard.
- Brukeren kan importere/eksportere både API-nøkler og promptmaler til Google Drive ved behov.
- Google Drive er valgt; OneDrive-valgene er skjult og integrasjonsgrensen avviser dem.
- Norske tekster og kompakt grensesnitt prioriteres.
- Eksisterende nettsteder og deres rotfiler skal bevares ved videre arbeid.

## Funksjoner og layout
- Nøkkeloppsett med skjulte felt, JSON-import og kryptert filbackup.
- 20 promptplasser med navn; den leverte brukerfilen hadde 12 utfylte maler.
- Flere arbeidsrom, historikk, sekundær notatgenerator, supplerende informasjon og redactor/OCR-moduler er videreført.
- Samtaletekst og supplerende informasjon står side om side på brede skjermer og stables på smale.
- Desktop har innebygd tetthet tilsvarende 75 % zoom. Skaleringen brukes bare i ytterdokumentet, ikke på nytt i arbeidsrommenes iframe.
- Workspace-valgene ligger til venstre; opptaks-, leverandør-, modell- og reasoning-innstillinger ligger i samme toppområde til høyre. Under 1200px stables disse.
- Opptaksknappene og status ligger nederst i samtaletekstkortet med kompakt skrift.
- Generer/avbryt notat ligger ved Notatgenerering. Timer, kopier, mini-panel og auto-generering ligger på en kompakt rad under.
- Promptenes import/eksport ligger ved Tilpasset prompt og Bruk prompt.
- De opprinnelige kontrollnodene og ID-ene beholdes når de flyttes, slik at hendelser og arbeidsromsisolasjon bevares.
- WebMCP har valgfrie verktøy for å lese ikke-sensitive oppsettvalg og åpne veiledning; faktisk WebMCP-kjøring er ikke validert.

## Google Drive og sikkerhetskopier
- Eget Google Cloud-prosjekt: nordlys-journal, nummer 36538154531.
- OAuth-app: Nordlys Journal. Nettleserklient: Nordlys Journal nettleser.
- Drive API aktivert. Appen står i ekstern testmodus; brukere må være registrerte testbrukere.
- Offentlig klient-ID finnes i journal/nordlys-google-config.js. Ingen klienthemmelighet kreves i nettleserflyten.
- Godkjente origins: https://nordlyswebstudio.no, http://localhost:8770 og http://127.0.0.1:8770.
- Tilgangsomfang: https://www.googleapis.com/auth/drive.appdata.
- Kopiene ligger i appens skjulte lagringsområde og hentes via Nordlys. De vises ikke som vanlige Drive-filer.
- Kollegaens opprinnelige app har et separat appområde. Samme konto eller passord gjør ikke den kopien tilgjengelig i Nordlys. Førstegangs overføring skjer via JSON.
- Promptkopi: whisper-prompts-backup.enc.json.
- Generelle begreper: whisper-general-terms-backup.enc.json. Tomt felt overskriver ikke en tidligere kopi. Spesifikke begreper tas ikke med.
- Arbeidsoppsett: whisper-workspace-presets-backup.enc.json.
- Nøkkelkopi: nordlys-keys-backup.enc.json.
- Vanlig ny eksport søker etter eksisterende fil og oppdaterer den; uten treff opprettes en fil. Samtidige eksporter fra flere faner er ikke testet for kappløp/duplikater.
- Nøkler krypteres med AES-GCM og PBKDF2/SHA-256, 600000 iterasjoner. Prompt-/arbeidsoppsett følger videreført format med 250000 iterasjoner.
- Nøkkellagring laster automatisk kopien ned igjen, dekrypterer og sammenligner resultatet før suksess vises.
- Passordet sendes ikke til Drive. Det må oppbevares av brukeren; gjenoppretting uten riktig passord er ikke implementert.
- Nøkkelbackup og promptbackup har separate dialoger; brukeren kan velge samme passord, men det forutsettes ikke.

## Personvern og kildeopprinnelse
- Ingen API-nøkler, passord, OAuth-tokens, private prompttekster, pasienttekster eller skjermbilder av slike data skal i Git.
- Nøkler lagres i faneøktens sessionStorage; promptbibliotek lagres i nettleseren. Det er ingen full sentral journaldatabase.
- OpenAI Responses-forespørsler bruker store:false. Dette er ikke alene en garanti for alle leverandørers lagringsvilkår.
- Besøksanalyse fra originalen er fjernet.
- Grunnlaget var offentlig tilgjengelige frontendfiler fra https://tn-beta.netlify.app/transcribe.html.
- Offentlig tilgjengelighet etablerer ikke en lisens til videre distribusjon. Se journal/PROVENANCE.txt; lisens-/rettighetsavklaring står fortsatt åpen.
- Originalsidens private historikk, sikkerhetskopier og nøkler skal ikke endres som del av videre utvikling.

## Drift og publisering
- GitHub Pages publiserer main. Domenet administreres i Domeneshop.
- DNS ved kontroll: A 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153; www peker til stavroslitsos.github.io.
- HTTPS-vertsnavnfeil ble løst ved å fjerne og legge tilbake samme domenenavn i Pages. Enforce HTTPS ble bekreftet; ingen sertifikatvarsel ble omgått.
- Oppsett og arbeidsrom er kontrollert over gyldig HTTPS.
- Repoets eksisterende forside, en/, script.js, style.css og CNAME skal ikke erstattes av journalprosjektet.
- Oppdater bare journal/ og prosjektets dokumentasjonsområde ved ordinære endringer.
- Lokalt har appen ligget i nordlys-journal/public/. Repoets journal/ tilsvarer denne mappen.
- Ingen npm-installasjon eller bygging kreves for den statiske appen.
- Lokal visning fra repo-roten: python3 -m http.server 8770 --bind 127.0.0.1, deretter http://127.0.0.1:8770/journal/.
- Ved mange samtidige arbeidsrom anbefales ThreadingHTTPServer med større request-kø; enkel lokal server ga tidligere forbindelsesfeil.
- Ved gammel layout etter publisering: kontroller fullført Pages-bygg, deretter hard oppdatering i Chrome.
- Oppdater dette manifestet og teststatus ved senere endringer. Git-historikken er sporingen av tidligere versjoner.

## Dokumentasjon og videre arbeid
- [TESTSTATUS.md](TESTSTATUS.md): hva som faktisk er kontrollert, og kjente begrensninger.
- [ENDRINGSLOGG.md](ENDRINGSLOGG.md): viktige beslutninger og endringer.
- [manifest.json](manifest.json): maskinlesbar prosjektidentitet og filplasseringer.
- Ikke anta at historiske feil fortsatt gjelder når nyere bekreftet teststatus erstatter dem.
- Ikke slett andre Cloud-prosjekter på grunnlag av navn alene. Brukeren ba om å undersøke et eksisterende prosjekt kalt barumscanner; bruken er ikke avklart og prosjektet er ikke slettet.
