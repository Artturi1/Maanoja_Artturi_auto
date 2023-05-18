# haehinta testitapaukset

ennen testejä luodaan autorekisteri-olio oletusdatalla.

## Testi 1: haetaan yksityis kohdat oliossa olevalla parametrilla

```js
rekisteri.haehinta('1')

```

palauttaa 
```json
 25000
```

## Testi 2:haetaan yksityiskohdat ei olissa olevalla parametrilla
```js
rekisteri.haehinta('a')

```


aiheuttaa poikkeuksen 'annetulla avaimella ei löytynyt tietoja'

## Testi 3: haetaan yksityiskohdat tyhjällä parametrilla

```js
rekisteri.haehinta('')

```

aiheuttaa poikkeuksen 'annetulla avaimella ei löytynyt tietoja'
