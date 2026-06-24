# u02-Individuell-uppgift

~ BAKER YOUSIF

u02- Individuell uppgift - Egen portfoliosida (HTML/CSS/JS)

https://bakeryousif.netlify.app/

### Sammanfattning av projekt och reflektion kring styrkor och ev brister.

I detta projekt har jag jobbat vidare med min tidigare portfoliosida och byggt ut den med JavaScript, JSON och API-anrop. Målet har varit att göra sidan mer dynamisk istället för att skriva allt direkt i HTML.

Jag har använt JSON för att lagra mitt CV och sedan hämtat datan med fetch i JavaScript för att rendera den direkt på sidan. På så sätt uppdateras innehållet automatiskt från en fil istället för att vara hårdkodat.

Jag har även hämtat mina GitHub-projekt via GitHub API och visat dem på projects-sidan. Där filtrerar jag bort forks och visar bara mina egna repos med namn, beskrivning och länk.

Under projektet har jag också jobbat mycket med async/await och DOM-manipulation för att kunna bygga upp innehållet dynamiskt.

Jag har haft lite problem med struktur och tid eftersom jag jobbat med flera uppgifter samtidigt, men jag har fått ihop en fungerande lösning där sidan uppdateras via JSON och API.

### 1. Vad kan man utveckla med hjälp av JavaScript inom frontend?

JavaScript används för att göra webbsidor mer dynamiska och interaktiva. Man kan till exempel skapa knappar, menyer, formulär, animationer och olika typer av effekter som gör att sidan ändras utan att laddas om.

Man kan också jobba med API:er och hämta data från andra system, vilket gör att man kan bygga appar som hela tiden uppdateras med ny information. Det används också i moderna SPA-appar där sidan känns som en app istället för flera olika sidor.

### 2. Vad är JSON och hur används det inom frontend?

JSON är ett format för att lagra och skicka data. Det används ofta mellan frontend och backend eller mellan en fil och JavaScript.

I det här projektet använder jag JSON för att lagra mitt CV. Sedan hämtar jag datan med fetch och omvandlar den till JavaScript-objekt med JSON.parse via response.json().

Det gör att jag kan bygga hela CV:t dynamiskt istället för att skriva allt direkt i HTML.

### 3. Vad är HTTP och varför bör man som frontendutvecklare ha kunskap om det och dess protokoll?

HTTP är det protokoll som används för att skicka data mellan webbläsaren och servern. När man använder fetch i JavaScript så sker det via HTTP eller HTTPS.

Som frontendutvecklare är det viktigt att förstå HTTP eftersom man ofta jobbar med API-anrop. Man behöver förstå metoder som GET och POST, samt statuskoder som 200, 404 och 500 för att kunna felsöka problem.

I det här projektet använder jag HTTP när jag hämtar både JSON-filen och GitHub API.

### Interaktivitet i projektet

Jag har minst två interaktiva delar i projektet:

- Hamburger-meny som går att öppna och stänga
- Dynamisk rendering av CV från JSON
- Hämtning av GitHub-projekt via API
- Loading-text medan projekten laddas

### GitHub API

I projektet hämtas alla mina publika GitHub-repos via:

https://api.github.com/users/BY021/repos

Dessa visas sedan på projektsidan där jag filtrerar bort forks och visar endast mina egna projekt.

### JSON i projektet

All data till CV:t ligger i en JSON-fil:

- utbildning
- arbetslivserfarenhet
- erfarenhet
- personuppgifter

Denna data hämtas och används direkt i JavaScript för att bygga sidan.

### Loading state

När GitHub-projekten hämtas visas en loading-text så att sidan inte är tom medan datan laddas.

### Sammanfattning

Det här projektet har hjälpt mig förstå hur man jobbar med:

- JSON och dynamisk data
- API-anrop med JavaScript
- fetch och async/await
- DOM-manipulation
- hur man bygger en mer dynamisk webbplats

Jag har även lärt mig hur viktigt det är att strukturera kod och jobba stegvis när man bygger större funktioner.