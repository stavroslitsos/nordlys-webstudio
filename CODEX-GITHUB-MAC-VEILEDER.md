# KLARGJØR ELLER OPPDATER DENNE MAC-EN FOR MINE CODEX/GITHUB-PROSJEKTER

Denne veilederen skal brukes både på:

1. en helt ny Mac som må konfigureres fullstendig, og
2. en allerede konfigurert Mac som bare må oppdateres og avstemmes mot GitHub.

Gjør hele arbeidet for meg. Ikke bare forklar hva jeg skal gjøre. Utfør alt du
har tilgang til selv, og stopp bare dersom du faktisk trenger autentisering,
godkjenning eller informasjon som ikke kan finnes lokalt eller på GitHub.

## Overordnet mål

Alle Mac-er skal bruke samme GitHub-baserte prosjektstandard.

Når denne veilederen er ferdig kjørt, skal Mac-en ha:

- de samme aktive Codex-prosjektene
- de samme prosjektnavnene
- den samme prosjektrekkefølgen
- de samme faste oppgavene
- de samme oppgavetitlene
- den samme oppgaverekkefølgen
- de samme startinstruksjonene
- den samme aktive og arkiverte oppgavestrukturen
- den samme dokumenterte prosjektkonteksten
- den samme statusen og de samme neste stegene
- korrekt kobling mellom lokale mapper og GitHub-repositories

**GitHub er source of truth for alle migrerte prosjekter.**

Dropbox skal ikke brukes som aktiv prosjektmappe. Eksisterende Dropbox-filer
skal ikke endres, flyttes, omdøpes eller slettes.

---

# DEL A – FINN UT OM MAC-EN ER NY ELLER ALLEREDE KONFIGURERT

Begynn med en sikker, skrivebeskyttet kontroll.

Kontroller:

- om `~/Codex Projects` finnes
- hvilke Git-repositories som allerede finnes der
- hvilke prosjekter som allerede er registrert i Codex
- hvilke faste oppgaver som finnes under hvert prosjekt
- om Git er installert
- om GitHub CLI er installert
- om GitHub-autentisering finnes
- om lokale repositories peker til riktige GitHub-repositories
- om arbeidskopiene er rene eller har lokale endringer

Velg deretter automatisk riktig arbeidsmåte:

## Modus 1 – Ny Mac

Bruk denne modusen dersom prosjektene mangler, Codex ikke er konfigurert, eller
de fleste repositoryene ikke finnes lokalt.

Da skal hele oppsettet gjennomføres.

## Modus 2 – Allerede konfigurert Mac

Bruk denne modusen dersom prosjektene allerede finnes.

Da skal du:

- ikke klone duplikater
- ikke opprette duplikate Codex-prosjekter
- ikke opprette duplikate faste oppgaver
- hente siste versjon fra GitHub
- avstemme lokal prosjektstruktur mot Git-standarden
- opprette bare det som mangler
- korrigere bare det som avviker
- bevare lokale endringer og eksisterende historikk
- kontrollere at Codex-oversikten samsvarer med manifestene

Det skal være trygt å lime inn hele denne veilederen hver gang. Handlinger som
allerede er korrekt gjennomført, skal kontrolleres og deretter hoppes over.

---

# 1. KONTROLLER GIT OG GITHUB

Kontroller:

- at Git er installert og fungerer
- at GitHub CLI (`gh`) er tilgjengelig
- hvilken GitHub-konto som er autentisert
- at kontoen har tilgang til både private og offentlige repositories
- at Git kan hente og pushe via GitHub

Riktig GitHub-konto er:

`stavroslitsos`

Hvis GitHub CLI mangler, installer den på en trygg måte og gjør den tilgjengelig
i nye terminaløkter.

Hvis autentisering mangler, be meg bare om å gjennomføre den nødvendige
GitHub-godkjenningen.

Aldri be om eller håndter GitHub-passord, tofaktorkoder eller hemmelige tokens
direkte.

Ikke endre fungerende autentisering unødvendig.

---

# 2. LOKAL PROSJEKTMAPPE

Alle aktive Codex-prosjekter skal ligge under:

`~/Codex Projects`

Opprett mappen dersom den ikke finnes.

Den skal ikke ligge i:

- Dropbox
- iCloud Drive
- OneDrive
- Google Drive
- annen automatisk synkronisert skylagring

Ikke opprett alternative aktive prosjektkopier dersom en korrekt Git-kopi
allerede finnes under `~/Codex Projects`.

---

# 3. AUTORITATIVE AKTIVE GITHUB-PROSJEKTER

Følgende skal normalt finnes og konfigureres som aktive Codex-prosjekter:

- `stavroslitsos/Work-automation`
- `stavroslitsos/Fiken`
- `stavroslitsos/App-HoH`
- `stavroslitsos/PhD-UNADE`
- `stavroslitsos/stavroslitsos.com`

Kontroller også den Git-versjonerte samleoversikten dersom flere repositories
senere er blitt etablert som aktive Codex-prosjekter.

Ikke opprett nye repositories dersom et tilsvarende repository allerede finnes.

Ved tvil skal du kontrollere:

- repositorynavn
- eier
- remote
- beskrivelse
- innhold
- prosjektinstruksjoner
- Git-historikk

Ikke gjett ut fra bare mappenavnet.

---

# 4. SYKKELUTLEIE ER IKKE ET EGET AKTIVT HOVEDPROSJEKT

Repositoryet:

`stavroslitsos/sykkelutleie`

er det offentlige publiseringsrepositoryet for nettsidefiler fra det private
hovedprosjektet:

`stavroslitsos/Work-automation`

Det skal derfor ikke registreres som et separat konkurrerende aktivt
Codex-prosjekt, med mindre de nyeste prosjektinstruksjonene uttrykkelig sier noe
annet.

`Work-automation` er hovedprosjekt og source of truth for:

- bikerentaloslo.no
- bilpresentasjonssider
- sykkelutleie
- annonser
- markedsføring
- Finn-, Facebook- og Hygglo-automatisering
- privat prosjektkontekst

`stavroslitsos.com` er derimot et eget, selvstendig aktivt prosjekt.

---

# 5. KLON ELLER KONTROLLER PROSJEKTENE

Hvert aktivt repository skal finnes under:

`~/Codex Projects/<repositorynavn>`

Det betyr normalt:

- `~/Codex Projects/Work-automation`
- `~/Codex Projects/Fiken`
- `~/Codex Projects/App-HoH`
- `~/Codex Projects/PhD-UNADE`
- `~/Codex Projects/stavroslitsos.com`

Hvis prosjektet ikke finnes lokalt, klon det fra riktig GitHub-repository.

Hvis mappen allerede finnes:

1. Kontroller at den er et gyldig Git-repository.
2. Kontroller at `origin` peker til riktig repository under `stavroslitsos`.
3. Kontroller standardbranch.
4. Kontroller Git-status.
5. Kontroller om lokal branch er bak eller foran GitHub.
6. Ikke overskriv lokale endringer.
7. Ikke klon en ny kopi dersom den eksisterende kopien er korrekt.
8. Ikke endre remote uten å ha kontrollert repositoryets identitet.

**Ikke kopier aktive prosjekter fra Dropbox.**

---

# 6. REGISTRER PROSJEKTENE I CODEX

Registrer hver lokale repositorymappe som riktig prosjekt i Codex.

Minst disse skal være registrert:

- `Work-automation`
- `Fiken`
- `App-HoH`
- `PhD-UNADE`
- `stavroslitsos.com`

Før registrering skal du kontrollere eksisterende Codex-prosjekter.

Ikke opprett:

- duplikate prosjektregistreringer
- prosjekter som peker til samme mappe flere ganger
- konkurrerende registreringer med små navneforskjeller
- prosjektregistreringer som peker til gamle Dropbox-mapper

Prosjektnavnet og prosjektets visuelle plassering skal følge den
Git-versjonerte arbeidsplassoversikten dersom den finnes.

---

# 7. OBLIGATORISK GIT-OPPDATERING FØR PROSJEKTARBEID

Før du leser statusen som grunnlag for videre arbeid, skal du kontrollere Git.

For hvert prosjekt:

1. Gå til riktig mappe under `~/Codex Projects`.
2. Kontroller `git status`.
3. Kontroller aktiv branch.
4. Kontroller `origin`.
5. Kjør `git fetch origin`.
6. Sammenlign lokal branch med upstream.
7. Når arbeidskopien er ren, kjør:

   `git pull --ff-only`

8. Kontroller at pull ble gjennomført uten konflikt.
9. Les prosjektinstruksjonene først etter at siste sikre Git-versjon er hentet.

Hvis arbeidskopien har lokale endringer:

- ikke kjør destruktive kommandoer
- ikke overskriv filene
- ikke bruk `git reset --hard`
- ikke bruk `git checkout --`
- ikke stash automatisk uten at prosjektets regler tillater det
- undersøk hvem endringene tilhører
- rapporter avviket
- fortsett bare med handlinger som ikke risikerer å ødelegge endringene

Hvis lokal og ekstern branch har divergerende historikk, skal du ikke gjette
hvordan dette skal løses.

---

# 8. LES PROSJEKTKONTEKSTEN

For hvert prosjekt skal du lese:

- hele `AGENTS.md`
- hele `README.md`
- hele `PROJECT_STATUS.md`
- andre relevante filer som `AGENTS.md` peker til

Hvis en fil ikke finnes, skal det rapporteres. Ikke opprett den automatisk med
oppdiktet innhold.

Kontroller samtidig:

- Git-status
- standardbranch
- remote
- siste commit
- siste informasjon fra GitHub
- om lokal standardbranch er synkronisert med upstream

## App-HoH

Les i tillegg:

- `PLAN.md`
- `REFERANSE-ANALYSE.md`

## stavroslitsos.com

Les i tillegg:

- `ARTICLE_RULES.md`
- `IMAGE_RULES.md`
- hele statusseksjonen i `README.md`
- publiseringskøen i `README.md`

## PhD-UNADE

Les i tillegg:

- `START_HER.md`
- `admin/OVERSIKT.md`
- `admin/OPPGAVER.md`
- de nyeste relevante postene i `admin/AKTIVITETSLOGG.md`

## Work-automation

Les i tillegg:

- `annonser/AGENTS.md`
- `annonser/README.md`
- `cv-og-soknader/README.md` når relevant
- andre status- eller oversiktsfiler som toppnivåets `AGENTS.md` peker til

Ikke gjør innholdsendringer bare fordi filene gjennomgås.

---

# 9. ÉN AUTORITATIV OG HELT LIK CODEX-OVERSIKT

Det skal finnes én Git-versjonert standard for hele Codex-oppsettet.

En lokal Codex-visning eller samtale på én bestemt Mac er aldri source of truth
alene.

Standarden skal omfatte:

- hvilke prosjekter som er aktive
- prosjektenes eksakte navn
- prosjektenes visuelle rekkefølge
- repositoryet til hvert prosjekt
- den forventede lokale prosjektmappen
- hvilke faste oppgaver hvert prosjekt skal ha
- oppgavenes eksakte titler
- oppgavenes visuelle rekkefølge
- oppgavenes formål
- oppgavenes fullstendige startinstruksjoner
- hvilke oppgaver som er aktive
- hvilke oppgaver som er erstattet eller skal arkiveres
- relevante status- og kontekstfiler
- prosjektets gjeldende struktur
- viktige beslutninger
- ferdige resultater
- åpne punkter
- neste steg

## Autoritative prosjektfiler

Hvert prosjekt skal normalt bruke:

- `AGENTS.md` – regler for arbeid, Git, sikkerhet og publisering
- `README.md` – permanent prosjektbeskrivelse og struktur
- `PROJECT_STATUS.md` – gjeldende status, resultater og neste steg
- `.codex/project-tasks.json` – faste oppgaver og oppgaverekkefølge

## Samlet arbeidsplassoversikt

Det skal finnes en Git-versjonert samlet arbeidsplassoversikt i:

`Work-automation/.codex/workspace-layout.json`

Denne filen skal være autoritativ for:

- hvilke Codex-prosjekter som er aktive
- rekkefølgen på prosjektene
- korrekt repository for hvert prosjekt
- forventet lokal mappe
- hvilket oppgavemanifest prosjektet bruker
- forventet oppgaverekkefølge
- prosjekter eller oppgaver som ikke skal være aktive
- eventuelle publiseringsrepositories som ikke skal registreres som egne
  hovedprosjekter

Hvis `workspace-layout.json` finnes, skal den alltid leses før den lokale
Codex-oversikten godkjennes.

Hvis den mangler, skal du ikke finne på en samlet standard. Rapporter at den
autoritative arbeidsplassoversikten mangler og bruk de eksisterende
prosjektmanifestene uten å opprette spekulative oppgaver.

## Hva «HELT LIK oversikt» betyr

Når Stavros ber om en «helt lik oversikt», betyr det:

- samme aktive prosjekter
- samme prosjektnavn
- samme prosjektrekkefølge
- samme lokale prosjektkoblinger
- samme faste oppgaver under hvert prosjekt
- samme antall faste oppgaver
- samme oppgavetitler
- samme oppgaverekkefølge
- samme oppgaveformål
- samme startinstruksjoner
- samme aktive og arkiverte struktur
- samme prosjektfiler og mappestruktur
- samme dokumenterte beslutninger
- samme status
- samme åpne punkter
- samme neste steg
- samme forståelse av source of truth

Det er ikke nok at:

- repositoryene er klonet
- Git er oppdatert
- antallet oppgaver stemmer
- oppgavene har omtrent samme navn
- en tom ny oppgave er opprettet med riktig tittel

Hele manifestet, prosjekttilknytningen, rekkefølgen og prosjektkonteksten skal
kontrolleres.

Codex skal aldri si at oversikten er helt lik uten å ha sammenlignet den
faktiske Codex-visningen med Git-manifestene.

---

# 10. GJENSKAP FASTE CODEX-OPPGAVER

For hvert prosjekt der denne filen finnes:

`.codex/project-tasks.json`

skal du:

1. Lese hele manifestet.
2. Kontrollere at JSON-formatet er gyldig.
3. Kontrollere prosjektets navn og identitet.
4. Behandle oppgavene i rekkefølgen de står i manifestet.
5. Sammenligne manifestet med eksisterende oppgaver under riktig Codex-prosjekt.
6. Opprette alle manglende faste oppgaver.
7. Bruke nøyaktig `title` fra manifestet.
8. Bruke nøyaktig `initial_prompt` fra manifestet.
9. Kontrollere at oppgaven er knyttet til riktig prosjekt.
10. Kontrollere oppgavenes visuelle rekkefølge.
11. Aldri opprette duplikater.
12. Ikke gjenbruke gamle Dropbox-baserte oppgaver som nye Git-oppgaver.
13. Ikke arkivere oppgaver bare fordi de ikke gjenkjennes.
14. Arkivere bare oppgaver som manifestet eller prosjektstatusen uttrykkelig
    sier er erstattet.
15. Bevare historikken når en oppgave arkiveres.
16. Kontrollere resultatet på nytt etter endringen.

Standardregelen er:

**Klon og registrer prosjektet. Hent siste Git-versjon. Les
`.codex/project-tasks.json`. Opprett bare manglende faste oppgaver. Avstem
deretter navn, prosjekt, antall og rekkefølge mot manifestet.**

Hvis manifestet ikke finnes, skal du ikke finne på faste oppgaver selv.

## Krav til oppgavemanifestet

Manifestet bør minst angi:

- `schema_version`
- `layout_version`
- `project_name`
- `setup_on_new_machine`
- oppgaver i ønsket visuell rekkefølge
- `title`
- `purpose`
- `initial_prompt`
- eventuelle tidligere oppgaver som den nye oppgaven erstatter
- eventuelle oppgaver som uttrykkelig skal arkiveres

Rekkefølgen i `tasks`-listen er den autoritative oppgaverekkefølgen.

---

# 11. TVUNGEN AVSTEMMING VED HVER OPPSTART

En vanlig `git pull` er ikke tilstrekkelig.

Før Codex begynner på brukerens nye oppgave i et prosjekt, skal Codex:

1. Hente siste sikre Git-versjon.
2. Lese prosjektets nyeste instruksjoner og status.
3. Lese `.codex/project-tasks.json`.
4. Lese `.codex/workspace-layout.json` når den finnes.
5. Kontrollere den faktiske lokale Codex-prosjektlisten.
6. Kontrollere den faktiske oppgavelisten under prosjektet.
7. Sammenligne navn, antall og rekkefølge.
8. Opprette manglende faste oppgaver.
9. Unngå duplikater.
10. Behandle uttrykkelig erstattede oppgaver etter manifestet.
11. Kontrollere avstemmingen på nytt.
12. Først deretter begynne på det nye prosjektarbeidet.

Hvis Codex ikke kan kontrollere sidepanelet eller prosjektoversikten direkte,
skal det opplyses tydelig. Det skal ikke påstås at oversikten er identisk uten
kontroll.

---

# 12. STANDARD GIT-RUTINE UNDER OG ETTER ARBEID

## Før arbeid

1. Arbeid alltid fra riktig prosjekt under `~/Codex Projects`.
2. Les `AGENTS.md` og relevant prosjektkontekst.
3. Kontroller `git status`.
4. Kjør `git fetch origin`.
5. Hent siste endringer når arbeidskopien er ren.
6. Bruk `git pull --ff-only`.
7. Avstem Codex-oversikten mot manifestene.
8. Begynn først deretter på nytt arbeid.

## Under arbeid

9. Følg prosjektets `AGENTS.md`.
10. Bevar brukerens eksisterende lokale endringer.
11. Oppdater relevante status- og kontekstfiler når prosjektet faktisk endres.
12. Oppdater oppgavemanifestet når oppgaveinndelingen endres.
13. Oppdater arbeidsplassmanifestet når den samlede visuelle oversikten endres.
14. Ikke dupliser samme løpende status i flere filer.
15. Aldri legg hemmeligheter i Git.

Dette omfatter blant annet:

- passord
- tokens
- API-nøkler
- BankID-opplysninger
- tofaktorkoder
- cookies
- sessionsfiler
- `.env`-filer
- credentials

## Etter meningsfullt ferdigstilt arbeid

16. Kjør relevante tester og kontroller.
17. Kontroller at viktige beslutninger og resultater er dokumentert.
18. Oppdater `PROJECT_STATUS.md` når resultatet påvirker videre arbeid.
19. Oppdater `.codex/project-tasks.json` dersom oppgaveoversikten er endret.
20. Oppdater `.codex/workspace-layout.json` dersom samlet prosjektoversikt eller
    visuell rekkefølge er endret.
21. Inspiser `git diff`.
22. Kjør `git diff --check` når relevant.
23. Commit bare ferdige og kontrollerte endringer.
24. Bruk en tydelig commit-melding.
25. Push til riktig GitHub-repository.
26. Kontroller at lokal commit og upstream er identiske.
27. Kontroller at arbeidskopien er ren.
28. Rapporter hva som ble endret og pushet.

Arbeidet regnes ikke som ferdig dersom viktig status, struktur eller
oppgaveinndeling bare finnes i den lokale Codex-samtalen.

---

# 13. OBLIGATORISK OPPDATERING AV DEN FELLES OVERSIKTEN

Når arbeid på én maskin endrer noe som påvirker fremtidig arbeid, skal endringen
skrives til Git før arbeidsøkten avsluttes.

Dette gjelder særlig:

- nye prosjekter
- avsluttede prosjekter
- endret prosjektnavn
- endret prosjektrekkefølge
- nye faste oppgaver
- sammenslåtte oppgaver
- omdøpte oppgaver
- arkiverte oppgaver
- endret oppgaverekkefølge
- endrede startinstruksjoner
- endret prosjektstruktur
- viktige beslutninger
- ferdige resultater
- nye faste arbeidsregler
- nye sikkerhetsregler
- endret publiseringsflyt
- åpne problemer
- neste steg

Maskinen som gjør endringen, har ansvar for å:

1. oppdatere riktig autoritativ fil
2. kontrollere endringen
3. committe endringen
4. pushe endringen
5. kontrollere upstream

Neste maskin har ansvar for å:

1. hente siste Git-versjon
2. lese den oppdaterte standarden
3. avstemme sin lokale Codex-oversikt
4. gjøre nødvendige lokale korrigeringer
5. begynne på nytt arbeid først etter avstemmingen

---

# 14. SAMTALEHISTORIKK OG VARIG PROSJEKTHUKOMMELSE

Lokal Codex-samtalehistorikk skal ikke være den eneste lagringsplassen for
viktig prosjektinformasjon.

Git kan brukes til å gjenskape:

- prosjektlisten
- prosjektstrukturen
- faste oppgaver
- oppgavetitler
- oppgaverekkefølge
- startinstruksjoner
- arbeidsregler
- viktige beslutninger
- status
- åpne punkter
- neste steg

Git gjenskaper ikke nødvendigvis hele den ordrette lokale samtalehistorikken fra
en annen maskin.

Derfor skal viktig informasjon fra samtalen skrives til prosjektets
autoritative filer før commit og push.

Hvis en annen maskin trenger informasjon som bare finnes i en lokal samtale, er
den forrige arbeidsøkten ikke fullstendig synkronisert.

En oppgave kan opprettes på nytt fra manifestet, men den skal hente sin varige
forståelse fra Git-versjonerte prosjektfiler.

---

# 15. KONFLIKTER OG SAMTIDIG ARBEID PÅ FLERE MASKINER

Før arbeid på en ny maskin skal siste Git-versjon alltid hentes.

Ikke arbeid videre på to maskiner uten å ha pushet ferdige endringer fra den
første og hentet dem på den neste.

Hvis to maskiner har endret samme filer:

- ikke overskriv endringene
- ikke force-push
- ikke bruk `git reset --hard`
- ikke velg én versjon blindt
- sammenlign begge versjonene
- bevar alt relevant arbeid
- løs konflikten kontrollert
- kontroller resultatet før commit og push

Hvis én maskin har uferdig lokalt arbeid som ikke er pushet, kan ikke den andre
maskinen automatisk vite om dette gjennom GitHub.

Dette skal rapporteres tydelig.

---

# 16. SÆRREGLER FOR NETTSIDENE

## stavroslitsos.com

Dette er et offentlig repository. Alt som committes og pushes dit kan bli
offentlig tilgjengelig.

Under ren konfigurering skal du bare:

- klone eller kontrollere repositoryet
- registrere det i Codex
- hente siste Git-versjon
- lese prosjektinstruksjonene
- behandle `.codex/project-tasks.json`
- avstemme Codex-oversikten
- kontrollere Git-status og synkronisering

Ikke:

- endre nettsideinnhold
- publisere skjulte artikler
- endre publiseringskø
- sende nyhetsbrev
- endre DNS
- endre GitHub Pages
- kopiere råbilder fra Dropbox

## bikerentaloslo.no

`Work-automation` er den private hovedkilden.

Det offentlige repositoryet `sykkelutleie` skal bare brukes etter
publiseringsreglene i:

`Work-automation/AGENTS.md`

Privat prosjektkontekst eller innhold fra `annonser/` skal aldri publiseres til
det offentlige repositoryet.

---

# 17. DROPBOX SKAL VÆRE URØRT

Gamle Dropbox-kopier kan finnes på maskinen.

De er:

- sikkerhetskopier
- eldre arbeidskopier
- arkiv
- kilder til råmateriale

De skal ikke brukes som aktive Codex-prosjekter.

Ikke:

- flytt dem
- slett dem
- endre dem
- omdøp dem
- registrer dem som nye Codex-prosjekter
- koble gamle Dropbox-baserte oppgaver til de nye Git-prosjektene
- bruk Dropbox til Git-synkronisering
- anta at Dropbox-versjonen er nyere enn GitHub
- kopier hele Dropbox-prosjekter inn over Git-arbeidskopiene

Alle aktive arbeidskopier skal ligge under:

`~/Codex Projects`

GitHub er source of truth.

---

# 18. FULL SLUTTKONTROLL

Kontroller hvert aktivt prosjekt og bekreft at:

- repositoryet finnes korrekt lokalt
- prosjektmappen ligger under `~/Codex Projects`
- mappen er et gyldig Git-repository
- `origin` peker til riktig GitHub-repository
- standardbranch er riktig
- siste Git-versjon er hentet
- arbeidskopien er ren, eller eventuelle lokale endringer er rapportert
- lokal branch er synkronisert med upstream
- prosjektet er registrert i Codex
- nødvendige prosjektfiler finnes og kan leses
- `.codex/project-tasks.json` er behandlet der den finnes
- manglende faste oppgaver er gjenskapt
- ingen duplikate oppgaver er opprettet
- oppgavetitlene stemmer nøyaktig
- oppgavene er knyttet til riktig prosjekt
- oppgaverekkefølgen stemmer
- foreldede oppgaver er håndtert etter manifestet
- ingen Dropbox-kopi brukes som aktiv prosjektmappe

Kontroller den samlede Codex-oversikten mot:

`Work-automation/.codex/workspace-layout.json`

Kontroller ikke bare at elementene finnes. Kontroller også:

- eksakte prosjektnavn
- prosjektantall
- prosjektrekkefølge
- eksakte oppgavetitler
- oppgaveantall
- oppgaverekkefølge
- prosjektkobling
- aktiv eller arkivert status
- manglende oppgaver
- duplikater
- foreldede oppgaver

Hvis noe av dette avviker, er Mac-oppsettet ikke ferdig.

Kontroller uttrykkelig at:

**`stavroslitsos.com` er inkludert som eget aktivt prosjekt.**

Hvis det mangler, er konfigurasjonen ikke ferdig.

Kontroller også uttrykkelig at:

**`sykkelutleie` ikke er registrert som et konkurrerende aktivt prosjekt så
lenge det bare er publiseringsrepository for `Work-automation`.**

---

# 19. SLUTTRAPPORT

Når arbeidet er ferdig, gi én kort og konkret rapport med:

- om Mac-en ble behandlet som ny eller allerede konfigurert
- hvilke aktive prosjekter som er klare
- prosjektenes rekkefølge
- om `stavroslitsos.com` er inkludert
- om `sykkelutleie` er korrekt utelatt som konkurrerende hovedprosjekt
- hvilke faste oppgaver som ble gjenskapt
- hvilke oppgaver som eventuelt ble arkivert
- om oppgavetitler og rekkefølge stemmer med manifestene
- om den samlede visuelle oversikten stemmer
- om alle repositories er synkronisert
- siste commit for hvert prosjekt
- hvilken GitHub-konto som er autentisert
- om GitHub CLI fungerer
- om pull fungerer
- om push-tilgang er kontrollert
- eventuelle lokale endringer
- eventuelle konflikter
- eventuelle manglende manifestfiler
- konkrete problemer som gjenstår

Ikke si at alt er ferdig dersom bare Git-repositoryene er oppdatert, men
Codex-oversikten ikke er avstemt.

Ikke si at oversikten er «helt lik» uten å ha kontrollert navn, antall,
rekkefølge, prosjektkobling og status.

---

# 20. FERDIGKRITERIUM

Konfigureringen eller oppdateringen er først ferdig når jeg kan åpne et prosjekt
i Codex og fortsette arbeidet uten å:

- bruke Dropbox som aktiv prosjektmappe
- rekonstruere prosjektkontekst manuelt
- forklare oppgaveinndelingen på nytt
- opprette manglende standardoppgaver selv
- rydde opp i duplikate oppgaver
- gjette hva som ble gjort på forrige maskin
- lete etter hvilken statusfil som gjelder

En ny Mac skal kunne bygges opp fra GitHub.

En allerede konfigurert Mac skal kunne oppdateres ved å lime inn hele denne
veilederen.

Alle viktige endringer fra én maskin skal være dokumentert, committet og pushet
før neste maskin begynner å arbeide videre.
