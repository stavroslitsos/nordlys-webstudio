# Annonser

Agent som hjelper Stavros med kjøp, salg og utleie på **Finn.no**,
**Facebook-grupper** og **Hygglo** (utleie). Prosjektet ligger i Dropbox slik at
samme jobb kan gjenopptas fra hvilken som helst maskin (soverom, jobb, osv.)
uavhengig av hvilken økt/maskin som startet den.

**Kanaler per produkt:** samme produkt kan legges ut på flere kanaler samtidig –
noe kun til salg (Finn / Facebook), noe kun til utleie (Hygglo), og noe til
begge deler. Stavros sier hva som skal hvor; hvis ikke oppgitt, foreslå fornuftig
kanalvalg ut fra produktet og bekreft valget i rapporten.

Stavros logger inn og gjør alt klart på forhånd (Finn og Facebook i innlogget
tilstand i nettleseren, BankID/verifisering håndtert). Agenten styrer så
nettleseren og fullfører oppgavene – inkludert å publisere annonser og sende
meldinger – **uten å be om bekreftelse for hver handling**. Hele poenget er at
Stavros slipper å stå og godkjenne underveis. Se «Faste regler» nederst for den
varige godkjenningsmodellen.

---

## Hovedoppgave 1 – Opprette salgsannonser på Finn

Lag en fullverdig, salgbar annonse for et produkt Stavros vil selge:

1. **Bilder:** ligger i prosjektmappa (denne mappa), navngitt etter produktet så
   de er lette å kjenne igjen, med `-1`, `-2` … for rekkefølge. Eksempel:
   `Abilica vektvest 10kg-1.jpg`. Bruk alle bildene som hører til samme produkt.
2. **Kategori:** velg riktig Finn-kategori automatisk ut fra hva produktet er.
3. **Pris:** finn markedspris ved å søke opp tilsvarende annonser på Finn og legg
   deg på et fornuftig nivå ut fra hva andre tar. **Unntak:** hvis Stavros oppgir
   en pris selv, bruk den.
4. **Tekst:** skriv en appellerende, ærlig annonsetekst (tittel + beskrivelse) i
   Stavros' stil – kortfattet, positiv, fremhever tilstand og det som gjør
   produktet attraktivt.
5. **Første gang for et nytt produkt:** vis kategori, pris, tittel, tekst og
   hvilke bilder som brukes, slik at stilen kan kalibreres. Etter denne ene
   godkjenningen publiseres og gjentas tilsvarende arbeid uten ny bekreftelse,
   i tråd med den varige godkjenningsmodellen nedenfor.

### Filer som ligger klare lokalt nå
| Produkt/formål | Filer |
|---|---|
| Mercedes C205 innbytte | 3 faste JPG-bilder |
| Fit Cuffs BFR-sett | 5 JPG-bilder + `Fit Cuffs word.docx` |

Bildene som tidligere ble brukt til Abilica, RAM Mounts og throttle-produktene
ligger ikke lenger i denne prosjektmappen per 2026-08-26. Annonsestatusen deres
er fortsatt bevart nedenfor. Hvis en av dem skal publiseres på nytt i en kanal
som krever lokal opplasting, må bildene legges tilbake eller finnes i Dropbox.

> Oppdater denne tabellen når produkter selges/legges til, så vi vet hva som
> gjenstår. Loggfør publiserte annonser i «Status»-seksjonen nederst (produkt,
> dato, pris, Finn-lenke).

---

## Hovedoppgave 2 – Finne kjøp og sende bud-melding

Stavros ser til enhver tid etter noe spesifikt (bil, scooter, grill, osv.).
Agenten søker opp aktuelle annonser og sender en standard bud-/prute-melding til
selgerne.

### A) Vanlig produkt (standardmelding)

> Hei :) Jeg kan kjøpe den raskt for **[budpris]**. På forhånd takk.

Teksten kan varieres litt for å flyte bedre, men skal beholde samme vennlige,
korte stil og samme «kjøper raskt / prute»-vinkling.

**Pruteregel (bud ut fra prisantydning):**

| Prisantydning | Bud |
|---|---|
| 400 kr | 300 kr |
| 500 kr | 300–350 kr |
| 1000 kr | 700 kr |
| 3000 kr | 2000–2400 kr |

Prinsipp: by rundt **65–75 %** av prisantydning, rundet til et pent tall.
Følg tabellen over som faste ankerpunkter; interpolér for beløp imellom.

### B) Bil (med innbytte av nåværende bil)

Ved bil ønsker Stavros alltid å tilby nåværende bil i innbytte. Standardtekst:

> Hei, jeg vurderer å selge min bil eller gi den i innbytte for en elektrisk. Jeg
> ønsker 350 000 kroner for min. Registreringsnummer er UR 98251. Mercedes C205 Coupe 2017
> – 127.000, topp stand. Ingen problemer. Nye vinterdekk og sommerdekk. Pene
> felger på både vinter- og sommerdekk. Røde kalipere som ikke kommer frem på de
> eldre bildene, men du ser de på de nye bildene. Original farge på bilen, ingen
> folie. Vekker veldig merke til på veien. Alltid parkert innendørs. Alltid
> børsteløs vasket i hall x1 i uken. Eneste Night Edition-versjon i Norge. Gi
> gjerne forslag for hva innbyttepris kan være.
>
> Gi beskjed om det er av interesse og hva innbyttepris ville isåfall blitt.
>
> Mvh Stavros Litsos

Detaljer om innbyttebilen (til gjenbruk/oppdatering):
- **Mercedes C205 Coupe, 2017**, Night Edition (eneste i Norge iflg. Stavros)
- Reg.nr **UR 98251**, ca **127 000 km**
- Ønsket pris ved salg: **350 000 kr**
- Topp stand, nye vinter- og sommerdekk, pene felger, røde kalipere, original
  farge (ingen folie), alltid innendørs parkert, børsteløs vasket ~1×/uke.
- **Fast bildevedlegg til nye innbytteforespørsler:**
  `https://bikerentaloslo.no/stavros/ur98251/`. Presentasjonssiden viser 50 bilder,
  video og oppgraderinger for bilen og skal legges ved nye forespørsler i stedet
  for Dropbox-lenken og de tre tidligere lokale bildene.

---

## Hovedoppgave 3 – Legge ut salgsinnlegg i Facebook-grupper

Stavros logger inn på sin Facebook i Chrome og har den klar. Agenten går gjennom
**alle relevante grupper Stavros er medlem av** og legger ut salgsinnlegg for de
produktene han vil selge der – i tillegg til Finn.

- Velg grupper ut fra hva produktet passer for. Eksempel: throttle controller-
  produktene skal ut i **bil-grupper** – både generelle norske bilgrupper og
  **Mercedes-grupper** Stavros er medlem av.
- Bruk samme bilder (fra prosjektmappa) og en tilpasset, gruppevennlig tekst i
  Stavros' stil (kort, ærlig, salgbar). Ta med pris.
- Legg ut i hver relevante gruppe. Rapporter etterpå hvilke grupper det ble lagt
  ut i, med lenke der det er mulig.
- Facebook styres via Chrome-verktøyene (`mcp__claude-in-chrome__*`) siden det er
  der Stavros er innlogget.

> Første gang for et nytt produkt: vis tekst-utkast + gruppeliste én gang så
> stilen treffer, deretter legg ut uten å spørre igjen (jf. varig godkjenning).

---

## Hovedoppgave 4 – Legge ut utleieannonser på Hygglo

Hygglo fungerer som Finn, men **kun for utleie**. Agenten oppretter en fullverdig
utleieannonse for produkter Stavros vil leie ut:

1. **Bilder:** samme bilder fra prosjektmappa (navngitt etter produkt).
2. **Kategori:** velg riktig Hygglo-kategori ut fra hva produktet er.
3. **Utleiepris:** sett en fornuftig døgn-/ukespris. Finn nivå ved å se på
   tilsvarende utleieannonser på Hygglo – med mindre Stavros oppgir pris selv.
4. **Tekst:** appellerende, ærlig utleietekst i Stavros' stil (fremhev tilstand,
   hva som følger med, evt. depositum/vilkår hvis relevant).
5. Publiser, og rapporter etterpå med lenke.

> Merk skillet: Finn/Facebook = **salg**, Hygglo = **utleie**. Et produkt kan
> ligge på begge samtidig (til salgs på Finn og til leie på Hygglo).

Hygglo styres via de innebygde browser-verktøyene (Stavros er innlogget på
forhånd), på samme måte som Finn.

---

## Faste regler for Claude (gjelder på alle maskiner, uavhengig av økt)

Skrevet ned her (ikke bare i Claude sitt minne) fordi prosjektet skal kunne kjøres
fra flere maskiner via Dropbox – en ny økt/maskin skal følge samme standard uten
at Stavros forklarer på nytt.

1. **Varig godkjenning – ikke spør for hver handling.** Stavros har på forhånd
   gitt grønt lys for at agenten publiserer annonser, sender bud/meldinger og
   legger ut i Facebook-grupper. Er en type oppgave bekreftet én gang, gjentas
   den uten ny bekreftelse. Fullfør og rapporter etterpå – ikke stopp for «ja».
   En Finn-lenke Stavros sender er i seg selv instruks om å behandle annonsen:
   ved bil sendes innbytteforslaget, ved «gis bort» sendes henteforspørselen,
   og ved vanlige varer brukes pruteregelen. Ikke be om rutinebekreftelse.
   Eneste unntak: **første gang for et nytt produkt** kan agenten vise ett
   tekst-/prisutkast for å kalibrere stil, og deretter kjøre videre.
2. **Stavros gjør innlogging klar på forhånd.** Finn og Facebook er innlogget i
   nettleseren før agenten settes i gang. Agenten skal derfor **aldri** fylle inn
   passord/BankID eller løse CAPTCHA – dukker det opp, si fra til Stavros så
   ordner han det, og fortsett etterpå.
3. **Pris hentes fra faktiske Finn-annonser**, ikke gjettet – med mindre Stavros
   oppgir pris selv. Nevn kort hva sammenligningsgrunnlaget var i rapporten.
4. **Behold Stavros' stil** i tekstene: vennlig, kort, ærlig, med «kjøper raskt /
   prute»-vinkling på bud og en positiv, salgbar tone på egne annonser.
5. **Følg pruteregelen** (65–75 %, se tabell) på bud for vanlige produkter.
   Ved bil: bruk alltid innbytte-malen.
6. **Logg alt i «Status»-seksjonen** på slutten av hver økt (publiserte annonser
   på Finn/Hygglo, utsendte bud, Facebook-innlegg, hvilke kanaler hvert produkt
   ligger på, hva som gjenstår) slik at neste maskin/økt vet hvor ting står.
7. **Facebook: legg ut i ALLE relevante grupper**, ikke bare én per produkt.
   F.eks. bilprodukter → alle norske bilgrupper Stavros er medlem av (ikke bare
   den beste ene). Kun norske grupper.
8. **Produkt×kanal-oversikt nederst ved aktive produkter.** Ikke vis den når
   alt er solgt. Når Stavros sender et nytt produkt for salg/utleie, legg det
   nederst i oversikten og oppdater status fortløpende (gjenstår, ute, solgt).
9. **Bud på Finn sendes som MELDING, aldri via «Gi bud»-knappen.** Bruk
   «Kontakt selgeren» / «Send melding» og skriv budet direkte til selgeren
   (f.eks. «Hei :) Jeg kan kjøpe den raskt for X kr. På forhånd takk.»).
10. **For gis bort-annonser:** Send en hyggelig direkte melding:
    > Hei :) Er denne fortsatt tilgjengelig? Jeg kan gjerne kjøre innom og
    > hente den dersom den fortsatt er ledig. Send gjerne adresse når du kan.
    > Takk på forhånd!
11. **Fortløpende annonser og «FIREFOX»:** Annonser og meldinger håndteres
    fortløpende når Stavros ber om det. Skriver Stavros **FIREFOX**, betyr det
    at agenten skal fjernstyre Firefox og behandle de aktuelle åpne fanene.
12. **Bruk den faste bilpresentasjonen, ikke Dropbox.** Ved nye
    innbytteforespørsler for Mercedes C250 UR98251 skal
    `https://bikerentaloslo.no/stavros/ur98251/` brukes som bildevedlegg. Ikke bruk
    den gamle Dropbox-lenken.
13. **Lim inn ferdig tekst.** Utarbeid meldingen først og lim hele teksten inn
    i feltet i én operasjon. Ikke tast den bokstav for bokstav; det er tregere
    og unødvendig.
14. **Bilder ved innbytte:** Bilpresentasjonen for UR98251 er fast
    bildevedlegg ved nye forespørsler. De tre lokale Mercedes-bildene er ikke
    lenger obligatoriske ved nye forespørsler.
15. **Last opp produktbilder samlet.** Når flere relevante bilder ligger i
    samme mappe, skal filnavnene først leses direkte fra chatvedleggene. Finn
    deretter nøyaktig de samme filene i filvelgeren og marker hele serien med
    en gang, for eksempel `IMG_4932 2.HEIC`–`IMG_4936 2.HEIC`, før ett trykk på
    «Åpne». Ikke bruk tid på å identifisere filene på nytt i mappen, og ikke
    velg eller last opp bildene ett og ett når samlet markering er mulig.
    Effektiv tidsbruk er en fast prioritet.

---

## Oversikt – produkt × kanal

> Hold denne oppdatert. ✅ = lagt ut, – = ikke lagt ut, n/a = ikke aktuelt.

| Produkt | Finn (salg) | Facebook | Hygglo (utleie) |
|---|---|---|---|
| ~~TROS 8-Drive throttle (passer W205)~~ **SOLGT** | (var 500 kr) | (var W205 Norge) | n/a |
| 9-Drive KA-873 throttle (passet ikke) | ✅ 500 kr | ✅ Alt av billige bilreparasjoner *(bør også i øvrige)* | n/a |
| Abilica vektvest 10 kg | ✅ 600 kr | – | ✅ (egen eldre annonse) |
| ~~RAM Mounts X-Grip (MC/sykkel)~~ **SOLGT** | (var 600 kr) | – | n/a |
| Fit Cuffs BFR-sett | n/a | – | ✅ 100 kr/dag |
| Scott Scale 930 29" MTB str. M (2 hjulsett) | ✅ 13 000 kr (Basis gratis) | – | ✅ 350 kr/dag (av Stavros) |
| Xiaomi M365 el-sparkesykkel (reparasjonsobjekt) | ✅ 500 kr, [FINN 475861262](https://www.finn.no/recommerce/forsale/item/475861262) *(til kontroll)* | – | n/a |
| Delux T9 enhåndstastatur / gaming keypad | ✅ 300 kr, [FINN 475861567](https://www.finn.no/recommerce/forsale/item/475861567) *(til kontroll)* | – | n/a |
| Tastaturer og mus – Logitech, Contour og Apple (samleannonse) | ✅ 2 500 kr samlet, enkeltpriser i teksten, [FINN 475861821](https://www.finn.no/recommerce/forsale/item/475861821) *(til kontroll)* | – | n/a |
| JBL Everest Elite 100 Bluetooth-hodesett | ✅ 300 kr, [FINN 475861966](https://www.finn.no/475861966) *(aktiv)* | – | n/a |

## Codex-oppgaver – organisering

**Hovedoppgave i Codex:** `Work – Prosjektoversikt og status` (denne
prosjektmappa).

Prosjektet har fire separate arbeidsoppgaver i Codex, opprettet 2026-08-26.
Alle peker til samme Dropbox-prosjektmappe og skal lese denne README-en før
arbeid:

| Arbeidsområde | Navn på Codex-oppgave | Nåværende status |
|---|---|---|
| Salgsannonser | `Work – Finn salgsannonser` | Opprettet |
| Kjøp og bud | `Work – Finn kjøp og bud` | Opprettet |
| Facebook-grupper | `Work – Facebook salgsgrupper` | Opprettet |
| Utleieannonser | `Work – Hygglo utleie` | Opprettet |

Eldre og løpende produktstatus ligger fortsatt i tabellen over og i
«Status»-seksjonen under. Dermed er README kilden til sannhet på tvers av
maskiner, uansett hvilken Codex-oppgave som senere brukes.

**Solgt (bør tas ned/markeres solgt om ikke gjort):** TROS 8-Drive (Finn + FB
W205 Norge), RAM Mounts X-Grip (Finn).

**Sendte bud (kjøp) – Sony WH-1000XM5, 1500 kr som MELDING (ikke «Gi bud»):**
- 2026-08-03: Sendt 1500 kr-bud til **17 unike selgere** i Oslo/Asker-området
  (Asker by hadde ingen; Høvik/Bærum tatt med som nærmest). Selgere: tormod,
  heddalyb, Hoang, magnealexandersnev, Sam, Kelly, milenko, Josteinaa, karlsen,
  Maurice Victory B, Oscar S, William, Danial R, elyaschavosh, Andreas Kaare
  Fjeld, pjsanu, Erlend.
- Hoppet over: tormods 2. annonse (dupe-selger), én annonse til 1000 kr (1500
  ville vært over prisant.), tilbehør (kabler/øreputer).
- **Tidlige svar:** Andreas Kaare Fjeld (1890 kr-annonse) svarte **«Ok» → godtok
  1500 kr!** Josteinaa motbød «2000 og den er din». Hoang (3000, ny) «Nei takk».
  heddalyb (2600) «for lite». → Følg opp Andreas for å fullføre kjøpet.

**Åpne punkter mot «alle relevante grupper»-regelen:** throttle-produktene ligger
foreløpig kun i én FB-gruppe hver. Norske bilgrupper Stavros er medlem av (funnet
så langt): **W205 Norge**, **Alt av billige bilreparasjoner** (Tesla Owners Club
Norway = kun Tesla, ikke relevant). RAM Mounts bør i norske MC-/sykkelgrupper.

---

## Status – hvor arbeidet ble stoppet sist

> Oppdater denne seksjonen på slutten av hver økt, uansett hvilken maskin som
> kjører den, slik at neste økt raskt kan lese seg opp på hvor ting står.

**Sist oppdatert: 2026-09-08**

- 2026-09-08: Registrerte to nye forhandlersvar for Mercedes C250 Coupé
  UR98251 i `bilkupp-overvaking.md`. **Autostrada Notodden AS**, ved salgssjef
  Geir Arne Svartdal, beskriver bilen som svært pen og vil vurdere innbyttet
  sterkt, men har foreløpig ikke gitt et konkret beløp. **Auto Viken AS** har
  oppgitt 280 000–300 000 kr i innbytte. Agder Auto AS står fortsatt øverst med
  det dokumenterte tilbudet på 350 000 kr. Autostrada følges opp for konkret
  verdi; Auto Viken beholdes som markedsreferanse og prioriteres bare ved et
  forbedret tilbud eller særlig gunstig total mellompris.

- 2026-09-08: Sendte bekreftede innbytteforespørsler via FINN til **Car Market
  AS**, Porsche Panamera GTS 2013 (FINN 470430765, 110 191 km, 549 900 kr), og
  **Autospektrum AS Oslo**, Porsche Panamera 4 E-Hybrid 2018 (FINN 475459590,
  125 000 km, 579 900 kr). Begge meldingene oppga ønsket innbytteverdi
  350 000 kr for Mercedes C250 UR98251 og inkluderte
  `https://bikerentaloslo.no/stavros/ur98251/`. FINN viste «Meldingen er sendt»
  for begge.

- 2026-09-08: Sendte bekreftede innbytteforespørsler via FINN til de to unike
  Porsche Taycan 4S-annonsene Stavros oppga. **Autoinvest AS**, FINN 475327229:
  2020-modell, 78 000 km og 529 900 kr. **Xbil AS**, FINN 475398959:
  2020-modell, 113 800 km og 439 000 kr. Begge fikk tilbud om Mercedes C250
  UR98251 med ønsket verdi 350 000 kr og lenken
  `https://bikerentaloslo.no/stavros/ur98251/`. FINN viste «Meldingen er sendt»
  for begge. Den gjentatte lenken til 475398959 ble behandlet som duplikat og
  ikke sendt en gang til.

- 2026-09-07: Opprettet og publiserte FINN-annonsen **«JBL Everest Elite 100
  Bluetooth-hodesett med støydemping»** med 5 bilder, pris 300 kr og tilstand
  «Godt brukt». Bildene ble batchmarkert og lastet opp samlet. FINNs
  bildegjenkjenning avklarte at produktet er JBL Everest Elite 100, ikke Samsung
  Level U som først antatt; annonsen ble korrigert før publisering. Liten Fiks
  ferdig-pakke med direkte kjøp og bud samt gratis Basis-pakke ble valgt.
  FINN-kode **475861966**; [annonse](https://www.finn.no/475861966). Status etter
  endelig lagring: «Aktiv» hos FINN.

- 2026-09-07: Opprettet og sendte inn samleannonsen **«Tastaturer og mus –
  Logitech, Contour og Apple – samlet eller enkeltvis»** med alle 23 relevante
  bilder lastet opp samlet. Annonsen omfatter 3 tastaturer og 12 mus, har
  pakkepris 2 500 kr og enkeltpriser fra 50 til 600 kr. Den opplyser tydelig om
  det knekte batteridekselet på det hvite Dacota-tastaturet. Medium Fiks ferdig-
  pakke med direkte kjøp og bud ble aktivert; FINN gikk videre uten et betalt
  eksponeringsvalg. FINN-kode **475861821**;
  [annonse](https://www.finn.no/recommerce/forsale/item/475861821). Status etter
  innsending: «Til kontroll» hos FINN.

- 2026-09-07: Ny fast effektivitetsregel: relevante produktbilder skal
  identifiseres fra filnavnene i chatvedleggene, finnes direkte som samme serie
  i filvelgeren, batchmarkeres og lastes opp samlet med ett trykk på «Åpne».
  Filene skal ikke identifiseres på nytt eller velges ett og ett når samlet
  markering er mulig.

- 2026-09-07: Opprettet og sendte inn FINN-annonsen **«Delux T9
  enhåndstastatur / gaming keypad – USB»** med 6 bilder, pris 300 kr og tilstand
  «Godt brukt». Liten Fiks ferdig-pakke med direkte kjøp og bud ble aktivert,
  og gratis Basis-pakke ble valgt. FINN-kode **475861567**;
  [annonse](https://www.finn.no/recommerce/forsale/item/475861567). Status etter
  innsending: «Til kontroll» hos FINN.

- 2026-09-07: Opprettet og sendte inn FINN-annonsen **«Xiaomi M365
  el-sparkesykkel – reparasjonsobjekt»** med 8 bilder, pris/minstepris 500 kr,
  tilstand «Må fikses» og kun henting. Annonsen opplyser tydelig at displayet er
  ødelagt og mangler deksel, at sparkesykkelen er uladet og uten lader, og at
  motor, batteri, lys og øvrige funksjoner derfor ikke er testet. Gratis
  Basis-pakke ble valgt. FINN-kode **475861262**; [annonse](https://www.finn.no/recommerce/forsale/item/475861262).
  Status etter innsending: «Til kontroll» hos FINN.

- 2026-09-07: Agder Auto AS svarte på forespørselen om Porsche Panamera 2015
  (FINN 475268024, reg.nr. ZZ22167) og tilbød **350 000 kr** for Mercedes C250
  UR98251 i innbytte, forutsatt at alt er på stell. Dette er høyeste
  dokumenterte innbyttetilbud så langt. Relevante biler hos Agder Auto skal
  prioriteres i framtidige søk for å bevare eller bruke dette tilbudsnivået som
  sammenligningsgrunnlag.

- 2026-09-07: Sendte bekreftet innbytteforespørsel via FINN til alle 31 aktive,
  ukontaktede biler i den dokumenterte biloversikten. Dette omfatter åtte
  C43/C450, CLS63 475304500, elleve S63, to Porsche 911 og ni Panamera,
  inkludert 466664610. Alle meldingene oppgir ønsket verdi på 350 000 kr for
  Mercedes C250 UR98251 og inneholder den faste presentasjonslenken
  `https://bikerentaloslo.no/stavros/ur98251/`. FINN viste «Meldingen er sendt»
  for hver av de 31. Fire eldre annonser kunne ikke kontaktes fordi annonsen
  eller kontaktskjemaet ikke lenger var aktivt: 471813671, 473885957,
  471488420 og 475069541.

- 2026-09-05: Ny fast føring for Mercedes C250 UR98251: bruk
  `https://bikerentaloslo.no/stavros/ur98251/` som bildevedlegg i alle nye
  innbytteforespørsler. Presentasjonen erstatter Dropbox-lenken og kravet om de
  tre lokale bilbildene for nye henvendelser.

- 2026-09-04: Opprettet en delbar Dropbox-lenke til de 50 bilbildene og én
  video i mappen `Forespørsel innbytte`. Sendte bekreftet innbytteforespørsel
  via FINN til fem prioriterte biler: Panamera 472827369, S63 475469420 og
  474576984, samt C43 474778474 og 472233996. Meldingen oppgir Mercedes C250
  Coupé 2017, reg.nr. UR98251, VIN WDD2053451F616163, sjelden utgave og
  oppgraderingene svart panserstripe, bakspoiler, AMG-diffuser, sidevinger,
  røde bremsekalipere og Panamericana-grill. Den forklarer at bildene med svart
  panserstripe er de nyeste. FINNs førstegangsskjema avviste ekstern URL;
  meldingen sier derfor at komplett bildemappe/video kan sendes straks, og
  Dropbox-lenken ligger klar i `bilkupp-overvaking.md` for ettersending.

- 2026-09-04: Stavros avklarte at «S43» betyr **Mercedes-AMG S63**, og satte
  en fast øvre grense på **150 000 km** for alle bilkandidater. Oversikten ble
  ryddet for biler over grensen, og 15 kontrollerte S63-annonser på FINN ble
  lagt inn. AutoDB, Car4Sale, Porsche Finder Norge, Kulbruk, TASS og Motorstat
  ble lagt til i kilderegisteret. Drive-søket viste hovedsakelig nyere biler og
  én S63 som dupliserte FINN-annonsen, men med ulik pris. Kontaktkøen ble
  rangert på nytt. Ingen forespørsler er sendt.

- 2026-09-04: Opprettet den varige oversikten
  [`bilkupp-overvaking.md`](bilkupp-overvaking.md) for Mercedes-AMG C43,
  Mercedes «S43» (må avklares), Porsche 911 fra 2014 og Porsche Panamera fra
  2014. Registeret dekker FINN, Auksjonen, Retrade, iAuto, Bilbutikk, Drive,
  Facebook Marketplace/grupper, Nettbil, Bruktdel og Delebil. Første
  markedsgjennomgang og prioritert kontaktkø er lagt inn. FINN hadde de relevante
  aktive treffene; ingen målmodeller ble funnet hos Auksjonen eller Retrade i
  første søk. Ingen bilselgere er kontaktet ennå.

- 2026-09-04: Søkte gjennom alle **51 treff** på Finn for «SafeDrive Pro» og
  sendte direkte melding til **46 relevante selgere**. Til de **7 annonsene i
  Oslo** ble følgende sendt: «Hei, jeg kan kjøre innom i dag og kjøpe den for
  350kr. på forhånd takk.» Til de **39 annonsene utenfor Oslo** ble følgende
  sendt: «Hei, jeg kan kjøpe den for 350kr og dekker frakt. På forhånd takk.»
  Alle 46 samtaler viste meldingen som sendt. Fem irrelevante søketreff ble
  utelatt: MC-etui, Tesla-feste, tilbehørspakke og to bilkameraer. Avventer svar
  fra selgerne.

- 2026-08-26: Egen arbeidsoppgave for **Facebook-grupper** er lest inn og gjort
  klar. Gjennomgått aktive produkter, tidligere Facebook-innlegg, kjente
  medlemsgrupper, gruppereglene og åpne punkter i både README og
  `facebook-sykkelutleie-markedsforing.md`. Ingen Facebook-side ble åpnet, og
  ingen innlegg, innmeldinger eller andre eksterne handlinger ble utført.
  Avventer Stavros sin konkrete instruks.

- 2026-08-26: Ryddet den visuelle Codex-strukturen under prosjektet
  `Work Automation`. Den eksisterende oppgaven ble omdøpt til
  `Work – Prosjektoversikt og status`, og fire egne oppgaver ble opprettet for
  Finn-salg, Finn-kjøp/bud, Facebook-grupper og Hygglo-utleie. Hver oppgave er
  koblet til denne prosjektmappen og instruert om å lese README først. Ingen
  annonser eller meldinger ble sendt.

- 2026-08-26: Gjennomgått prosjektregler, hele README-statusen, faktisk
  mappeinnhold og de felles Dropbox-filene `AGENTS.md`, `START-HER.md` og
  `OVERSIKT.md` på **stavros sin MacBook Pro (2)**. README er fortsatt kilden
  til sannhet for annonsearbeidet. Bildeoversikten er korrigert til filene som
  faktisk finnes lokalt: tre Mercedes-innbyttebilder og fem Fit Cuffs-bilder.
  Regelen for første utkast er harmonisert med varig godkjenning. Ingen annonser,
  meldinger eller andre eksterne handlinger ble utført. Fellesoversikten ble
  oppdatert samme dag.

- 2026-08-25: Mottatt Finn-kode **472324221** (Porsche Panamera 4 E-Hybrid
  2018, 600 000 kr, Jessheim). Innbytteforslag ikke sendt: den innebygde
  Finn-økten var utlogget, men Stavros har logget inn. De tre faste Mercedes-
  bildene finnes nå i prosjektmappen. FINNs vedleggsvelger åpnes som et lokalt
  vindu som denne Codex-økten ikke kan styre; ikke send meldingen uten at alle
  tre bilder er lagt ved.

- 2026-08-25: Kontrollert oppsett på tvers av maskiner. Dropbox-innholdet er
  oppdatert og denne Codex-oppgaven er nå korrekt knyttet til prosjektet
  `Work automation`. Oppgavene `Annonser – oppgaveoversikt` og
  `Kompetanseprofil Søknad` finnes lokalt under prosjektet. Ingen annen
  Codex-maskin/vert var tilkoblet under kontrollen, så sidepanelrekkefølge og
  eventuelle oppgaver som bare finnes lokalt på den andre maskinen kunne ikke
  verifiseres direkte. README/AGENTS og Dropbox-filene er fortsatt den felles
  kilden til sannhet mellom maskinene.

- 2026-08-23: **Scott Scale 930 29" terrengsykkel str. M (2 hjulsett, sommer+
  vinter)** – laget to annonser, begge ferdig utfylt og venter kun på at Stavros
  legger til bilder (fra Dropbox-mappa) + fullfører publisering:
  - **Finn (salg):** 13 000 kr. Kategori Torget → Sport og friluftsliv →
    Sykkelsport → Sykler, tilstand «Pent brukt», postnr 1067. Stavros' egen
    tekst brukt ordrett (ingen årsmodell/ubekreftede komponenter). Utkast-id
    474401577.
  - **Hygglo (utleie):** 350/1000/2000 kr for 1/3/7 dager (= «286–350 kr/dag»,
    samme som Richmond terrengsykkel). Kategori Sport & fritid › Sykling ›
    Sykler → Terrengsykkel. Verdi 13 000 kr, Fleksibel. Tilpasset utleietekst.
  - Bildene ligger i Dropbox «shopping sykkel Scott scale». Dropbox-connectoren
    er IKKE autorisert i denne økten, så agenten kan ikke hente dem; Stavros
    laster opp selv i skjemaene (som vanlig).
  - **BEGGE PUBLISERT** (Stavros la til bilder): Finn-annonsen fullført av
    agenten (Sykkel-spesifikke felt auto-/etterfylt: Sykkeltype Terreng, Merke
    Scott, Kjønn Unisex, Rammestørrelse M, Hjulstørrelse 29"; frakt «Jeg kan
    ikke sende varen» da sykkel er for stor for Fiks ferdig). Hygglo publisert
    av Stavros.
  - **VIKTIG FUNN:** I kategorien **Sport og friluftsliv / Sykkelsport er Basis-
    annonsen GRATIS** på Finn (ikke 29 kr). 29 kr-gebyret gjaldt «Utstyr til
    bil, båt og MC / Bildeler». Torget-gebyr varierer altså med kategori –
    sjekk «Velg produkter»-siden. Gratis Basis kan agenten publisere selv
    (ingen betaling/BankID nødvendig).
  - NB: Prosjektmappa er nå «Work automation» (tidl. «Claude Annonser»); README
    her er kilden til sannhet.
- 2026-08-22: Opprettet et felles Codex-oppsett i Dropbox-mappen
  `Claude Code prosjekter`: `AGENTS.md`, `START-HER.md` og `OVERSIKT.md`.
  Alle maskiner kan nå åpne denne foreldremappen og bruke kommandoen
  «Oppdater denne datamaskinen fra Dropbox» eller, på en ny maskin,
  «Dette er en ny datamaskin. Gjør den klar fra Dropbox». Ingen
  annonsehandlinger ble utført i denne økten.
- 2026-08-22: Den feilplasserte Dropbox-mappen `Programmer/Codex` ble flyttet
  samlet til `Claude Code prosjekter/Codex historikk`. Eldre mappestruktur og
  de to filene som fantes der ble bevart. Arkivet er lagt inn i den felles
  oversikten, men behandles ikke som et aktivt prosjekt.
- Codex-oppgaver kontrollert: Bare denne oppgaven finnes i selve
  `Work automation`-mappa; ingen arkiverte prosjektoppgaver ble funnet.
- Denne oppgaven er gjort til prosjektets hovedoversikt. De fire arbeidsområdene
  er navngitt over, men ikke opprettet som separate oppgaver ennå.

- 2026-08-20: Sendt innbytteforslag som direkte Finn-melding til privat
  selger **Prins** på Porsche Panamera 4 GTS 2013 (FINN-kode 471310592,
  449 942 kr, Asker). Tilbudt Mercedes C205 Coupe 2017 med ønsket
  innbytteverdi 350 000 kr. Meldingen ble limt inn og Finn viste «Sendt».
  Malen bruker nå «Registreringsnummer» i stedet for «Reg.nr.» for å unngå at
  FINN feiltolker forkortelsen som en lenke.
- 2026-08-20: Ny fast regel: bruk alltid innliming av ferdig utarbeidet
  meldingstekst, ikke bokstavvis inntasting.
- 2026-08-20: Mottatt Finn-kodene **469923420** (Mercedes-Benz CLS63 2014,
  AUTO VIKEN AS, 799 999 kr) og **473711216** (Porsche Panamera 4 E-Hybrid
  2017, WRUM AS, 679 000 kr). Innbytteforslaget ble forsøkt sendt, men FINN
  avviste det med «Må fylles ut». Årsak: Dropbox-lenken i meldingen. Begge er
  **ikke sendt**. Fast regel lagt inn: ingen eksterne lenker i Finn-meldinger;
  bruk «Bilder kan sendes ved interesse» i stedet. Nytt forsøk uten lenken i
  de allerede åpne skjemaene ble fortsatt avvist av FINN; dette skal ikke
  forklares som en innloggingsfeil.
- 2026-08-20: Mottatt Finn-kode 473897246 (Porsche Panamera 4 E-Hybrid 2019,
  Auto Bilmegler, 509 000 kr). Innbytteforslaget med Mercedes C205 ble skrevet
  inn i kontaktskjemaet, men Finn stoppet innsendingen med «Må fylles ut» og
  viste innlogging. Ikke sendt; Stavros må gjøre innloggingen klar før nytt
  forsøk. Lagt inn fast regel om at en Finn-lenke er direkte instruks om å
  behandle og sende relevant standardmelding, uten rutinebekreftelse.
- 2026-08-18: Lagt inn fast mal for «gis bort»-annonser og kommandoen
  **FIREFOX**. Når FIREFOX brukes, skal aktuelle åpne Firefox-faner håndteres
  fortløpende.
- 2026-08-18: Gjennomgått alle åpne Power-faner med dashbordkameraer i Firefox:
  Garmin Mini 2, Mini 3, 57, 67W, X310 og Nextbase Piqo 2K. Anbefaling:
  For Stavros' presiserte behov (ulykkesbevis under kjøring og dokumentasjon av
  parkeringsskader) er beste løsning **Garmin X310 foran + Garmin Mini 3 bak**, koblet
  til Garmin Constant Power Cable via OBD-II. Kabelen støtter to kameraer og har
  tidsvalg/lavspenningsvern. Ett X310 alene er nest beste og gir 4K, GPS og Parking
  Guard. Kameraets interne batteri varer bare ca. 20 minutter og er ikke en reell
  heldagsløsning. Ingen kjøp foretatt.
- 2026-08-17: Sendt innbytteforslag som direkte Finn-melding til privat selger
  **Sivan J** på Porsche Panamera 4 E-Hybrid 2018 (FINN-kode 473545198,
  totalpris 673 532 kr). Tilbudt Mercedes C205 Coupe 2017, reg.nr. UR 98251,
  med ønsket innbytteverdi 350 000 kr og Dropbox-lenke til bilder. Finn viste
  status «Sendt»; venter på svar.
- 2026-08-16: Undersøkt stor GT/GTR-stil bakvinge til Mercedes C205 Coupé
  2017. Nærmeste rimelige visuelle treff er en universell 46-tommers ABS-vinge
  på eBay; nærmeste modelltilpassede kvalitetsalternativ er CMST Tuning GTR
  Style for C205 Coupé. Ingen bestilling foretatt.
- 2026-08-16: Sendt innbytteforslag som direkte Finn-melding på Porsche
  Panamera 4 E-Hybrid 2018 (FINN-kode 403251502, 629 434 kr). Tilbudt Mercedes
  C205 Coupe 2017, reg.nr. UR 98251, med ønsket innbytteverdi 350 000 kr og
  Dropbox-lenke til bilder. Venter på svar fra selger.
- 2026-08-16: Sendt innbytteforslag via Finns forhandlerskjema til AUTOSONE AS
  på Porsche Panamera 4 E-Hybrid 2017 (FINN-kode 466776567, 659 000 kr).
  Tilbudt samme Mercedes til ønsket innbytteverdi 350 000 kr. Finn bekreftet at
  meldingen er sendt; venter på svar fra forhandleren.

- 2026-08-06: Prosjektet satt opp på ny maskin. Claude sitt lokale minne
  etablert her (peker til README som kilde til sannhet). NB på ny maskin:
  Chrome-profilen «annonser» (innlogget Finn/Facebook) må gjøres klar av
  Stavros før Facebook-oppgaver kan kjøres herfra.

- Prosjektet opprettet. README + CLAUDE.md satt opp med fire hovedoppgaver
  (Finn-salg, kjøp/bud, Facebook-grupper, Hygglo-utleie).
- Godkjenningsmodell avklart: varig godkjenning – agenten spør ikke for hver
  handling. Stavros gjør innlogging (Finn + Facebook + Hygglo) klar på forhånd.
- Kanalmodell: samme produkt kan gå på flere kanaler (salg på Finn/Facebook,
  utleie på Hygglo, evt. begge).

### Throttle-produktene (test av flyten) – FERDIG
- **Produkt 1 – TROS 8-Drive (passer W205):** PUBLISERT på Finn (500 kr, 12
  bilder). Finn-lenke: finn.no/recommerce/forsale/item/471939403. Kategori
  Torget → Utstyr til bil, båt og MC → Bildeler → Annet biltilbehør, tilstand
  «Som ny», Fiks ferdig (Liten pakke). **Lagt ut på Facebook:** gruppa
  **W205 Norge** (tekst + Finn-lenke).
- **Produkt 2 – 9-Drive KA-873 (passet ikke W205):** PUBLISERT på Finn (500 kr –
  Stavros justerte fra 400, 10 bilder, uten Fiks ferdig). Finn-lenke:
  finn.no/recommerce/forsale/item/471942750. **Lagt ut på Facebook:** gruppa
  **Alt av billige bilreparasjoner** (tekst + Finn-lenke).
- Begge FB-postene lagt ut som «tekst + Finn-lenke» (ikke egne bilder) – Finn-
  lenka genererer automatisk produktbilde i forhåndsvisningen. Poster ligger
  som «Stavros Litsos · Just now» i begge gruppene.
- **Kun norske grupper** (Stavros' ønske). Utenlandske Mercedes-grupper (Hellas,
  Malaysia, UK, Worldwide, den internasjonale C205 & A205) ble utelatt.
  Tesla Owners Club Norway utelatt (kun Tesla, ikke relevant).

### Andre produkter
- **Abilica vektvest 10 kg:** PUBLISERT på Finn (600 kr, 2 bilder). Kategori
  Torget → Sport og friluftsliv → Treningsapparater og -utstyr → Treningsutstyr,
  tilstand «Pent brukt». Ikke lagt ut på Facebook.
- **RAM Mounts X-Grip mobilholder-sett (MC/sykkel):** PUBLISERT på Finn (600 kr,
  6 bilder). Kategori Torget → Utstyr til bil, båt og MC → MC-deler → MC-tilbehør,
  tilstand «Pent brukt». Ikke lagt ut på Facebook ennå (kan f.eks. legges i en
  norsk MC-/sykkelgruppe Stavros er medlem av).

### Fit Cuffs BFR-sett (utleie på Hygglo) – FERDIG
- PUBLISERT på Hygglo (100 kr/dag; 100/250/500 kr for 1/3/7 dager → vises som
  «71–100 kr/dag»). Kategori: Sport & fritid › Trening & gym › Annet innenfor
  trening & gym. Verdi 1200 kr, kanselleringsvilkår «Fleksibel», adresse
  Jerikoveien 3 (forhåndsutfylt). Beskrivelse med lenke til
  fitcuffs.com/products/fit-cuffs-bfr-unit-complete/. 5 `fitcuffs …`-bilder
  (WebP) lagt til av Stavros. Nypris ~1500 kr (€129).
- Referanse/kildetekst lå i «Fit Cuffs word.docx» i prosjektmappa (innhold i
  settet + lenker/videoer).

### Hygglo – praktisk
- Skjemaet ligger på hygglo.no/new-item. Adresse er forhåndsutfylt når Stavros er
  innlogget. **Hygglo rendrer IKKE i screenshots** (svart bilde) – bruk
  read_page/get_page_text/form_input i stedet. Publisering er GRATIS.
- Kategori velges via søk i modal. Pris settes per 1/3/7 dager (lavere for lengre
  leie). Hygglo viser eget prisforslag per kategori.
- Stavros har allerede flere Hygglo-utleieannonser (bl.a. Abilica vektvest,
  Kayoba romaskin, to sykler, Mercedes AMG, Dr Pen microneedling).

### Innbyttebil – offentlig presentasjon

- 2026-09-04: Opprettet en ulistet presentasjonsside for Mercedes C250 Coupé
  2017, UR98251, med 50 bilder, video, VIN og synlige oppgraderinger.
  Opprinnelig adresse var `/bil/ur98251/`; gjeldende adresse er
  `https://bikerentaloslo.no/stavros/ur98251/`. Siden er merket `noindex`
  og er ikke lenket fra resten av nettstedet, men er offentlig for mottakere
  som har adressen.

### Gjenstår / mulige neste steg
- Evt. Facebook for RAM Mounts (norsk MC-/sykkelgruppe) og vektvest.

### Praktiske erfaringer (viktig for neste økt)
- **Finn Torget-gebyr varierer med KATEGORI.** Bildeler/«Utstyr til bil, båt og
  MC» → Basis koster 29 kr (Pluss 159/179, Premium 259/269). **Sport og
  friluftsliv / Sykkelsport → Basis er GRATIS** (bekreftet 2026-08-23 med Scott-
  sykkelen). Sjekk alltid «Velg produkter»-siden. Gebyret henger IKKE sammen med
  Fiks ferdig. Er Basis gratis kan agenten publisere selv; koster det penger må
  Stavros fullføre betalingen (Vipps/BankID/kort) – agenten gjør ikke betaling.
- **Bildeopplasting:** agentens `file_upload` når IKKE Dropbox-mappa («only
  files shared with this session»). Løsning som funket: Stavros trykker «Legg
  til bilder» i Finn-skjemaet og velger bildene selv fra mappa. Agenten fyller
  alt annet. (`file://` i Chrome-verktøyet blir tvunget til `https://` og
  feiler, så den veien funker ikke.)
- **Chrome:** riktig nettleser er den som heter «annonser» (valgt via
  switch_browser). Finn og Facebook åpnes i denne, innlogget som Stavros Litsos.
- **Facebook uten bildeopplasting:** poste «tekst + Finn-lenke» fungerer fint –
  Finn-lenka gir automatisk produktbilde i FB sin lenke-forhåndsvisning. Slipper
  bildeopplasting helt. Finn-annonse-URL: `finn.no/recommerce/forsale/item/<id>`.
- **Facebook-grupper:** finn Stavros' egne grupper via «Groups you've joined»
  (finn.no/... nei – facebook.com/groups/joins). Søkeboksen i FB søker HELE
  Facebook (viser grupper med «Join» han ikke er medlem av) – ikke bruk den til
  å finne medlemsgrupper. Relevante norske bilgrupper han er medlem av: **W205
  Norge**, **Alt av billige bilreparasjoner** (+ Tesla Owners Club Norway).
