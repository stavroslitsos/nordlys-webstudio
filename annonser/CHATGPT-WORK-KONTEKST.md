# ChatGPT Work-kontekst for annonser

Denne filen er en kort startkontekst for ChatGPT Work-chatter som skal hjelpe Stavros med FINN, Facebook-grupper og Hygglo. Den utfyller, men erstatter ikke, `annonser/README.md`, som fortsatt er hovedkilden for detaljert status og historikk.

## Kilde

- Repo: `stavroslitsos/Work-automation`
- Hovedfil for annonser: `annonser/README.md`
- Kort agentinstruks: `annonser/AGENTS.md`
- Prosjektstatus: `PROJECT_STATUS.md`

Når en Work-chat trenger annonsekontekst, skal den først hente denne filen og deretter lese `annonser/README.md` ved behov.

## Standard arbeidsflyt for FINN-annonser

Når Stavros sender bilder av et produkt:

1. Se gjennom alle bildene.
2. Identifiser produktnavn, modell, type, variant og relevant teknisk informasjon.
3. Finn nypris dersom produktet fortsatt selges eller tilsvarende nypris kan dokumenteres.
4. Sjekk omtrent bruktpris på FINN eller tilsvarende marked når mulig.
5. Gi prisforslag basert på nypris, bruktmarked, tilstand og om noe mangler.
6. Hvis Stavros oppgir en konkret pris, bruk den prisen.
7. Lag utkast med riktig kategori, tittel, beskrivelse, pris og hvilke bilder som skal brukes.
8. Avklar utkast med Stavros første gang for nytt produkt, normalt opptil noen runder ved behov.
9. Når Stavros godkjenner eller skriver tydelig at det bare er å kjøre på, fyll ut og publiser så langt verktøy og innlogging tillater.
10. Rapporter kort hva som ble gjort og hva som eventuelt gjenstår.

## Faste FINN-regler

- Bruk alle bildene som Stavros sender for produktet, med mindre han ber om noe annet.
- Ikke gjett pris blindt. Gi alltid prisforslag ut fra nypris og omtrent FINN-nivå når Stavros ikke allerede har bestemt prisen.
- Hvis Stavros oppgir pris, skal den prisen brukes.
- Noter tydelig hvis noe mangler, for eksempel strømledning, tilbehør, emballasje eller dokumentasjon.
- Ved det konkrete produktet der Stavros sa `Ikke kabel til strøm på den` skal dette tas med i annonsen.
- Standard adresse/poststed når relevant: `Kløfterhagen 23b, 1067 Oslo`.
- Tekststil: kort, ærlig, positiv og salgbar. Ikke overdriv tilstand eller funksjon.
- Dersom tilstand eller funksjon ikke er sikkert bekreftet, formuler det forsiktig.

## Publisering og innlogging

- Stavros gjør innlogging klar på FINN, Facebook og Hygglo når det trengs.
- Agenten skal aldri fylle inn passord, BankID, tofaktor-koder eller CAPTCHA.
- Ved betalingssteg, BankID, CAPTCHA eller innloggingsbrudd skal agenten stoppe og be Stavros gjøre det nødvendige.
- Rutinearbeid skal gjøres effektivt når standardinformasjonen allerede finnes.
- Ferdig tekst skal limes inn samlet, ikke tastes bokstav for bokstav.

## Facebook og Hygglo

- Facebook: lag først et godt tekstutkast og foreslå relevante grupper. Når Stavros godkjenner, kan samme tekst postes i relevante grupper der han er medlem, innenfor gjeldende verktøy- og sikkerhetsregler.
- Hygglo: bruk samme produktinformasjon, men skriv for utleie. Foreslå døgn-/ukepris ut fra markedet eller bruk Stavros sin pris.

## Bud og kjøp på FINN

Ved vanlige kjøp brukes kort og vennlig prutemelding:

> Hei :) Jeg kan kjøpe den raskt for [budpris]. På forhånd takk.

Prinsipp: bud rundt 65-75 prosent av prisantydning, rundet til pent tall, med mindre Stavros sier noe annet.

For `gis bort`-annonser brukes:

> Hei :) Er denne fortsatt tilgjengelig? Jeg kan gjerne kjøre innom og hente den dersom den fortsatt er ledig. Send gjerne adresse når du kan. Takk på forhånd!

Bud skal sendes som melding via kontaktfelt, ikke via `Gi bud`-knappen.

## Bil og innbytte

For Mercedes C250/C205 UR98251 og innbytteforespørsler skal gjeldende detaljer og status hentes fra `annonser/README.md` og `annonser/bilkupp-overvaking.md` før nye meldinger sendes. Bruk den faste presentasjonslenken som er dokumentert der.

## Statusføring

Etter en annonseøkt skal relevant status oppdateres i `annonser/README.md` når repoarbeid er del av oppgaven: publiserte annonser, lenker, pris, kanal, Facebook-grupper, Hygglo-status, meldinger sendt og det som gjenstår.
