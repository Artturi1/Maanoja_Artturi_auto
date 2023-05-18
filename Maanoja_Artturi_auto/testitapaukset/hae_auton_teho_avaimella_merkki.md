# hae_auton_teho_avaimella_merkki testitapaukset

ennen testejä luodaan autorekisteri-olio oletusdatalla.

## Testi 1: haetaan yksityis kohdat oliossa olevalla parametrilla

```js
rekisteri.hae_auton_teho_avaimella_merkki('1')

```

palauttaa 
```json
 25000
```

## Testi 2:haetaan yksityiskohdat ei olissa olevalla parametrilla
```js
rekisteri.hae_auton_teho_avaimella_merkki('a')

```


```json
 null
```

## Testi 3: haetaan yksityiskohdat tyhjällä parametrilla

```js
rekisteri.hae_auton_teho_avaimella_merkki('')

```

aiheuttaa poikkeuksen 'parametri puuttuu'
