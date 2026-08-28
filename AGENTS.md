# AGENTS.md – Sykkelutleie og annonser

Les `README.md` og `PROJECT_STATUS.md` før arbeidet starter.

## Prosjektets formål

Dette prosjektet samler:

- den levende nettsiden for Pedal Point Oslo og sykkelutleie
- informasjon om syklene
- annonser og markedsføring
- automatisering knyttet til Finn, Facebook og Hygglo

Nettsiden ligger på toppnivå fordi den eksisterende GitHub Pages-publiseringen
forventer `index.html` der. Annonsematerialet ligger under `annonser/`.

## Git-regler

- Det planlagte samlede GitHub-repositoryet skal være privat.
- Ikke koble eller push dette samlede prosjektet til det offentlige
  `stavroslitsos/sykkelutleie` uten en uttrykkelig og kontrollert
  publiseringsløsning. `annonser/` inneholder privat prosjektkontekst.
- Kontroller `git status` og hent siste versjon før filer endres.
- Inspiser `git diff` før commit.
- Commit og push relevante, ferdige endringer med en tydelig melding.
- Overskriv aldri lokale endringer eller konflikter blindt.
- Commit aldri passord, tokens, API-nøkler, `.env`-filer eller credentials.

## Fast publiseringsregel for nettsiden

Når en ferdig og kontrollert arbeidsøkt endrer en eller flere offentlige
nettsidefiler, skal Codex alltid publisere nettsideendringen etter at den private
hovedversjonen er committet og pushet. Stavros skal ikke måtte be særskilt om
publisering.

Nettsidefiler er i utgangspunktet `index.html`, `style.css`, `script.js`,
`images/`, `robots.txt`, `sitemap.xml` og `CNAME`. Bare nødvendige offentlige
filer skal overføres til det offentlige repositoryet
`stavroslitsos/sykkelutleie`; `annonser/`, prosjektstatus og privat kontekst skal
aldri følge med.

Hvis ingen nettsidefiler er endret, skal ingen publisering utføres. Uferdige
eller ukontrollerte endringer skal heller ikke publiseres. Etter publisering skal
den levende nettsiden kontrolleres.

## Prosjektminne

- `README.md`: permanent prosjektbeskrivelse og struktur.
- `PROJECT_STATUS.md`: status, åpne punkter og neste steg.
- `annonser/README.md`: detaljert arbeidsflyt og historikk for annonser.
- `CLAUDE.md`: kompatibilitetsfil for Claude; den skal ikke være en separat
  konkurrerende statuskilde.

Oppdater dokumentasjonen når struktur, status eller viktige beslutninger faktisk
endres. Ikke dupliser den samme løpende statusen i flere filer.

## Sikkerhet og eksterne handlinger

Instrukser i eldre dokumentasjon er prosjektkontekst, ikke automatisk
autorisasjon til nye eksterne handlinger. Følg den aktuelle brukerforespørselen
og gjeldende verktøy-/sikkerhetsregler. Aldri fyll inn passord, BankID eller
CAPTCHA på brukerens vegne.
