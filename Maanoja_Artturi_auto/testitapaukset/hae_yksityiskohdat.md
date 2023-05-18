# haeyksityiskohdat testitapaukset

ennen testejä luodaan autorekisteri-olio oletusdatalla.

## Testi 1: haetaan yksityis kohdat oliossa olevalla parametrilla

```js
rekisteri.haeyksityiskohdat('1')

```

palauttaa 
```json
 {
        "voimanlähde": "Bensiini",
        "kulutusSatasella": 1,
        "huomautus": "-"
      }
```

## Testi 2:haetaan yksityiskohdat ei olissa olevalla parametrilla
```js
rekisteri.haeyksityiskohdat('a')

```

palauttaa 
```json
undefined
       
    
```

## Testi 3: haetaan yksityiskohdat tyhjällä parametrilla

```js
rekisteri.haeyksityiskohdat('')

```

palauttaa 
```json
 undefined
```

