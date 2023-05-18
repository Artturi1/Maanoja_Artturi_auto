#  hae_auton_lisävarusteet testitapaukset 

ennen testejä luodaan autorekisteri-olio oletusdatalla.

## Testi 1: haetaan yksityis kohdat oliossa olevalla parametrilla

```js
rekisteri.hae_auton_lisävarusteet(1)

```

palauttaa 
```json
 [
            "kahvinlämmitin",
            "korjaussetti",
            "tutka"
          ]
```

## Testi 2:haetaan yksityiskohdat ei olissa olevalla parametrilla
```js
rekisteri.hae_auton_lisävarusteet('a')

```

palauttaa 
```json
[]
       
    
```

## Testi 3: haetaan yksityiskohdat tyhjällä parametrilla

```js
rekisteri.hae_auton_lisävarusteet('')

```

palauttaa 
```json
 []
```

