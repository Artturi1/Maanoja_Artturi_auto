# hae_autoja_tiedolla_mall testitapaukset

ennen testejä luodaan autorekisteri-olio oletusdatalla.

## Testi 1: haetaan yksityis kohdat oliossa olevalla parametrilla

```js
rekisteri.hae_autoja_tiedolla_mall('1')

```

palauttaa 
```json
 [{"hinta": 25000, "lisävarusteet": ["kahvinlämmitin", "korjaussetti", "tutka"], "malli": "GT", "merkki": "Menopeli", "numero": 1, "teho": 10, "yksityiskohdat": {"huomautus": "-", "kulutusSatasella": 1, "voimanlähde": "Bensiini"}}]
```

## Testi 2:haetaan yksityiskohdat ei olissa olevalla parametrilla
```js
rekisteri.hae_autoja_tiedolla_mall('a')

```


```json
    []
```

## Testi 3: haetaan yksityiskohdat tyhjällä parametrilla

```js
rekisteri.hae_autoja_tiedolla_mall('')

```

aiheuttaa poikkeuksen 'parametri puuttuu'
