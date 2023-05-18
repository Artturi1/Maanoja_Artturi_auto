Artturi Maanoja


# **Lopputehtävä** (auto)



## Tehtävä: Luo ja testaa **Autotalli** -luokka
Luo luokka `Autotalli`. Luokassa on metodit autotietojen käyttöön. Käytettävä tietovarasto välitetään oliolle konstruktorin parametrina. Tiedot ovat json-taulukossa. Käytä seuraavaa json-taulukkoa oletusdatana. Täydennä taulukkoa tarvittaessa tai tee testausta varten tarvittavat vaihtoehtoiset versiot. 

### tietovarasto.json

```json
[
  {
    "numero": 1,
    "merkki": "Menopeli",
    "malli": "GT",
    "hinta": 25000,
    "teho": 10,
    "lisävarusteet": [
      "kahvinlämmitin",
      "korjaussetti",
      "tutka"
    ],
    "yksityiskohdat": {
      "voimanlähde": "Bensiini",
      "kulutusSatasella": 1,
      "huomautus": "-"
    }
  },
  {
    "numero": 2,
    "merkki": "Ajokki",
    "malli": "VIP",
    "hinta": 200000,
    "teho": 10,
    "lisävarusteet": [
      "takuu",
      "korjaussetti",
      "kello"
    ],
    "yksityiskohdat": {
      "voimanlähde": "hybridi",
      "kulutusSatasella": 5,
      "huomautus": "laadukas"
    }
  },
  {
    "numero": 3,
    "merkki": "Kaara",
    "malli": "XL",
    "hinta": 15000,
    "teho": 10,
    "lisävarusteet": [
      "kahvinlämmitin",
      "tutka",
      "kello"
    ],
    "yksityiskohdat": {
      "voimanlähde": "vety",
      "kulutusSatasella": 3,
      "huomautus": "ei huomauttamista"
    }
  },
  {
    "numero": 4,
    "merkki": "Kaara",
    "malli": "XL",
    "hinta": 200000,
    "teho": 10,
    "lisävarusteet": [
      "nopeusmittari",
      "koukku",
      "kahvinlämmitin"
    ],
    "yksityiskohdat": {
      "voimanlähde": "hybridi",
      "kulutusSatasella": 3,
      "huomautus": "matalapäästöinen"
    }
  },
  {
    "numero": 5,
    "merkki": "Biili",
    "malli": "chrome",
    "hinta": 36000,
    "teho": 370,
    "lisävarusteet": [
      "korjaussetti",
      "takuu",
      "tutka"
    ]
  }
]
```


# Autotalli - rajapinta (API)

## konstruktori

### **constructor(jsondata)**
Alustaa Autotalli -olion

>Parametrit:
>>Parametri `jsondata` on oliolle välitettävä json-taulukko.

>Paluuarvo:
>>

>Poikkeukset:
>>Jos parametri puuttuu, konstruktori aiheuttaa poikkeuksen: `'tiedot puuttuvat'`

## Metodit

### **hae_yksityiskohdat(hakuavain)**
palauttaa annetulla hakuavaimella olevan auton yksityiskohdat -olion

>Parametrit:
>>hakuavain on haettavan auton perusavain numero

>Paluuarvo:
>>palauttaa yksityiskohdat -olion tai null, jos hakuavaimella ei löydy auto -oliota tai jos hakuavain puuttuu

>Poikkeukset:
>>

### **hae_auton_lisävarusteet(hakuavain)**
hakee auton hakuarvona annetulla perusavaimella numero ja palauttaa auton lisävarusteet-taulukon. Jos lisävarusteet-taulukkoa ei löydy tai se on tyhjä, palautetaan tyhjä taulukko

>Parametrit:
>>hakuavain on haettavan auton perusavain numero

>Paluuarvo:
>>palauttaa lisävarusteet-taulukon. Jos lisävarusteet-taulukkoa ei löydy tai se on tyhjä, tai parametri hakuavain puuttuu, palautetaan tyhjä taulukko

>Poikkeukset:
>>

### **haeHinta(numero)**
hakee auton hinnan annetulla perusavaimella numero

>Parametrit:
>>auton perusavain numero

>Paluuarvo:
>>palauttaa löydetyn auton hinnan

>Poikkeukset:
>>Jos avaimella ei löydy mitään, metodi aiheuttaa poikkeuksen: `'annetulla avaimella ei löytynyt tietoja'`

### **hae_auton_teho_avaimella_merkki(hakuarvo)**
hakee auton tiedon teho, kun auton merkki on sama kuin annettu hakuarvo. Jos auto löytyy, on palautettava arvo auton teho, muuten palautetaan null

>Parametrit:
>>hakuarvo on auton merkki

>Paluuarvo:
>>palauttaa hakuarvoa merkki vastaavan auton teho tiedon. Jos hakuarvolla ei löydy auto-oliota, palautetaan null

>Poikkeukset:
>>Jos parametri hakuarvo puuttuu, metodi aiheuttaa poikkeuksen: `'parametri puuttuu'`

### **hae_autoja_tiedolla_malli(hakuarvo)**
hakee autoja annetulla hakuarvolla malli

>Parametrit:
>>haettavien autojen malli

>Paluuarvo:
>>Palauttaa taulukon auto-olioita joiden malli on sama kuin annettu hakuarvo. Jos annetulla hakuarvolla ei löytynyt yhtään auto-oilota, palautetaan tyhjä taulukko

>Poikkeukset:
>>Jos parametri hakuarvo puuttuu, metodi aiheuttaa poikkeuksen: `'parametri puuttuu'`

# Projekti

## Luo kansio testiprojektille
- nimeä kansio nimellä `Maanoja_Artturi_auto`
- luo **package.json**
  - **`npm init -y`**
- asenna **jest** kehitysriippuvuudeksi
  - **`npm install jest --save-dev`**
- tee testikansio `__tests__` testeille
- muokkaa **package.json** lisäämällä `jest` `test`-scriptiin
- käytä tiedonlähteenä tiedostoa **tietovarasto.json** 

## Tee rajapintakuvauksen mukaiset testitapaukset projektikansioon Markdown-tiedostoon

Aloita tekemällä testitapaukset. Tee testitapaukset edellä olevien rajapintakuvausten mukaan. Käytä myös "mielikuvitusta" erilaisten tilanteiden löytämiseksi testitapaukset ovat sinun tulkintasi rajapinnasta.Tässä ei ole oikeita tai vääriä vastauksia.

## Tee testit ja tarkasta, että ne eivät mene läpi
## Toteuta metodit
## Testaa toteutusta ajamalla testit kunnes ne menee läpi

## Palauta projektikansio
Palauta projektikansio erikseen annettavien ohjeiden mukaan. Poista `node_modules` kansio ennen lähettämistä. Palauta projektikansiossa myös `package.json`. tiedosto.
